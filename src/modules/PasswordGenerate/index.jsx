import React from 'react'



function PasswordGenerate() {

    function genererMotDePasse(longueur) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
        let motDePasse = '';
        for (let i = 0; i < longueur; i++) {
            const caractereAleatoire = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            motDePasse += caractereAleatoire;
        }
        return motDePasse;
    }

    const motDePasse = genererMotDePasse(10);

    function copypassword() {
        // Créer un élément temporaire pour la sélection et la copie du texte
        const inputTemporaire = document.createElement("textarea");
        inputTemporaire.value = motDePasse;
        document.body.appendChild(inputTemporaire);

        // Sélectionner et copier le texte
        inputTemporaire.select();
        document.execCommand("copy");

        // Supprimer l'élément temporaire
        document.body.removeChild(inputTemporaire);

        alert("Mot de passe copié dans le presse-papiers : " + motDePasse);
    }



    return (
        <>
            <h3>Votre Mot de Passe</h3>
            <p>{motDePasse}</p>
            <button onClick={copypassword}>Copy</button>
        </>
    )
}

export default PasswordGenerate;
