document.addEventListener("DOMContentLoaded", function() {
    // Attendre que le DOM soit chargé

    // Fonction pour créer des divs
    function creerDivs(nombre) {
        for (let i = 0; i < nombre; i++) {
            // Créer une nouvelle div
            const nouvelleDiv = document.createElement("div");

            // Ajouter une classe à la div
            nouvelleDiv.className = "myDiv";

            // Ajouter du texte à la div
            nouvelleDiv.innerHTML = "Div " + (i + 1);

            // Ajouter la div à la nouvelle section
            document.querySelector(".div-section").appendChild(nouvelleDiv);
        }
    }

    // Appeler la fonction avec le nombre de divs que vous souhaitez créer
    creerDivs(6);
});
