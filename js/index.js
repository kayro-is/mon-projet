document.addEventListener("DOMContentLoaded", function() {
    // Attendre que le DOM soit chargé

    // Fonction pour créer des divs
    function creerDivs(nombre) {
        for (let i = 0; i < nombre; i++) {
            // Créer une nouvelle div
            const nouvelleDiv = document.createElement("div");

            // Ajouter une classe à la div
            nouvelleDiv.className = "myDiv";

           
        
            // Ajouter la div à la nouvelle section
            document.querySelector(".div-section").appendChild(nouvelleDiv);
        }
    }

    // Appeler la fonction avec le nombre de divs que vous souhaitez créer
    creerDivs(6);
});

document.addEventListener("DOMContentLoaded",function() {

    const contenuDivs = [
    {

        image :"/img/Océan pacifique.jpg",
        text : "Pacifique en Profondeur : Découvertes et Mystères des Grands Horizons Marins",
        lien :"https://fr.wikipedia.org/wiki/Portail:Oc%C3%A9an_Pacifique#:~:text=L'oc%C3%A9an%20Pacifique%2C%20qui%20s,'Asie%20(Japon%2C%20Philippines."
    },
    {
        image :"/img/Océan atlantique.jpg",
        text : "Atlantique Infinité : Un Voyage à Travers les Flots et les Énigmes de l'Atlantique",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Atlantique"
    },
    {
        image :"/img/Océan indien.jpg",
        text : "L'Indien Envoûtant : Révélations sur les Perles Exotiques de l'Océan Indien",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Indien"
    },
    {
        image :"/img/Océan Antractique.jpg",
        text : "L'Antarctique Abyssal : Secrets des Profondeurs Glaciales de l'Océan Austral",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Austral"
    },
    {
        image :"/img/Ocean Artique.jpg",
        text : "L'Arctique Énigmatique : Explorations dans les Eaux Gelées du Grand Nord",
        lien :"https://fr.wikipedia.org/wiki/Oc%C3%A9an_Arctique"
    },
    {

        image :"/img/Mer Méditerranée.jpg",
        text : "Méditerranée: Un Berceau de Civilisations et un Écosystème Unique à Découvrir",
        lien :"https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e"
    },
     
    ];

        // Fonction pour ajouter des images, du texte et des liens à des divs existantes


        function addDivs() {
            const divs = document.querySelectorAll(".myDiv");
    
            // Pour chaque div, mettre à jour son contenu en utilisant les informations du tableau
            divs.forEach((div, index) => {
                const contenu = contenuDivs[index];
    
                // Ajouter une balise img avec une image
                const newImg = document.createElement("img");
                newImg.src = contenu.image;
                newImg.alt = "image" + (index + 1);
                div.appendChild(newImg);
    
                // Ajouter du texte à la div
                const textDiv = document.createElement("p");
                textDiv.innerHTML = contenu.text;
                div.appendChild(textDiv);
    
                // Ajouter un lien à la div
                const lienDiv = document.createElement("a");
                lienDiv.href = contenu.lien;
                lienDiv.innerHTML = "Lis Wikipédia";
                div.appendChild(lienDiv);
            });
        }
    
        addDivs();
    });