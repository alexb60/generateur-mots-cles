$(document).ready(function () {
  // MOTS-CLES
  $("form").submit(function (e) {
    e.preventDefault();

    // RECUPERATION DES DONNEES
    let produit = $("#nomProduit").val();
    let marque = $("#marque").val();
    let modele = $("#modele").val();
    let ref = $("#ref").val();
    let spec = $("#spec").val();

    // GENERATEUR
    $("textarea").html(`${produit} ${marque}\n${marque} ${modele}\n${marque} ${ref}\n${produit} ${marque} ${spec}`);
  });

  // FONCTION PERMETTANT DE COPIER LE RESULTAT
  $(".copier").click(function () {
    navigator.clipboard.writeText($("textarea").val());
    $(".texte-copie").css("display", "inline");
  });

  // BOUTON RESET
  $(".bouton-reset").click(function () {
    $("input").val("");
    $("textarea").val("");
    // window.location.reload(false);
  });
});
