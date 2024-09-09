//Import React
import React, { useState, useEffect, useRef } from 'react'

//Import style
import './Home.css'

export default function Home() {
    // État local pour stocker les données du fichier JSON
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Pour indiquer le chargement
    const [error, setError] = useState(null); // Pour gérer les erreurs
    const [currentWord, setCurrentWord] = useState(null); // Mot actuel pour le quiz
    const [inputValue, setInputValue] = useState([]); // Réponse de l'utilisateur sous forme de tableau de lettres
    const [score, setScore] = useState(0); // Compteur de score
    const [correctLetters, setCorrectLetters] = useState([]); // Suivi des lettres correctes
    const [showAnswer, setShowAnswer] = useState(false); // Pour révéler la réponse
    const inputRefs = useRef([]); // Références pour chaque cube (input de chaque lettre)

    // Fonction pour récupérer les données depuis le fichier JSON local
    const fetchData = async () => {
        try {
            const response = await fetch('/data.json'); // L'URL du fichier JSON dans le dossier public
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const result = await response.json();
            setData(result['Feuille 1']); // Mettre à jour l'état avec les données récupérées
            setLoading(false); // Arrêter l'indicateur de chargement
        } catch (error) {
            setError(error.message);
            setLoading(false); // Arrêter l'indicateur de chargement même en cas d'erreur
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Charger les données au montage du composant

    // Fonction pour choisir un mot aléatoire de la liste
    const chooseRandomWord = () => {
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentWord(data[randomIndex]);
            setInputValue(new Array(data[randomIndex]["﻿a"].length).fill('')); // Initialiser un tableau vide pour chaque lettre
            setCorrectLetters(new Array(data[randomIndex]["﻿a"].length).fill(false)); // Réinitialiser les lettres correctes
            setShowAnswer(false); // Cacher la réponse pour le nouveau mot
        }
    };

    // Appel à la fonction pour choisir un mot lorsque les données sont disponibles
    useEffect(() => {
        if (data.length > 0) {
            chooseRandomWord();
        }
    }, [data]); // Réagir aux changements de `data`

    // Focus sur le premier cube lors du chargement ou lors du changement de mot
    useEffect(() => {
        if (currentWord) {
            // Utiliser un setTimeout pour s'assurer que le DOM est mis à jour avant de mettre le focus
            setTimeout(() => {
                if (inputRefs.current[0]) {
                    inputRefs.current[0].focus(); // Mettre le focus sur le premier cube
                }
            }, 0); // Petit délai pour s'assurer que le DOM est mis à jour
        }
    }, [currentWord]); // Dès que `currentWord` change, on met le focus

    // Fonction pour gérer la saisie de lettres dans les cubes
    const handleLetterChange = (index, event) => {
        const value = event.target.value.toLowerCase();
        const newInputValue = [...inputValue];

        if (/^[a-z]$/.test(value)) { // Vérifier si c'est une lettre
            newInputValue[index] = value; // Ajouter la lettre
            setInputValue(newInputValue);

            // Déplacer le focus sur la case suivante si une lettre a été saisie
            if (index < inputRefs.current.length - 1) {
                setTimeout(() => {
                    if (inputRefs.current[index + 1]) {
                        inputRefs.current[index + 1].focus();
                    }
                }, 0); // Utilisation d'un délai pour assurer que l'élément est présent
            }

            // Vérification des lettres
            const newCorrectLetters = [...correctLetters];
            newCorrectLetters[index] = value === currentWord["﻿a"][index].toLowerCase();
            setCorrectLetters(newCorrectLetters);

            // Vérifier si tout le mot est correct
            if (newCorrectLetters.every((letter) => letter === true)) {
                setScore(score + 1);
                setTimeout(() => {
                    chooseRandomWord(); // Choisir un nouveau mot après 1 seconde
                }, 500);
            }
        }
    };

    // Fonction pour gérer le retour arrière (backspace)
    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && inputValue[index] === '') {
            // Si la case actuelle est vide, déplacer le focus sur la case précédente
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        } else if (event.key === 'Backspace' && inputValue[index] !== '') {
            // Supprimer la lettre actuelle
            const newInputValue = [...inputValue];
            newInputValue[index] = '';
            setInputValue(newInputValue);
            const newCorrectLetters = [...correctLetters];
            newCorrectLetters[index] = false;
            setCorrectLetters(newCorrectLetters);
        }
    };

    // Fonction pour révéler la réponse
    const handleShowAnswer = () => {
        setShowAnswer(true);
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    };

    // Rendu du composant
    return (
        <div className='container-home'>
            <h2>Quiz Anglais</h2>
            {loading && <p>Chargement des données...</p>}
            {error && <p>Erreur: {error}</p>}
            <div className='content'>
                {!loading && !error && currentWord && (
                    <>
                        <p>Mot en français : <strong>{currentWord.un}</strong></p>
                        <div className="letter-cubes">
                            {currentWord["﻿a"].split('').map((letter, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)} // Référence à chaque cube
                                    className={`cube ${correctLetters[index] ? 'correct' : inputValue[index] ? 'incorrect' : ''}`}
                                    maxLength={1} // Limite à une seule lettre par cube
                                    value={inputValue[index] || ''}
                                    onChange={(e) => handleLetterChange(index, e)} // Utilisation de onChange pour chaque lettre
                                    onKeyDown={(e) => handleKeyDown(index, e)} // Utilisation de onKeyDown pour gérer le backspace
                                />
                            ))}
                        </div>

                        <p>Score : {score}</p>

                        {/* Bouton pour révéler la réponse */}
                        <button onClick={handleShowAnswer}>Je ne sais pas</button>

                        {/* Affichage du mot correct si l'utilisateur a cliqué sur "Je ne sais pas" */}
                        {showAnswer && <p>Le mot correct est : <strong>{currentWord["﻿a"]}</strong></p>}
                    </>
                )}
            </div>
        </div>
    );
}