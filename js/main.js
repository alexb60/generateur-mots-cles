$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    let produit = $("#nomProduit").val();
    let marque = $("#marque").val();
    let modele = $("#modele").val();
    let ref = $("#ref").val();
    let spec = $("#spec").val();

    $("textarea").html(`${produit} ${marque}\n${marque} ${modele}\n${marque} ${ref}\n${produit} ${marque} ${spec}`);
  });

  // FONCTION PERMETTANT DE COPIER LE RESULTAT
  $(".copier").click(function () {
    navigator.clipboard.writeText($("textarea").val());
    $(".texte-copie").css("display", "inline");
  });
});
