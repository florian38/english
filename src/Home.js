//Import React
import React, { useState, useEffect, useRef } from 'react'

//Import style
import './Home.css'

const wordsData = [
      {
        ﻿a: "abandon",
        un: "abandonner"
      },
      {
        ﻿a: "abandoned",
        un: "abandonné"
      },
      {
        ﻿a: "ability",
        un: "capacité"
      },
      {
        ﻿a: "able",
        un: "capable"
      },
      {
        ﻿a: "about",
        un: "à propos"
      },
      {
        ﻿a: "above",
        un: "au-dessus de"
      },
      {
        ﻿a: "abroad",
        un: "à l'étranger"
      },
      {
        ﻿a: "absence",
        un: "absence"
      },
      {
        ﻿a: "absent",
        un: "absent"
      },
      {
        ﻿a: "absolute",
        un: "absolu"
      },
      {
        ﻿a: "absolutely",
        un: "absolument"
      },
      {
        ﻿a: "absorb",
        un: "absorber"
      },
      {
        ﻿a: "abuse",
        un: "abus"
      },
      {
        ﻿a: "academic",
        un: "académique"
      },
      {
        ﻿a: "accent",
        un: "accent"
      },
      {
        ﻿a: "accept",
        un: "accepter"
      },
      {
        ﻿a: "acceptable",
        un: "acceptable"
      },
      {
        ﻿a: "access",
        un: "accéder"
      },
      {
        ﻿a: "accident",
        un: "accident"
      },
      {
        ﻿a: "accidental",
        un: "accidentel"
      },
      {
        ﻿a: "accidentally",
        un: "accidentellement"
      },
      {
        ﻿a: "accommodation",
        un: "hébergement"
      },
      {
        ﻿a: "accompany",
        un: "accompagner"
      },
      {
        ﻿a: "according to",
        un: "selon"
      },
      {
        ﻿a: "account",
        un: "compte"
      },
      {
        ﻿a: "account for",
        un: "expliquer"
      },
      {
        ﻿a: "accurate",
        un: "précis"
      },
      {
        ﻿a: "accurately",
        un: "avec précision"
      },
      {
        ﻿a: "accuse",
        un: "accuser"
      },
      {
        ﻿a: "achieve",
        un: "atteindre"
      },
      {
        ﻿a: "achievement",
        un: "réalisation"
      },
      {
        ﻿a: "acid",
        un: "acide"
      },
      {
        ﻿a: "acknowledge",
        un: "reconnaître"
      },
      {
        ﻿a: "a couple",
        un: "un couple"
      },
      {
        ﻿a: "acquire",
        un: "acquérir"
      },
      {
        ﻿a: "across",
        un: "à travers"
      },
      {
        ﻿a: "act",
        un: "acte"
      },
      {
        ﻿a: "action",
        un: "action"
      },
      {
        ﻿a: "active",
        un: "actif"
      },
      {
        ﻿a: "actively",
        un: "activement"
      },
      {
        ﻿a: "activity",
        un: "activité"
      },
      {
        ﻿a: "actor",
        un: "acteur"
      },
      {
        ﻿a: "actress",
        un: "actrice"
      },
      {
        ﻿a: "actual",
        un: "réel"
      },
      {
        ﻿a: "actually",
        un: "en fait"
      },
      {
        ﻿a: "ad",
        un: "annonce"
      },
      {
        ﻿a: "adapt",
        un: "adapter"
      },
      {
        ﻿a: "add",
        un: "ajouter"
      },
      {
        ﻿a: "addition",
        un: "ajout"
      },
      {
        ﻿a: "additional",
        un: "supplémentaire"
      },
      {
        ﻿a: "add on",
        un: "Ajouter sur"
      },
      {
        ﻿a: "address",
        un: "adresse"
      },
      {
        ﻿a: "add up",
        un: "additionner"
      },
      {
        ﻿a: "add up to",
        un: "additionner à"
      },
      {
        ﻿a: "adequate",
        un: "adéquat"
      },
      {
        ﻿a: "adequately",
        un: "adéquatement"
      },
      {
        ﻿a: "adjust",
        un: "ajuster"
      },
      {
        ﻿a: "admiration",
        un: "admiration"
      },
      {
        ﻿a: "admire",
        un: "admirer"
      },
      {
        ﻿a: "admit",
        un: "admettre"
      },
      {
        ﻿a: "adopt",
        un: "adopter"
      },
      {
        ﻿a: "adult",
        un: "adulte"
      },
      {
        ﻿a: "advance",
        un: "avance"
      },
      {
        ﻿a: "advanced",
        un: "avancé"
      },
      {
        ﻿a: "advantage",
        un: "avantage"
      },
      {
        ﻿a: "adventure",
        un: "aventure"
      },
      {
        ﻿a: "advert",
        un: "annonce"
      },
      {
        ﻿a: "advertise",
        un: "annoncer"
      },
      {
        ﻿a: "advertisement",
        un: "publicité"
      },
      {
        ﻿a: "advertising",
        un: "publicité"
      },
      {
        ﻿a: "advice",
        un: "conseil"
      },
      {
        ﻿a: "advise",
        un: "conseiller"
      },
      {
        ﻿a: "affair",
        un: "affaire"
      },
      {
        ﻿a: "affect",
        un: "affecter"
      },
      {
        ﻿a: "affection",
        un: "affection"
      },
      {
        ﻿a: "afford",
        un: "permettre"
      },
      {
        ﻿a: "afraid",
        un: "effrayé"
      },
      {
        ﻿a: "after",
        un: "après"
      },
      {
        ﻿a: "afternoon",
        un: "après-midi"
      },
      {
        ﻿a: "afterwards",
        un: "après"
      },
      {
        ﻿a: "again",
        un: "encore"
      },
      {
        ﻿a: "against",
        un: "contre"
      },
      {
        ﻿a: "age",
        un: "âge"
      },
      {
        ﻿a: "aged",
        un: "âgé"
      },
      {
        ﻿a: "agency",
        un: "agence"
      },
      {
        ﻿a: "agent",
        un: "agent"
      },
      {
        ﻿a: "aggressive",
        un: "agressif"
      },
      {
        ﻿a: "ago",
        un: "il y a"
      },
      {
        ﻿a: "agree",
        un: "accepter"
      },
      {
        ﻿a: "agreement",
        un: "accord"
      },
      {
        ﻿a: "ahead",
        un: "devant"
      },
      {
        ﻿a: "aid",
        un: "aide"
      },
      {
        ﻿a: "aim",
        un: "but"
      },
      {
        ﻿a: "air",
        un: "air"
      },
      {
        ﻿a: "aircraft",
        un: "aéronef"
      },
      {
        ﻿a: "airport",
        un: "aéroport"
      },
      {
        ﻿a: "alarm",
        un: "alarme"
      },
      {
        ﻿a: "alarmed",
        un: "alarmé"
      },
      {
        ﻿a: "alarming",
        un: "alarmant"
      },
      {
        ﻿a: "alcohol",
        un: "alcool"
      },
      {
        ﻿a: "alcoholic",
        un: "alcoolique"
      },
      {
        ﻿a: "alive",
        un: "vivant"
      },
      {
        ﻿a: "all",
        un: "tous"
      },
      {
        ﻿a: "allied",
        un: "allié"
      },
      {
        ﻿a: "allow",
        un: "permettre"
      },
      {
        ﻿a: "allow for",
        un: "permettre"
      },
      {
        ﻿a: "all right",
        un: "d'accord"
      },
      {
        ﻿a: "ally",
        un: "allié"
      },
      {
        ﻿a: "almost",
        un: "presque"
      },
      {
        ﻿a: "alone",
        un: "seul"
      },
      {
        ﻿a: "along",
        un: "le long de"
      },
      {
        ﻿a: "alongside",
        un: "aux côtés"
      },
      {
        ﻿a: "aloud",
        un: "à haute voix"
      },
      {
        ﻿a: "alphabet",
        un: "alphabet"
      },
      {
        ﻿a: "alphabetical",
        un: "alphabétique"
      },
      {
        ﻿a: "alphabetically",
        un: "alphabétiquement"
      },
      {
        ﻿a: "already",
        un: "déjà"
      },
      {
        ﻿a: "also",
        un: "aussi"
      },
      {
        ﻿a: "alter",
        un: "modifier"
      },
      {
        ﻿a: "alternative",
        un: "alternative"
      },
      {
        ﻿a: "alternatively",
        un: "alternativement"
      },
      {
        ﻿a: "although",
        un: "bien que"
      },
      {
        ﻿a: "altogether",
        un: "tout à fait"
      },
      {
        ﻿a: "always",
        un: "toujours"
      },
      {
        ﻿a: "a.m.",
        un: "suis."
      },
      {
        ﻿a: "amaze",
        un: "étonner"
      },
      {
        ﻿a: "amazed",
        un: "étonné"
      },
      {
        ﻿a: "amazing",
        un: "incroyable"
      },
      {
        ﻿a: "ambition",
        un: "ambition"
      },
      {
        ﻿a: "ambulance",
        un: "ambulance"
      },
      {
        ﻿a: "among",
        un: "parmi"
      },
      {
        ﻿a: "amount",
        un: "montant"
      },
      {
        ﻿a: "amount to",
        un: "montant à"
      },
      {
        ﻿a: "amuse",
        un: "amuser"
      },
      {
        ﻿a: "amused",
        un: "amusé"
      },
      {
        ﻿a: "amusing",
        un: "amusant"
      },
      {
        ﻿a: "analyse",
        un: "analyser"
      },
      {
        ﻿a: "analysis",
        un: "analyse"
      },
      {
        ﻿a: "ancient",
        un: "ancien"
      },
      {
        ﻿a: "and",
        un: "et"
      },
      {
        ﻿a: "anger",
        un: "colère"
      },
      {
        ﻿a: "angle",
        un: "angle"
      },
      {
        ﻿a: "angrily",
        un: "avec colère"
      },
      {
        ﻿a: "angry",
        un: "en colère"
      },
      {
        ﻿a: "animal",
        un: "animal"
      },
      {
        ﻿a: "ankle",
        un: "cheville"
      },
      {
        ﻿a: "anniversary",
        un: "anniversaire"
      },
      {
        ﻿a: "announce",
        un: "annoncer"
      },
      {
        ﻿a: "annoy",
        un: "ennuyer"
      },
      {
        ﻿a: "annoyed",
        un: "agacé"
      },
      {
        ﻿a: "annoying",
        un: "ennuyeux"
      },
      {
        ﻿a: "annual",
        un: "annuel"
      },
      {
        ﻿a: "annually",
        un: "annuellement"
      },
      {
        ﻿a: "another",
        un: "un autre"
      },
      {
        ﻿a: "answer",
        un: "répondre"
      },
      {
        ﻿a: "anti-",
        un: "anti-"
      },
      {
        ﻿a: "anticipate",
        un: "anticiper"
      },
      {
        ﻿a: "anxiety",
        un: "anxiété"
      },
      {
        ﻿a: "anxious",
        un: "anxieux"
      },
      {
        ﻿a: "anxiously",
        un: "anxieusement"
      },
      {
        ﻿a: "any",
        un: "n'importe lequel"
      },
      {
        ﻿a: "anybody",
        un: "personne"
      },
      {
        ﻿a: "anyone",
        un: "n'importe qui"
      },
      {
        ﻿a: "anything",
        un: "rien"
      },
      {
        ﻿a: "anyway",
        un: "de toute façon"
      },
      {
        ﻿a: "anywhere",
        un: "n'importe où"
      },
      {
        ﻿a: "apart",
        un: "à part"
      },
      {
        ﻿a: "apart from",
        un: "en dehors de"
      },
      {
        ﻿a: "apartment",
        un: "appartement"
      },
      {
        ﻿a: "apologize",
        un: "s'excuser"
      },
      {
        ﻿a: "apparent",
        un: "apparent"
      },
      {
        ﻿a: "apparently",
        un: "apparemment"
      },
      {
        ﻿a: "appeal",
        un: "appel"
      },
      {
        ﻿a: "appear",
        un: "apparaître"
      },
      {
        ﻿a: "appearance",
        un: "apparence"
      },
      {
        ﻿a: "apple",
        un: "pomme"
      },
      {
        ﻿a: "application",
        un: "application"
      },
      {
        ﻿a: "apply",
        un: "appliquer"
      },
      {
        ﻿a: "appoint",
        un: "nommer"
      },
      {
        ﻿a: "appointment",
        un: "rendez-vous"
      },
      {
        ﻿a: "appreciate",
        un: "apprécier"
      },
      {
        ﻿a: "approach",
        un: "approche"
      },
      {
        ﻿a: "appropriate",
        un: "approprié"
      },
      {
        ﻿a: "approval",
        un: "approbation"
      },
      {
        ﻿a: "approve",
        un: "approuver"
      },
      {
        ﻿a: "approving",
        un: "approuvant"
      },
      {
        ﻿a: "approximate",
        un: "approximatif"
      },
      {
        ﻿a: "approximately",
        un: "environ"
      },
      {
        ﻿a: "April",
        un: "Avril"
      },
      {
        ﻿a: "area",
        un: "zone"
      },
      {
        ﻿a: "argue",
        un: "argumenter"
      },
      {
        ﻿a: "argument",
        un: "argument"
      },
      {
        ﻿a: "arise",
        un: "surgir"
      },
      {
        ﻿a: "arm",
        un: "bras"
      },
      {
        ﻿a: "armed",
        un: "armé"
      },
      {
        ﻿a: "arms",
        un: "bras"
      },
      {
        ﻿a: "army",
        un: "armée"
      },
      {
        ﻿a: "around",
        un: "autour"
      },
      {
        ﻿a: "arrange",
        un: "organiser"
      },
      {
        ﻿a: "arrangement",
        un: "arrangement"
      },
      {
        ﻿a: "arrest",
        un: "arrêter"
      },
      {
        ﻿a: "arrival",
        un: "arrivée"
      },
      {
        ﻿a: "arrive",
        un: "arriver"
      },
      {
        ﻿a: "arrive at",
        un: "arriver à"
      },
      {
        ﻿a: "arrow",
        un: "flèche"
      },
      {
        ﻿a: "art",
        un: "art"
      },
      {
        ﻿a: "article",
        un: "article"
      },
      {
        ﻿a: "artificial",
        un: "artificiel"
      },
      {
        ﻿a: "artificially",
        un: "artificiellement"
      },
      {
        ﻿a: "artist",
        un: "artiste"
      },
      {
        ﻿a: "artistic",
        un: "artistique"
      },
      {
        ﻿a: "artistically",
        un: "artistiquement"
      },
      {
        ﻿a: "as",
        un: "comme"
      },
      {
        ﻿a: "ashamed",
        un: "honteux"
      },
      {
        ﻿a: "aside",
        un: "de côté"
      },
      {
        ﻿a: "aside from",
        un: "à part"
      },
      {
        ﻿a: "ask",
        un: "demander"
      },
      {
        ﻿a: "asleep",
        un: "endormi"
      },
      {
        ﻿a: "aspect",
        un: "aspect"
      },
      {
        ﻿a: "assist",
        un: "assister"
      },
      {
        ﻿a: "assistance",
        un: "assistance"
      },
      {
        ﻿a: "assistant",
        un: "assistant"
      },
      {
        ﻿a: "associate",
        un: "associé"
      },
      {
        ﻿a: "associated",
        un: "associé"
      },
      {
        ﻿a: "association",
        un: "association"
      },
      {
        ﻿a: "assume",
        un: "supposer"
      },
      {
        ﻿a: "assure",
        un: "assurer"
      },
      {
        ﻿a: "at",
        un: "à"
      },
      {
        ﻿a: "atmosphere",
        un: "atmosphère"
      },
      {
        ﻿a: "atom",
        un: "atome"
      },
      {
        ﻿a: "attach",
        un: "attacher"
      },
      {
        ﻿a: "attached",
        un: "ci-joint"
      },
      {
        ﻿a: "attack",
        un: "attaque"
      },
      {
        ﻿a: "attempt",
        un: "tentative"
      },
      {
        ﻿a: "attempted",
        un: "tenté"
      },
      {
        ﻿a: "attend",
        un: "assister à"
      },
      {
        ﻿a: "attend to",
        un: "s'occuper de"
      },
      {
        ﻿a: "attention",
        un: "attention"
      },
      {
        ﻿a: "attitude",
        un: "attitude"
      },
      {
        ﻿a: "attorney",
        un: "avocat"
      },
      {
        ﻿a: "attract",
        un: "attirer"
      },
      {
        ﻿a: "attraction",
        un: "attirance"
      },
      {
        ﻿a: "attractive",
        un: "attractif"
      },
      {
        ﻿a: "audience",
        un: "public"
      },
      {
        ﻿a: "August",
        un: "Août"
      },
      {
        ﻿a: "aunt",
        un: "tante"
      },
      {
        ﻿a: "author",
        un: "auteur"
      },
      {
        ﻿a: "authority",
        un: "autorité"
      },
      {
        ﻿a: "automatic",
        un: "automatique"
      },
      {
        ﻿a: "automatically",
        un: "automatiquement"
      },
      {
        ﻿a: "autumn",
        un: "automne"
      },
      {
        ﻿a: "available",
        un: "disponible"
      },
      {
        ﻿a: "average",
        un: "moyenne"
      },
      {
        ﻿a: "avoid",
        un: "éviter"
      },
      {
        ﻿a: "awake",
        un: "éveillé"
      },
      {
        ﻿a: "award",
        un: "prix"
      },
      {
        ﻿a: "aware",
        un: "conscient"
      },
      {
        ﻿a: "away",
        un: "loin"
      },
      {
        ﻿a: "awful",
        un: "affreux"
      },
      {
        ﻿a: "awfully",
        un: "terriblement"
      },
      {
        ﻿a: "awkward",
        un: "maladroit"
      },
      {
        ﻿a: "awkwardly",
        un: "maladroitement"
      },
      {
        ﻿a: "baby",
        un: "bébé"
      },
      {
        ﻿a: "back",
        un: "dos"
      },
      {
        ﻿a: "background",
        un: "arrière-plan"
      },
      {
        ﻿a: "back up",
        un: "sauvegarde"
      },
      {
        ﻿a: "backward",
        un: "en arrière"
      },
      {
        ﻿a: "backwards",
        un: "en arrière"
      },
      {
        ﻿a: "bacteria",
        un: "bactéries"
      },
      {
        ﻿a: "bad",
        un: "mauvais"
      },
      {
        ﻿a: "badly",
        un: "gravement"
      },
      {
        ﻿a: "bad-tempered",
        un: "de mauvaise humeur"
      },
      {
        ﻿a: "bag",
        un: "sac"
      },
      {
        ﻿a: "baggage",
        un: "bagages"
      },
      {
        ﻿a: "bake",
        un: "cuire"
      },
      {
        ﻿a: "balance",
        un: "équilibre"
      },
      {
        ﻿a: "ball",
        un: "balle"
      },
      {
        ﻿a: "ban",
        un: "interdire"
      },
      {
        ﻿a: "band",
        un: "groupe"
      },
      {
        ﻿a: "bandage",
        un: "bandage"
      },
      {
        ﻿a: "bank",
        un: "banque"
      },
      {
        ﻿a: "bar",
        un: "bar"
      },
      {
        ﻿a: "bargain",
        un: "marchander"
      },
      {
        ﻿a: "barrier",
        un: "barrière"
      },
      {
        ﻿a: "base",
        un: "base"
      },
      {
        ﻿a: "based",
        un: "basé"
      },
      {
        ﻿a: "base on",
        un: "baser sur"
      },
      {
        ﻿a: "basic",
        un: "basique"
      },
      {
        ﻿a: "basically",
        un: "essentiellement"
      },
      {
        ﻿a: "basis",
        un: "base"
      },
      {
        ﻿a: "bath",
        un: "bain"
      },
      {
        ﻿a: "bathroom",
        un: "salle de bain"
      },
      {
        ﻿a: "battery",
        un: "batterie"
      },
      {
        ﻿a: "battle",
        un: "bataille"
      },
      {
        ﻿a: "bay",
        un: "baie"
      },
      {
        ﻿a: "be",
        un: "être"
      },
      {
        ﻿a: "beach",
        un: "plage"
      },
      {
        ﻿a: "beak",
        un: "bec"
      },
      {
        ﻿a: "bear",
        un: "ours"
      },
      {
        ﻿a: "beard",
        un: "barbe"
      },
      {
        ﻿a: "beat",
        un: "battre"
      },
      {
        ﻿a: "beat up",
        un: "tabasser"
      },
      {
        ﻿a: "beautiful",
        un: "beau"
      },
      {
        ﻿a: "beautifully",
        un: "magnifiquement"
      },
      {
        ﻿a: "beauty",
        un: "beauté"
      },
      {
        ﻿a: "because",
        un: "parce que"
      },
      {
        ﻿a: "because of",
        un: "à cause de"
      },
      {
        ﻿a: "become",
        un: "devenir"
      },
      {
        ﻿a: "bed",
        un: "lit"
      },
      {
        ﻿a: "bedroom",
        un: "chambre à coucher"
      },
      {
        ﻿a: "beef",
        un: "bœuf"
      },
      {
        ﻿a: "beer",
        un: "bière"
      },
      {
        ﻿a: "before",
        un: "avant"
      },
      {
        ﻿a: "begin",
        un: "commencer"
      },
      {
        ﻿a: "beginning",
        un: "début"
      },
      {
        ﻿a: "behalf",
        un: "au nom de"
      },
      {
        ﻿a: "behave",
        un: "se comporter"
      },
      {
        ﻿a: "behaviour",
        un: "comportement"
      },
      {
        ﻿a: "behind",
        un: "derrière"
      },
      {
        ﻿a: "be left over",
        un: "être laissé de côté"
      },
      {
        ﻿a: "belief",
        un: "croyance"
      },
      {
        ﻿a: "believe",
        un: "croire"
      },
      {
        ﻿a: "believe in",
        un: "croire en"
      },
      {
        ﻿a: "bell",
        un: "cloche"
      },
      {
        ﻿a: "belong",
        un: "appartenir"
      },
      {
        ﻿a: "belong to",
        un: "appartenir à"
      },
      {
        ﻿a: "below",
        un: "ci-dessous"
      },
      {
        ﻿a: "belt",
        un: "ceinture"
      },
      {
        ﻿a: "bend",
        un: "plier"
      },
      {
        ﻿a: "beneath",
        un: "sous"
      },
      {
        ﻿a: "benefit",
        un: "avantage"
      },
      {
        ﻿a: "bent",
        un: "courbé"
      },
      {
        ﻿a: "beside",
        un: "à côté de"
      },
      {
        ﻿a: "best",
        un: "meilleur"
      },
      {
        ﻿a: "bet",
        un: "pari"
      },
      {
        ﻿a: "better",
        un: "mieux"
      },
      {
        ﻿a: "betting",
        un: "pari"
      },
      {
        ﻿a: "between",
        un: "entre"
      },
      {
        ﻿a: "beyond",
        un: "au-delà"
      },
      {
        ﻿a: "bicycle",
        un: "vélo"
      },
      {
        ﻿a: "bid 1",
        un: "offre 1"
      },
      {
        ﻿a: "big",
        un: "grand"
      },
      {
        ﻿a: "bike",
        un: "vélo"
      },
      {
        ﻿a: "bill",
        un: "facture"
      },
      {
        ﻿a: "billion",
        un: "milliard"
      },
      {
        ﻿a: "bin",
        un: "poubelle"
      },
      {
        ﻿a: "biology",
        un: "biologie"
      },
      {
        ﻿a: "bird",
        un: "oiseau"
      },
      {
        ﻿a: "birth",
        un: "naissance"
      },
      {
        ﻿a: "birthday",
        un: "anniversaire"
      },
      {
        ﻿a: "biscuit",
        un: "biscuit"
      },
      {
        ﻿a: "bit",
        un: "peu"
      },
      {
        ﻿a: "bite",
        un: "mordre"
      },
      {
        ﻿a: "bitter",
        un: "amer"
      },
      {
        ﻿a: "bitterly",
        un: "amèrement"
      },
      {
        ﻿a: "black",
        un: "noir"
      },
      {
        ﻿a: "blade",
        un: "lame"
      },
      {
        ﻿a: "blame",
        un: "blâmer"
      },
      {
        ﻿a: "blank",
        un: "vide"
      },
      {
        ﻿a: "blind",
        un: "aveugle"
      },
      {
        ﻿a: "block",
        un: "bloc"
      },
      {
        ﻿a: "blonde",
        un: "blond"
      },
      {
        ﻿a: "blood",
        un: "sang"
      },
      {
        ﻿a: "blow",
        un: "souffler"
      },
      {
        ﻿a: "blow out",
        un: "éteindre"
      },
      {
        ﻿a: "blow up",
        un: "sauter"
      },
      {
        ﻿a: "blue",
        un: "bleu"
      },
      {
        ﻿a: "board",
        un: "conseil"
      },
      {
        ﻿a: "boat",
        un: "bateau"
      },
      {
        ﻿a: "body",
        un: "corps"
      },
      {
        ﻿a: "boil",
        un: "bouillir"
      },
      {
        ﻿a: "bomb",
        un: "bombe"
      },
      {
        ﻿a: "bone",
        un: "os"
      },
      {
        ﻿a: "book",
        un: "livre"
      },
      {
        ﻿a: "boot",
        un: "botte"
      },
      {
        ﻿a: "border",
        un: "frontière"
      },
      {
        ﻿a: "bore",
        un: "alésage"
      },
      {
        ﻿a: "bored",
        un: "ennuyé"
      },
      {
        ﻿a: "boring",
        un: "ennuyeux"
      },
      {
        ﻿a: "born",
        un: "né"
      },
      {
        ﻿a: "borrow",
        un: "emprunter"
      },
      {
        ﻿a: "boss",
        un: "chef"
      },
      {
        ﻿a: "both",
        un: "les deux"
      },
      {
        ﻿a: "bother",
        un: "déranger"
      },
      {
        ﻿a: "bottle",
        un: "bouteille"
      },
      {
        ﻿a: "bottom",
        un: "bas"
      },
      {
        ﻿a: "bound",
        un: "lié"
      },
      {
        ﻿a: "bowl",
        un: "bol"
      },
      {
        ﻿a: "box",
        un: "boîte"
      },
      {
        ﻿a: "boy",
        un: "garçon"
      },
      {
        ﻿a: "boyfriend",
        un: "petit ami"
      },
      {
        ﻿a: "brain",
        un: "cerveau"
      },
      {
        ﻿a: "branch",
        un: "bifurquer"
      },
      {
        ﻿a: "brand",
        un: "marque"
      },
      {
        ﻿a: "brave",
        un: "courageux"
      },
      {
        ﻿a: "bread",
        un: "pain"
      },
      {
        ﻿a: "break",
        un: "casser"
      },
      {
        ﻿a: "break down",
        un: "panne"
      },
      {
        ﻿a: "breakfast",
        un: "petit-déjeuner"
      },
      {
        ﻿a: "break in",
        un: "effraction"
      },
      {
        ﻿a: "break into",
        un: "pénétrer par effraction"
      },
      {
        ﻿a: "break off",
        un: "rompre"
      },
      {
        ﻿a: "break out",
        un: "éclater"
      },
      {
        ﻿a: "break up",
        un: "rompre"
      },
      {
        ﻿a: "breast",
        un: "sein"
      },
      {
        ﻿a: "breath",
        un: "haleine"
      },
      {
        ﻿a: "breathe",
        un: "respirer"
      },
      {
        ﻿a: "breathe in",
        un: "inspirer"
      },
      {
        ﻿a: "breathe out",
        un: "expirer"
      },
      {
        ﻿a: "breathing",
        un: "respiration"
      },
      {
        ﻿a: "breed",
        un: "race"
      },
      {
        ﻿a: "brick",
        un: "brique"
      },
      {
        ﻿a: "bridge",
        un: "pont"
      },
      {
        ﻿a: "brief",
        un: "bref"
      },
      {
        ﻿a: "briefly",
        un: "brièvement"
      },
      {
        ﻿a: "bright",
        un: "brillant"
      },
      {
        ﻿a: "brightly",
        un: "brillamment"
      },
      {
        ﻿a: "brilliant",
        un: "brillant"
      },
      {
        ﻿a: "bring",
        un: "apporter"
      },
      {
        ﻿a: "bring back",
        un: "ramener"
      },
      {
        ﻿a: "bring down",
        un: "faire baisser"
      },
      {
        ﻿a: "bring forward",
        un: "avancer"
      },
      {
        ﻿a: "bring out",
        un: "mettre en évidence"
      },
      {
        ﻿a: "bring up",
        un: "faire monter"
      },
      {
        ﻿a: "broad",
        un: "large"
      },
      {
        ﻿a: "broadcast",
        un: "diffuser"
      },
      {
        ﻿a: "broadly",
        un: "largement"
      },
      {
        ﻿a: "broken",
        un: "cassé"
      },
      {
        ﻿a: "brother",
        un: "frère"
      },
      {
        ﻿a: "brown",
        un: "brun"
      },
      {
        ﻿a: "brush",
        un: "brosse"
      },
      {
        ﻿a: "bubble",
        un: "bulle"
      },
      {
        ﻿a: "budget",
        un: "budget"
      },
      {
        ﻿a: "build",
        un: "construire"
      },
      {
        ﻿a: "building",
        un: "bâtiment"
      },
      {
        ﻿a: "build up",
        un: "s'accumuler"
      },
      {
        ﻿a: "bullet",
        un: "balle"
      },
      {
        ﻿a: "bunch",
        un: "bouquet"
      },
      {
        ﻿a: "burn",
        un: "brûler"
      },
      {
        ﻿a: "burn down",
        un: "brûler"
      },
      {
        ﻿a: "burnt",
        un: "brûlé"
      },
      {
        ﻿a: "burst",
        un: "éclatement"
      },
      {
        ﻿a: "burst into",
        un: "fait irruption dans"
      },
      {
        ﻿a: "burst out",
        un: "éclater"
      },
      {
        ﻿a: "bury",
        un: "enterrer"
      },
      {
        ﻿a: "bus",
        un: "bus"
      },
      {
        ﻿a: "bush",
        un: "buisson"
      },
      {
        ﻿a: "business",
        un: "entreprise"
      },
      {
        ﻿a: "businessman",
        un: "homme d'affaires"
      },
      {
        ﻿a: "busy",
        un: "occupé"
      },
      {
        ﻿a: "but",
        un: "mais"
      },
      {
        ﻿a: "butter",
        un: "beurre"
      },
      {
        ﻿a: "button",
        un: "bouton"
      },
      {
        ﻿a: "buy",
        un: "acheter"
      },
      {
        ﻿a: "buyer",
        un: "acheteur"
      },
      {
        ﻿a: "by",
        un: "par"
      },
      {
        ﻿a: "bye",
        un: "au revoir"
      },
      {
        ﻿a: "cabinet",
        un: "armoire"
      },
      {
        ﻿a: "cable",
        un: "câble"
      },
      {
        ﻿a: "cake",
        un: "gâteau"
      },
      {
        ﻿a: "calculate",
        un: "calculer"
      },
      {
        ﻿a: "calculation",
        un: "calcul"
      },
      {
        ﻿a: "call",
        un: "appel"
      },
      {
        ﻿a: "call back",
        un: "rappeler"
      },
      {
        ﻿a: "called",
        un: "appelé"
      },
      {
        ﻿a: "call for",
        un: "demander"
      },
      {
        ﻿a: "call off",
        un: "annuler"
      },
      {
        ﻿a: "call up",
        un: "appeler"
      },
      {
        ﻿a: "calm",
        un: "calme"
      },
      {
        ﻿a: "calm down",
        un: "calme-toi"
      },
      {
        ﻿a: "calmly",
        un: "calmement"
      },
      {
        ﻿a: "camera",
        un: "caméra"
      },
      {
        ﻿a: "camp",
        un: "camp"
      },
      {
        ﻿a: "campaign",
        un: "campagne"
      },
      {
        ﻿a: "camping",
        un: "camping"
      },
      {
        ﻿a: "can 1",
        un: "je peux 1"
      },
      {
        ﻿a: "can 2",
        un: "peut 2"
      },
      {
        ﻿a: "cancel",
        un: "Annuler"
      },
      {
        ﻿a: "cancer",
        un: "cancer"
      },
      {
        ﻿a: "candidate",
        un: "candidat"
      },
      {
        ﻿a: "candy",
        un: "bonbons"
      },
      {
        ﻿a: "cannot",
        un: "ne peut pas"
      },
      {
        ﻿a: "cap",
        un: "capuchon"
      },
      {
        ﻿a: "capable",
        un: "capable"
      },
      {
        ﻿a: "capacity",
        un: "capacité"
      },
      {
        ﻿a: "capital",
        un: "capital"
      },
      {
        ﻿a: "captain",
        un: "capitaine"
      },
      {
        ﻿a: "capture",
        un: "capturer"
      },
      {
        ﻿a: "car",
        un: "voiture"
      },
      {
        ﻿a: "card",
        un: "carte"
      },
      {
        ﻿a: "cardboard",
        un: "carton"
      },
      {
        ﻿a: "care",
        un: "soins"
      },
      {
        ﻿a: "career",
        un: "carrière"
      },
      {
        ﻿a: "care for",
        un: "prendre soin de"
      },
      {
        ﻿a: "careful",
        un: "prudent"
      },
      {
        ﻿a: "carefully",
        un: "soigneusement"
      },
      {
        ﻿a: "careless",
        un: "imprudent"
      },
      {
        ﻿a: "carelessly",
        un: "négligemment"
      },
      {
        ﻿a: "carpet",
        un: "tapis"
      },
      {
        ﻿a: "carrot",
        un: "carotte"
      },
      {
        ﻿a: "carry",
        un: "porter"
      },
      {
        ﻿a: "carry on",
        un: "continuer"
      },
      {
        ﻿a: "carry out",
        un: "effectuer"
      },
      {
        ﻿a: "case",
        un: "cas"
      },
      {
        ﻿a: "cash",
        un: "espèces"
      },
      {
        ﻿a: "cast",
        un: "casting"
      },
      {
        ﻿a: "castle",
        un: "château"
      },
      {
        ﻿a: "cat",
        un: "chat"
      },
      {
        ﻿a: "catch",
        un: "attraper"
      },
      {
        ﻿a: "catch up",
        un: "rattraper"
      },
      {
        ﻿a: "category",
        un: "catégorie"
      },
      {
        ﻿a: "cause",
        un: "cause"
      },
      {
        ﻿a: "CD",
        un: "CD"
      },
      {
        ﻿a: "cease",
        un: "cesser"
      },
      {
        ﻿a: "ceiling",
        un: "plafond"
      },
      {
        ﻿a: "celebrate",
        un: "célébrer"
      },
      {
        ﻿a: "celebration",
        un: "célébration"
      },
      {
        ﻿a: "cell",
        un: "cellule"
      },
      {
        ﻿a: "cell phone",
        un: "téléphone portable"
      },
      {
        ﻿a: "cent",
        un: "cent"
      },
      {
        ﻿a: "centimetre",
        un: "centimètre"
      },
      {
        ﻿a: "central",
        un: "central"
      },
      {
        ﻿a: "centre",
        un: "centre"
      },
      {
        ﻿a: "century",
        un: "siècle"
      },
      {
        ﻿a: "ceremony",
        un: "cérémonie"
      },
      {
        ﻿a: "certain",
        un: "certain"
      },
      {
        ﻿a: "certainly",
        un: "certainement"
      },
      {
        ﻿a: "certificate",
        un: "certificat"
      },
      {
        ﻿a: "chain",
        un: "chaîne"
      },
      {
        ﻿a: "chair",
        un: "chaise"
      },
      {
        ﻿a: "chairman",
        un: "président"
      },
      {
        ﻿a: "chairwoman",
        un: "présidente"
      },
      {
        ﻿a: "challenge",
        un: "défi"
      },
      {
        ﻿a: "chamber",
        un: "chambre"
      },
      {
        ﻿a: "chance",
        un: "chance"
      },
      {
        ﻿a: "change",
        un: "changement"
      },
      {
        ﻿a: "change round",
        un: "changer de tour"
      },
      {
        ﻿a: "channel",
        un: "canal"
      },
      {
        ﻿a: "chapter",
        un: "chapitre"
      },
      {
        ﻿a: "character",
        un: "personnage"
      },
      {
        ﻿a: "characteristic",
        un: "caractéristiques"
      },
      {
        ﻿a: "charge",
        un: "charge"
      },
      {
        ﻿a: "charity",
        un: "charité"
      },
      {
        ﻿a: "chart",
        un: "graphique"
      },
      {
        ﻿a: "chase",
        un: "chasse"
      },
      {
        ﻿a: "chase away",
        un: "chasser"
      },
      {
        ﻿a: "chat",
        un: "chat"
      },
      {
        ﻿a: "cheap",
        un: "bon marché"
      },
      {
        ﻿a: "cheaply",
        un: "à bon marché"
      },
      {
        ﻿a: "cheat",
        un: "tricher"
      },
      {
        ﻿a: "cheat of",
        un: "tricher de"
      },
      {
        ﻿a: "check",
        un: "vérifier"
      },
      {
        ﻿a: "check in",
        un: "enregistrement"
      },
      {
        ﻿a: "check into",
        un: "s'enregistrer"
      },
      {
        ﻿a: "check on",
        un: "vérifier"
      },
      {
        ﻿a: "check out",
        un: "vérifier"
      },
      {
        ﻿a: "check over",
        un: "vérifier"
      },
      {
        ﻿a: "check up on",
        un: "vérifier"
      },
      {
        ﻿a: "cheek",
        un: "joue"
      },
      {
        ﻿a: "cheerful",
        un: "joyeux"
      },
      {
        ﻿a: "cheerfully",
        un: "gaiement"
      },
      {
        ﻿a: "cheese",
        un: "fromage"
      },
      {
        ﻿a: "chemical",
        un: "chimique"
      },
      {
        ﻿a: "chemist",
        un: "chimiste"
      },
      {
        ﻿a: "chemistry",
        un: "chimie"
      },
      {
        ﻿a: "cheque",
        un: "vérifier"
      },
      {
        ﻿a: "chest",
        un: "poitrine"
      },
      {
        ﻿a: "chew",
        un: "mâcher"
      },
      {
        ﻿a: "chicken",
        un: "poulet"
      },
      {
        ﻿a: "chief",
        un: "chef"
      },
      {
        ﻿a: "child",
        un: "enfant"
      },
      {
        ﻿a: "chin",
        un: "menton"
      },
      {
        ﻿a: "chip",
        un: "ébrécher"
      },
      {
        ﻿a: "chocolate",
        un: "chocolat"
      },
      {
        ﻿a: "choice",
        un: "choix"
      },
      {
        ﻿a: "choose",
        un: "choisir"
      },
      {
        ﻿a: "chop",
        un: "hacher"
      },
      {
        ﻿a: "chop down",
        un: "abattre"
      },
      {
        ﻿a: "chop off",
        un: "couper"
      },
      {
        ﻿a: "church",
        un: "église"
      },
      {
        ﻿a: "cigarette",
        un: "cigarette"
      },
      {
        ﻿a: "cinema",
        un: "cinéma"
      },
      {
        ﻿a: "circle",
        un: "cercle"
      },
      {
        ﻿a: "circumstance",
        un: "circonstance"
      },
      {
        ﻿a: "citizen",
        un: "citoyen"
      },
      {
        ﻿a: "city",
        un: "ville"
      },
      {
        ﻿a: "civil",
        un: "civil"
      },
      {
        ﻿a: "claim",
        un: "réclamer"
      },
      {
        ﻿a: "clap",
        un: "taper"
      },
      {
        ﻿a: "class",
        un: "classe"
      },
      {
        ﻿a: "classic",
        un: "classique"
      },
      {
        ﻿a: "classroom",
        un: "classe"
      },
      {
        ﻿a: "clean",
        un: "faire le ménage"
      },
      {
        ﻿a: "clean up",
        un: "nettoyer"
      },
      {
        ﻿a: "clear",
        un: "clair"
      },
      {
        ﻿a: "clearly",
        un: "clairement"
      },
      {
        ﻿a: "clear out",
        un: "évacuer"
      },
      {
        ﻿a: "clear up",
        un: "clarifier"
      },
      {
        ﻿a: "clerk",
        un: "greffier"
      },
      {
        ﻿a: "clever",
        un: "intelligent"
      },
      {
        ﻿a: "click",
        un: "cliquez"
      },
      {
        ﻿a: "client",
        un: "client"
      },
      {
        ﻿a: "climate",
        un: "climat"
      },
      {
        ﻿a: "climb",
        un: "grimper"
      },
      {
        ﻿a: "climbing",
        un: "escalade"
      },
      {
        ﻿a: "clock",
        un: "horloge"
      },
      {
        ﻿a: "close 1",
        un: "fermer 1"
      },
      {
        ﻿a: "close 2",
        un: "fermer 2"
      },
      {
        ﻿a: "closed",
        un: "fermé"
      },
      {
        ﻿a: "closely",
        un: "étroitement"
      },
      {
        ﻿a: "closet",
        un: "placard"
      },
      {
        ﻿a: "cloth",
        un: "tissu"
      },
      {
        ﻿a: "clothes",
        un: "vêtements"
      },
      {
        ﻿a: "clothing",
        un: "vêtements"
      },
      {
        ﻿a: "cloud",
        un: "nuage"
      },
      {
        ﻿a: "club",
        un: "club"
      },
      {
        ﻿a: "coach",
        un: "entraîneur"
      },
      {
        ﻿a: "coal",
        un: "charbon"
      },
      {
        ﻿a: "coast",
        un: "côte"
      },
      {
        ﻿a: "coat",
        un: "manteau"
      },
      {
        ﻿a: "code",
        un: "code"
      },
      {
        ﻿a: "coffee",
        un: "café"
      },
      {
        ﻿a: "coin",
        un: "pièce de monnaie"
      },
      {
        ﻿a: "cold",
        un: "froid"
      },
      {
        ﻿a: "coldly",
        un: "froidement"
      },
      {
        ﻿a: "collapse",
        un: "effondrement"
      },
      {
        ﻿a: "colleague",
        un: "collègue"
      },
      {
        ﻿a: "collect",
        un: "collecter"
      },
      {
        ﻿a: "collection",
        un: "collection"
      },
      {
        ﻿a: "college",
        un: "collège"
      },
      {
        ﻿a: "colour",
        un: "couleur"
      },
      {
        ﻿a: "coloured",
        un: "coloré"
      },
      {
        ﻿a: "column",
        un: "colonne"
      },
      {
        ﻿a: "combination",
        un: "combinaison"
      },
      {
        ﻿a: "combine",
        un: "combiner"
      },
      {
        ﻿a: "come",
        un: "viens"
      },
      {
        ﻿a: "come across",
        un: "rencontrer"
      },
      {
        ﻿a: "come down",
        un: "descendre"
      },
      {
        ﻿a: "comedy",
        un: "comédie"
      },
      {
        ﻿a: "come from",
        un: "venir de"
      },
      {
        ﻿a: "come in",
        un: "Entrez"
      },
      {
        ﻿a: "come off",
        un: "se détacher"
      },
      {
        ﻿a: "come on",
        un: "allez"
      },
      {
        ﻿a: "come out",
        un: "sortir"
      },
      {
        ﻿a: "come round",
        un: "venir"
      },
      {
        ﻿a: "come to",
        un: "venir à"
      },
      {
        ﻿a: "come up",
        un: "montez"
      },
      {
        ﻿a: "come up to",
        un: "venir à"
      },
      {
        ﻿a: "comfort",
        un: "confort"
      },
      {
        ﻿a: "comfortable",
        un: "confortable"
      },
      {
        ﻿a: "comfortably",
        un: "confortablement"
      },
      {
        ﻿a: "command",
        un: "commande"
      },
      {
        ﻿a: "comment",
        un: "commentaire"
      },
      {
        ﻿a: "commercial",
        un: "commercial"
      },
      {
        ﻿a: "commission",
        un: "commission"
      },
      {
        ﻿a: "commit",
        un: "commettre"
      },
      {
        ﻿a: "commitment",
        un: "engagement"
      },
      {
        ﻿a: "committee",
        un: "comité"
      },
      {
        ﻿a: "common",
        un: "commun"
      },
      {
        ﻿a: "commonly",
        un: "communément"
      },
      {
        ﻿a: "communicate",
        un: "communiquer"
      },
      {
        ﻿a: "communication",
        un: "communication"
      },
      {
        ﻿a: "community",
        un: "communauté"
      },
      {
        ﻿a: "company",
        un: "entreprise"
      },
      {
        ﻿a: "compare",
        un: "comparer"
      },
      {
        ﻿a: "comparison",
        un: "comparaison"
      },
      {
        ﻿a: "compete",
        un: "rivaliser"
      },
      {
        ﻿a: "competition",
        un: "concours"
      },
      {
        ﻿a: "competitive",
        un: "compétitif"
      },
      {
        ﻿a: "complain",
        un: "se plaindre"
      },
      {
        ﻿a: "complaint",
        un: "plainte"
      },
      {
        ﻿a: "complete",
        un: "complet"
      },
      {
        ﻿a: "completely",
        un: "complètement"
      },
      {
        ﻿a: "complex",
        un: "complexe"
      },
      {
        ﻿a: "complicate",
        un: "compliquer"
      },
      {
        ﻿a: "complicated",
        un: "compliqué"
      },
      {
        ﻿a: "computer",
        un: "ordinateur"
      },
      {
        ﻿a: "concentrate",
        un: "se concentrer"
      },
      {
        ﻿a: "concentrate on",
        un: "se concentrer sur"
      },
      {
        ﻿a: "concentration",
        un: "concentration"
      },
      {
        ﻿a: "concept",
        un: "concept"
      },
      {
        ﻿a: "concern",
        un: "préoccupation"
      },
      {
        ﻿a: "concerned",
        un: "concerné"
      },
      {
        ﻿a: "concerning",
        un: "concernant"
      },
      {
        ﻿a: "concert",
        un: "concert"
      },
      {
        ﻿a: "conclude",
        un: "conclure"
      },
      {
        ﻿a: "conclusion",
        un: "conclusion"
      },
      {
        ﻿a: "concrete",
        un: "béton"
      },
      {
        ﻿a: "condition",
        un: "condition"
      },
      {
        ﻿a: "conduct",
        un: "conduire"
      },
      {
        ﻿a: "conference",
        un: "conférence"
      },
      {
        ﻿a: "confidence",
        un: "confiance"
      },
      {
        ﻿a: "confident",
        un: "confiant"
      },
      {
        ﻿a: "confidently",
        un: "en toute confiance"
      },
      {
        ﻿a: "confine",
        un: "confiner"
      },
      {
        ﻿a: "confined",
        un: "confiné"
      },
      {
        ﻿a: "confirm",
        un: "confirmer"
      },
      {
        ﻿a: "conflict",
        un: "conflit"
      },
      {
        ﻿a: "confront",
        un: "affronter"
      },
      {
        ﻿a: "confuse",
        un: "embrouiller"
      },
      {
        ﻿a: "confused",
        un: "confus"
      },
      {
        ﻿a: "confusing",
        un: "déroutant"
      },
      {
        ﻿a: "confusion",
        un: "confusion"
      },
      {
        ﻿a: "congratulate",
        un: "féliciter"
      },
      {
        ﻿a: "congratulation",
        un: "félicitation"
      },
      {
        ﻿a: "congress",
        un: "congrès"
      },
      {
        ﻿a: "connect",
        un: "connecter"
      },
      {
        ﻿a: "connected",
        un: "connecté"
      },
      {
        ﻿a: "connection",
        un: "connexion"
      },
      {
        ﻿a: "conscious",
        un: "conscient"
      },
      {
        ﻿a: "consequence",
        un: "conséquence"
      },
      {
        ﻿a: "conservative",
        un: "conservateur"
      },
      {
        ﻿a: "consider",
        un: "considérer"
      },
      {
        ﻿a: "considerable",
        un: "considérable"
      },
      {
        ﻿a: "considerably",
        un: "considérablement"
      },
      {
        ﻿a: "consideration",
        un: "considération"
      },
      {
        ﻿a: "consist",
        un: "consister"
      },
      {
        ﻿a: "consist of",
        un: "consister en"
      },
      {
        ﻿a: "constant",
        un: "constante"
      },
      {
        ﻿a: "constantly",
        un: "en permanence"
      },
      {
        ﻿a: "construct",
        un: "construction"
      },
      {
        ﻿a: "construction",
        un: "construction"
      },
      {
        ﻿a: "consult",
        un: "consulter"
      },
      {
        ﻿a: "consumer",
        un: "consommateur"
      },
      {
        ﻿a: "contact",
        un: "contact"
      },
      {
        ﻿a: "contain",
        un: "contenir"
      },
      {
        ﻿a: "container",
        un: "récipient"
      },
      {
        ﻿a: "contemporary",
        un: "contemporain"
      },
      {
        ﻿a: "content 1",
        un: "contenu 1"
      },
      {
        ﻿a: "contest",
        un: "concours"
      },
      {
        ﻿a: "context",
        un: "contexte"
      },
      {
        ﻿a: "continent",
        un: "continent"
      },
      {
        ﻿a: "continue",
        un: "continuer"
      },
      {
        ﻿a: "continuous",
        un: "continu"
      },
      {
        ﻿a: "continuously",
        un: "en continu"
      },
      {
        ﻿a: "contract",
        un: "contracter"
      },
      {
        ﻿a: "contrast",
        un: "contraste"
      },
      {
        ﻿a: "contrasting",
        un: "contrastant"
      },
      {
        ﻿a: "contribute",
        un: "contribuer"
      },
      {
        ﻿a: "contribution",
        un: "contribution"
      },
      {
        ﻿a: "control",
        un: "contrôle"
      },
      {
        ﻿a: "controlled",
        un: "contrôlé"
      },
      {
        ﻿a: "convenient",
        un: "pratique"
      },
      {
        ﻿a: "convention",
        un: "convention"
      },
      {
        ﻿a: "conventional",
        un: "conventionnel"
      },
      {
        ﻿a: "conversation",
        un: "conversation"
      },
      {
        ﻿a: "convert",
        un: "convertir"
      },
      {
        ﻿a: "convince",
        un: "convaincre"
      },
      {
        ﻿a: "cook",
        un: "cuisiner"
      },
      {
        ﻿a: "cooker",
        un: "cuisinière"
      },
      {
        ﻿a: "cookie",
        un: "biscuit"
      },
      {
        ﻿a: "cooking",
        un: "cuisson"
      },
      {
        ﻿a: "cool",
        un: "cool"
      },
      {
        ﻿a: "cool down",
        un: "refroidir"
      },
      {
        ﻿a: "cope",
        un: "faire face"
      },
      {
        ﻿a: "copy",
        un: "copie"
      },
      {
        ﻿a: "core",
        un: "cœur"
      },
      {
        ﻿a: "corner",
        un: "coin"
      },
      {
        ﻿a: "correct",
        un: "correct"
      },
      {
        ﻿a: "correctly",
        un: "correctement"
      },
      {
        ﻿a: "cost",
        un: "coût"
      },
      {
        ﻿a: "cottage",
        un: "chalet"
      },
      {
        ﻿a: "cotton",
        un: "coton"
      },
      {
        ﻿a: "cough",
        un: "toux"
      },
      {
        ﻿a: "coughing",
        un: "toux"
      },
      {
        ﻿a: "could",
        un: "pourrait"
      },
      {
        ﻿a: "council",
        un: "conseil"
      },
      {
        ﻿a: "count",
        un: "compter"
      },
      {
        ﻿a: "counter",
        un: "comptoir"
      },
      {
        ﻿a: "count on",
        un: "compter sur"
      },
      {
        ﻿a: "country",
        un: "pays"
      },
      {
        ﻿a: "countryside",
        un: "campagne"
      },
      {
        ﻿a: "county",
        un: "comté"
      },
      {
        ﻿a: "couple",
        un: "couple"
      },
      {
        ﻿a: "courage",
        un: "courage"
      },
      {
        ﻿a: "course",
        un: "cours"
      },
      {
        ﻿a: "court",
        un: "tribunal"
      },
      {
        ﻿a: "cousin",
        un: "cousin"
      },
      {
        ﻿a: "cover",
        un: "couverture"
      },
      {
        ﻿a: "covered",
        un: "couvert"
      },
      {
        ﻿a: "covering",
        un: "revêtement"
      },
      {
        ﻿a: "cover up",
        un: "couvrir"
      },
      {
        ﻿a: "cow",
        un: "vache"
      },
      {
        ﻿a: "crack",
        un: "fissure"
      },
      {
        ﻿a: "cracked",
        un: "fissuré"
      },
      {
        ﻿a: "craft",
        un: "artisanat"
      },
      {
        ﻿a: "crash",
        un: "accident"
      },
      {
        ﻿a: "crazy",
        un: "fou"
      },
      {
        ﻿a: "cream",
        un: "crème"
      },
      {
        ﻿a: "create",
        un: "créer"
      },
      {
        ﻿a: "creature",
        un: "créature"
      },
      {
        ﻿a: "credit",
        un: "crédit"
      },
      {
        ﻿a: "credit card",
        un: "carte de crédit"
      },
      {
        ﻿a: "crime",
        un: "crime"
      },
      {
        ﻿a: "criminal",
        un: "criminel"
      },
      {
        ﻿a: "crisis",
        un: "crise"
      },
      {
        ﻿a: "crisp",
        un: "croustillant"
      },
      {
        ﻿a: "criterion",
        un: "critère"
      },
      {
        ﻿a: "critical",
        un: "critique"
      },
      {
        ﻿a: "criticism",
        un: "critique"
      },
      {
        ﻿a: "criticize",
        un: "critiquer"
      },
      {
        ﻿a: "crop",
        un: "recadrer"
      },
      {
        ﻿a: "cross",
        un: "croix"
      },
      {
        ﻿a: "cross out",
        un: "biffer"
      },
      {
        ﻿a: "crowd",
        un: "foule"
      },
      {
        ﻿a: "crowded",
        un: "bondé"
      },
      {
        ﻿a: "crown",
        un: "couronne"
      },
      {
        ﻿a: "crucial",
        un: "crucial"
      },
      {
        ﻿a: "cruel",
        un: "cruel"
      },
      {
        ﻿a: "crush",
        un: "écraser"
      },
      {
        ﻿a: "cry",
        un: "pleurer"
      },
      {
        ﻿a: "cry out",
        un: "crier"
      },
      {
        ﻿a: "cultural",
        un: "culturel"
      },
      {
        ﻿a: "culture",
        un: "culture"
      },
      {
        ﻿a: "cup",
        un: "tasse"
      },
      {
        ﻿a: "cupboard",
        un: "placard"
      },
      {
        ﻿a: "curb",
        un: "trottoir"
      },
      {
        ﻿a: "cure",
        un: "guérir"
      },
      {
        ﻿a: "curious",
        un: "curieux"
      },
      {
        ﻿a: "curiously",
        un: "avec curiosité"
      },
      {
        ﻿a: "curl",
        un: "boucle"
      },
      {
        ﻿a: "curl up",
        un: "se pelotonner"
      },
      {
        ﻿a: "curly",
        un: "bouclé"
      },
      {
        ﻿a: "current",
        un: "actuel"
      },
      {
        ﻿a: "currently",
        un: "actuellement"
      },
      {
        ﻿a: "curtain",
        un: "rideau"
      },
      {
        ﻿a: "curve",
        un: "courbe"
      },
      {
        ﻿a: "curved",
        un: "courbé"
      },
      {
        ﻿a: "custom",
        un: "coutume"
      },
      {
        ﻿a: "customer",
        un: "client"
      },
      {
        ﻿a: "customs",
        un: "douane"
      },
      {
        ﻿a: "cut",
        un: "couper"
      },
      {
        ﻿a: "cut back",
        un: "réduire"
      },
      {
        ﻿a: "cut down",
        un: "réduire"
      },
      {
        ﻿a: "cut off",
        un: "couper"
      },
      {
        ﻿a: "cut out",
        un: "découper"
      },
      {
        ﻿a: "cut up",
        un: "découper"
      },
      {
        ﻿a: "cycle",
        un: "faire du vélo"
      },
      {
        ﻿a: "cycling",
        un: "vélo"
      },
      {
        ﻿a: "dad",
        un: "papa"
      },
      {
        ﻿a: "daily",
        un: "tous les jours"
      },
      {
        ﻿a: "damage",
        un: "dommage"
      },
      {
        ﻿a: "damp",
        un: "humide"
      },
      {
        ﻿a: "dance",
        un: "danse"
      },
      {
        ﻿a: "dancer",
        un: "danseur"
      },
      {
        ﻿a: "dancing",
        un: "dansant"
      },
      {
        ﻿a: "danger",
        un: "danger"
      },
      {
        ﻿a: "dangerous",
        un: "dangereux"
      },
      {
        ﻿a: "dare",
        un: "oser"
      },
      {
        ﻿a: "dark",
        un: "sombre"
      },
      {
        ﻿a: "data",
        un: "données"
      },
      {
        ﻿a: "date",
        un: "date"
      },
      {
        ﻿a: "date back",
        un: "dater"
      },
      {
        ﻿a: "daughter",
        un: "fille"
      },
      {
        ﻿a: "day",
        un: "jour"
      },
      {
        ﻿a: "dead",
        un: "mort"
      },
      {
        ﻿a: "deaf",
        un: "sourd"
      },
      {
        ﻿a: "deal",
        un: "accord"
      },
      {
        ﻿a: "deal in",
        un: "traiter avec"
      },
      {
        ﻿a: "deal with",
        un: "traiter avec"
      },
      {
        ﻿a: "dear",
        un: "cher"
      },
      {
        ﻿a: "death",
        un: "la mort"
      },
      {
        ﻿a: "debate",
        un: "débat"
      },
      {
        ﻿a: "debt",
        un: "dette"
      },
      {
        ﻿a: "decade",
        un: "décennie"
      },
      {
        ﻿a: "decay",
        un: "pourriture"
      },
      {
        ﻿a: "December",
        un: "Décembre"
      },
      {
        ﻿a: "decide",
        un: "décider"
      },
      {
        ﻿a: "decide on",
        un: "décider de"
      },
      {
        ﻿a: "decision",
        un: "décision"
      },
      {
        ﻿a: "declare",
        un: "déclarer"
      },
      {
        ﻿a: "decline",
        un: "déclin"
      },
      {
        ﻿a: "decorate",
        un: "décorer"
      },
      {
        ﻿a: "decoration",
        un: "décoration"
      },
      {
        ﻿a: "decorative",
        un: "décoratif"
      },
      {
        ﻿a: "decrease",
        un: "diminuer"
      },
      {
        ﻿a: "deep",
        un: "profond"
      },
      {
        ﻿a: "deeply",
        un: "profondément"
      },
      {
        ﻿a: "defeat",
        un: "défaite"
      },
      {
        ﻿a: "defence",
        un: "défense"
      },
      {
        ﻿a: "defend",
        un: "défendre"
      },
      {
        ﻿a: "define",
        un: "définir"
      },
      {
        ﻿a: "definite",
        un: "précis"
      },
      {
        ﻿a: "definitely",
        un: "certainement"
      },
      {
        ﻿a: "definition",
        un: "définition"
      },
      {
        ﻿a: "degree",
        un: "degré"
      },
      {
        ﻿a: "delay",
        un: "retard"
      },
      {
        ﻿a: "deliberate",
        un: "volontaire"
      },
      {
        ﻿a: "deliberately",
        un: "délibérément"
      },
      {
        ﻿a: "delicate",
        un: "délicat"
      },
      {
        ﻿a: "delight",
        un: "plaisir"
      },
      {
        ﻿a: "delighted",
        un: "ravi"
      },
      {
        ﻿a: "deliver",
        un: "livrer"
      },
      {
        ﻿a: "delivery",
        un: "livraison"
      },
      {
        ﻿a: "demand",
        un: "demande"
      },
      {
        ﻿a: "demonstrate",
        un: "démontrer"
      },
      {
        ﻿a: "dentist",
        un: "dentiste"
      },
      {
        ﻿a: "deny",
        un: "refuser"
      },
      {
        ﻿a: "department",
        un: "département"
      },
      {
        ﻿a: "departure",
        un: "départ"
      },
      {
        ﻿a: "depend",
        un: "dépendre"
      },
      {
        ﻿a: "depend on",
        un: "dépendre de"
      },
      {
        ﻿a: "deposit",
        un: "dépôt"
      },
      {
        ﻿a: "depress",
        un: "déprimer"
      },
      {
        ﻿a: "depressed",
        un: "déprimé"
      },
      {
        ﻿a: "depressing",
        un: "déprimant"
      },
      {
        ﻿a: "depth",
        un: "profondeur"
      },
      {
        ﻿a: "derive",
        un: "dériver"
      },
      {
        ﻿a: "derive from",
        un: "tirer de"
      },
      {
        ﻿a: "describe",
        un: "décrire"
      },
      {
        ﻿a: "description",
        un: "description"
      },
      {
        ﻿a: "desert",
        un: "désert"
      },
      {
        ﻿a: "deserted",
        un: "déserté"
      },
      {
        ﻿a: "deserve",
        un: "mériter"
      },
      {
        ﻿a: "design",
        un: "conception"
      },
      {
        ﻿a: "desire",
        un: "désir"
      },
      {
        ﻿a: "desk",
        un: "bureau"
      },
      {
        ﻿a: "desperate",
        un: "désespéré"
      },
      {
        ﻿a: "desperately",
        un: "désespérément"
      },
      {
        ﻿a: "despite",
        un: "malgré"
      },
      {
        ﻿a: "destroy",
        un: "détruire"
      },
      {
        ﻿a: "destruction",
        un: "destruction"
      },
      {
        ﻿a: "detail",
        un: "détail"
      },
      {
        ﻿a: "detailed",
        un: "détaillé"
      },
      {
        ﻿a: "determination",
        un: "détermination"
      },
      {
        ﻿a: "determine",
        un: "déterminer"
      },
      {
        ﻿a: "determined",
        un: "déterminé"
      },
      {
        ﻿a: "develop",
        un: "développer"
      },
      {
        ﻿a: "development",
        un: "développement"
      },
      {
        ﻿a: "device",
        un: "appareil"
      },
      {
        ﻿a: "devote",
        un: "consacrer"
      },
      {
        ﻿a: "devoted",
        un: "dévoué"
      },
      {
        ﻿a: "devote to",
        un: "consacrer à"
      },
      {
        ﻿a: "diagram",
        un: "diagramme"
      },
      {
        ﻿a: "diamond",
        un: "diamant"
      },
      {
        ﻿a: "diary",
        un: "agenda"
      },
      {
        ﻿a: "dictionary",
        un: "dictionnaire"
      },
      {
        ﻿a: "die",
        un: "mourir"
      },
      {
        ﻿a: "die away",
        un: "mourir"
      },
      {
        ﻿a: "die out",
        un: "disparaître"
      },
      {
        ﻿a: "diet",
        un: "régime"
      },
      {
        ﻿a: "difference",
        un: "différence"
      },
      {
        ﻿a: "different",
        un: "différent"
      },
      {
        ﻿a: "differently",
        un: "différemment"
      },
      {
        ﻿a: "difficult",
        un: "difficile"
      },
      {
        ﻿a: "difficulty",
        un: "difficulté"
      },
      {
        ﻿a: "dig",
        un: "creuser"
      },
      {
        ﻿a: "digital",
        un: "numérique"
      },
      {
        ﻿a: "dinner",
        un: "dîner"
      },
      {
        ﻿a: "direct",
        un: "direct"
      },
      {
        ﻿a: "direction",
        un: "direction"
      },
      {
        ﻿a: "directly",
        un: "directement"
      },
      {
        ﻿a: "director",
        un: "directeur"
      },
      {
        ﻿a: "dirt",
        un: "saleté"
      },
      {
        ﻿a: "dirty",
        un: "sale"
      },
      {
        ﻿a: "disabled",
        un: "désactivé"
      },
      {
        ﻿a: "disadvantage",
        un: "inconvénient"
      },
      {
        ﻿a: "disagree",
        un: "être en désaccord"
      },
      {
        ﻿a: "disagreement",
        un: "désaccord"
      },
      {
        ﻿a: "disagree with doing",
        un: "pas d'accord avec le fait de faire"
      },
      {
        ﻿a: "disappear",
        un: "disparaître"
      },
      {
        ﻿a: "disappoint",
        un: "décevoir"
      },
      {
        ﻿a: "disappointed",
        un: "déçu"
      },
      {
        ﻿a: "disappointing",
        un: "décevant"
      },
      {
        ﻿a: "disappointment",
        un: "déception"
      },
      {
        ﻿a: "disapproval",
        un: "désapprobation"
      },
      {
        ﻿a: "disapprove",
        un: "désapprouver"
      },
      {
        ﻿a: "disapproving",
        un: "désapprobateur"
      },
      {
        ﻿a: "disaster",
        un: "catastrophe"
      },
      {
        ﻿a: "disc",
        un: "disque"
      },
      {
        ﻿a: "discipline",
        un: "discipline"
      },
      {
        ﻿a: "discount",
        un: "rabais"
      },
      {
        ﻿a: "discover",
        un: "découvrir"
      },
      {
        ﻿a: "discovery",
        un: "découverte"
      },
      {
        ﻿a: "discuss",
        un: "discuter"
      },
      {
        ﻿a: "discussion",
        un: "discussion"
      },
      {
        ﻿a: "disease",
        un: "maladie"
      },
      {
        ﻿a: "disgust",
        un: "dégoût"
      },
      {
        ﻿a: "disgusted",
        un: "dégoûté"
      },
      {
        ﻿a: "disgusting",
        un: "dégoûtant"
      },
      {
        ﻿a: "dish",
        un: "plat"
      },
      {
        ﻿a: "dishonest",
        un: "malhonnête"
      },
      {
        ﻿a: "dishonestly",
        un: "malhonnêtement"
      },
      {
        ﻿a: "disk",
        un: "disque"
      },
      {
        ﻿a: "dislike",
        un: "aversion"
      },
      {
        ﻿a: "dismiss",
        un: "rejeter"
      },
      {
        ﻿a: "display",
        un: "afficher"
      },
      {
        ﻿a: "dissolve",
        un: "dissoudre"
      },
      {
        ﻿a: "distance",
        un: "distance"
      },
      {
        ﻿a: "distinguish",
        un: "distinguer"
      },
      {
        ﻿a: "distribute",
        un: "distribuer"
      },
      {
        ﻿a: "distribution",
        un: "distribution"
      },
      {
        ﻿a: "district",
        un: "district"
      },
      {
        ﻿a: "disturb",
        un: "déranger"
      },
      {
        ﻿a: "disturbing",
        un: "inquiétant"
      },
      {
        ﻿a: "divide",
        un: "diviser"
      },
      {
        ﻿a: "division",
        un: "division"
      },
      {
        ﻿a: "divorce",
        un: "divorce"
      },
      {
        ﻿a: "divorced",
        un: "divorcé"
      },
      {
        ﻿a: "do 1",
        un: "faire 1"
      },
      {
        ﻿a: "doctor",
        un: "médecin"
      },
      {
        ﻿a: "document",
        un: "document"
      },
      {
        ﻿a: "dog",
        un: "chien"
      },
      {
        ﻿a: "dollar",
        un: "dollar"
      },
      {
        ﻿a: "domestic",
        un: "domestique"
      },
      {
        ﻿a: "dominate",
        un: "dominer"
      },
      {
        ﻿a: "door",
        un: "porte"
      },
      {
        ﻿a: "dot",
        un: "point"
      },
      {
        ﻿a: "double",
        un: "double"
      },
      {
        ﻿a: "doubt",
        un: "doute"
      },
      {
        ﻿a: "do up",
        un: "faire"
      },
      {
        ﻿a: "do with",
        un: "faire avec"
      },
      {
        ﻿a: "do without",
        un: "se passer de"
      },
      {
        ﻿a: "down",
        un: "vers le bas"
      },
      {
        ﻿a: "downstairs",
        un: "en bas"
      },
      {
        ﻿a: "downward",
        un: "vers le bas"
      },
      {
        ﻿a: "downwards",
        un: "vers le bas"
      },
      {
        ﻿a: "dozen",
        un: "douzaine"
      },
      {
        ﻿a: "draft",
        un: "brouillon"
      },
      {
        ﻿a: "drag",
        un: "traîner"
      },
      {
        ﻿a: "drama",
        un: "drame"
      },
      {
        ﻿a: "dramatic",
        un: "dramatique"
      },
      {
        ﻿a: "dramatically",
        un: "dramatiquement"
      },
      {
        ﻿a: "draw",
        un: "dessiner"
      },
      {
        ﻿a: "drawer",
        un: "tiroir"
      },
      {
        ﻿a: "drawing",
        un: "dessin"
      },
      {
        ﻿a: "dream",
        un: "rêve"
      },
      {
        ﻿a: "dress",
        un: "robe"
      },
      {
        ﻿a: "dressed",
        un: "habillé"
      },
      {
        ﻿a: "dress up",
        un: "se déguiser"
      },
      {
        ﻿a: "drink",
        un: "boire"
      },
      {
        ﻿a: "drive",
        un: "conduire"
      },
      {
        ﻿a: "drive away",
        un: "chasser"
      },
      {
        ﻿a: "drive off",
        un: "partir"
      },
      {
        ﻿a: "driver",
        un: "conducteur"
      },
      {
        ﻿a: "driving",
        un: "conduite"
      },
      {
        ﻿a: "drop",
        un: "baisse"
      },
      {
        ﻿a: "drop out",
        un: "abandonner"
      },
      {
        ﻿a: "drug",
        un: "médicament"
      },
      {
        ﻿a: "drugstore",
        un: "pharmacie"
      },
      {
        ﻿a: "drum",
        un: "tambour"
      },
      {
        ﻿a: "drunk",
        un: "ivre"
      },
      {
        ﻿a: "dry",
        un: "sec"
      },
      {
        ﻿a: "dry off",
        un: "se sécher"
      },
      {
        ﻿a: "dry up",
        un: "sécher"
      },
      {
        ﻿a: "due",
        un: "exigible"
      },
      {
        ﻿a: "dull",
        un: "terne"
      },
      {
        ﻿a: "dump",
        un: "décharge"
      },
      {
        ﻿a: "during",
        un: "pendant"
      },
      {
        ﻿a: "dust",
        un: "poussière"
      },
      {
        ﻿a: "duty",
        un: "devoir"
      },
      {
        ﻿a: "DVD",
        un: "DVD"
      },
      {
        ﻿a: "dying",
        un: "en train de mourir"
      },
      {
        ﻿a: "each",
        un: "chaque"
      },
      {
        ﻿a: "each other",
        un: "l'un l'autre"
      },
      {
        ﻿a: "ear",
        un: "oreille"
      },
      {
        ﻿a: "early",
        un: "tôt"
      },
      {
        ﻿a: "earn",
        un: "gagner"
      },
      {
        ﻿a: "earth",
        un: "Terre"
      },
      {
        ﻿a: "ease",
        un: "facilité"
      },
      {
        ﻿a: "easily",
        un: "facilement"
      },
      {
        ﻿a: "east",
        un: "est"
      },
      {
        ﻿a: "eastern",
        un: "est"
      },
      {
        ﻿a: "easy",
        un: "facile"
      },
      {
        ﻿a: "eat",
        un: "manger"
      },
      {
        ﻿a: "eat out",
        un: "manger dehors"
      },
      {
        ﻿a: "eat up",
        un: "dévorer"
      },
      {
        ﻿a: "economic",
        un: "économique"
      },
      {
        ﻿a: "economy",
        un: "économie"
      },
      {
        ﻿a: "edge",
        un: "bord"
      },
      {
        ﻿a: "edition",
        un: "édition"
      },
      {
        ﻿a: "editor",
        un: "éditeur"
      },
      {
        ﻿a: "educate",
        un: "éduquer"
      },
      {
        ﻿a: "educated",
        un: "instruit"
      },
      {
        ﻿a: "education",
        un: "éducation"
      },
      {
        ﻿a: "effect",
        un: "effet"
      },
      {
        ﻿a: "effective",
        un: "efficace"
      },
      {
        ﻿a: "effectively",
        un: "efficacement"
      },
      {
        ﻿a: "efficient",
        un: "efficace"
      },
      {
        ﻿a: "efficiently",
        un: "efficacement"
      },
      {
        ﻿a: "effort",
        un: "effort"
      },
      {
        ﻿a: "e.g.",
        un: "par ex."
      },
      {
        ﻿a: "egg",
        un: "œuf"
      },
      {
        ﻿a: "eight",
        un: "huit"
      },
      {
        ﻿a: "eighteen",
        un: "dix-huit"
      },
      {
        ﻿a: "eighteenth",
        un: "XVIIIe"
      },
      {
        ﻿a: "eighth",
        un: "huitième"
      },
      {
        ﻿a: "eightieth",
        un: "quatre-vingtième"
      },
      {
        ﻿a: "eighty",
        un: "quatre-vingts"
      },
      {
        ﻿a: "either",
        un: "soit"
      },
      {
        ﻿a: "elbow",
        un: "coude"
      },
      {
        ﻿a: "elderly",
        un: "âgé"
      },
      {
        ﻿a: "elect",
        un: "élire"
      },
      {
        ﻿a: "election",
        un: "élection"
      },
      {
        ﻿a: "electric",
        un: "électrique"
      },
      {
        ﻿a: "electrical",
        un: "électrique"
      },
      {
        ﻿a: "electricity",
        un: "électricité"
      },
      {
        ﻿a: "electronic",
        un: "électronique"
      },
      {
        ﻿a: "elegant",
        un: "élégant"
      },
      {
        ﻿a: "element",
        un: "élément"
      },
      {
        ﻿a: "elevator",
        un: "ascenseur"
      },
      {
        ﻿a: "eleven",
        un: "onze"
      },
      {
        ﻿a: "eleventh",
        un: "onzième"
      },
      {
        ﻿a: "else",
        un: "autre"
      },
      {
        ﻿a: "elsewhere",
        un: "autre part"
      },
      {
        ﻿a: "email",
        un: "e-mail"
      },
      {
        ﻿a: "embarrass",
        un: "embarrasser"
      },
      {
        ﻿a: "embarrassed",
        un: "gêné"
      },
      {
        ﻿a: "embarrassing",
        un: "embarrassant"
      },
      {
        ﻿a: "embarrassment",
        un: "embarras"
      },
      {
        ﻿a: "emerge",
        un: "émerger"
      },
      {
        ﻿a: "emergency",
        un: "urgence"
      },
      {
        ﻿a: "emotion",
        un: "émotion"
      },
      {
        ﻿a: "emotional",
        un: "émotionnel"
      },
      {
        ﻿a: "emotionally",
        un: "émotionnellement"
      },
      {
        ﻿a: "emphasis",
        un: "accent"
      },
      {
        ﻿a: "emphasize",
        un: "souligner"
      },
      {
        ﻿a: "empire",
        un: "empire"
      },
      {
        ﻿a: "employ",
        un: "employer"
      },
      {
        ﻿a: "employee",
        un: "employé"
      },
      {
        ﻿a: "employer",
        un: "employeur"
      },
      {
        ﻿a: "employment",
        un: "emploi"
      },
      {
        ﻿a: "empty",
        un: "vide"
      },
      {
        ﻿a: "enable",
        un: "activer"
      },
      {
        ﻿a: "encounter",
        un: "rencontre"
      },
      {
        ﻿a: "encourage",
        un: "encourager"
      },
      {
        ﻿a: "encouragement",
        un: "encouragement"
      },
      {
        ﻿a: "end",
        un: "fin"
      },
      {
        ﻿a: "end in",
        un: "se terminer par"
      },
      {
        ﻿a: "ending",
        un: "fin"
      },
      {
        ﻿a: "end up",
        un: "finir"
      },
      {
        ﻿a: "enemy",
        un: "ennemi"
      },
      {
        ﻿a: "energy",
        un: "énergie"
      },
      {
        ﻿a: "engage",
        un: "s'engager"
      },
      {
        ﻿a: "engaged",
        un: "engagé"
      },
      {
        ﻿a: "engine",
        un: "moteur"
      },
      {
        ﻿a: "engineer",
        un: "ingénieur"
      },
      {
        ﻿a: "engineering",
        un: "ingénierie"
      },
      {
        ﻿a: "enjoy",
        un: "apprécier"
      },
      {
        ﻿a: "enjoyable",
        un: "agréable"
      },
      {
        ﻿a: "enjoyment",
        un: "jouissance"
      },
      {
        ﻿a: "enormous",
        un: "énorme"
      },
      {
        ﻿a: "enough",
        un: "assez"
      },
      {
        ﻿a: "enquiry",
        un: "enquête"
      },
      {
        ﻿a: "ensure",
        un: "assurer"
      },
      {
        ﻿a: "enter",
        un: "entrer"
      },
      {
        ﻿a: "entertain",
        un: "divertir"
      },
      {
        ﻿a: "entertainer",
        un: "artiste"
      },
      {
        ﻿a: "entertaining",
        un: "amusant"
      },
      {
        ﻿a: "entertainment",
        un: "divertissement"
      },
      {
        ﻿a: "enthusiasm",
        un: "enthousiasme"
      },
      {
        ﻿a: "enthusiastic",
        un: "enthousiaste"
      },
      {
        ﻿a: "enthusiastically",
        un: "avec enthousiasme"
      },
      {
        ﻿a: "entire",
        un: "entier"
      },
      {
        ﻿a: "entirely",
        un: "entièrement"
      },
      {
        ﻿a: "entitle",
        un: "donner droit"
      },
      {
        ﻿a: "entrance 1",
        un: "entrée 1"
      },
      {
        ﻿a: "entry",
        un: "entrée"
      },
      {
        ﻿a: "envelope",
        un: "enveloppe"
      },
      {
        ﻿a: "environment",
        un: "environnement"
      },
      {
        ﻿a: "environmental",
        un: "environnemental"
      },
      {
        ﻿a: "equal",
        un: "égal"
      },
      {
        ﻿a: "equally",
        un: "également"
      },
      {
        ﻿a: "equipment",
        un: "équipement"
      },
      {
        ﻿a: "equivalent",
        un: "équivalent"
      },
      {
        ﻿a: "error",
        un: "erreur"
      },
      {
        ﻿a: "escape",
        un: "s'échapper"
      },
      {
        ﻿a: "especially",
        un: "en particulier"
      },
      {
        ﻿a: "essay",
        un: "essai"
      },
      {
        ﻿a: "essential",
        un: "essentiel"
      },
      {
        ﻿a: "essentially",
        un: "essentiellement"
      },
      {
        ﻿a: "establish",
        un: "établir"
      },
      {
        ﻿a: "estate",
        un: "domaine"
      },
      {
        ﻿a: "estimate",
        un: "estimation"
      },
      {
        ﻿a: "etc.",
        un: "etc."
      },
      {
        ﻿a: "euro",
        un: "euro"
      },
      {
        ﻿a: "even",
        un: "même"
      },
      {
        ﻿a: "evening",
        un: "soirée"
      },
      {
        ﻿a: "event",
        un: "événement"
      },
      {
        ﻿a: "eventually",
        un: "finalement"
      },
      {
        ﻿a: "ever",
        un: "jamais"
      },
      {
        ﻿a: "every",
        un: "chaque"
      },
      {
        ﻿a: "everybody",
        un: "tout le monde"
      },
      {
        ﻿a: "everyone",
        un: "tout le monde"
      },
      {
        ﻿a: "everything",
        un: "tout"
      },
      {
        ﻿a: "everywhere",
        un: "partout"
      },
      {
        ﻿a: "evidence",
        un: "preuve"
      },
      {
        ﻿a: "evil",
        un: "mal"
      },
      {
        ﻿a: "ex-",
        un: "ex-"
      },
      {
        ﻿a: "exact",
        un: "exact"
      },
      {
        ﻿a: "exactly",
        un: "exactement"
      },
      {
        ﻿a: "exaggerate",
        un: "exagérer"
      },
      {
        ﻿a: "exaggerated",
        un: "exagéré"
      },
      {
        ﻿a: "exam",
        un: "examen"
      },
      {
        ﻿a: "examination",
        un: "examen"
      },
      {
        ﻿a: "examine",
        un: "examiner"
      },
      {
        ﻿a: "example",
        un: "exemple"
      },
      {
        ﻿a: "excellent",
        un: "excellent"
      },
      {
        ﻿a: "except",
        un: "sauf"
      },
      {
        ﻿a: "exception",
        un: "exception"
      },
      {
        ﻿a: "exchange",
        un: "échange"
      },
      {
        ﻿a: "excite",
        un: "exciter"
      },
      {
        ﻿a: "excited",
        un: "excité"
      },
      {
        ﻿a: "excitement",
        un: "excitation"
      },
      {
        ﻿a: "exciting",
        un: "passionnant"
      },
      {
        ﻿a: "exclude",
        un: "exclure"
      },
      {
        ﻿a: "excluding",
        un: "sauf"
      },
      {
        ﻿a: "excuse",
        un: "excuse"
      },
      {
        ﻿a: "executive",
        un: "exécutif"
      },
      {
        ﻿a: "exercise",
        un: "exercice"
      },
      {
        ﻿a: "exhibit",
        un: "exposition"
      },
      {
        ﻿a: "exhibition",
        un: "exposition"
      },
      {
        ﻿a: "exist",
        un: "exister"
      },
      {
        ﻿a: "existence",
        un: "existence"
      },
      {
        ﻿a: "exit",
        un: "sortie"
      },
      {
        ﻿a: "expand",
        un: "développer"
      },
      {
        ﻿a: "expect",
        un: "attendre"
      },
      {
        ﻿a: "expectation",
        un: "attente"
      },
      {
        ﻿a: "expected",
        un: "attendu"
      },
      {
        ﻿a: "expense",
        un: "frais"
      },
      {
        ﻿a: "expensive",
        un: "cher"
      },
      {
        ﻿a: "experience",
        un: "expérience"
      },
      {
        ﻿a: "experienced",
        un: "expérimenté"
      },
      {
        ﻿a: "experiment",
        un: "expérience"
      },
      {
        ﻿a: "expert",
        un: "expert"
      },
      {
        ﻿a: "explain",
        un: "expliquer"
      },
      {
        ﻿a: "explanation",
        un: "explication"
      },
      {
        ﻿a: "explode",
        un: "exploser"
      },
      {
        ﻿a: "explore",
        un: "explorer"
      },
      {
        ﻿a: "explosion",
        un: "explosion"
      },
      {
        ﻿a: "export",
        un: "exporter"
      },
      {
        ﻿a: "expose",
        un: "exposer"
      },
      {
        ﻿a: "express",
        un: "exprimer"
      },
      {
        ﻿a: "expression",
        un: "expression"
      },
      {
        ﻿a: "extend",
        un: "étendre"
      },
      {
        ﻿a: "extension",
        un: "extension"
      },
      {
        ﻿a: "extensive",
        un: "extensif"
      },
      {
        ﻿a: "extent",
        un: "étendue"
      },
      {
        ﻿a: "extra",
        un: "supplémentaire"
      },
      {
        ﻿a: "extraordinary",
        un: "extraordinaire"
      },
      {
        ﻿a: "extreme",
        un: "extrême"
      },
      {
        ﻿a: "extremely",
        un: "extrêmement"
      },
      {
        ﻿a: "eye",
        un: "œil"
      },
      {
        ﻿a: "face",
        un: "affronter"
      },
      {
        ﻿a: "face up to",
        un: "faire face à"
      },
      {
        ﻿a: "facility",
        un: "facilité"
      },
      {
        ﻿a: "fact",
        un: "fait"
      },
      {
        ﻿a: "factor",
        un: "facteur"
      },
      {
        ﻿a: "factory",
        un: "usine"
      },
      {
        ﻿a: "fail",
        un: "échouer"
      },
      {
        ﻿a: "failure",
        un: "échec"
      },
      {
        ﻿a: "faint",
        un: "s'évanouir"
      },
      {
        ﻿a: "faintly",
        un: "faiblement"
      },
      {
        ﻿a: "fair",
        un: "équitable"
      },
      {
        ﻿a: "fairly",
        un: "assez"
      },
      {
        ﻿a: "faith",
        un: "foi"
      },
      {
        ﻿a: "faithful",
        un: "fidèle"
      },
      {
        ﻿a: "faithfully",
        un: "fidèlement"
      },
      {
        ﻿a: "fall",
        un: "automne"
      },
      {
        ﻿a: false,
        un: "FAUX"
      },
      {
        ﻿a: "fame",
        un: "notoriété"
      },
      {
        ﻿a: "familiar",
        un: "familier"
      },
      {
        ﻿a: "family",
        un: "famille"
      },
      {
        ﻿a: "famous",
        un: "célèbre"
      },
      {
        ﻿a: "fan",
        un: "ventilateur"
      },
      {
        ﻿a: "fancy",
        un: "fantaisie"
      },
      {
        ﻿a: "far",
        un: "loin"
      },
      {
        ﻿a: "farm",
        un: "ferme"
      },
      {
        ﻿a: "farmer",
        un: "fermier"
      },
      {
        ﻿a: "farming",
        un: "agriculture"
      },
      {
        ﻿a: "farther",
        un: "plus loin"
      },
      {
        ﻿a: "farthest",
        un: "le plus éloigné"
      },
      {
        ﻿a: "fashion",
        un: "mode"
      },
      {
        ﻿a: "fashionable",
        un: "à la mode"
      },
      {
        ﻿a: "fast",
        un: "rapide"
      },
      {
        ﻿a: "fasten",
        un: "fixer"
      },
      {
        ﻿a: "fat",
        un: "graisse"
      },
      {
        ﻿a: "father",
        un: "père"
      },
      {
        ﻿a: "faucet",
        un: "robinet"
      },
      {
        ﻿a: "fault",
        un: "faute"
      },
      {
        ﻿a: "favour",
        un: "service"
      },
      {
        ﻿a: "favourite",
        un: "préféré"
      },
      {
        ﻿a: "fear",
        un: "peur"
      },
      {
        ﻿a: "feather",
        un: "plume"
      },
      {
        ﻿a: "feature",
        un: "fonctionnalité"
      },
      {
        ﻿a: "February",
        un: "Février"
      },
      {
        ﻿a: "federal",
        un: "fédéral"
      },
      {
        ﻿a: "fee",
        un: "frais"
      },
      {
        ﻿a: "feed",
        un: "alimentation"
      },
      {
        ﻿a: "feel",
        un: "sentir"
      },
      {
        ﻿a: "feeling",
        un: "sentiment"
      },
      {
        ﻿a: "fellow",
        un: "compagnon"
      },
      {
        ﻿a: "female",
        un: "femelle"
      },
      {
        ﻿a: "fence",
        un: "clôture"
      },
      {
        ﻿a: "festival",
        un: "festival"
      },
      {
        ﻿a: "fetch",
        un: "aller chercher"
      },
      {
        ﻿a: "fever",
        un: "fièvre"
      },
      {
        ﻿a: "few",
        un: "peu"
      },
      {
        ﻿a: "field",
        un: "champ"
      },
      {
        ﻿a: "fifteen",
        un: "quinze"
      },
      {
        ﻿a: "fifteenth",
        un: "quinzième"
      },
      {
        ﻿a: "fifth",
        un: "cinquième"
      },
      {
        ﻿a: "fiftieth",
        un: "cinquantième"
      },
      {
        ﻿a: "fifty",
        un: "cinquante"
      },
      {
        ﻿a: "fight",
        un: "lutte"
      },
      {
        ﻿a: "fighting",
        un: "lutte"
      },
      {
        ﻿a: "figure",
        un: "chiffre"
      },
      {
        ﻿a: "figure out",
        un: "comprendre"
      },
      {
        ﻿a: "file",
        un: "déposer"
      },
      {
        ﻿a: "fill",
        un: "remplir"
      },
      {
        ﻿a: "fill in",
        un: "remplir"
      },
      {
        ﻿a: "fill out",
        un: "remplir"
      },
      {
        ﻿a: "fill up",
        un: "compléter"
      },
      {
        ﻿a: "film",
        un: "film"
      },
      {
        ﻿a: "final",
        un: "final"
      },
      {
        ﻿a: "finally",
        un: "enfin"
      },
      {
        ﻿a: "finance",
        un: "finance"
      },
      {
        ﻿a: "financial",
        un: "financier"
      },
      {
        ﻿a: "find",
        un: "trouver"
      },
      {
        ﻿a: "find out",
        un: "découvrir"
      },
      {
        ﻿a: "fine",
        un: "bien"
      },
      {
        ﻿a: "finely",
        un: "finement"
      },
      {
        ﻿a: "finger",
        un: "doigt"
      },
      {
        ﻿a: "finish",
        un: "finition"
      },
      {
        ﻿a: "finished",
        un: "fini"
      },
      {
        ﻿a: "finish off",
        un: "terminer"
      },
      {
        ﻿a: "fire",
        un: "feu"
      },
      {
        ﻿a: "firm",
        un: "ferme"
      },
      {
        ﻿a: "firmly",
        un: "fermement"
      },
      {
        ﻿a: "first",
        un: "d'abord"
      },
      {
        ﻿a: "fish",
        un: "poisson"
      },
      {
        ﻿a: "fishing",
        un: "pêche"
      },
      {
        ﻿a: "fit",
        un: "ajuster"
      },
      {
        ﻿a: "fit in",
        un: "s'intégrer"
      },
      {
        ﻿a: "five",
        un: "cinq"
      },
      {
        ﻿a: "fix",
        un: "réparer"
      },
      {
        ﻿a: "fixed",
        un: "fixé"
      },
      {
        ﻿a: "flag",
        un: "drapeau"
      },
      {
        ﻿a: "flame",
        un: "flamme"
      },
      {
        ﻿a: "flash",
        un: "éclair"
      },
      {
        ﻿a: "flat",
        un: "plat"
      },
      {
        ﻿a: "flavour",
        un: "saveur"
      },
      {
        ﻿a: "flesh",
        un: "chair"
      },
      {
        ﻿a: "flight",
        un: "vol"
      },
      {
        ﻿a: "float",
        un: "flotter"
      },
      {
        ﻿a: "flood",
        un: "inondation"
      },
      {
        ﻿a: "flooded",
        un: "inondé"
      },
      {
        ﻿a: "flooding",
        un: "inondation"
      },
      {
        ﻿a: "floor",
        un: "sol"
      },
      {
        ﻿a: "flour",
        un: "farine"
      },
      {
        ﻿a: "flow",
        un: "couler"
      },
      {
        ﻿a: "flower",
        un: "fleur"
      },
      {
        ﻿a: "flu",
        un: "grippe"
      },
      {
        ﻿a: "fly",
        un: "voler"
      },
      {
        ﻿a: "flying",
        un: "vol"
      },
      {
        ﻿a: "focus",
        un: "se concentrer"
      },
      {
        ﻿a: "fold",
        un: "pli"
      },
      {
        ﻿a: "folding",
        un: "pliant"
      },
      {
        ﻿a: "follow",
        un: "suivre"
      },
      {
        ﻿a: "following",
        un: "suivant"
      },
      {
        ﻿a: "follow up",
        un: "suivi"
      },
      {
        ﻿a: "food",
        un: "nourriture"
      },
      {
        ﻿a: "foot",
        un: "pied"
      },
      {
        ﻿a: "football",
        un: "football"
      },
      {
        ﻿a: "for",
        un: "pour"
      },
      {
        ﻿a: "force",
        un: "forcer"
      },
      {
        ﻿a: "forecast",
        un: "prévision"
      },
      {
        ﻿a: "foreign",
        un: "étranger"
      },
      {
        ﻿a: "forest",
        un: "forêt"
      },
      {
        ﻿a: "forever",
        un: "pour toujours"
      },
      {
        ﻿a: "forget",
        un: "oublier"
      },
      {
        ﻿a: "forgive",
        un: "pardonner"
      },
      {
        ﻿a: "fork",
        un: "fourchette"
      },
      {
        ﻿a: "form",
        un: "formulaire"
      },
      {
        ﻿a: "formal",
        un: "officiel"
      },
      {
        ﻿a: "formally",
        un: "officiellement"
      },
      {
        ﻿a: "former",
        un: "ancien"
      },
      {
        ﻿a: "formerly",
        un: "anciennement"
      },
      {
        ﻿a: "formula",
        un: "formule"
      },
      {
        ﻿a: "fortieth",
        un: "quarantième"
      },
      {
        ﻿a: "fortune",
        un: "fortune"
      },
      {
        ﻿a: "forty",
        un: "quarante"
      },
      {
        ﻿a: "forward",
        un: "avant"
      },
      {
        ﻿a: "found",
        un: "trouvé"
      },
      {
        ﻿a: "foundation",
        un: "fondation"
      },
      {
        ﻿a: "four",
        un: "quatre"
      },
      {
        ﻿a: "fourteen",
        un: "quatorze"
      },
      {
        ﻿a: "fourteenth",
        un: "quatorzième"
      },
      {
        ﻿a: "fourth",
        un: "quatrième"
      },
      {
        ﻿a: "frame",
        un: "cadre"
      },
      {
        ﻿a: "free",
        un: "gratuit"
      },
      {
        ﻿a: "freedom",
        un: "liberté"
      },
      {
        ﻿a: "freely",
        un: "librement"
      },
      {
        ﻿a: "freeze",
        un: "geler"
      },
      {
        ﻿a: "frequent",
        un: "fréquent"
      },
      {
        ﻿a: "frequently",
        un: "fréquemment"
      },
      {
        ﻿a: "fresh",
        un: "frais"
      },
      {
        ﻿a: "freshly",
        un: "fraîchement"
      },
      {
        ﻿a: "Friday",
        un: "Vendredi"
      },
      {
        ﻿a: "fridge",
        un: "réfrigérateur"
      },
      {
        ﻿a: "friend",
        un: "ami"
      },
      {
        ﻿a: "friendly",
        un: "amical"
      },
      {
        ﻿a: "friendship",
        un: "amitié"
      },
      {
        ﻿a: "frighten",
        un: "effrayer"
      },
      {
        ﻿a: "frighten away/off",
        un: "effrayer"
      },
      {
        ﻿a: "frightened",
        un: "effrayé"
      },
      {
        ﻿a: "frightening",
        un: "effrayant"
      },
      {
        ﻿a: "from",
        un: "depuis"
      },
      {
        ﻿a: "front",
        un: "devant"
      },
      {
        ﻿a: "frozen",
        un: "congelé"
      },
      {
        ﻿a: "fruit",
        un: "fruit"
      },
      {
        ﻿a: "fry",
        un: "frire"
      },
      {
        ﻿a: "fuel",
        un: "carburant"
      },
      {
        ﻿a: "full",
        un: "complet"
      },
      {
        ﻿a: "fully",
        un: "pleinement"
      },
      {
        ﻿a: "fun",
        un: "amusant"
      },
      {
        ﻿a: "function",
        un: "fonction"
      },
      {
        ﻿a: "function as",
        un: "fonctionner comme"
      },
      {
        ﻿a: "fund",
        un: "fonds"
      },
      {
        ﻿a: "fundamental",
        un: "fondamental"
      },
      {
        ﻿a: "funeral",
        un: "funérailles"
      },
      {
        ﻿a: "funny",
        un: "drôle"
      },
      {
        ﻿a: "fur",
        un: "fourrure"
      },
      {
        ﻿a: "furniture",
        un: "meubles"
      },
      {
        ﻿a: "further",
        un: "plus loin"
      },
      {
        ﻿a: "future",
        un: "avenir"
      },
      {
        ﻿a: "gain",
        un: "gagner"
      },
      {
        ﻿a: "gallon",
        un: "gallon"
      },
      {
        ﻿a: "gamble",
        un: "pari"
      },
      {
        ﻿a: "gambling",
        un: "jeu d'argent"
      },
      {
        ﻿a: "game",
        un: "jeu"
      },
      {
        ﻿a: "gap",
        un: "écart"
      },
      {
        ﻿a: "garage",
        un: "garage"
      },
      {
        ﻿a: "garbage",
        un: "ordures"
      },
      {
        ﻿a: "garden",
        un: "jardin"
      },
      {
        ﻿a: "gas",
        un: "gaz"
      },
      {
        ﻿a: "gasoline",
        un: "essence"
      },
      {
        ﻿a: "gate",
        un: "grille"
      },
      {
        ﻿a: "gather",
        un: "rassembler"
      },
      {
        ﻿a: "gear",
        un: "engrenage"
      },
      {
        ﻿a: "general",
        un: "général"
      },
      {
        ﻿a: "generally",
        un: "en général"
      },
      {
        ﻿a: "generate",
        un: "générer"
      },
      {
        ﻿a: "generation",
        un: "génération"
      },
      {
        ﻿a: "generous",
        un: "généreux"
      },
      {
        ﻿a: "generously",
        un: "généreusement"
      },
      {
        ﻿a: "gentle",
        un: "doux"
      },
      {
        ﻿a: "gentleman",
        un: "gentilhomme"
      },
      {
        ﻿a: "gently",
        un: "doucement"
      },
      {
        ﻿a: "genuine",
        un: "authentique"
      },
      {
        ﻿a: "genuinely",
        un: "véritablement"
      },
      {
        ﻿a: "geography",
        un: "géographie"
      },
      {
        ﻿a: "get",
        un: "obtenir"
      },
      {
        ﻿a: "get away",
        un: "partir"
      },
      {
        ﻿a: "get away with",
        un: "s'en sortir avec"
      },
      {
        ﻿a: "get back",
        un: "revenir"
      },
      {
        ﻿a: "get by",
        un: "se débrouiller"
      },
      {
        ﻿a: "get in",
        un: "Montez"
      },
      {
        ﻿a: "get into",
        un: "entrer dans"
      },
      {
        ﻿a: "get off",
        un: "descendez"
      },
      {
        ﻿a: "get on",
        un: "monter"
      },
      {
        ﻿a: "get on with",
        un: "continuez avec"
      },
      {
        ﻿a: "get out of",
        un: "sortir de"
      },
      {
        ﻿a: "get over",
        un: "surmonter"
      },
      {
        ﻿a: "get round",
        un: "faire le tour"
      },
      {
        ﻿a: "get round to",
        un: "contourner"
      },
      {
        ﻿a: "get through",
        un: "traverser"
      },
      {
        ﻿a: "get up",
        un: "se lever"
      },
      {
        ﻿a: "giant",
        un: "géant"
      },
      {
        ﻿a: "gift",
        un: "cadeau"
      },
      {
        ﻿a: "girl",
        un: "fille"
      },
      {
        ﻿a: "girlfriend",
        un: "petite amie"
      },
      {
        ﻿a: "give",
        un: "donner"
      },
      {
        ﻿a: "give away",
        un: "révéler"
      },
      {
        ﻿a: "give back",
        un: "redonner"
      },
      {
        ﻿a: "give in",
        un: "donner"
      },
      {
        ﻿a: "give off",
        un: "dégager"
      },
      {
        ﻿a: "give out",
        un: "donner"
      },
      {
        ﻿a: "give up",
        un: "abandonner"
      },
      {
        ﻿a: "glad",
        un: "content"
      },
      {
        ﻿a: "glass",
        un: "verre"
      },
      {
        ﻿a: "global",
        un: "mondial"
      },
      {
        ﻿a: "glove",
        un: "gant"
      },
      {
        ﻿a: "glue",
        un: "colle"
      },
      {
        ﻿a: "go",
        un: "aller"
      },
      {
        ﻿a: "go ahead",
        un: "poursuivre"
      },
      {
        ﻿a: "goal",
        un: "but"
      },
      {
        ﻿a: "go away",
        un: "s'en aller"
      },
      {
        ﻿a: "go back",
        un: "revenir"
      },
      {
        ﻿a: "go back to",
        un: "revenir à"
      },
      {
        ﻿a: "go by",
        un: "passer"
      },
      {
        ﻿a: "god",
        un: "Dieu"
      },
      {
        ﻿a: "go down",
        un: "descendre"
      },
      {
        ﻿a: "go into",
        un: "entrer dans"
      },
      {
        ﻿a: "gold",
        un: "or"
      },
      {
        ﻿a: "good",
        un: "bien"
      },
      {
        ﻿a: "goodbye",
        un: "au revoir"
      },
      {
        ﻿a: "goods",
        un: "marchandises"
      },
      {
        ﻿a: "go off",
        un: "partir"
      },
      {
        ﻿a: "go on",
        un: "continue"
      },
      {
        ﻿a: "go on doing",
        un: "continue à faire"
      },
      {
        ﻿a: "go out",
        un: "sortir"
      },
      {
        ﻿a: "go out with",
        un: "sortir avec"
      },
      {
        ﻿a: "go over",
        un: "passer"
      },
      {
        ﻿a: "go round",
        un: "faire le tour"
      },
      {
        ﻿a: "go through",
        un: "passer par"
      },
      {
        ﻿a: "go through with",
        un: "passer par"
      },
      {
        ﻿a: "go to",
        un: "aller à"
      },
      {
        ﻿a: "go up",
        un: "monter"
      },
      {
        ﻿a: "govern",
        un: "gouverner"
      },
      {
        ﻿a: "government",
        un: "gouvernement"
      },
      {
        ﻿a: "governor",
        un: "gouverneur"
      },
      {
        ﻿a: "go with",
        un: "aller avec"
      },
      {
        ﻿a: "go without",
        un: "partir sans"
      },
      {
        ﻿a: "grab",
        un: "saisir"
      },
      {
        ﻿a: "grade",
        un: "grade"
      },
      {
        ﻿a: "gradual",
        un: "graduel"
      },
      {
        ﻿a: "gradually",
        un: "progressivement"
      },
      {
        ﻿a: "grain",
        un: "grain"
      },
      {
        ﻿a: "gram",
        un: "gramme"
      },
      {
        ﻿a: "grammar",
        un: "grammaire"
      },
      {
        ﻿a: "grand",
        un: "grandiose"
      },
      {
        ﻿a: "grandchild",
        un: "petit enfant"
      },
      {
        ﻿a: "granddaughter",
        un: "petite fille"
      },
      {
        ﻿a: "grandfather",
        un: "grand-père"
      },
      {
        ﻿a: "grandmother",
        un: "grand-mère"
      },
      {
        ﻿a: "grandparent",
        un: "grand-parent"
      },
      {
        ﻿a: "grandson",
        un: "petit fils"
      },
      {
        ﻿a: "grant",
        un: "accorder"
      },
      {
        ﻿a: "grass",
        un: "herbe"
      },
      {
        ﻿a: "grateful",
        un: "reconnaissant"
      },
      {
        ﻿a: "grave 1",
        un: "tombe 1"
      },
      {
        ﻿a: "gravely",
        un: "gravement"
      },
      {
        ﻿a: "great",
        un: "super"
      },
      {
        ﻿a: "greatly",
        un: "considérablement"
      },
      {
        ﻿a: "green",
        un: "vert"
      },
      {
        ﻿a: "grey",
        un: "gris"
      },
      {
        ﻿a: "grocery",
        un: "épicerie"
      },
      {
        ﻿a: "ground",
        un: "sol"
      },
      {
        ﻿a: "group",
        un: "groupe"
      },
      {
        ﻿a: "grow",
        un: "grandir"
      },
      {
        ﻿a: "growth",
        un: "croissance"
      },
      {
        ﻿a: "grow up",
        un: "grandir"
      },
      {
        ﻿a: "guarantee",
        un: "garantie"
      },
      {
        ﻿a: "guard",
        un: "garde"
      },
      {
        ﻿a: "guess",
        un: "deviner"
      },
      {
        ﻿a: "guest",
        un: "invité"
      },
      {
        ﻿a: "guide",
        un: "guide"
      },
      {
        ﻿a: "guilty",
        un: "coupable"
      },
      {
        ﻿a: "gun",
        un: "pistolet"
      },
      {
        ﻿a: "guy",
        un: "gars"
      },
      {
        ﻿a: "habit",
        un: "habitude"
      },
      {
        ﻿a: "hair",
        un: "cheveux"
      },
      {
        ﻿a: "hairdresser",
        un: "coiffeur"
      },
      {
        ﻿a: "half",
        un: "moitié"
      },
      {
        ﻿a: "hall",
        un: "salle"
      },
      {
        ﻿a: "hammer",
        un: "marteau"
      },
      {
        ﻿a: "hand",
        un: "main"
      },
      {
        ﻿a: "hand back",
        un: "main en arrière"
      },
      {
        ﻿a: "hand down",
        un: "transmettre"
      },
      {
        ﻿a: "hand in",
        un: "remettre"
      },
      {
        ﻿a: "handle",
        un: "poignée"
      },
      {
        ﻿a: "hand out",
        un: "distribuer"
      },
      {
        ﻿a: "hand over",
        un: "remettre"
      },
      {
        ﻿a: "hand round",
        un: "main ronde"
      },
      {
        ﻿a: "hang",
        un: "accrocher"
      },
      {
        ﻿a: "hang about",
        un: "attendre"
      },
      {
        ﻿a: "hang about with",
        un: "traîner avec"
      },
      {
        ﻿a: "hang around",
        un: "traîner"
      },
      {
        ﻿a: "hang around with",
        un: "traîner avec"
      },
      {
        ﻿a: "hang on",
        un: "accrochez-vous"
      },
      {
        ﻿a: "hang on to",
        un: "s'accrocher à"
      },
      {
        ﻿a: "hang up",
        un: "raccrocher"
      },
      {
        ﻿a: "happen",
        un: "arriver"
      },
      {
        ﻿a: "happen to",
        un: "arriver à"
      },
      {
        ﻿a: "happily",
        un: "heureusement"
      },
      {
        ﻿a: "happiness",
        un: "bonheur"
      },
      {
        ﻿a: "happy",
        un: "heureux"
      },
      {
        ﻿a: "hard",
        un: "dur"
      },
      {
        ﻿a: "hardly",
        un: "à peine"
      },
      {
        ﻿a: "harm",
        un: "nuire"
      },
      {
        ﻿a: "harmful",
        un: "nocif"
      },
      {
        ﻿a: "harmless",
        un: "inoffensif"
      },
      {
        ﻿a: "hat",
        un: "chapeau"
      },
      {
        ﻿a: "hate",
        un: "détester"
      },
      {
        ﻿a: "hatred",
        un: "haine"
      },
      {
        ﻿a: "have",
        un: "avoir"
      },
      {
        ﻿a: "have back",
        un: "être de retour"
      },
      {
        ﻿a: "have on",
        un: "avoir sur"
      },
      {
        ﻿a: "have to",
        un: "devoir"
      },
      {
        ﻿a: "he",
        un: "il"
      },
      {
        ﻿a: "head",
        un: "tête"
      },
      {
        ﻿a: "headache",
        un: "mal de tête"
      },
      {
        ﻿a: "heal",
        un: "guérir"
      },
      {
        ﻿a: "health",
        un: "santé"
      },
      {
        ﻿a: "healthy",
        un: "en bonne santé"
      },
      {
        ﻿a: "hear",
        un: "entendre"
      },
      {
        ﻿a: "hear from",
        un: "entendre parler de"
      },
      {
        ﻿a: "hearing",
        un: "audience"
      },
      {
        ﻿a: "hear of",
        un: "entendre parler"
      },
      {
        ﻿a: "heart",
        un: "cœur"
      },
      {
        ﻿a: "heat",
        un: "chaleur"
      },
      {
        ﻿a: "heating",
        un: "chauffage"
      },
      {
        ﻿a: "heat up",
        un: "chauffer"
      },
      {
        ﻿a: "heaven",
        un: "paradis"
      },
      {
        ﻿a: "heavily",
        un: "fortement"
      },
      {
        ﻿a: "heavy",
        un: "lourd"
      },
      {
        ﻿a: "heel",
        un: "talon"
      },
      {
        ﻿a: "height",
        un: "hauteur"
      },
      {
        ﻿a: "hell",
        un: "enfer"
      },
      {
        ﻿a: "hello",
        un: "Bonjour"
      },
      {
        ﻿a: "help",
        un: "aide"
      },
      {
        ﻿a: "helpful",
        un: "utile"
      },
      {
        ﻿a: "help out",
        un: "aider"
      },
      {
        ﻿a: "hence",
        un: "ainsi"
      },
      {
        ﻿a: "her",
        un: "son"
      },
      {
        ﻿a: "here",
        un: "ici"
      },
      {
        ﻿a: "hero",
        un: "héros"
      },
      {
        ﻿a: "hers",
        un: "la sienne"
      },
      {
        ﻿a: "herself",
        un: "se"
      },
      {
        ﻿a: "hesitate",
        un: "hésiter"
      },
      {
        ﻿a: "hi",
        un: "Salut"
      },
      {
        ﻿a: "hide",
        un: "cacher"
      },
      {
        ﻿a: "high",
        un: "haut"
      },
      {
        ﻿a: "highlight",
        un: "souligner"
      },
      {
        ﻿a: "highly",
        un: "très"
      },
      {
        ﻿a: "highway",
        un: "autoroute"
      },
      {
        ﻿a: "hill",
        un: "colline"
      },
      {
        ﻿a: "him",
        un: "lui"
      },
      {
        ﻿a: "himself",
        un: "se"
      },
      {
        ﻿a: "hip",
        un: "hanche"
      },
      {
        ﻿a: "hire",
        un: "embaucher"
      },
      {
        ﻿a: "hire out",
        un: "louer"
      },
      {
        ﻿a: "his",
        un: "son"
      },
      {
        ﻿a: "historical",
        un: "historique"
      },
      {
        ﻿a: "history",
        un: "histoire"
      },
      {
        ﻿a: "hit",
        un: "frapper"
      },
      {
        ﻿a: "hobby",
        un: "passe-temps"
      },
      {
        ﻿a: "hold",
        un: "prise"
      },
      {
        ﻿a: "hold back",
        un: "retenir"
      },
      {
        ﻿a: "hold on",
        un: "attendez"
      },
      {
        ﻿a: "hold on to",
        un: "s'accrocher"
      },
      {
        ﻿a: "hold out",
        un: "tendre"
      },
      {
        ﻿a: "hold up",
        un: "tenir bon"
      },
      {
        ﻿a: "hole",
        un: "trou"
      },
      {
        ﻿a: "holiday",
        un: "vacances"
      },
      {
        ﻿a: "hollow",
        un: "creux"
      },
      {
        ﻿a: "holy",
        un: "saint"
      },
      {
        ﻿a: "home",
        un: "maison"
      },
      {
        ﻿a: "homework",
        un: "devoirs"
      },
      {
        ﻿a: "honest",
        un: "honnête"
      },
      {
        ﻿a: "honestly",
        un: "honnêtement"
      },
      {
        ﻿a: "honour",
        un: "honneur"
      },
      {
        ﻿a: "hook",
        un: "crochet"
      },
      {
        ﻿a: "hope",
        un: "espoir"
      },
      {
        ﻿a: "horizontal",
        un: "horizontal"
      },
      {
        ﻿a: "horn",
        un: "corne"
      },
      {
        ﻿a: "horror",
        un: "horreur"
      },
      {
        ﻿a: "horse",
        un: "cheval"
      },
      {
        ﻿a: "hospital",
        un: "hôpital"
      },
      {
        ﻿a: "host",
        un: "hôte"
      },
      {
        ﻿a: "hot",
        un: "chaud"
      },
      {
        ﻿a: "hotel",
        un: "hôtel"
      },
      {
        ﻿a: "hour",
        un: "heure"
      },
      {
        ﻿a: "house",
        un: "maison"
      },
      {
        ﻿a: "household",
        un: "ménage"
      },
      {
        ﻿a: "housing",
        un: "logement"
      },
      {
        ﻿a: "how",
        un: "comment"
      },
      {
        ﻿a: "however",
        un: "cependant"
      },
      {
        ﻿a: "huge",
        un: "énorme"
      },
      {
        ﻿a: "human",
        un: "humain"
      },
      {
        ﻿a: "humorous",
        un: "humoristique"
      },
      {
        ﻿a: "humour",
        un: "humour"
      },
      {
        ﻿a: "hundred",
        un: "cent"
      },
      {
        ﻿a: "hundredth",
        un: "centième"
      },
      {
        ﻿a: "hungry",
        un: "affamé"
      },
      {
        ﻿a: "hunt",
        un: "chasse"
      },
      {
        ﻿a: "hunting",
        un: "chasse"
      },
      {
        ﻿a: "hurry",
        un: "dépêchez-vous"
      },
      {
        ﻿a: "hurry up",
        un: "dépêche-toi"
      },
      {
        ﻿a: "hurt",
        un: "blesser"
      },
      {
        ﻿a: "husband",
        un: "mari"
      },
      {
        ﻿a: "I",
        un: "je"
      },
      {
        ﻿a: "ice",
        un: "glace"
      },
      {
        ﻿a: "ice cream",
        un: "glace"
      },
      {
        ﻿a: "idea",
        un: "idée"
      },
      {
        ﻿a: "ideal",
        un: "idéal"
      },
      {
        ﻿a: "identify",
        un: "identifier"
      },
      {
        ﻿a: "identify with",
        un: "s'identifier à"
      },
      {
        ﻿a: "identity",
        un: "identité"
      },
      {
        ﻿a: "i.e.",
        un: "c'est-à-dire"
      },
      {
        ﻿a: "if",
        un: "si"
      },
      {
        ﻿a: "ignore",
        un: "ignorer"
      },
      {
        ﻿a: "ill",
        un: "je vais"
      },
      {
        ﻿a: "illegal",
        un: "illégal"
      },
      {
        ﻿a: "illegally",
        un: "illégalement"
      },
      {
        ﻿a: "illness",
        un: "maladie"
      },
      {
        ﻿a: "illustrate",
        un: "illustrer"
      },
      {
        ﻿a: "image",
        un: "image"
      },
      {
        ﻿a: "imaginary",
        un: "imaginaire"
      },
      {
        ﻿a: "imagination",
        un: "imagination"
      },
      {
        ﻿a: "imagine",
        un: "imaginer"
      },
      {
        ﻿a: "immediate",
        un: "immédiat"
      },
      {
        ﻿a: "immediately",
        un: "immédiatement"
      },
      {
        ﻿a: "immoral",
        un: "immoral"
      },
      {
        ﻿a: "impact",
        un: "impact"
      },
      {
        ﻿a: "impatient",
        un: "impatient"
      },
      {
        ﻿a: "implication",
        un: "implication"
      },
      {
        ﻿a: "imply",
        un: "impliquer"
      },
      {
        ﻿a: "import",
        un: "importer"
      },
      {
        ﻿a: "importance",
        un: "importance"
      },
      {
        ﻿a: "important",
        un: "important"
      },
      {
        ﻿a: "importantly",
        un: "important"
      },
      {
        ﻿a: "impose",
        un: "imposer"
      },
      {
        ﻿a: "impossible",
        un: "impossible"
      },
      {
        ﻿a: "impress",
        un: "impressionner"
      },
      {
        ﻿a: "impressed",
        un: "impressionné"
      },
      {
        ﻿a: "impression",
        un: "impression"
      },
      {
        ﻿a: "impressive",
        un: "impressionnant"
      },
      {
        ﻿a: "improve",
        un: "améliorer"
      },
      {
        ﻿a: "improvement",
        un: "amélioration"
      },
      {
        ﻿a: "in",
        un: "dans"
      },
      {
        ﻿a: "inability",
        un: "incapacité"
      },
      {
        ﻿a: "inch",
        un: "pouce"
      },
      {
        ﻿a: "incident",
        un: "incident"
      },
      {
        ﻿a: "include",
        un: "inclure"
      },
      {
        ﻿a: "including",
        un: "y compris"
      },
      {
        ﻿a: "income",
        un: "revenu"
      },
      {
        ﻿a: "increase",
        un: "augmenter"
      },
      {
        ﻿a: "increasingly",
        un: "de plus en plus"
      },
      {
        ﻿a: "indeed",
        un: "en effet"
      },
      {
        ﻿a: "independence",
        un: "indépendance"
      },
      {
        ﻿a: "independent",
        un: "indépendant"
      },
      {
        ﻿a: "independently",
        un: "indépendamment"
      },
      {
        ﻿a: "index",
        un: "indice"
      },
      {
        ﻿a: "indicate",
        un: "indiquer"
      },
      {
        ﻿a: "indication",
        un: "indication"
      },
      {
        ﻿a: "indirect",
        un: "indirect"
      },
      {
        ﻿a: "indirectly",
        un: "indirectement"
      },
      {
        ﻿a: "individual",
        un: "individuel"
      },
      {
        ﻿a: "indoor",
        un: "intérieur"
      },
      {
        ﻿a: "indoors",
        un: "à l'intérieur"
      },
      {
        ﻿a: "industrial",
        un: "industriel"
      },
      {
        ﻿a: "industry",
        un: "industrie"
      },
      {
        ﻿a: "inevitable",
        un: "inévitable"
      },
      {
        ﻿a: "inevitably",
        un: "inévitablement"
      },
      {
        ﻿a: "infect",
        un: "infecter"
      },
      {
        ﻿a: "infected",
        un: "infecté"
      },
      {
        ﻿a: "infection",
        un: "infection"
      },
      {
        ﻿a: "infectious",
        un: "infectieux"
      },
      {
        ﻿a: "influence",
        un: "influence"
      },
      {
        ﻿a: "inform",
        un: "informer"
      },
      {
        ﻿a: "informal",
        un: "informel"
      },
      {
        ﻿a: "information",
        un: "information"
      },
      {
        ﻿a: "ingredient",
        un: "ingrédient"
      },
      {
        ﻿a: "initial",
        un: "initial"
      },
      {
        ﻿a: "initially",
        un: "initialement"
      },
      {
        ﻿a: "initiative",
        un: "initiative"
      },
      {
        ﻿a: "injure",
        un: "blesser"
      },
      {
        ﻿a: "injured",
        un: "blessé"
      },
      {
        ﻿a: "injury",
        un: "blessure"
      },
      {
        ﻿a: "ink",
        un: "encre"
      },
      {
        ﻿a: "inner",
        un: "intérieur"
      },
      {
        ﻿a: "innocent",
        un: "innocent"
      },
      {
        ﻿a: "insect",
        un: "insecte"
      },
      {
        ﻿a: "insert",
        un: "insérer"
      },
      {
        ﻿a: "inside",
        un: "à l'intérieur"
      },
      {
        ﻿a: "insist",
        un: "insister"
      },
      {
        ﻿a: "insist on",
        un: "insister sur"
      },
      {
        ﻿a: "insist on doing",
        un: "insister pour faire"
      },
      {
        ﻿a: "install",
        un: "installer"
      },
      {
        ﻿a: "instance",
        un: "exemple"
      },
      {
        ﻿a: "instead",
        un: "plutôt"
      },
      {
        ﻿a: "instead of",
        un: "au lieu de"
      },
      {
        ﻿a: "institute",
        un: "institut"
      },
      {
        ﻿a: "institution",
        un: "institution"
      },
      {
        ﻿a: "instruction",
        un: "instruction"
      },
      {
        ﻿a: "instrument",
        un: "instrument"
      },
      {
        ﻿a: "insult",
        un: "insulte"
      },
      {
        ﻿a: "insulting",
        un: "insultant"
      },
      {
        ﻿a: "insurance",
        un: "assurance"
      },
      {
        ﻿a: "intelligence",
        un: "intelligence"
      },
      {
        ﻿a: "intelligent",
        un: "intelligent"
      },
      {
        ﻿a: "intend",
        un: "avoir l'intention"
      },
      {
        ﻿a: "intended",
        un: "destiné"
      },
      {
        ﻿a: "intention",
        un: "intention"
      },
      {
        ﻿a: "interest",
        un: "intérêt"
      },
      {
        ﻿a: "interested",
        un: "intéressé"
      },
      {
        ﻿a: "interesting",
        un: "intéressant"
      },
      {
        ﻿a: "interior",
        un: "intérieur"
      },
      {
        ﻿a: "internal",
        un: "interne"
      },
      {
        ﻿a: "international",
        un: "international"
      },
      {
        ﻿a: "Internet",
        un: "Internet"
      },
      {
        ﻿a: "interpret",
        un: "interpréter"
      },
      {
        ﻿a: "interpretation",
        un: "interprétation"
      },
      {
        ﻿a: "interrupt",
        un: "interrompre"
      },
      {
        ﻿a: "interruption",
        un: "interruption"
      },
      {
        ﻿a: "interval",
        un: "intervalle"
      },
      {
        ﻿a: "interview",
        un: "entretien"
      },
      {
        ﻿a: "into",
        un: "dans"
      },
      {
        ﻿a: "introduce",
        un: "introduire"
      },
      {
        ﻿a: "introduction",
        un: "introduction"
      },
      {
        ﻿a: "invent",
        un: "inventer"
      },
      {
        ﻿a: "invention",
        un: "invention"
      },
      {
        ﻿a: "invest",
        un: "investir"
      },
      {
        ﻿a: "investigate",
        un: "enquêter"
      },
      {
        ﻿a: "investigation",
        un: "enquête"
      },
      {
        ﻿a: "investment",
        un: "investissement"
      },
      {
        ﻿a: "invitation",
        un: "invitation"
      },
      {
        ﻿a: "invite",
        un: "inviter"
      },
      {
        ﻿a: "involve",
        un: "impliquer"
      },
      {
        ﻿a: "involved",
        un: "impliqué"
      },
      {
        ﻿a: "involvement",
        un: "participation"
      },
      {
        ﻿a: "iron",
        un: "fer"
      },
      {
        ﻿a: "irritate",
        un: "irriter"
      },
      {
        ﻿a: "irritated",
        un: "irrité"
      },
      {
        ﻿a: "irritating",
        un: "irritant"
      },
      {
        ﻿a: "island",
        un: "île"
      },
      {
        ﻿a: "issue",
        un: "problème"
      },
      {
        ﻿a: "it",
        un: "il"
      },
      {
        ﻿a: "item",
        un: "article"
      },
      {
        ﻿a: "its",
        un: "c'est"
      },
      {
        ﻿a: "itself",
        un: "lui-même"
      },
      {
        ﻿a: "jacket",
        un: "veste"
      },
      {
        ﻿a: "jam",
        un: "Confiture"
      },
      {
        ﻿a: "January",
        un: "Janvier"
      },
      {
        ﻿a: "jealous",
        un: "jaloux"
      },
      {
        ﻿a: "jeans",
        un: "jeans"
      },
      {
        ﻿a: "jelly",
        un: "gelée"
      },
      {
        ﻿a: "jewellery",
        un: "bijoux"
      },
      {
        ﻿a: "job",
        un: "emploi"
      },
      {
        ﻿a: "join",
        un: "rejoindre"
      },
      {
        ﻿a: "join in",
        un: "se joindre à"
      },
      {
        ﻿a: "joint",
        un: "articulation"
      },
      {
        ﻿a: "jointly",
        un: "conjointement"
      },
      {
        ﻿a: "joke",
        un: "blague"
      },
      {
        ﻿a: "journalist",
        un: "journaliste"
      },
      {
        ﻿a: "journey",
        un: "voyage"
      },
      {
        ﻿a: "joy",
        un: "joie"
      },
      {
        ﻿a: "judge",
        un: "juge"
      },
      {
        ﻿a: "judgement",
        un: "jugement"
      },
      {
        ﻿a: "juice",
        un: "jus"
      },
      {
        ﻿a: "July",
        un: "Juillet"
      },
      {
        ﻿a: "jump",
        un: "saut"
      },
      {
        ﻿a: "June",
        un: "Juin"
      },
      {
        ﻿a: "junior",
        un: "junior"
      },
      {
        ﻿a: "just",
        un: "juste"
      },
      {
        ﻿a: "justice",
        un: "justice"
      },
      {
        ﻿a: "justified",
        un: "justifié"
      },
      {
        ﻿a: "justify",
        un: "justifier"
      },
      {
        ﻿a: "keen",
        un: "passionné"
      },
      {
        ﻿a: "keep",
        un: "garder"
      },
      {
        ﻿a: "keep out",
        un: "rester à l'écart"
      },
      {
        ﻿a: "keep out of",
        un: "rester à l'écart"
      },
      {
        ﻿a: "keep up",
        un: "continuez"
      },
      {
        ﻿a: "keep up with",
        un: "suivre"
      },
      {
        ﻿a: "key",
        un: "clé"
      },
      {
        ﻿a: "keyboard",
        un: "clavier"
      },
      {
        ﻿a: "kick",
        un: "coup"
      },
      {
        ﻿a: "kid",
        un: "enfant"
      },
      {
        ﻿a: "kill",
        un: "tuer"
      },
      {
        ﻿a: "killing",
        un: "meurtre"
      },
      {
        ﻿a: "kilogram",
        un: "kilogramme"
      },
      {
        ﻿a: "kilometre",
        un: "kilomètre"
      },
      {
        ﻿a: "kind",
        un: "gentil"
      },
      {
        ﻿a: "kindly",
        un: "gentiment"
      },
      {
        ﻿a: "kindness",
        un: "gentillesse"
      },
      {
        ﻿a: "king",
        un: "roi"
      },
      {
        ﻿a: "kiss",
        un: "baiser"
      },
      {
        ﻿a: "kitchen",
        un: "cuisine"
      },
      {
        ﻿a: "knee",
        un: "genou"
      },
      {
        ﻿a: "knife",
        un: "couteau"
      },
      {
        ﻿a: "knit",
        un: "tricoter"
      },
      {
        ﻿a: "knitted",
        un: "tricoté"
      },
      {
        ﻿a: "knitting",
        un: "tricot"
      },
      {
        ﻿a: "knock",
        un: "frappe"
      },
      {
        ﻿a: "knock down",
        un: "abattre"
      },
      {
        ﻿a: "knock out",
        un: "Assommer"
      },
      {
        ﻿a: "knot",
        un: "noeud"
      },
      {
        ﻿a: "know",
        un: "savoir"
      },
      {
        ﻿a: "knowledge",
        un: "connaissance"
      },
      {
        ﻿a: "lab",
        un: "laboratoire"
      },
      {
        ﻿a: "label",
        un: "étiquette"
      },
      {
        ﻿a: "laboratory",
        un: "laboratoire"
      },
      {
        ﻿a: "labour",
        un: "travail"
      },
      {
        ﻿a: "lack",
        un: "manque"
      },
      {
        ﻿a: "lacking",
        un: "manquant"
      },
      {
        ﻿a: "lady",
        un: "dame"
      },
      {
        ﻿a: "lake",
        un: "lac"
      },
      {
        ﻿a: "lamp",
        un: "lampe"
      },
      {
        ﻿a: "land",
        un: "atterrir"
      },
      {
        ﻿a: "landscape",
        un: "paysage"
      },
      {
        ﻿a: "lane",
        un: "voie"
      },
      {
        ﻿a: "language",
        un: "langue"
      },
      {
        ﻿a: "large",
        un: "grand"
      },
      {
        ﻿a: "largely",
        un: "en grande partie"
      },
      {
        ﻿a: "last 1",
        un: "le dernier 1"
      },
      {
        ﻿a: "late",
        un: "en retard"
      },
      {
        ﻿a: "later",
        un: "plus tard"
      },
      {
        ﻿a: "latest",
        un: "dernier"
      },
      {
        ﻿a: "latter",
        un: "dernier"
      },
      {
        ﻿a: "laugh",
        un: "rire"
      },
      {
        ﻿a: "laugh at",
        un: "se moquer de"
      },
      {
        ﻿a: "launch",
        un: "lancement"
      },
      {
        ﻿a: "law",
        un: "loi"
      },
      {
        ﻿a: "lawyer",
        un: "avocat"
      },
      {
        ﻿a: "lay",
        un: "poser"
      },
      {
        ﻿a: "layer",
        un: "couche"
      },
      {
        ﻿a: "lazy",
        un: "paresseux"
      },
      {
        ﻿a: "lead 1",
        un: "diriger 1"
      },
      {
        ﻿a: "leader",
        un: "chef"
      },
      {
        ﻿a: "leading 1",
        un: "menant 1"
      },
      {
        ﻿a: "leaf",
        un: "feuille"
      },
      {
        ﻿a: "league",
        un: "ligue"
      },
      {
        ﻿a: "lean",
        un: "maigre"
      },
      {
        ﻿a: "learn",
        un: "apprendre"
      },
      {
        ﻿a: "least",
        un: "moins"
      },
      {
        ﻿a: "leather",
        un: "cuir"
      },
      {
        ﻿a: "leave",
        un: "partir"
      },
      {
        ﻿a: "leave out",
        un: "omettre"
      },
      {
        ﻿a: "lecture",
        un: "conférence"
      },
      {
        ﻿a: "left",
        un: "gauche"
      },
      {
        ﻿a: "leg",
        un: "jambe"
      },
      {
        ﻿a: "legal",
        un: "légal"
      },
      {
        ﻿a: "legally",
        un: "légalement"
      },
      {
        ﻿a: "lemon",
        un: "citron"
      },
      {
        ﻿a: "lend",
        un: "prêter"
      },
      {
        ﻿a: "length",
        un: "longueur"
      },
      {
        ﻿a: "less",
        un: "moins"
      },
      {
        ﻿a: "lesson",
        un: "leçon"
      },
      {
        ﻿a: "let",
        un: "laisser"
      },
      {
        ﻿a: "let down",
        un: "laisser tomber"
      },
      {
        ﻿a: "let off",
        un: "lâcher"
      },
      {
        ﻿a: "letter",
        un: "lettre"
      },
      {
        ﻿a: "level",
        un: "niveau"
      },
      {
        ﻿a: "library",
        un: "bibliothèque"
      },
      {
        ﻿a: "licence",
        un: "licence"
      },
      {
        ﻿a: "license",
        un: "licence"
      },
      {
        ﻿a: "lid",
        un: "couvercle"
      },
      {
        ﻿a: "lie 1",
        un: "mentir 1"
      },
      {
        ﻿a: "lie 2",
        un: "mensonge 2"
      },
      {
        ﻿a: "lie around",
        un: "s'allonger"
      },
      {
        ﻿a: "lie down",
        un: "allongez-vous"
      },
      {
        ﻿a: "life",
        un: "vie"
      },
      {
        ﻿a: "lift",
        un: "ascenseur"
      },
      {
        ﻿a: "light",
        un: "lumière"
      },
      {
        ﻿a: "lightly",
        un: "légèrement"
      },
      {
        ﻿a: "like",
        un: "comme"
      },
      {
        ﻿a: "likely",
        un: "probable"
      },
      {
        ﻿a: "limit",
        un: "limite"
      },
      {
        ﻿a: "limited",
        un: "limité"
      },
      {
        ﻿a: "limit to",
        un: "limite à"
      },
      {
        ﻿a: "line",
        un: "doubler"
      },
      {
        ﻿a: "link",
        un: "lien"
      },
      {
        ﻿a: "lip",
        un: "lèvre"
      },
      {
        ﻿a: "liquid",
        un: "liquide"
      },
      {
        ﻿a: "list",
        un: "liste"
      },
      {
        ﻿a: "listen",
        un: "écouter"
      },
      {
        ﻿a: "literature",
        un: "littérature"
      },
      {
        ﻿a: "litre",
        un: "litre"
      },
      {
        ﻿a: "little",
        un: "petit"
      },
      {
        ﻿a: "live 1",
        un: "vivre 1"
      },
      {
        ﻿a: "live 2",
        un: "vivre 2"
      },
      {
        ﻿a: "lively",
        un: "vivant"
      },
      {
        ﻿a: "live on",
        un: "vivre"
      },
      {
        ﻿a: "live through",
        un: "vivre à travers"
      },
      {
        ﻿a: "live together",
        un: "vivre ensemble"
      },
      {
        ﻿a: "living",
        un: "vie"
      },
      {
        ﻿a: "load",
        un: "charger"
      },
      {
        ﻿a: "loan",
        un: "prêt"
      },
      {
        ﻿a: "local",
        un: "locale"
      },
      {
        ﻿a: "locally",
        un: "localement"
      },
      {
        ﻿a: "locate",
        un: "situer"
      },
      {
        ﻿a: "located",
        un: "situé"
      },
      {
        ﻿a: "location",
        un: "emplacement"
      },
      {
        ﻿a: "lock",
        un: "verrouillage"
      },
      {
        ﻿a: "lock up",
        un: "enfermer"
      },
      {
        ﻿a: "logic",
        un: "logique"
      },
      {
        ﻿a: "logical",
        un: "logique"
      },
      {
        ﻿a: "lonely",
        un: "solitaire"
      },
      {
        ﻿a: "long",
        un: "long"
      },
      {
        ﻿a: "look",
        un: "regarder"
      },
      {
        ﻿a: "look after",
        un: "soigner"
      },
      {
        ﻿a: "look at",
        un: "regarder"
      },
      {
        ﻿a: "look down on",
        un: "mépriser"
      },
      {
        ﻿a: "look forward to",
        un: "j'attends avec impatience"
      },
      {
        ﻿a: "look into",
        un: "examiner"
      },
      {
        ﻿a: "look on",
        un: "regarde"
      },
      {
        ﻿a: "look on with",
        un: "regarde avec"
      },
      {
        ﻿a: "look out",
        un: "attention"
      },
      {
        ﻿a: "look out for",
        un: "attention à"
      },
      {
        ﻿a: "look round",
        un: "regarde autour de toi"
      },
      {
        ﻿a: "look through",
        un: "regarder à travers"
      },
      {
        ﻿a: "look up",
        un: "chercher"
      },
      {
        ﻿a: "look up to",
        un: "admirer"
      },
      {
        ﻿a: "loose",
        un: "lâche"
      },
      {
        ﻿a: "loosely",
        un: "librement"
      },
      {
        ﻿a: "lord",
        un: "seigneur"
      },
      {
        ﻿a: "lorry",
        un: "camion"
      },
      {
        ﻿a: "lose",
        un: "perdre"
      },
      {
        ﻿a: "loss",
        un: "perte"
      },
      {
        ﻿a: "lost",
        un: "perdu"
      },
      {
        ﻿a: "lot",
        un: "parcelle"
      },
      {
        ﻿a: "loud",
        un: "fort"
      },
      {
        ﻿a: "loudly",
        un: "bruyamment"
      },
      {
        ﻿a: "love",
        un: "amour"
      },
      {
        ﻿a: "lovely",
        un: "beau"
      },
      {
        ﻿a: "lover",
        un: "amoureux"
      },
      {
        ﻿a: "low",
        un: "faible"
      },
      {
        ﻿a: "loyal",
        un: "loyal"
      },
      {
        ﻿a: "luck",
        un: "chance"
      },
      {
        ﻿a: "lucky",
        un: "chanceux"
      },
      {
        ﻿a: "luggage",
        un: "bagage"
      },
      {
        ﻿a: "lump",
        un: "grumeau"
      },
      {
        ﻿a: "lunch",
        un: "déjeuner"
      },
      {
        ﻿a: "lung",
        un: "poumon"
      },
      {
        ﻿a: "machine",
        un: "machine"
      },
      {
        ﻿a: "machinery",
        un: "machinerie"
      },
      {
        ﻿a: "mad",
        un: "fou"
      },
      {
        ﻿a: "magazine",
        un: "revue"
      },
      {
        ﻿a: "magic",
        un: "magie"
      },
      {
        ﻿a: "mail",
        un: "mail"
      },
      {
        ﻿a: "main",
        un: "principal"
      },
      {
        ﻿a: "mainly",
        un: "principalement"
      },
      {
        ﻿a: "maintain",
        un: "maintenir"
      },
      {
        ﻿a: "major",
        un: "majeur"
      },
      {
        ﻿a: "majority",
        un: "majorité"
      },
      {
        ﻿a: "make",
        un: "faire"
      },
      {
        ﻿a: "make into",
        un: "transformer en"
      },
      {
        ﻿a: "make up",
        un: "se maquiller"
      },
      {
        ﻿a: "make-up",
        un: "se maquiller"
      },
      {
        ﻿a: "make up for",
        un: "compenser"
      },
      {
        ﻿a: "male",
        un: "mâle"
      },
      {
        ﻿a: "mall",
        un: "centre commercial"
      },
      {
        ﻿a: "man",
        un: "homme"
      },
      {
        ﻿a: "manage",
        un: "gérer"
      },
      {
        ﻿a: "management",
        un: "gestion"
      },
      {
        ﻿a: "manager",
        un: "directeur"
      },
      {
        ﻿a: "manner",
        un: "manière"
      },
      {
        ﻿a: "manufacture",
        un: "fabrication"
      },
      {
        ﻿a: "manufacturer",
        un: "fabricant"
      },
      {
        ﻿a: "manufacturing",
        un: "fabrication"
      },
      {
        ﻿a: "many",
        un: "beaucoup"
      },
      {
        ﻿a: "map",
        un: "carte"
      },
      {
        ﻿a: "march",
        un: "mars"
      },
      {
        ﻿a: "March",
        un: "Mars"
      },
      {
        ﻿a: "mark",
        un: "marque"
      },
      {
        ﻿a: "market",
        un: "marché"
      },
      {
        ﻿a: "marketing",
        un: "commercialisation"
      },
      {
        ﻿a: "marriage",
        un: "mariage"
      },
      {
        ﻿a: "married",
        un: "marié"
      },
      {
        ﻿a: "marry",
        un: "marier"
      },
      {
        ﻿a: "mass",
        un: "masse"
      },
      {
        ﻿a: "massive",
        un: "massif"
      },
      {
        ﻿a: "master",
        un: "maître"
      },
      {
        ﻿a: "match",
        un: "correspondre"
      },
      {
        ﻿a: "matching",
        un: "correspondance"
      },
      {
        ﻿a: "match up",
        un: "faire correspondre"
      },
      {
        ﻿a: "mate",
        un: "copain"
      },
      {
        ﻿a: "material",
        un: "matériel"
      },
      {
        ﻿a: "mathematics",
        un: "mathématiques"
      },
      {
        ﻿a: "matter",
        un: "matière"
      },
      {
        ﻿a: "maximum",
        un: "maximum"
      },
      {
        ﻿a: "may",
        un: "peut"
      },
      {
        ﻿a: "May",
        un: "Peut"
      },
      {
        ﻿a: "maybe",
        un: "peut être"
      },
      {
        ﻿a: "mayor",
        un: "maire"
      },
      {
        ﻿a: "me",
        un: "moi"
      },
      {
        ﻿a: "meal",
        un: "repas"
      },
      {
        ﻿a: "mean",
        un: "signifier"
      },
      {
        ﻿a: "meaning",
        un: "signification"
      },
      {
        ﻿a: "means",
        un: "moyens"
      },
      {
        ﻿a: "meanwhile",
        un: "entre-temps"
      },
      {
        ﻿a: "measure",
        un: "mesure"
      },
      {
        ﻿a: "measurement",
        un: "mesures"
      },
      {
        ﻿a: "meat",
        un: "viande"
      },
      {
        ﻿a: "media",
        un: "médias"
      },
      {
        ﻿a: "medical",
        un: "médical"
      },
      {
        ﻿a: "medicine",
        un: "médecine"
      },
      {
        ﻿a: "medium",
        un: "moyen"
      },
      {
        ﻿a: "meet",
        un: "rencontrer"
      },
      {
        ﻿a: "meeting",
        un: "réunion"
      },
      {
        ﻿a: "meet up",
        un: "se rencontrer"
      },
      {
        ﻿a: "meet with",
        un: "rencontrer"
      },
      {
        ﻿a: "melt",
        un: "fondre"
      },
      {
        ﻿a: "member",
        un: "membre"
      },
      {
        ﻿a: "membership",
        un: "adhésion"
      },
      {
        ﻿a: "memory",
        un: "mémoire"
      },
      {
        ﻿a: "mental",
        un: "mental"
      },
      {
        ﻿a: "mentally",
        un: "mentalement"
      },
      {
        ﻿a: "mention",
        un: "mention"
      },
      {
        ﻿a: "menu",
        un: "menu"
      },
      {
        ﻿a: "mere",
        un: "simple"
      },
      {
        ﻿a: "merely",
        un: "simplement"
      },
      {
        ﻿a: "mess",
        un: "désordre"
      },
      {
        ﻿a: "message",
        un: "message"
      },
      {
        ﻿a: "metal",
        un: "métal"
      },
      {
        ﻿a: "method",
        un: "méthode"
      },
      {
        ﻿a: "metre",
        un: "mètre"
      },
      {
        ﻿a: "mid-",
        un: "milieu-"
      },
      {
        ﻿a: "midday",
        un: "midi"
      },
      {
        ﻿a: "middle",
        un: "milieu"
      },
      {
        ﻿a: "midnight",
        un: "minuit"
      },
      {
        ﻿a: "might",
        un: "pourrait"
      },
      {
        ﻿a: "mild",
        un: "bénin"
      },
      {
        ﻿a: "mile",
        un: "mile"
      },
      {
        ﻿a: "military",
        un: "militaire"
      },
      {
        ﻿a: "milk",
        un: "lait"
      },
      {
        ﻿a: "milligram",
        un: "milligramme"
      },
      {
        ﻿a: "millimetre",
        un: "millimètre"
      },
      {
        ﻿a: "million",
        un: "million"
      },
      {
        ﻿a: "millionth",
        un: "millionième"
      },
      {
        ﻿a: "mind",
        un: "esprit"
      },
      {
        ﻿a: "mine",
        un: "le mien"
      },
      {
        ﻿a: "mineral",
        un: "minéral"
      },
      {
        ﻿a: "minimum",
        un: "minimum"
      },
      {
        ﻿a: "minister",
        un: "ministre"
      },
      {
        ﻿a: "ministry",
        un: "ministère"
      },
      {
        ﻿a: "minor",
        un: "mineure"
      },
      {
        ﻿a: "minority",
        un: "minorité"
      },
      {
        ﻿a: "minute 1",
        un: "minute 1"
      },
      {
        ﻿a: "mirror",
        un: "miroir"
      },
      {
        ﻿a: "miss",
        un: "manquer"
      },
      {
        ﻿a: "missing",
        un: "manquant"
      },
      {
        ﻿a: "miss out",
        un: "passer"
      },
      {
        ﻿a: "mistake",
        un: "erreur"
      },
      {
        ﻿a: "mistake for",
        un: "erreur pour"
      },
      {
        ﻿a: "mistaken",
        un: "trompé"
      },
      {
        ﻿a: "mix",
        un: "mélanger"
      },
      {
        ﻿a: "mixed",
        un: "mixte"
      },
      {
        ﻿a: "mixture",
        un: "mélange"
      },
      {
        ﻿a: "mix up",
        un: "mélanger"
      },
      {
        ﻿a: "mobile",
        un: "mobile"
      },
      {
        ﻿a: "mobile phone",
        un: "téléphone mobile"
      },
      {
        ﻿a: "model",
        un: "modèle"
      },
      {
        ﻿a: "modern",
        un: "moderne"
      },
      {
        ﻿a: "mom",
        un: "maman"
      },
      {
        ﻿a: "moment",
        un: "moment"
      },
      {
        ﻿a: "Monday",
        un: "Lundi"
      },
      {
        ﻿a: "money",
        un: "argent"
      },
      {
        ﻿a: "monitor",
        un: "moniteur"
      },
      {
        ﻿a: "month",
        un: "mois"
      },
      {
        ﻿a: "mood",
        un: "humeur"
      },
      {
        ﻿a: "moon",
        un: "lune"
      },
      {
        ﻿a: "moral",
        un: "morale"
      },
      {
        ﻿a: "morally",
        un: "moralement"
      },
      {
        ﻿a: "more",
        un: "plus"
      },
      {
        ﻿a: "moreover",
        un: "de plus"
      },
      {
        ﻿a: "morning",
        un: "matin"
      },
      {
        ﻿a: "most",
        un: "la plupart"
      },
      {
        ﻿a: "mostly",
        un: "surtout"
      },
      {
        ﻿a: "mother",
        un: "mère"
      },
      {
        ﻿a: "motion",
        un: "mouvement"
      },
      {
        ﻿a: "motor",
        un: "moteur"
      },
      {
        ﻿a: "motorbike",
        un: "moto"
      },
      {
        ﻿a: "motorcycle",
        un: "moto"
      },
      {
        ﻿a: "mount",
        un: "monter"
      },
      {
        ﻿a: "mountain",
        un: "montagne"
      },
      {
        ﻿a: "mouse",
        un: "souris"
      },
      {
        ﻿a: "mouth",
        un: "bouche"
      },
      {
        ﻿a: "move",
        un: "se déplacer"
      },
      {
        ﻿a: "move in",
        un: "emménager"
      },
      {
        ﻿a: "movement",
        un: "mouvement"
      },
      {
        ﻿a: "move out",
        un: "déménager"
      },
      {
        ﻿a: "move over",
        un: "se déplacer"
      },
      {
        ﻿a: "movie",
        un: "film"
      },
      {
        ﻿a: "movie theater",
        un: "salle de cinéma"
      },
      {
        ﻿a: "moving",
        un: "mobile"
      },
      {
        ﻿a: "Mr",
        un: "M"
      },
      {
        ﻿a: "Mrs",
        un: "Mme"
      },
      {
        ﻿a: "Ms",
        un: "MS"
      },
      {
        ﻿a: "much",
        un: "beaucoup"
      },
      {
        ﻿a: "mud",
        un: "boue"
      },
      {
        ﻿a: "multiply",
        un: "multiplier"
      },
      {
        ﻿a: "mum",
        un: "maman"
      },
      {
        ﻿a: "murder",
        un: "meurtre"
      },
      {
        ﻿a: "muscle",
        un: "muscle"
      },
      {
        ﻿a: "museum",
        un: "musée"
      },
      {
        ﻿a: "music",
        un: "musique"
      },
      {
        ﻿a: "musical",
        un: "musical"
      },
      {
        ﻿a: "musician",
        un: "musicien"
      },
      {
        ﻿a: "must",
        un: "doit"
      },
      {
        ﻿a: "my",
        un: "mon"
      },
      {
        ﻿a: "myself",
        un: "moi-même"
      },
      {
        ﻿a: "mysterious",
        un: "mystérieux"
      },
      {
        ﻿a: "mystery",
        un: "mystère"
      },
      {
        ﻿a: "nail",
        un: "clou"
      },
      {
        ﻿a: "naked",
        un: "nu"
      },
      {
        ﻿a: "name",
        un: "nom"
      },
      {
        ﻿a: "narrow",
        un: "étroit"
      },
      {
        ﻿a: "nation",
        un: "nation"
      },
      {
        ﻿a: "national",
        un: "national"
      },
      {
        ﻿a: "natural",
        un: "naturel"
      },
      {
        ﻿a: "naturally",
        un: "naturellement"
      },
      {
        ﻿a: "nature",
        un: "nature"
      },
      {
        ﻿a: "navy",
        un: "marine"
      },
      {
        ﻿a: "near",
        un: "près"
      },
      {
        ﻿a: "nearby",
        un: "proche"
      },
      {
        ﻿a: "nearly",
        un: "presque"
      },
      {
        ﻿a: "neat",
        un: "soigné"
      },
      {
        ﻿a: "neatly",
        un: "soigneusement"
      },
      {
        ﻿a: "necessarily",
        un: "nécessairement"
      },
      {
        ﻿a: "necessary",
        un: "nécessaire"
      },
      {
        ﻿a: "neck",
        un: "cou"
      },
      {
        ﻿a: "need",
        un: "besoin"
      },
      {
        ﻿a: "needle",
        un: "aiguille"
      },
      {
        ﻿a: "negative",
        un: "négatif"
      },
      {
        ﻿a: "neighbour",
        un: "voisin"
      },
      {
        ﻿a: "neighbourhood",
        un: "quartier"
      },
      {
        ﻿a: "neither",
        un: "ni l'un ni l'autre"
      },
      {
        ﻿a: "nephew",
        un: "neveu"
      },
      {
        ﻿a: "nerve",
        un: "nerf"
      },
      {
        ﻿a: "nervous",
        un: "nerveux"
      },
      {
        ﻿a: "nervously",
        un: "nerveusement"
      },
      {
        ﻿a: "nest",
        un: "nid"
      },
      {
        ﻿a: "net",
        un: "filet"
      },
      {
        ﻿a: "network",
        un: "réseau"
      },
      {
        ﻿a: "never",
        un: "jamais"
      },
      {
        ﻿a: "nevertheless",
        un: "néanmoins"
      },
      {
        ﻿a: "new",
        un: "nouveau"
      },
      {
        ﻿a: "newly",
        un: "nouvellement"
      },
      {
        ﻿a: "news",
        un: "nouvelles"
      },
      {
        ﻿a: "newspaper",
        un: "journal"
      },
      {
        ﻿a: "next",
        un: "suivant"
      },
      {
        ﻿a: "next to",
        un: "près de"
      },
      {
        ﻿a: "nice",
        un: "bon"
      },
      {
        ﻿a: "nicely",
        un: "bien"
      },
      {
        ﻿a: "niece",
        un: "nièce"
      },
      {
        ﻿a: "night",
        un: "nuit"
      },
      {
        ﻿a: "nine",
        un: "neuf"
      },
      {
        ﻿a: "nineteen",
        un: "dix-neuf"
      },
      {
        ﻿a: "nineteenth",
        un: "XIXème"
      },
      {
        ﻿a: "ninetieth",
        un: "quatre-vingt-dixième"
      },
      {
        ﻿a: "ninety",
        un: "quatre-vingt-dix"
      },
      {
        ﻿a: "ninth",
        un: "neuvième"
      },
      {
        ﻿a: "no",
        un: "Non"
      },
      {
        ﻿a: "nobody",
        un: "personne"
      },
      {
        ﻿a: "noise",
        un: "bruit"
      },
      {
        ﻿a: "noisily",
        un: "bruyamment"
      },
      {
        ﻿a: "noisy",
        un: "bruyant"
      },
      {
        ﻿a: "non-",
        un: "non-"
      },
      {
        ﻿a: "none",
        un: "aucun"
      },
      {
        ﻿a: "nonsense",
        un: "absurdité"
      },
      {
        ﻿a: "no one",
        un: "personne"
      },
      {
        ﻿a: "nor",
        un: "ni"
      },
      {
        ﻿a: "normal",
        un: "normale"
      },
      {
        ﻿a: "normally",
        un: "normalement"
      },
      {
        ﻿a: "north",
        un: "nord"
      },
      {
        ﻿a: "northern",
        un: "nord"
      },
      {
        ﻿a: "nose",
        un: "nez"
      },
      {
        ﻿a: "not",
        un: "pas"
      },
      {
        ﻿a: "note",
        un: "note"
      },
      {
        ﻿a: "note down",
        un: "noter"
      },
      {
        ﻿a: "nothing",
        un: "rien"
      },
      {
        ﻿a: "notice",
        un: "avis"
      },
      {
        ﻿a: "noticeable",
        un: "perceptible"
      },
      {
        ﻿a: "novel",
        un: "roman"
      },
      {
        ﻿a: "November",
        un: "Novembre"
      },
      {
        ﻿a: "now",
        un: "maintenant"
      },
      {
        ﻿a: "nowhere",
        un: "nulle part"
      },
      {
        ﻿a: "nuclear",
        un: "nucléaire"
      },
      {
        ﻿a: "number",
        un: "nombre"
      },
      {
        ﻿a: "nurse",
        un: "infirmière"
      },
      {
        ﻿a: "nut",
        un: "noix"
      },
      {
        ﻿a: "obey",
        un: "obéir"
      },
      {
        ﻿a: "object",
        un: "objet"
      },
      {
        ﻿a: "objective",
        un: "objectif"
      },
      {
        ﻿a: "observation",
        un: "observation"
      },
      {
        ﻿a: "observe",
        un: "observer"
      },
      {
        ﻿a: "obtain",
        un: "obtenir"
      },
      {
        ﻿a: "obvious",
        un: "évident"
      },
      {
        ﻿a: "obviously",
        un: "évidemment"
      },
      {
        ﻿a: "occasion",
        un: "occasion"
      },
      {
        ﻿a: "occasionally",
        un: "occasionnellement"
      },
      {
        ﻿a: "occupied",
        un: "occupé"
      },
      {
        ﻿a: "occupy",
        un: "occuper"
      },
      {
        ﻿a: "occur",
        un: "se produire"
      },
      {
        ﻿a: "occur to",
        un: "arriver à"
      },
      {
        ﻿a: "ocean",
        un: "océan"
      },
      {
        ﻿a: "o’clock",
        un: "heures"
      },
      {
        ﻿a: "October",
        un: "Octobre"
      },
      {
        ﻿a: "odd",
        un: "impair"
      },
      {
        ﻿a: "oddly",
        un: "bizarrement"
      },
      {
        ﻿a: "of",
        un: "de"
      },
      {
        ﻿a: "off",
        un: "désactivé"
      },
      {
        ﻿a: "offence",
        un: "infraction"
      },
      {
        ﻿a: "offend",
        un: "offenser"
      },
      {
        ﻿a: "offense",
        un: "infraction"
      },
      {
        ﻿a: "offensive",
        un: "offensant"
      },
      {
        ﻿a: "offer",
        un: "offre"
      },
      {
        ﻿a: "office",
        un: "bureau"
      },
      {
        ﻿a: "officer",
        un: "officier"
      },
      {
        ﻿a: "official",
        un: "officiel"
      },
      {
        ﻿a: "officially",
        un: "officiellement"
      },
      {
        ﻿a: "often",
        un: "souvent"
      },
      {
        ﻿a: "oh",
        un: "Oh"
      },
      {
        ﻿a: "oil",
        un: "huile"
      },
      {
        ﻿a: "OK",
        un: "D'ACCORD"
      },
      {
        ﻿a: "old",
        un: "vieux"
      },
      {
        ﻿a: "old-fashioned",
        un: "désuet"
      },
      {
        ﻿a: "on",
        un: "sur"
      },
      {
        ﻿a: "once",
        un: "une fois"
      },
      {
        ﻿a: "one",
        un: "un"
      },
      {
        ﻿a: "one another",
        un: "les uns les autres"
      },
      {
        ﻿a: "onion",
        un: "oignon"
      },
      {
        ﻿a: "online",
        un: "en ligne"
      },
      {
        ﻿a: "only",
        un: "seulement"
      },
      {
        ﻿a: "onto",
        un: "sur"
      },
      {
        ﻿a: "open",
        un: "ouvrir"
      },
      {
        ﻿a: "opening",
        un: "ouverture"
      },
      {
        ﻿a: "openly",
        un: "ouvertement"
      },
      {
        ﻿a: "open up",
        un: "ouvrir"
      },
      {
        ﻿a: "operate",
        un: "fonctionner"
      },
      {
        ﻿a: "operation",
        un: "opération"
      },
      {
        ﻿a: "opinion",
        un: "avis"
      },
      {
        ﻿a: "opponent",
        un: "adversaire"
      },
      {
        ﻿a: "opportunity",
        un: "opportunité"
      },
      {
        ﻿a: "oppose",
        un: "opposer"
      },
      {
        ﻿a: "opposed",
        un: "opposé"
      },
      {
        ﻿a: "opposing",
        un: "opposé"
      },
      {
        ﻿a: "opposite",
        un: "opposé"
      },
      {
        ﻿a: "opposition",
        un: "opposition"
      },
      {
        ﻿a: "option",
        un: "option"
      },
      {
        ﻿a: "or",
        un: "ou"
      },
      {
        ﻿a: "orange",
        un: "orange"
      },
      {
        ﻿a: "order",
        un: "commande"
      },
      {
        ﻿a: "ordinary",
        un: "ordinaire"
      },
      {
        ﻿a: "organ",
        un: "organe"
      },
      {
        ﻿a: "organization",
        un: "organisation"
      },
      {
        ﻿a: "organize",
        un: "organiser"
      },
      {
        ﻿a: "organized",
        un: "organisé"
      },
      {
        ﻿a: "origin",
        un: "origine"
      },
      {
        ﻿a: "original",
        un: "original"
      },
      {
        ﻿a: "originally",
        un: "initialement"
      },
      {
        ﻿a: "other",
        un: "autre"
      },
      {
        ﻿a: "otherwise",
        un: "sinon"
      },
      {
        ﻿a: "ought to",
        un: "devrait"
      },
      {
        ﻿a: "our",
        un: "notre"
      },
      {
        ﻿a: "ours",
        un: "la nôtre"
      },
      {
        ﻿a: "ourselves",
        un: "nous-mêmes"
      },
      {
        ﻿a: "out",
        un: "dehors"
      },
      {
        ﻿a: "outdoor",
        un: "de plein air"
      },
      {
        ﻿a: "outdoors",
        un: "en plein air"
      },
      {
        ﻿a: "outer",
        un: "extérieur"
      },
      {
        ﻿a: "outline",
        un: "contour"
      },
      {
        ﻿a: "output",
        un: "sortir"
      },
      {
        ﻿a: "outside",
        un: "dehors"
      },
      {
        ﻿a: "outstanding",
        un: "remarquable"
      },
      {
        ﻿a: "oven",
        un: "four"
      },
      {
        ﻿a: "over",
        un: "sur"
      },
      {
        ﻿a: "overall",
        un: "dans l'ensemble"
      },
      {
        ﻿a: "overcome",
        un: "surmonter"
      },
      {
        ﻿a: "owe",
        un: "devoir"
      },
      {
        ﻿a: "own",
        un: "propre"
      },
      {
        ﻿a: "owner",
        un: "propriétaire"
      },
      {
        ﻿a: "own up",
        un: "posséder"
      },
      {
        ﻿a: "pace 1",
        un: "rythme 1"
      },
      {
        ﻿a: "pack",
        un: "paquet"
      },
      {
        ﻿a: "package",
        un: "emballer"
      },
      {
        ﻿a: "packaging",
        un: "conditionnement"
      },
      {
        ﻿a: "packet",
        un: "paquet"
      },
      {
        ﻿a: "pack up",
        un: "plier bagage"
      },
      {
        ﻿a: "page",
        un: "page"
      },
      {
        ﻿a: "pain",
        un: "douleur"
      },
      {
        ﻿a: "painful",
        un: "douloureux"
      },
      {
        ﻿a: "paint",
        un: "peinture"
      },
      {
        ﻿a: "painter",
        un: "peintre"
      },
      {
        ﻿a: "painting",
        un: "peinture"
      },
      {
        ﻿a: "pair",
        un: "paire"
      },
      {
        ﻿a: "palace",
        un: "palais"
      },
      {
        ﻿a: "pale",
        un: "pâle"
      },
      {
        ﻿a: "pan 1",
        un: "poêle 1"
      },
      {
        ﻿a: "panel",
        un: "panneau"
      },
      {
        ﻿a: "pants",
        un: "pantalon"
      },
      {
        ﻿a: "paper",
        un: "papier"
      },
      {
        ﻿a: "parallel",
        un: "parallèle"
      },
      {
        ﻿a: "parent",
        un: "mère"
      },
      {
        ﻿a: "park",
        un: "parc"
      },
      {
        ﻿a: "parliament",
        un: "parlement"
      },
      {
        ﻿a: "part",
        un: "partie"
      },
      {
        ﻿a: "particular",
        un: "particulier"
      },
      {
        ﻿a: "particularly",
        un: "particulièrement"
      },
      {
        ﻿a: "partly",
        un: "en partie"
      },
      {
        ﻿a: "partner",
        un: "partenaire"
      },
      {
        ﻿a: "partnership",
        un: "partenariat"
      },
      {
        ﻿a: "party",
        un: "faire la fête"
      },
      {
        ﻿a: "pass",
        un: "passer"
      },
      {
        ﻿a: "passage",
        un: "passage"
      },
      {
        ﻿a: "pass away",
        un: "passer"
      },
      {
        ﻿a: "pass by",
        un: "passer par là"
      },
      {
        ﻿a: "passenger",
        un: "passager"
      },
      {
        ﻿a: "passing",
        un: "passage"
      },
      {
        ﻿a: "pass on",
        un: "transmettre"
      },
      {
        ﻿a: "pass out",
        un: "tomber dans les pommes"
      },
      {
        ﻿a: "passport",
        un: "passeport"
      },
      {
        ﻿a: "pass round",
        un: "faire le tour"
      },
      {
        ﻿a: "pass through",
        un: "traverser"
      },
      {
        ﻿a: "past",
        un: "passé"
      },
      {
        ﻿a: "path",
        un: "chemin"
      },
      {
        ﻿a: "patience",
        un: "patience"
      },
      {
        ﻿a: "patient",
        un: "patient"
      },
      {
        ﻿a: "pattern",
        un: "modèle"
      },
      {
        ﻿a: "pause",
        un: "pause"
      },
      {
        ﻿a: "pay",
        un: "payer"
      },
      {
        ﻿a: "pay back",
        un: "rembourser"
      },
      {
        ﻿a: "payment",
        un: "paiement"
      },
      {
        ﻿a: "pay out",
        un: "payer"
      },
      {
        ﻿a: "pay up",
        un: "payer"
      },
      {
        ﻿a: "peace",
        un: "paix"
      },
      {
        ﻿a: "peaceful",
        un: "pacifique"
      },
      {
        ﻿a: "peak",
        un: "culminer"
      },
      {
        ﻿a: "pen",
        un: "stylo"
      },
      {
        ﻿a: "pencil",
        un: "crayon"
      },
      {
        ﻿a: "penny",
        un: "penny"
      },
      {
        ﻿a: "pension 1",
        un: "pension 1"
      },
      {
        ﻿a: "people",
        un: "personnes"
      },
      {
        ﻿a: "pepper",
        un: "poivre"
      },
      {
        ﻿a: "per",
        un: "par"
      },
      {
        ﻿a: "per cent",
        un: "pour cent"
      },
      {
        ﻿a: "perfect",
        un: "parfait"
      },
      {
        ﻿a: "perfectly",
        un: "parfaitement"
      },
      {
        ﻿a: "perform",
        un: "effectuer"
      },
      {
        ﻿a: "performance",
        un: "performance"
      },
      {
        ﻿a: "performer",
        un: "interprète"
      },
      {
        ﻿a: "perhaps",
        un: "peut-être"
      },
      {
        ﻿a: "period",
        un: "période"
      },
      {
        ﻿a: "permanent",
        un: "permanent"
      },
      {
        ﻿a: "permanently",
        un: "en permanence"
      },
      {
        ﻿a: "permission",
        un: "autorisation"
      },
      {
        ﻿a: "permit",
        un: "permis"
      },
      {
        ﻿a: "person",
        un: "personne"
      },
      {
        ﻿a: "personal",
        un: "personnel"
      },
      {
        ﻿a: "personality",
        un: "personnalité"
      },
      {
        ﻿a: "personally",
        un: "personnellement"
      },
      {
        ﻿a: "persuade",
        un: "persuader"
      },
      {
        ﻿a: "pet",
        un: "animal de compagnie"
      },
      {
        ﻿a: "petrol",
        un: "essence"
      },
      {
        ﻿a: "phase",
        un: "phase"
      },
      {
        ﻿a: "philosophy",
        un: "philosophie"
      },
      {
        ﻿a: "phone",
        un: "téléphone"
      },
      {
        ﻿a: "photo",
        un: "photo"
      },
      {
        ﻿a: "photocopy",
        un: "photocopie"
      },
      {
        ﻿a: "photograph",
        un: "photographier"
      },
      {
        ﻿a: "photographer",
        un: "photographe"
      },
      {
        ﻿a: "photography",
        un: "photographie"
      },
      {
        ﻿a: "phrase",
        un: "phrase"
      },
      {
        ﻿a: "physical",
        un: "physique"
      },
      {
        ﻿a: "physically",
        un: "physiquement"
      },
      {
        ﻿a: "physics",
        un: "physique"
      },
      {
        ﻿a: "piano",
        un: "piano"
      },
      {
        ﻿a: "pick",
        un: "prendre"
      },
      {
        ﻿a: "pick up",
        un: "ramasser"
      },
      {
        ﻿a: "picture",
        un: "image"
      },
      {
        ﻿a: "piece",
        un: "morceau"
      },
      {
        ﻿a: "pig",
        un: "cochon"
      },
      {
        ﻿a: "pile",
        un: "pile"
      },
      {
        ﻿a: "pile up",
        un: "entasser"
      },
      {
        ﻿a: "pill",
        un: "pilule"
      },
      {
        ﻿a: "pilot",
        un: "pilote"
      },
      {
        ﻿a: "pin",
        un: "épingle"
      },
      {
        ﻿a: "pink",
        un: "rose"
      },
      {
        ﻿a: "pint",
        un: "pinte"
      },
      {
        ﻿a: "pipe",
        un: "tuyau"
      },
      {
        ﻿a: "pitch",
        un: "pas"
      },
      {
        ﻿a: "pity",
        un: "pitié"
      },
      {
        ﻿a: "place",
        un: "lieu"
      },
      {
        ﻿a: "plain",
        un: "plaine"
      },
      {
        ﻿a: "plan",
        un: "plan"
      },
      {
        ﻿a: "plane",
        un: "avion"
      },
      {
        ﻿a: "planet",
        un: "planète"
      },
      {
        ﻿a: "planning",
        un: "planification"
      },
      {
        ﻿a: "plant",
        un: "usine"
      },
      {
        ﻿a: "plastic",
        un: "plastique"
      },
      {
        ﻿a: "plate",
        un: "plaque"
      },
      {
        ﻿a: "platform",
        un: "plate-forme"
      },
      {
        ﻿a: "play",
        un: "jouer"
      },
      {
        ﻿a: "play about",
        un: "jouer"
      },
      {
        ﻿a: "player",
        un: "joueur"
      },
      {
        ﻿a: "play with",
        un: "jouer avec"
      },
      {
        ﻿a: "pleasant",
        un: "agréable"
      },
      {
        ﻿a: "pleasantly",
        un: "agréablement"
      },
      {
        ﻿a: "please",
        un: "s'il te plaît"
      },
      {
        ﻿a: "pleased",
        un: "heureux"
      },
      {
        ﻿a: "pleasing",
        un: "plaisant"
      },
      {
        ﻿a: "pleasure",
        un: "plaisir"
      },
      {
        ﻿a: "plenty",
        un: "beaucoup"
      },
      {
        ﻿a: "plot",
        un: "parcelle"
      },
      {
        ﻿a: "plug",
        un: "prise"
      },
      {
        ﻿a: "plug in",
        un: "brancher"
      },
      {
        ﻿a: "plus 1",
        un: "plus 1"
      },
      {
        ﻿a: "p.m.",
        un: "p.m."
      },
      {
        ﻿a: "pocket",
        un: "poche"
      },
      {
        ﻿a: "poem",
        un: "poème"
      },
      {
        ﻿a: "poetry",
        un: "poésie"
      },
      {
        ﻿a: "point",
        un: "indiquer"
      },
      {
        ﻿a: "pointed",
        un: "pointu"
      },
      {
        ﻿a: "point out",
        un: "souligner"
      },
      {
        ﻿a: "poison",
        un: "poison"
      },
      {
        ﻿a: "poisonous",
        un: "toxique"
      },
      {
        ﻿a: "pole",
        un: "pôle"
      },
      {
        ﻿a: "police",
        un: "police"
      },
      {
        ﻿a: "policy",
        un: "politique"
      },
      {
        ﻿a: "polish",
        un: "polonais"
      },
      {
        ﻿a: "polite",
        un: "poli"
      },
      {
        ﻿a: "politely",
        un: "poliment"
      },
      {
        ﻿a: "political",
        un: "politique"
      },
      {
        ﻿a: "politically",
        un: "politiquement"
      },
      {
        ﻿a: "politician",
        un: "politicien"
      },
      {
        ﻿a: "politics",
        un: "politique"
      },
      {
        ﻿a: "pollution",
        un: "pollution"
      },
      {
        ﻿a: "pool",
        un: "piscine"
      },
      {
        ﻿a: "poor",
        un: "pauvre"
      },
      {
        ﻿a: "pop",
        un: "populaire"
      },
      {
        ﻿a: "popular",
        un: "populaire"
      },
      {
        ﻿a: "population",
        un: "population"
      },
      {
        ﻿a: "port",
        un: "port"
      },
      {
        ﻿a: "pose",
        un: "pose"
      },
      {
        ﻿a: "position",
        un: "position"
      },
      {
        ﻿a: "positive",
        un: "positif"
      },
      {
        ﻿a: "possess",
        un: "posséder"
      },
      {
        ﻿a: "possession",
        un: "possession"
      },
      {
        ﻿a: "possibility",
        un: "possibilité"
      },
      {
        ﻿a: "possible",
        un: "possible"
      },
      {
        ﻿a: "possibly",
        un: "peut-être"
      },
      {
        ﻿a: "post",
        un: "poste"
      },
      {
        ﻿a: "post office",
        un: "bureau de poste"
      },
      {
        ﻿a: "pot",
        un: "pot"
      },
      {
        ﻿a: "potato",
        un: "pomme de terre"
      },
      {
        ﻿a: "potential",
        un: "potentiel"
      },
      {
        ﻿a: "potentially",
        un: "potentiellement"
      },
      {
        ﻿a: "pound",
        un: "livre"
      },
      {
        ﻿a: "pour",
        un: "verser"
      },
      {
        ﻿a: "powder",
        un: "poudre"
      },
      {
        ﻿a: "power",
        un: "pouvoir"
      },
      {
        ﻿a: "powerful",
        un: "puissant"
      },
      {
        ﻿a: "practical",
        un: "pratique"
      },
      {
        ﻿a: "practically",
        un: "pratiquement"
      },
      {
        ﻿a: "practice",
        un: "pratique"
      },
      {
        ﻿a: "practise",
        un: "pratique"
      },
      {
        ﻿a: "praise",
        un: "louer"
      },
      {
        ﻿a: "pray",
        un: "prier"
      },
      {
        ﻿a: "prayer",
        un: "prière"
      },
      {
        ﻿a: "precise",
        un: "précis"
      },
      {
        ﻿a: "precisely",
        un: "précisément"
      },
      {
        ﻿a: "predict",
        un: "prédire"
      },
      {
        ﻿a: "prefer",
        un: "préférer"
      },
      {
        ﻿a: "preference",
        un: "préférence"
      },
      {
        ﻿a: "pregnant",
        un: "enceinte"
      },
      {
        ﻿a: "premises",
        un: "locaux"
      },
      {
        ﻿a: "preparation",
        un: "préparation"
      },
      {
        ﻿a: "prepare",
        un: "préparer"
      },
      {
        ﻿a: "prepared",
        un: "préparé"
      },
      {
        ﻿a: "presence",
        un: "présence"
      },
      {
        ﻿a: "present",
        un: "présent"
      },
      {
        ﻿a: "presentation",
        un: "présentation"
      },
      {
        ﻿a: "preserve",
        un: "préserver"
      },
      {
        ﻿a: "president",
        un: "président"
      },
      {
        ﻿a: "press",
        un: "presse"
      },
      {
        ﻿a: "pressure",
        un: "pression"
      },
      {
        ﻿a: "presumably",
        un: "probablement"
      },
      {
        ﻿a: "pretend",
        un: "prétendre"
      },
      {
        ﻿a: "pretty",
        un: "joli"
      },
      {
        ﻿a: "prevent",
        un: "prévenir"
      },
      {
        ﻿a: "previous",
        un: "précédent"
      },
      {
        ﻿a: "previously",
        un: "précédemment"
      },
      {
        ﻿a: "price",
        un: "prix"
      },
      {
        ﻿a: "pride",
        un: "fierté"
      },
      {
        ﻿a: "priest",
        un: "prêtre"
      },
      {
        ﻿a: "primarily",
        un: "principalement"
      },
      {
        ﻿a: "primary",
        un: "primaire"
      },
      {
        ﻿a: "prime minister",
        un: "Premier ministre"
      },
      {
        ﻿a: "prince",
        un: "prince"
      },
      {
        ﻿a: "princess",
        un: "princesse"
      },
      {
        ﻿a: "principle",
        un: "principe"
      },
      {
        ﻿a: "print",
        un: "imprimer"
      },
      {
        ﻿a: "printer",
        un: "imprimante"
      },
      {
        ﻿a: "printing",
        un: "impression"
      },
      {
        ﻿a: "print off",
        un: "imprimer"
      },
      {
        ﻿a: "prior",
        un: "avant"
      },
      {
        ﻿a: "priority",
        un: "priorité"
      },
      {
        ﻿a: "prison",
        un: "prison"
      },
      {
        ﻿a: "prisoner",
        un: "prisonnier"
      },
      {
        ﻿a: "private",
        un: "privé"
      },
      {
        ﻿a: "privately",
        un: "en privé"
      },
      {
        ﻿a: "prize",
        un: "prix"
      },
      {
        ﻿a: "probable",
        un: "probable"
      },
      {
        ﻿a: "probably",
        un: "probablement"
      },
      {
        ﻿a: "problem",
        un: "problème"
      },
      {
        ﻿a: "procedure",
        un: "procédure"
      },
      {
        ﻿a: "proceed",
        un: "procéder"
      },
      {
        ﻿a: "process 1",
        un: "processus 1"
      },
      {
        ﻿a: "produce",
        un: "produire"
      },
      {
        ﻿a: "producer",
        un: "producteur"
      },
      {
        ﻿a: "product",
        un: "produit"
      },
      {
        ﻿a: "production",
        un: "production"
      },
      {
        ﻿a: "profession",
        un: "profession"
      },
      {
        ﻿a: "professional",
        un: "professionnel"
      },
      {
        ﻿a: "professor",
        un: "professeur"
      },
      {
        ﻿a: "profit",
        un: "profit"
      },
      {
        ﻿a: "program",
        un: "programme"
      },
      {
        ﻿a: "programme",
        un: "programme"
      },
      {
        ﻿a: "progress",
        un: "progrès"
      },
      {
        ﻿a: "project",
        un: "projet"
      },
      {
        ﻿a: "promise",
        un: "promesse"
      },
      {
        ﻿a: "promote",
        un: "promouvoir"
      },
      {
        ﻿a: "promotion",
        un: "promotion"
      },
      {
        ﻿a: "prompt",
        un: "rapide"
      },
      {
        ﻿a: "promptly",
        un: "rapidement"
      },
      {
        ﻿a: "pronounce",
        un: "prononcer"
      },
      {
        ﻿a: "pronunciation",
        un: "prononciation"
      },
      {
        ﻿a: "proof",
        un: "preuve"
      },
      {
        ﻿a: "proper",
        un: "approprié"
      },
      {
        ﻿a: "properly",
        un: "correctement"
      },
      {
        ﻿a: "property",
        un: "propriété"
      },
      {
        ﻿a: "proportion",
        un: "proportion"
      },
      {
        ﻿a: "proposal",
        un: "proposition"
      },
      {
        ﻿a: "propose",
        un: "proposer"
      },
      {
        ﻿a: "prospect",
        un: "perspective"
      },
      {
        ﻿a: "protect",
        un: "protéger"
      },
      {
        ﻿a: "protection",
        un: "protection"
      },
      {
        ﻿a: "protest",
        un: "protestation"
      },
      {
        ﻿a: "proud",
        un: "fier"
      },
      {
        ﻿a: "proudly",
        un: "fièrement"
      },
      {
        ﻿a: "prove",
        un: "prouver"
      },
      {
        ﻿a: "provide",
        un: "fournir"
      },
      {
        ﻿a: "provided",
        un: "fourni"
      },
      {
        ﻿a: "providing",
        un: "fournir"
      },
      {
        ﻿a: "pub",
        un: "pub"
      },
      {
        ﻿a: "public",
        un: "publique"
      },
      {
        ﻿a: "publication",
        un: "publication"
      },
      {
        ﻿a: "publicity",
        un: "publicité"
      },
      {
        ﻿a: "publicly",
        un: "publiquement"
      },
      {
        ﻿a: "publish",
        un: "publier"
      },
      {
        ﻿a: "publishing",
        un: "édition"
      },
      {
        ﻿a: "pull",
        un: "tirer"
      },
      {
        ﻿a: "pull apart",
        un: "démonter"
      },
      {
        ﻿a: "pull down",
        un: "abattre"
      },
      {
        ﻿a: "pull in",
        un: "rentrer"
      },
      {
        ﻿a: "pull off",
        un: "enlever"
      },
      {
        ﻿a: "pull out",
        un: "se retirer"
      },
      {
        ﻿a: "pull over",
        un: "arrêtez-vous"
      },
      {
        ﻿a: "pull through",
        un: "tirer"
      },
      {
        ﻿a: "pull together",
        un: "se rassembler"
      },
      {
        ﻿a: "pull up",
        un: "tirer vers le haut"
      },
      {
        ﻿a: "punch",
        un: "punch"
      },
      {
        ﻿a: "punish",
        un: "punir"
      },
      {
        ﻿a: "punishment",
        un: "punition"
      },
      {
        ﻿a: "pupil",
        un: "élève"
      },
      {
        ﻿a: "purchase",
        un: "achat"
      },
      {
        ﻿a: "pure",
        un: "pur"
      },
      {
        ﻿a: "purely",
        un: "purement"
      },
      {
        ﻿a: "purple",
        un: "violet"
      },
      {
        ﻿a: "purpose",
        un: "but"
      },
      {
        ﻿a: "pursue",
        un: "poursuivre"
      },
      {
        ﻿a: "push",
        un: "pousser"
      },
      {
        ﻿a: "push about",
        un: "pousser"
      },
      {
        ﻿a: "push forward",
        un: "avancer"
      },
      {
        ﻿a: "put",
        un: "mettre"
      },
      {
        ﻿a: "put away",
        un: "ranger"
      },
      {
        ﻿a: "put back",
        un: "remettre"
      },
      {
        ﻿a: "put down",
        un: "déposer"
      },
      {
        ﻿a: "put forward",
        un: "mettre en avant"
      },
      {
        ﻿a: "put in",
        un: "mettre dedans"
      },
      {
        ﻿a: "put off",
        un: "repousser"
      },
      {
        ﻿a: "put on",
        un: "mettez"
      },
      {
        ﻿a: "put out",
        un: "éteindre"
      },
      {
        ﻿a: "put through",
        un: "passer à travers"
      },
      {
        ﻿a: "put together",
        un: "mettre ensemble"
      },
      {
        ﻿a: "put up",
        un: "faire des réserves"
      },
      {
        ﻿a: "put up with",
        un: "supporter"
      },
      {
        ﻿a: "qualification",
        un: "qualification"
      },
      {
        ﻿a: "qualified",
        un: "qualifié"
      },
      {
        ﻿a: "qualify",
        un: "qualifier"
      },
      {
        ﻿a: "quality",
        un: "qualité"
      },
      {
        ﻿a: "quantity",
        un: "quantité"
      },
      {
        ﻿a: "quarter",
        un: "quart"
      },
      {
        ﻿a: "queen",
        un: "reine"
      },
      {
        ﻿a: "question",
        un: "question"
      },
      {
        ﻿a: "quick",
        un: "rapide"
      },
      {
        ﻿a: "quickly",
        un: "rapidement"
      },
      {
        ﻿a: "quiet",
        un: "calme"
      },
      {
        ﻿a: "quietly",
        un: "tranquillement"
      },
      {
        ﻿a: "quit",
        un: "quitter"
      },
      {
        ﻿a: "quite",
        un: "assez"
      },
      {
        ﻿a: "quote",
        un: "citation"
      },
      {
        ﻿a: "race",
        un: "course"
      },
      {
        ﻿a: "racing",
        un: "courses"
      },
      {
        ﻿a: "radio",
        un: "radio"
      },
      {
        ﻿a: "rail",
        un: "rail"
      },
      {
        ﻿a: "railroad",
        un: "chemin de fer"
      },
      {
        ﻿a: "railway",
        un: "chemin de fer"
      },
      {
        ﻿a: "rain",
        un: "pluie"
      },
      {
        ﻿a: "raise",
        un: "augmenter"
      },
      {
        ﻿a: "range",
        un: "gamme"
      },
      {
        ﻿a: "rank",
        un: "rang"
      },
      {
        ﻿a: "rapid",
        un: "rapide"
      },
      {
        ﻿a: "rapidly",
        un: "rapidement"
      },
      {
        ﻿a: "rare",
        un: "rare"
      },
      {
        ﻿a: "rarely",
        un: "rarement"
      },
      {
        ﻿a: "rate",
        un: "taux"
      },
      {
        ﻿a: "rather",
        un: "plutôt"
      },
      {
        ﻿a: "raw",
        un: "brut"
      },
      {
        ﻿a: "re-",
        un: "concernant-"
      },
      {
        ﻿a: "reach",
        un: "atteindre"
      },
      {
        ﻿a: "react",
        un: "réagir"
      },
      {
        ﻿a: "reaction",
        un: "réaction"
      },
      {
        ﻿a: "read",
        un: "lire"
      },
      {
        ﻿a: "reader",
        un: "lecteur"
      },
      {
        ﻿a: "reading",
        un: "en lisant"
      },
      {
        ﻿a: "read out",
        un: "lire à haute voix"
      },
      {
        ﻿a: "read over",
        un: "relire"
      },
      {
        ﻿a: "ready",
        un: "prêt"
      },
      {
        ﻿a: "real",
        un: "réel"
      },
      {
        ﻿a: "realistic",
        un: "réaliste"
      },
      {
        ﻿a: "reality",
        un: "réalité"
      },
      {
        ﻿a: "realize",
        un: "réaliser"
      },
      {
        ﻿a: "really",
        un: "vraiment"
      },
      {
        ﻿a: "rear",
        un: "arrière"
      },
      {
        ﻿a: "reason",
        un: "raison"
      },
      {
        ﻿a: "reasonable",
        un: "raisonnable"
      },
      {
        ﻿a: "reasonably",
        un: "raisonnablement"
      },
      {
        ﻿a: "recall",
        un: "rappel"
      },
      {
        ﻿a: "receipt",
        un: "reçu"
      },
      {
        ﻿a: "receive",
        un: "recevoir"
      },
      {
        ﻿a: "recent",
        un: "récent"
      },
      {
        ﻿a: "recently",
        un: "récemment"
      },
      {
        ﻿a: "reception",
        un: "réception"
      },
      {
        ﻿a: "reckon",
        un: "compter"
      },
      {
        ﻿a: "reckon on",
        un: "compter sur"
      },
      {
        ﻿a: "recognition",
        un: "reconnaissance"
      },
      {
        ﻿a: "recognize",
        un: "reconnaître"
      },
      {
        ﻿a: "recommend",
        un: "recommander"
      },
      {
        ﻿a: "record",
        un: "enregistrer"
      },
      {
        ﻿a: "recording",
        un: "enregistrement"
      },
      {
        ﻿a: "recover",
        un: "récupérer"
      },
      {
        ﻿a: "red",
        un: "rouge"
      },
      {
        ﻿a: "reduce",
        un: "réduire"
      },
      {
        ﻿a: "reduction",
        un: "réduction"
      },
      {
        ﻿a: "refer",
        un: "référer"
      },
      {
        ﻿a: "reference",
        un: "référence"
      },
      {
        ﻿a: "refer to",
        un: "se référer à"
      },
      {
        ﻿a: "reflect",
        un: "refléter"
      },
      {
        ﻿a: "reform",
        un: "réforme"
      },
      {
        ﻿a: "refrigerator",
        un: "réfrigérateur"
      },
      {
        ﻿a: "refusal",
        un: "refus"
      },
      {
        ﻿a: "refuse 1",
        un: "refuser 1"
      },
      {
        ﻿a: "regard",
        un: "égard"
      },
      {
        ﻿a: "regarding",
        un: "concernant"
      },
      {
        ﻿a: "region",
        un: "région"
      },
      {
        ﻿a: "regional",
        un: "régional"
      },
      {
        ﻿a: "register",
        un: "registre"
      },
      {
        ﻿a: "regret",
        un: "regret"
      },
      {
        ﻿a: "regular",
        un: "régulier"
      },
      {
        ﻿a: "regularly",
        un: "régulièrement"
      },
      {
        ﻿a: "regulation",
        un: "règlement"
      },
      {
        ﻿a: "reject",
        un: "rejeter"
      },
      {
        ﻿a: "relate",
        un: "se rapporter"
      },
      {
        ﻿a: "related",
        un: "en rapport"
      },
      {
        ﻿a: "relate to",
        un: "se rapporter à"
      },
      {
        ﻿a: "relation",
        un: "relation"
      },
      {
        ﻿a: "relationship",
        un: "relation"
      },
      {
        ﻿a: "relative",
        un: "relatif"
      },
      {
        ﻿a: "relatively",
        un: "relativement"
      },
      {
        ﻿a: "relax",
        un: "se détendre"
      },
      {
        ﻿a: "relaxed",
        un: "détendu"
      },
      {
        ﻿a: "relaxing",
        un: "relaxant"
      },
      {
        ﻿a: "release",
        un: "libérer"
      },
      {
        ﻿a: "relevant",
        un: "pertinent"
      },
      {
        ﻿a: "relief",
        un: "relief"
      },
      {
        ﻿a: "religion",
        un: "religion"
      },
      {
        ﻿a: "religious",
        un: "religieux"
      },
      {
        ﻿a: "rely",
        un: "compter sur"
      },
      {
        ﻿a: "rely on",
        un: "compter sur"
      },
      {
        ﻿a: "remain",
        un: "rester"
      },
      {
        ﻿a: "remaining",
        un: "restant"
      },
      {
        ﻿a: "remains",
        un: "restes"
      },
      {
        ﻿a: "remark",
        un: "remarque"
      },
      {
        ﻿a: "remarkable",
        un: "remarquable"
      },
      {
        ﻿a: "remarkably",
        un: "remarquablement"
      },
      {
        ﻿a: "remember",
        un: "souviens-toi"
      },
      {
        ﻿a: "remind",
        un: "rappeler"
      },
      {
        ﻿a: "remind of",
        un: "rappeler"
      },
      {
        ﻿a: "remote",
        un: "télécommande"
      },
      {
        ﻿a: "removal",
        un: "suppression"
      },
      {
        ﻿a: "remove",
        un: "retirer"
      },
      {
        ﻿a: "rent",
        un: "louer"
      },
      {
        ﻿a: "rented",
        un: "loué"
      },
      {
        ﻿a: "repair",
        un: "réparation"
      },
      {
        ﻿a: "repeat",
        un: "répéter"
      },
      {
        ﻿a: "repeated",
        un: "répété"
      },
      {
        ﻿a: "repeatedly",
        un: "à plusieurs reprises"
      },
      {
        ﻿a: "replace",
        un: "remplacer"
      },
      {
        ﻿a: "reply",
        un: "répondre"
      },
      {
        ﻿a: "report",
        un: "rapport"
      },
      {
        ﻿a: "represent",
        un: "représenter"
      },
      {
        ﻿a: "representative",
        un: "représentant"
      },
      {
        ﻿a: "reproduce",
        un: "reproduire"
      },
      {
        ﻿a: "reputation",
        un: "réputation"
      },
      {
        ﻿a: "request",
        un: "demande"
      },
      {
        ﻿a: "require",
        un: "exiger"
      },
      {
        ﻿a: "requirement",
        un: "exigence"
      },
      {
        ﻿a: "rescue",
        un: "sauvetage"
      },
      {
        ﻿a: "research",
        un: "recherche"
      },
      {
        ﻿a: "reservation",
        un: "réservation"
      },
      {
        ﻿a: "reserve",
        un: "réserve"
      },
      {
        ﻿a: "resident",
        un: "résident"
      },
      {
        ﻿a: "resist",
        un: "résister"
      },
      {
        ﻿a: "resistance",
        un: "résistance"
      },
      {
        ﻿a: "resolve",
        un: "résoudre"
      },
      {
        ﻿a: "resort",
        un: "station balnéaire"
      },
      {
        ﻿a: "resort to",
        un: "recourir à"
      },
      {
        ﻿a: "resource",
        un: "ressource"
      },
      {
        ﻿a: "respect",
        un: "respect"
      },
      {
        ﻿a: "respond",
        un: "répondre"
      },
      {
        ﻿a: "response",
        un: "réponse"
      },
      {
        ﻿a: "responsibility",
        un: "responsabilité"
      },
      {
        ﻿a: "responsible",
        un: "responsable"
      },
      {
        ﻿a: "rest",
        un: "repos"
      },
      {
        ﻿a: "restaurant",
        un: "restaurant"
      },
      {
        ﻿a: "restore",
        un: "restaurer"
      },
      {
        ﻿a: "restrict",
        un: "limiter"
      },
      {
        ﻿a: "restricted",
        un: "limité"
      },
      {
        ﻿a: "restriction",
        un: "restriction"
      },
      {
        ﻿a: "result",
        un: "résultat"
      },
      {
        ﻿a: "result in",
        un: "aboutir à"
      },
      {
        ﻿a: "retain",
        un: "retenir"
      },
      {
        ﻿a: "retire",
        un: "se retirer"
      },
      {
        ﻿a: "retired",
        un: "à la retraite"
      },
      {
        ﻿a: "retirement",
        un: "retraite"
      },
      {
        ﻿a: "return",
        un: "retour"
      },
      {
        ﻿a: "reveal",
        un: "révéler"
      },
      {
        ﻿a: "reverse",
        un: "inverse"
      },
      {
        ﻿a: "review",
        un: "revoir"
      },
      {
        ﻿a: "revise",
        un: "réviser"
      },
      {
        ﻿a: "revision",
        un: "révision"
      },
      {
        ﻿a: "revolution",
        un: "révolution"
      },
      {
        ﻿a: "reward",
        un: "récompense"
      },
      {
        ﻿a: "rhythm",
        un: "rythme"
      },
      {
        ﻿a: "rice",
        un: "riz"
      },
      {
        ﻿a: "rich",
        un: "riche"
      },
      {
        ﻿a: "rid",
        un: "débarrasser"
      },
      {
        ﻿a: "ride",
        un: "monter"
      },
      {
        ﻿a: "rider",
        un: "cavalier"
      },
      {
        ﻿a: "ridiculous",
        un: "ridicule"
      },
      {
        ﻿a: "riding",
        un: "équitation"
      },
      {
        ﻿a: "right",
        un: "droite"
      },
      {
        ﻿a: "rightly",
        un: "justement"
      },
      {
        ﻿a: "ring 1",
        un: "anneau 1"
      },
      {
        ﻿a: "ring 2",
        un: "anneau 2"
      },
      {
        ﻿a: "ring back",
        un: "rappeler"
      },
      {
        ﻿a: "rise",
        un: "augmenter"
      },
      {
        ﻿a: "risk",
        un: "risque"
      },
      {
        ﻿a: "rival",
        un: "rival"
      },
      {
        ﻿a: "river",
        un: "rivière"
      },
      {
        ﻿a: "road",
        un: "route"
      },
      {
        ﻿a: "rob",
        un: "voler"
      },
      {
        ﻿a: "rock",
        un: "rocher"
      },
      {
        ﻿a: "role",
        un: "rôle"
      },
      {
        ﻿a: "roll",
        un: "rouler"
      },
      {
        ﻿a: "romantic",
        un: "romantique"
      },
      {
        ﻿a: "roof",
        un: "toit"
      },
      {
        ﻿a: "room",
        un: "chambre"
      },
      {
        ﻿a: "root",
        un: "racine"
      },
      {
        ﻿a: "rope",
        un: "corde"
      },
      {
        ﻿a: "rough",
        un: "rugueux"
      },
      {
        ﻿a: "roughly",
        un: "à peu près"
      },
      {
        ﻿a: "round",
        un: "rond"
      },
      {
        ﻿a: "rounded",
        un: "arrondi"
      },
      {
        ﻿a: "route",
        un: "itinéraire"
      },
      {
        ﻿a: "routine",
        un: "routine"
      },
      {
        ﻿a: "row 1",
        un: "rangée 1"
      },
      {
        ﻿a: "royal",
        un: "royal"
      },
      {
        ﻿a: "rub",
        un: "frotter"
      },
      {
        ﻿a: "rubber",
        un: "caoutchouc"
      },
      {
        ﻿a: "rubbish",
        un: "déchets"
      },
      {
        ﻿a: "rude",
        un: "grossier"
      },
      {
        ﻿a: "rudely",
        un: "grossièrement"
      },
      {
        ﻿a: "ruin",
        un: "ruine"
      },
      {
        ﻿a: "ruined",
        un: "ruiné"
      },
      {
        ﻿a: "rule",
        un: "règle"
      },
      {
        ﻿a: "rule out",
        un: "éliminer"
      },
      {
        ﻿a: "ruler",
        un: "règle"
      },
      {
        ﻿a: "rumour",
        un: "rumeur"
      },
      {
        ﻿a: "run",
        un: "courir"
      },
      {
        ﻿a: "run after",
        un: "courir après"
      },
      {
        ﻿a: "run away",
        un: "fuyez"
      },
      {
        ﻿a: "runner",
        un: "coureur"
      },
      {
        ﻿a: "running",
        un: "en cours d'exécution"
      },
      {
        ﻿a: "run out",
        un: "s'épuiser"
      },
      {
        ﻿a: "run over",
        un: "écraser"
      },
      {
        ﻿a: "run through",
        un: "parcourir"
      },
      {
        ﻿a: "rural",
        un: "rural"
      },
      {
        ﻿a: "rush",
        un: "se précipiter"
      },
      {
        ﻿a: "sack",
        un: "sac"
      },
      {
        ﻿a: "sad",
        un: "triste"
      },
      {
        ﻿a: "sadly",
        un: "malheureusement"
      },
      {
        ﻿a: "sadness",
        un: "tristesse"
      },
      {
        ﻿a: "safe",
        un: "sûr"
      },
      {
        ﻿a: "safely",
        un: "sans risque"
      },
      {
        ﻿a: "safety",
        un: "sécurité"
      },
      {
        ﻿a: "sail",
        un: "naviguer"
      },
      {
        ﻿a: "sailing",
        un: "voile"
      },
      {
        ﻿a: "sailor",
        un: "marin"
      },
      {
        ﻿a: "salad",
        un: "salade"
      },
      {
        ﻿a: "salary",
        un: "salaire"
      },
      {
        ﻿a: "sale",
        un: "vente"
      },
      {
        ﻿a: "salt",
        un: "sel"
      },
      {
        ﻿a: "salty",
        un: "salé"
      },
      {
        ﻿a: "same",
        un: "même"
      },
      {
        ﻿a: "sample",
        un: "échantillon"
      },
      {
        ﻿a: "sand",
        un: "sable"
      },
      {
        ﻿a: "satisfaction",
        un: "satisfaction"
      },
      {
        ﻿a: "satisfied",
        un: "satisfait"
      },
      {
        ﻿a: "satisfy",
        un: "satisfaire"
      },
      {
        ﻿a: "satisfying",
        un: "satisfaisant"
      },
      {
        ﻿a: "Saturday",
        un: "Samedi"
      },
      {
        ﻿a: "sauce",
        un: "sauce"
      },
      {
        ﻿a: "save",
        un: "sauvegarder"
      },
      {
        ﻿a: "saving",
        un: "économie"
      },
      {
        ﻿a: "say",
        un: "dire"
      },
      {
        ﻿a: "scale",
        un: "échelle"
      },
      {
        ﻿a: "scare",
        un: "effrayer"
      },
      {
        ﻿a: "scared",
        un: "effrayé"
      },
      {
        ﻿a: "scare off",
        un: "effrayer"
      },
      {
        ﻿a: "scene",
        un: "scène"
      },
      {
        ﻿a: "schedule",
        un: "calendrier"
      },
      {
        ﻿a: "scheme",
        un: "schème"
      },
      {
        ﻿a: "school",
        un: "école"
      },
      {
        ﻿a: "science",
        un: "science"
      },
      {
        ﻿a: "scientific",
        un: "scientifique"
      },
      {
        ﻿a: "scientist",
        un: "scientifique"
      },
      {
        ﻿a: "scissors",
        un: "ciseaux"
      },
      {
        ﻿a: "score",
        un: "score"
      },
      {
        ﻿a: "scratch",
        un: "gratter"
      },
      {
        ﻿a: "scream",
        un: "crier"
      },
      {
        ﻿a: "screen",
        un: "écran"
      },
      {
        ﻿a: "screw",
        un: "vis"
      },
      {
        ﻿a: "sea",
        un: "mer"
      },
      {
        ﻿a: "seal",
        un: "joint"
      },
      {
        ﻿a: "seal off",
        un: "sceller"
      },
      {
        ﻿a: "search",
        un: "recherche"
      },
      {
        ﻿a: "season",
        un: "saison"
      },
      {
        ﻿a: "seat",
        un: "siège"
      },
      {
        ﻿a: "second 1",
        un: "deuxième 1"
      },
      {
        ﻿a: "secondary",
        un: "secondaire"
      },
      {
        ﻿a: "secret",
        un: "secrète"
      },
      {
        ﻿a: "secretary",
        un: "secrétaire"
      },
      {
        ﻿a: "secretly",
        un: "secrètement"
      },
      {
        ﻿a: "section",
        un: "section"
      },
      {
        ﻿a: "sector",
        un: "secteur"
      },
      {
        ﻿a: "secure",
        un: "sécurisé"
      },
      {
        ﻿a: "security",
        un: "sécurité"
      },
      {
        ﻿a: "see",
        un: "voir"
      },
      {
        ﻿a: "see about",
        un: "voir à propos"
      },
      {
        ﻿a: "seed",
        un: "graine"
      },
      {
        ﻿a: "seek",
        un: "chercher"
      },
      {
        ﻿a: "seem",
        un: "sembler"
      },
      {
        ﻿a: "see to",
        un: "voir à"
      },
      {
        ﻿a: "select",
        un: "sélectionner"
      },
      {
        ﻿a: "selection",
        un: "sélection"
      },
      {
        ﻿a: "self",
        un: "soi"
      },
      {
        ﻿a: "self-",
        un: "soi-"
      },
      {
        ﻿a: "sell",
        un: "vendre"
      },
      {
        ﻿a: "sell off",
        un: "liquider"
      },
      {
        ﻿a: "sell out",
        un: "vendre"
      },
      {
        ﻿a: "senate",
        un: "sénat"
      },
      {
        ﻿a: "senator",
        un: "sénateur"
      },
      {
        ﻿a: "send",
        un: "envoyer"
      },
      {
        ﻿a: "send for",
        un: "faire venir"
      },
      {
        ﻿a: "send off",
        un: "envoyer"
      },
      {
        ﻿a: "senior",
        un: "senior"
      },
      {
        ﻿a: "sense",
        un: "sens"
      },
      {
        ﻿a: "sensible",
        un: "sensible"
      },
      {
        ﻿a: "sensitive",
        un: "sensible"
      },
      {
        ﻿a: "sentence",
        un: "phrase"
      },
      {
        ﻿a: "separate",
        un: "séparé"
      },
      {
        ﻿a: "separated",
        un: "séparé"
      },
      {
        ﻿a: "separately",
        un: "séparément"
      },
      {
        ﻿a: "separation",
        un: "séparation"
      },
      {
        ﻿a: "September",
        un: "Septembre"
      },
      {
        ﻿a: "series",
        un: "série"
      },
      {
        ﻿a: "serious",
        un: "sérieux"
      },
      {
        ﻿a: "seriously",
        un: "sérieusement"
      },
      {
        ﻿a: "servant",
        un: "serviteur"
      },
      {
        ﻿a: "serve",
        un: "servir"
      },
      {
        ﻿a: "service",
        un: "service"
      },
      {
        ﻿a: "session",
        un: "session"
      },
      {
        ﻿a: "set",
        un: "ensemble"
      },
      {
        ﻿a: "set off",
        un: "déclencher"
      },
      {
        ﻿a: "set out",
        un: "énoncé"
      },
      {
        ﻿a: "settle",
        un: "régler"
      },
      {
        ﻿a: "settle down",
        un: "s'installer"
      },
      {
        ﻿a: "set up",
        un: "installation"
      },
      {
        ﻿a: "seven",
        un: "Sept"
      },
      {
        ﻿a: "seventeen",
        un: "dix-sept"
      },
      {
        ﻿a: "seventh",
        un: "septième"
      },
      {
        ﻿a: "seventieth",
        un: "soixante-dixième"
      },
      {
        ﻿a: "seventy",
        un: "soixante-dix"
      },
      {
        ﻿a: "several",
        un: "plusieurs"
      },
      {
        ﻿a: "severe",
        un: "grave"
      },
      {
        ﻿a: "severely",
        un: "gravement"
      },
      {
        ﻿a: "sew",
        un: "coudre"
      },
      {
        ﻿a: "sewing",
        un: "couture"
      },
      {
        ﻿a: "sex",
        un: "sexe"
      },
      {
        ﻿a: "sexual",
        un: "sexuel"
      },
      {
        ﻿a: "sexually",
        un: "sexuellement"
      },
      {
        ﻿a: "shade",
        un: "ombre"
      },
      {
        ﻿a: "shadow",
        un: "ombre"
      },
      {
        ﻿a: "shake",
        un: "secouer"
      },
      {
        ﻿a: "shall",
        un: "devoir"
      },
      {
        ﻿a: "shallow",
        un: "peu profond"
      },
      {
        ﻿a: "shame",
        un: "honte"
      },
      {
        ﻿a: "shape",
        un: "forme"
      },
      {
        ﻿a: "shaped",
        un: "en forme"
      },
      {
        ﻿a: "share",
        un: "partager"
      },
      {
        ﻿a: "sharp",
        un: "pointu"
      },
      {
        ﻿a: "sharply",
        un: "nettement"
      },
      {
        ﻿a: "shave",
        un: "raser"
      },
      {
        ﻿a: "she",
        un: "elle"
      },
      {
        ﻿a: "sheep",
        un: "mouton"
      },
      {
        ﻿a: "sheet",
        un: "feuille"
      },
      {
        ﻿a: "shelf",
        un: "étagère"
      },
      {
        ﻿a: "shell",
        un: "coquille"
      },
      {
        ﻿a: "shelter",
        un: "abri"
      },
      {
        ﻿a: "shift",
        un: "changement"
      },
      {
        ﻿a: "shine",
        un: "briller"
      },
      {
        ﻿a: "shiny",
        un: "brillant"
      },
      {
        ﻿a: "ship",
        un: "bateau"
      },
      {
        ﻿a: "shirt",
        un: "chemise"
      },
      {
        ﻿a: "shock",
        un: "choc"
      },
      {
        ﻿a: "shocked",
        un: "choqué"
      },
      {
        ﻿a: "shocking",
        un: "choquant"
      },
      {
        ﻿a: "shoe",
        un: "chaussure"
      },
      {
        ﻿a: "shoot",
        un: "tirer"
      },
      {
        ﻿a: "shoot down",
        un: "abattre"
      },
      {
        ﻿a: "shooting",
        un: "tournage"
      },
      {
        ﻿a: "shop",
        un: "boutique"
      },
      {
        ﻿a: "shopping",
        un: "achats"
      },
      {
        ﻿a: "short",
        un: "court"
      },
      {
        ﻿a: "shortly",
        un: "prochainement"
      },
      {
        ﻿a: "shot",
        un: "tir"
      },
      {
        ﻿a: "should",
        un: "devrait"
      },
      {
        ﻿a: "shoulder",
        un: "épaule"
      },
      {
        ﻿a: "shout",
        un: "crier"
      },
      {
        ﻿a: "show",
        un: "montrer"
      },
      {
        ﻿a: "shower",
        un: "douche"
      },
      {
        ﻿a: "show off",
        un: "frimer"
      },
      {
        ﻿a: "show round",
        un: "faire visiter les lieux"
      },
      {
        ﻿a: "show up",
        un: "se présenter"
      },
      {
        ﻿a: "shut",
        un: "fermer"
      },
      {
        ﻿a: "shut down",
        un: "fermer"
      },
      {
        ﻿a: "shut in",
        un: "enfermé"
      },
      {
        ﻿a: "shut out",
        un: "exclure"
      },
      {
        ﻿a: "shut up",
        un: "fermez-la"
      },
      {
        ﻿a: "shy",
        un: "timide"
      },
      {
        ﻿a: "sick",
        un: "malade"
      },
      {
        ﻿a: "side",
        un: "côté"
      },
      {
        ﻿a: "sideways",
        un: "de côté"
      },
      {
        ﻿a: "sight",
        un: "vue"
      },
      {
        ﻿a: "sign",
        un: "signe"
      },
      {
        ﻿a: "signal",
        un: "signal"
      },
      {
        ﻿a: "signature",
        un: "signature"
      },
      {
        ﻿a: "significant",
        un: "significatif"
      },
      {
        ﻿a: "significantly",
        un: "de manière significative"
      },
      {
        ﻿a: "silence",
        un: "silence"
      },
      {
        ﻿a: "silent",
        un: "silencieux"
      },
      {
        ﻿a: "silk",
        un: "soie"
      },
      {
        ﻿a: "silly",
        un: "idiot"
      },
      {
        ﻿a: "silver",
        un: "argent"
      },
      {
        ﻿a: "similar",
        un: "similaire"
      },
      {
        ﻿a: "similarly",
        un: "de la même manière"
      },
      {
        ﻿a: "simple",
        un: "simple"
      },
      {
        ﻿a: "simply",
        un: "simplement"
      },
      {
        ﻿a: "since",
        un: "depuis"
      },
      {
        ﻿a: "sincere",
        un: "sincère"
      },
      {
        ﻿a: "sincerely",
        un: "sincèrement"
      },
      {
        ﻿a: "sing",
        un: "chanter"
      },
      {
        ﻿a: "singer",
        un: "chanteur"
      },
      {
        ﻿a: "singing",
        un: "chant"
      },
      {
        ﻿a: "single",
        un: "célibataire"
      },
      {
        ﻿a: "sink",
        un: "couler"
      },
      {
        ﻿a: "sir",
        un: "Monsieur"
      },
      {
        ﻿a: "sister",
        un: "sœur"
      },
      {
        ﻿a: "sit",
        un: "s'asseoir"
      },
      {
        ﻿a: "sit down",
        un: "asseyez-vous"
      },
      {
        ﻿a: "site",
        un: "site"
      },
      {
        ﻿a: "situation",
        un: "situation"
      },
      {
        ﻿a: "six",
        un: "six"
      },
      {
        ﻿a: "sixteen",
        un: "seize"
      },
      {
        ﻿a: "sixth",
        un: "sixième"
      },
      {
        ﻿a: "sixtieth",
        un: "soixantième"
      },
      {
        ﻿a: "sixty",
        un: "soixante"
      },
      {
        ﻿a: "size",
        un: "taille"
      },
      {
        ﻿a: "skilful",
        un: "habile"
      },
      {
        ﻿a: "skilfully",
        un: "habilement"
      },
      {
        ﻿a: "skill",
        un: "compétence"
      },
      {
        ﻿a: "skilled",
        un: "qualifié"
      },
      {
        ﻿a: "skin",
        un: "peau"
      },
      {
        ﻿a: "skirt",
        un: "jupe"
      },
      {
        ﻿a: "sky",
        un: "ciel"
      },
      {
        ﻿a: "sleep",
        un: "dormir"
      },
      {
        ﻿a: "sleeve",
        un: "manche"
      },
      {
        ﻿a: "slice",
        un: "tranche"
      },
      {
        ﻿a: "slide",
        un: "glisser"
      },
      {
        ﻿a: "slight",
        un: "léger"
      },
      {
        ﻿a: "slightly",
        un: "légèrement"
      },
      {
        ﻿a: "slip",
        un: "glisser"
      },
      {
        ﻿a: "slope",
        un: "pente"
      },
      {
        ﻿a: "slow",
        un: "lent"
      },
      {
        ﻿a: "slowly",
        un: "lentement"
      },
      {
        ﻿a: "small",
        un: "petit"
      },
      {
        ﻿a: "smart",
        un: "intelligent"
      },
      {
        ﻿a: "smash",
        un: "fracasser"
      },
      {
        ﻿a: "smell",
        un: "odeur"
      },
      {
        ﻿a: "smile",
        un: "sourire"
      },
      {
        ﻿a: "smoke",
        un: "fumée"
      },
      {
        ﻿a: "smoking",
        un: "fumeur"
      },
      {
        ﻿a: "smooth",
        un: "lisse"
      },
      {
        ﻿a: "smoothly",
        un: "doucement"
      },
      {
        ﻿a: "snake",
        un: "serpent"
      },
      {
        ﻿a: "snow",
        un: "neige"
      },
      {
        ﻿a: "so",
        un: "donc"
      },
      {
        ﻿a: "soap",
        un: "savon"
      },
      {
        ﻿a: "social",
        un: "sociale"
      },
      {
        ﻿a: "socially",
        un: "socialement"
      },
      {
        ﻿a: "society",
        un: "société"
      },
      {
        ﻿a: "sock",
        un: "chaussette"
      },
      {
        ﻿a: "soft",
        un: "doux"
      },
      {
        ﻿a: "softly",
        un: "doucement"
      },
      {
        ﻿a: "software",
        un: "logiciel"
      },
      {
        ﻿a: "soil",
        un: "sol"
      },
      {
        ﻿a: "soldier",
        un: "soldat"
      },
      {
        ﻿a: "solid",
        un: "solide"
      },
      {
        ﻿a: "solution",
        un: "solution"
      },
      {
        ﻿a: "solve",
        un: "résoudre"
      },
      {
        ﻿a: "some",
        un: "quelques"
      },
      {
        ﻿a: "somebody",
        un: "quelqu'un"
      },
      {
        ﻿a: "somehow",
        un: "d'une manière ou d'une autre"
      },
      {
        ﻿a: "someone",
        un: "quelqu'un"
      },
      {
        ﻿a: "something",
        un: "quelque chose"
      },
      {
        ﻿a: "sometimes",
        un: "parfois"
      },
      {
        ﻿a: "somewhat",
        un: "quelque peu"
      },
      {
        ﻿a: "somewhere",
        un: "quelque part"
      },
      {
        ﻿a: "son",
        un: "fils"
      },
      {
        ﻿a: "song",
        un: "chanson"
      },
      {
        ﻿a: "soon",
        un: "bientôt"
      },
      {
        ﻿a: "sore",
        un: "douloureux"
      },
      {
        ﻿a: "sorry",
        un: "Désolé"
      },
      {
        ﻿a: "sort",
        un: "trier"
      },
      {
        ﻿a: "sort out",
        un: "Trier"
      },
      {
        ﻿a: "soul",
        un: "âme"
      },
      {
        ﻿a: "sound",
        un: "son"
      },
      {
        ﻿a: "soup",
        un: "soupe"
      },
      {
        ﻿a: "sour",
        un: "aigre"
      },
      {
        ﻿a: "source",
        un: "source"
      },
      {
        ﻿a: "south",
        un: "sud"
      },
      {
        ﻿a: "southern",
        un: "du sud"
      },
      {
        ﻿a: "space",
        un: "espace"
      },
      {
        ﻿a: "spare",
        un: "de rechange"
      },
      {
        ﻿a: "speak",
        un: "parler"
      },
      {
        ﻿a: "speaker",
        un: "conférencier"
      },
      {
        ﻿a: "speak out",
        un: "parler"
      },
      {
        ﻿a: "speak up",
        un: "parler"
      },
      {
        ﻿a: "special",
        un: "spécial"
      },
      {
        ﻿a: "specialist",
        un: "spécialiste"
      },
      {
        ﻿a: "specially",
        un: "spécialement"
      },
      {
        ﻿a: "specific",
        un: "spécifique"
      },
      {
        ﻿a: "specifically",
        un: "spécifiquement"
      },
      {
        ﻿a: "speech",
        un: "discours"
      },
      {
        ﻿a: "speed",
        un: "vitesse"
      },
      {
        ﻿a: "speed up",
        un: "accélérer"
      },
      {
        ﻿a: "spell",
        un: "épeler"
      },
      {
        ﻿a: "spelling",
        un: "orthographe"
      },
      {
        ﻿a: "spend",
        un: "dépenser"
      },
      {
        ﻿a: "spice",
        un: "pimenter"
      },
      {
        ﻿a: "spicy",
        un: "épicé"
      },
      {
        ﻿a: "spider",
        un: "araignée"
      },
      {
        ﻿a: "spin",
        un: "rotation"
      },
      {
        ﻿a: "spirit",
        un: "esprit"
      },
      {
        ﻿a: "spiritual",
        un: "spirituel"
      },
      {
        ﻿a: "spite",
        un: "dépit"
      },
      {
        ﻿a: "split",
        un: "diviser"
      },
      {
        ﻿a: "split up",
        un: "fractionner"
      },
      {
        ﻿a: "spoil",
        un: "gâcher"
      },
      {
        ﻿a: "spoken",
        un: "parlé"
      },
      {
        ﻿a: "spoon",
        un: "cuillère"
      },
      {
        ﻿a: "sport",
        un: "sport"
      },
      {
        ﻿a: "spot",
        un: "place"
      },
      {
        ﻿a: "spray",
        un: "pulvérisation"
      },
      {
        ﻿a: "spread",
        un: "propagé"
      },
      {
        ﻿a: "spread out",
        un: "étaler"
      },
      {
        ﻿a: "spring",
        un: "printemps"
      },
      {
        ﻿a: "square",
        un: "carré"
      },
      {
        ﻿a: "squeeze",
        un: "presser"
      },
      {
        ﻿a: "stable",
        un: "écurie"
      },
      {
        ﻿a: "staff",
        un: "personnel"
      },
      {
        ﻿a: "stage",
        un: "scène"
      },
      {
        ﻿a: "stair",
        un: "marche"
      },
      {
        ﻿a: "stamp",
        un: "timbre"
      },
      {
        ﻿a: "stand",
        un: "rester"
      },
      {
        ﻿a: "standard",
        un: "standard"
      },
      {
        ﻿a: "stand back",
        un: "reculer"
      },
      {
        ﻿a: "stand by",
        un: "attendre"
      },
      {
        ﻿a: "stand for",
        un: "défendre"
      },
      {
        ﻿a: "stand out",
        un: "ressortir"
      },
      {
        ﻿a: "stand up",
        un: "se lever"
      },
      {
        ﻿a: "stand up for",
        un: "défendre"
      },
      {
        ﻿a: "star",
        un: "étoile"
      },
      {
        ﻿a: "stare",
        un: "regard"
      },
      {
        ﻿a: "start",
        un: "commencer"
      },
      {
        ﻿a: "start off",
        un: "commencer"
      },
      {
        ﻿a: "start out",
        un: "démarrer"
      },
      {
        ﻿a: "start up",
        un: "démarrer"
      },
      {
        ﻿a: "state",
        un: "État"
      },
      {
        ﻿a: "statement",
        un: "déclaration"
      },
      {
        ﻿a: "station",
        un: "gare"
      },
      {
        ﻿a: "statue",
        un: "statue"
      },
      {
        ﻿a: "status",
        un: "statut"
      },
      {
        ﻿a: "stay",
        un: "rester"
      },
      {
        ﻿a: "stay away",
        un: "rester à l'écart"
      },
      {
        ﻿a: "stay out of",
        un: "reste en dehors de"
      },
      {
        ﻿a: "steadily",
        un: "régulièrement"
      },
      {
        ﻿a: "steady",
        un: "constant"
      },
      {
        ﻿a: "steal",
        un: "voler"
      },
      {
        ﻿a: "steam",
        un: "vapeur"
      },
      {
        ﻿a: "steel",
        un: "acier"
      },
      {
        ﻿a: "steep",
        un: "raide"
      },
      {
        ﻿a: "steeply",
        un: "fortement"
      },
      {
        ﻿a: "steer",
        un: "diriger"
      },
      {
        ﻿a: "step",
        un: "étape"
      },
      {
        ﻿a: "stick",
        un: "bâton"
      },
      {
        ﻿a: "stick out",
        un: "ressortir"
      },
      {
        ﻿a: "stick to",
        un: "s'en tenir à"
      },
      {
        ﻿a: "stick up",
        un: "tenir bon"
      },
      {
        ﻿a: "sticky",
        un: "collant"
      },
      {
        ﻿a: "stiff",
        un: "rigide"
      },
      {
        ﻿a: "stiffly",
        un: "avec raideur"
      },
      {
        ﻿a: "still",
        un: "toujours"
      },
      {
        ﻿a: "sting",
        un: "piquer"
      },
      {
        ﻿a: "stir",
        un: "remuer"
      },
      {
        ﻿a: "stock",
        un: "action"
      },
      {
        ﻿a: "stomach",
        un: "estomac"
      },
      {
        ﻿a: "stone",
        un: "pierre"
      },
      {
        ﻿a: "stop",
        un: "arrêt"
      },
      {
        ﻿a: "store",
        un: "magasin"
      },
      {
        ﻿a: "storm",
        un: "tempête"
      },
      {
        ﻿a: "story",
        un: "histoire"
      },
      {
        ﻿a: "stove",
        un: "poêle"
      },
      {
        ﻿a: "straight",
        un: "droit"
      },
      {
        ﻿a: "strain",
        un: "souche"
      },
      {
        ﻿a: "strange",
        un: "étrange"
      },
      {
        ﻿a: "strangely",
        un: "étrangement"
      },
      {
        ﻿a: "stranger",
        un: "étranger"
      },
      {
        ﻿a: "strategy",
        un: "stratégie"
      },
      {
        ﻿a: "stream",
        un: "flux"
      },
      {
        ﻿a: "street",
        un: "rue"
      },
      {
        ﻿a: "strength",
        un: "force"
      },
      {
        ﻿a: "stress",
        un: "stresser"
      },
      {
        ﻿a: "stressed",
        un: "stressé"
      },
      {
        ﻿a: "stretch",
        un: "extensible"
      },
      {
        ﻿a: "strict",
        un: "strict"
      },
      {
        ﻿a: "strictly",
        un: "strictement"
      },
      {
        ﻿a: "strike",
        un: "grève"
      },
      {
        ﻿a: "striking",
        un: "frappant"
      },
      {
        ﻿a: "string",
        un: "chaîne"
      },
      {
        ﻿a: "strip",
        un: "bande"
      },
      {
        ﻿a: "stripe",
        un: "bande"
      },
      {
        ﻿a: "striped",
        un: "rayé"
      },
      {
        ﻿a: "stroke",
        un: "accident vasculaire cérébral"
      },
      {
        ﻿a: "strong",
        un: "fort"
      },
      {
        ﻿a: "strongly",
        un: "fortement"
      },
      {
        ﻿a: "structure",
        un: "structure"
      },
      {
        ﻿a: "struggle",
        un: "lutte"
      },
      {
        ﻿a: "student",
        un: "étudiant"
      },
      {
        ﻿a: "studio",
        un: "studio"
      },
      {
        ﻿a: "study",
        un: "étude"
      },
      {
        ﻿a: "stuff",
        un: "truc"
      },
      {
        ﻿a: "stupid",
        un: "stupide"
      },
      {
        ﻿a: "style",
        un: "style"
      },
      {
        ﻿a: "subject",
        un: "sujet"
      },
      {
        ﻿a: "substance",
        un: "substance"
      },
      {
        ﻿a: "substantial",
        un: "substantiel"
      },
      {
        ﻿a: "substantially",
        un: "substantiellement"
      },
      {
        ﻿a: "substitute",
        un: "remplaçant"
      },
      {
        ﻿a: "succeed",
        un: "réussir"
      },
      {
        ﻿a: "success",
        un: "succès"
      },
      {
        ﻿a: "successful",
        un: "réussi"
      },
      {
        ﻿a: "successfully",
        un: "avec succès"
      },
      {
        ﻿a: "such",
        un: "tel"
      },
      {
        ﻿a: "suck",
        un: "sucer"
      },
      {
        ﻿a: "sudden",
        un: "soudain"
      },
      {
        ﻿a: "suddenly",
        un: "soudainement"
      },
      {
        ﻿a: "suffer",
        un: "souffrir"
      },
      {
        ﻿a: "suffering",
        un: "souffrance"
      },
      {
        ﻿a: "sufficient",
        un: "suffisant"
      },
      {
        ﻿a: "sufficiently",
        un: "suffisamment"
      },
      {
        ﻿a: "sugar",
        un: "sucre"
      },
      {
        ﻿a: "suggest",
        un: "suggérer"
      },
      {
        ﻿a: "suggestion",
        un: "suggestion"
      },
      {
        ﻿a: "suit",
        un: "costume"
      },
      {
        ﻿a: "suitable",
        un: "approprié"
      },
      {
        ﻿a: "suitcase",
        un: "valise"
      },
      {
        ﻿a: "suited",
        un: "adapté"
      },
      {
        ﻿a: "sum",
        un: "somme"
      },
      {
        ﻿a: "summary",
        un: "résumé"
      },
      {
        ﻿a: "summer",
        un: "été"
      },
      {
        ﻿a: "sum up",
        un: "résumer"
      },
      {
        ﻿a: "sun",
        un: "soleil"
      },
      {
        ﻿a: "Sunday",
        un: "Dimanche"
      },
      {
        ﻿a: "superior",
        un: "supérieur"
      },
      {
        ﻿a: "supermarket",
        un: "supermarché"
      },
      {
        ﻿a: "supply",
        un: "fournir"
      },
      {
        ﻿a: "support",
        un: "soutien"
      },
      {
        ﻿a: "supporter",
        un: "supporter"
      },
      {
        ﻿a: "suppose",
        un: "supposer"
      },
      {
        ﻿a: "sure",
        un: "bien sûr"
      },
      {
        ﻿a: "surely",
        un: "sûrement"
      },
      {
        ﻿a: "surface",
        un: "surface"
      },
      {
        ﻿a: "surname",
        un: "nom de famille"
      },
      {
        ﻿a: "surprise",
        un: "surprendre"
      },
      {
        ﻿a: "surprised",
        un: "surpris"
      },
      {
        ﻿a: "surprising",
        un: "surprenant"
      },
      {
        ﻿a: "surprisingly",
        un: "étonnamment"
      },
      {
        ﻿a: "surround",
        un: "entourer"
      },
      {
        ﻿a: "surrounding",
        un: "environnant"
      },
      {
        ﻿a: "surroundings",
        un: "alentours"
      },
      {
        ﻿a: "survey",
        un: "enquête"
      },
      {
        ﻿a: "survive",
        un: "survivre"
      },
      {
        ﻿a: "suspect",
        un: "suspect"
      },
      {
        ﻿a: "suspicion",
        un: "soupçon"
      },
      {
        ﻿a: "suspicious",
        un: "suspect"
      },
      {
        ﻿a: "swallow",
        un: "avaler"
      },
      {
        ﻿a: "swear",
        un: "jurer"
      },
      {
        ﻿a: "swearing",
        un: "jurer"
      },
      {
        ﻿a: "sweat",
        un: "transpirer"
      },
      {
        ﻿a: "sweater",
        un: "pull-over"
      },
      {
        ﻿a: "sweep",
        un: "balayer"
      },
      {
        ﻿a: "sweet",
        un: "doux"
      },
      {
        ﻿a: "swell",
        un: "gonfler"
      },
      {
        ﻿a: "swelling",
        un: "gonflement"
      },
      {
        ﻿a: "swim",
        un: "nager"
      },
      {
        ﻿a: "swimming",
        un: "natation"
      },
      {
        ﻿a: "swimming pool",
        un: "piscine"
      },
      {
        ﻿a: "swing",
        un: "balançoire"
      },
      {
        ﻿a: "switch",
        un: "changer"
      },
      {
        ﻿a: "switch off",
        un: "éteindre"
      },
      {
        ﻿a: "swollen",
        un: "gonflé"
      },
      {
        ﻿a: "symbol",
        un: "symbole"
      },
      {
        ﻿a: "sympathetic",
        un: "sympathique"
      },
      {
        ﻿a: "sympathy",
        un: "sympathie"
      },
      {
        ﻿a: "system",
        un: "système"
      },
      {
        ﻿a: "table",
        un: "tableau"
      },
      {
        ﻿a: "tablet",
        un: "comprimé"
      },
      {
        ﻿a: "tackle",
        un: "tacle"
      },
      {
        ﻿a: "tail",
        un: "queue"
      },
      {
        ﻿a: "take",
        un: "prendre"
      },
      {
        ﻿a: "take away",
        un: "emporter"
      },
      {
        ﻿a: "take back",
        un: "reprendre"
      },
      {
        ﻿a: "take down",
        un: "démonter"
      },
      {
        ﻿a: "take in",
        un: "prendre"
      },
      {
        ﻿a: "take off",
        un: "décoller"
      },
      {
        ﻿a: "take on",
        un: "assumer"
      },
      {
        ﻿a: "take over",
        un: "reprendre"
      },
      {
        ﻿a: "take up",
        un: "prendre"
      },
      {
        ﻿a: "talk",
        un: "parler"
      },
      {
        ﻿a: "tall",
        un: "grand"
      },
      {
        ﻿a: "tank",
        un: "réservoir"
      },
      {
        ﻿a: "tap",
        un: "robinet"
      },
      {
        ﻿a: "tape",
        un: "ruban adhésif"
      },
      {
        ﻿a: "target",
        un: "cible"
      },
      {
        ﻿a: "task",
        un: "tâche"
      },
      {
        ﻿a: "taste",
        un: "goût"
      },
      {
        ﻿a: "tax",
        un: "impôt"
      },
      {
        ﻿a: "taxi",
        un: "Taxi"
      },
      {
        ﻿a: "tea",
        un: "thé"
      },
      {
        ﻿a: "teach",
        un: "enseigner"
      },
      {
        ﻿a: "teacher",
        un: "professeur"
      },
      {
        ﻿a: "teaching",
        un: "enseignement"
      },
      {
        ﻿a: "team",
        un: "équipe"
      },
      {
        ﻿a: "tear 1",
        un: "déchirer 1"
      },
      {
        ﻿a: "tear 2",
        un: "déchirer 2"
      },
      {
        ﻿a: "tear up",
        un: "déchirer"
      },
      {
        ﻿a: "technical",
        un: "technique"
      },
      {
        ﻿a: "technique",
        un: "technique"
      },
      {
        ﻿a: "technology",
        un: "technologie"
      },
      {
        ﻿a: "telephone",
        un: "téléphone"
      },
      {
        ﻿a: "television",
        un: "télévision"
      },
      {
        ﻿a: "tell",
        un: "dire"
      },
      {
        ﻿a: "tell off",
        un: "gronder"
      },
      {
        ﻿a: "temperature",
        un: "température"
      },
      {
        ﻿a: "temporarily",
        un: "temporairement"
      },
      {
        ﻿a: "temporary",
        un: "temporaire"
      },
      {
        ﻿a: "ten",
        un: "dix"
      },
      {
        ﻿a: "tend",
        un: "tendre"
      },
      {
        ﻿a: "tendency",
        un: "tendance"
      },
      {
        ﻿a: "tension",
        un: "tension"
      },
      {
        ﻿a: "tent",
        un: "tente"
      },
      {
        ﻿a: "tenth",
        un: "dixième"
      },
      {
        ﻿a: "term",
        un: "terme"
      },
      {
        ﻿a: "terrible",
        un: "terrible"
      },
      {
        ﻿a: "terribly",
        un: "terriblement"
      },
      {
        ﻿a: "test",
        un: "test"
      },
      {
        ﻿a: "text",
        un: "texte"
      },
      {
        ﻿a: "than",
        un: "que"
      },
      {
        ﻿a: "thank",
        un: "remercier"
      },
      {
        ﻿a: "thanks",
        un: "merci"
      },
      {
        ﻿a: "thank you",
        un: "merci"
      },
      {
        ﻿a: "that",
        un: "que"
      },
      {
        ﻿a: "the",
        un: "le"
      },
      {
        ﻿a: "theatre",
        un: "théâtre"
      },
      {
        ﻿a: "their",
        un: "leur"
      },
      {
        ﻿a: "theirs",
        un: "la leur"
      },
      {
        ﻿a: "them",
        un: "eux"
      },
      {
        ﻿a: "theme",
        un: "thème"
      },
      {
        ﻿a: "themselves",
        un: "eux-mêmes"
      },
      {
        ﻿a: "then",
        un: "alors"
      },
      {
        ﻿a: "theory",
        un: "théorie"
      },
      {
        ﻿a: "there",
        un: "là"
      },
      {
        ﻿a: "therefore",
        un: "donc"
      },
      {
        ﻿a: "they",
        un: "ils"
      },
      {
        ﻿a: "thick",
        un: "épais"
      },
      {
        ﻿a: "thickly",
        un: "épaissement"
      },
      {
        ﻿a: "thickness",
        un: "épaisseur"
      },
      {
        ﻿a: "thief",
        un: "voleur"
      },
      {
        ﻿a: "thin",
        un: "mince"
      },
      {
        ﻿a: "thing",
        un: "chose"
      },
      {
        ﻿a: "think",
        un: "pense"
      },
      {
        ﻿a: "think about",
        un: "penser à"
      },
      {
        ﻿a: "thinking",
        un: "pensée"
      },
      {
        ﻿a: "think of",
        un: "pense à"
      },
      {
        ﻿a: "think of as",
        un: "pense à comme"
      },
      {
        ﻿a: "think over",
        un: "réfléchir"
      },
      {
        ﻿a: "think up",
        un: "inventer"
      },
      {
        ﻿a: "third",
        un: "troisième"
      },
      {
        ﻿a: "thirsty",
        un: "soif"
      },
      {
        ﻿a: "thirteen",
        un: "treize"
      },
      {
        ﻿a: "thirteenth",
        un: "treizième"
      },
      {
        ﻿a: "thirtieth",
        un: "trentième"
      },
      {
        ﻿a: "thirty",
        un: "trente"
      },
      {
        ﻿a: "this",
        un: "ce"
      },
      {
        ﻿a: "thorough",
        un: "complet"
      },
      {
        ﻿a: "thoroughly",
        un: "soigneusement"
      },
      {
        ﻿a: "though",
        un: "cependant"
      },
      {
        ﻿a: "thought",
        un: "pensée"
      },
      {
        ﻿a: "thousand",
        un: "mille"
      },
      {
        ﻿a: "thousandth",
        un: "millième"
      },
      {
        ﻿a: "thread",
        un: "fil"
      },
      {
        ﻿a: "threat",
        un: "menace"
      },
      {
        ﻿a: "threaten",
        un: "menacer"
      },
      {
        ﻿a: "threatening",
        un: "menaçant"
      },
      {
        ﻿a: "three",
        un: "trois"
      },
      {
        ﻿a: "throat",
        un: "gorge"
      },
      {
        ﻿a: "through",
        un: "à travers"
      },
      {
        ﻿a: "throughout",
        un: "tout au long de"
      },
      {
        ﻿a: "throw",
        un: "lancer"
      },
      {
        ﻿a: "throw away",
        un: "jeter"
      },
      {
        ﻿a: "throw out",
        un: "jeter"
      },
      {
        ﻿a: "thumb",
        un: "pouce"
      },
      {
        ﻿a: "Thursday",
        un: "Jeudi"
      },
      {
        ﻿a: "thus",
        un: "ainsi"
      },
      {
        ﻿a: "ticket",
        un: "billet"
      },
      {
        ﻿a: "tidy",
        un: "rangé"
      },
      {
        ﻿a: "tie",
        un: "cravate"
      },
      {
        ﻿a: "tie up",
        un: "ficeler"
      },
      {
        ﻿a: "tight",
        un: "serré"
      },
      {
        ﻿a: "tightly",
        un: "fermement"
      },
      {
        ﻿a: "till",
        un: "jusqu'à"
      },
      {
        ﻿a: "time",
        un: "temps"
      },
      {
        ﻿a: "timetable",
        un: "calendrier"
      },
      {
        ﻿a: "tin",
        un: "étain"
      },
      {
        ﻿a: "tiny",
        un: "minuscule"
      },
      {
        ﻿a: "tip",
        un: "conseil"
      },
      {
        ﻿a: "tip over",
        un: "basculer"
      },
      {
        ﻿a: "tire",
        un: "pneu"
      },
      {
        ﻿a: "tired",
        un: "fatigué"
      },
      {
        ﻿a: "tire out",
        un: "se fatiguer"
      },
      {
        ﻿a: "tiring",
        un: "fatigant"
      },
      {
        ﻿a: "title",
        un: "titre"
      },
      {
        ﻿a: "to",
        un: "à"
      },
      {
        ﻿a: "today",
        un: "aujourd'hui"
      },
      {
        ﻿a: "toe",
        un: "orteil"
      },
      {
        ﻿a: "together",
        un: "ensemble"
      },
      {
        ﻿a: "toilet",
        un: "toilettes"
      },
      {
        ﻿a: "tomato",
        un: "tomate"
      },
      {
        ﻿a: "tomorrow",
        un: "demain"
      },
      {
        ﻿a: "ton",
        un: "tonne"
      },
      {
        ﻿a: "tone",
        un: "tonifier"
      },
      {
        ﻿a: "tongue",
        un: "langue"
      },
      {
        ﻿a: "tonight",
        un: "ce soir"
      },
      {
        ﻿a: "tonne",
        un: "tonne"
      },
      {
        ﻿a: "too",
        un: "aussi"
      },
      {
        ﻿a: "tool",
        un: "outil"
      },
      {
        ﻿a: "tooth",
        un: "dent"
      },
      {
        ﻿a: "top",
        un: "haut"
      },
      {
        ﻿a: "topic",
        un: "sujet"
      },
      {
        ﻿a: "total",
        un: "total"
      },
      {
        ﻿a: "totally",
        un: "totalement"
      },
      {
        ﻿a: "touch",
        un: "touche"
      },
      {
        ﻿a: "tough",
        un: "difficile"
      },
      {
        ﻿a: "tour",
        un: "tournée"
      },
      {
        ﻿a: "tourist",
        un: "touristique"
      },
      {
        ﻿a: "towards",
        un: "vers"
      },
      {
        ﻿a: "towel",
        un: "serviette"
      },
      {
        ﻿a: "tower",
        un: "tour"
      },
      {
        ﻿a: "town",
        un: "ville"
      },
      {
        ﻿a: "toy",
        un: "jouet"
      },
      {
        ﻿a: "trace",
        un: "tracer"
      },
      {
        ﻿a: "track",
        un: "piste"
      },
      {
        ﻿a: "trade",
        un: "commerce"
      },
      {
        ﻿a: "trading",
        un: "commerce"
      },
      {
        ﻿a: "tradition",
        un: "tradition"
      },
      {
        ﻿a: "traditional",
        un: "traditionnel"
      },
      {
        ﻿a: "traditionally",
        un: "traditionnellement"
      },
      {
        ﻿a: "traffic",
        un: "trafic"
      },
      {
        ﻿a: "train",
        un: "former"
      },
      {
        ﻿a: "training",
        un: "entraînement"
      },
      {
        ﻿a: "transfer",
        un: "transfert"
      },
      {
        ﻿a: "transform",
        un: "transformer"
      },
      {
        ﻿a: "translate",
        un: "traduire"
      },
      {
        ﻿a: "translation",
        un: "traduction"
      },
      {
        ﻿a: "transparent",
        un: "transparent"
      },
      {
        ﻿a: "transport",
        un: "transport"
      },
      {
        ﻿a: "transportation",
        un: "transport"
      },
      {
        ﻿a: "trap",
        un: "piège"
      },
      {
        ﻿a: "travel",
        un: "voyage"
      },
      {
        ﻿a: "traveller",
        un: "voyageur"
      },
      {
        ﻿a: "treat",
        un: "traiter"
      },
      {
        ﻿a: "treatment",
        un: "traitement"
      },
      {
        ﻿a: "tree",
        un: "arbre"
      },
      {
        ﻿a: "trend",
        un: "s'orienter"
      },
      {
        ﻿a: "trial",
        un: "procès"
      },
      {
        ﻿a: "triangle",
        un: "triangle"
      },
      {
        ﻿a: "trick",
        un: "astuce"
      },
      {
        ﻿a: "trip",
        un: "voyage"
      },
      {
        ﻿a: "tropical",
        un: "tropical"
      },
      {
        ﻿a: "trouble",
        un: "inquiéter"
      },
      {
        ﻿a: "trousers",
        un: "pantalon"
      },
      {
        ﻿a: "truck",
        un: "camion"
      },
      {
        ﻿a: true,
        un: "VRAI"
      },
      {
        ﻿a: "truly",
        un: "vraiment"
      },
      {
        ﻿a: "trust",
        un: "confiance"
      },
      {
        ﻿a: "truth",
        un: "vérité"
      },
      {
        ﻿a: "try",
        un: "essayer"
      },
      {
        ﻿a: "try on",
        un: "essayer"
      },
      {
        ﻿a: "try out",
        un: "essayer"
      },
      {
        ﻿a: "tube",
        un: "tube"
      },
      {
        ﻿a: "Tuesday",
        un: "Mardi"
      },
      {
        ﻿a: "tune",
        un: "régler"
      },
      {
        ﻿a: "tunnel",
        un: "tunnel"
      },
      {
        ﻿a: "turn",
        un: "tourner"
      },
      {
        ﻿a: "turn back",
        un: "revenir"
      },
      {
        ﻿a: "turn down",
        un: "refuser"
      },
      {
        ﻿a: "turn into",
        un: "devenir"
      },
      {
        ﻿a: "turn off",
        un: "éteindre"
      },
      {
        ﻿a: "turn on",
        un: "allumer"
      },
      {
        ﻿a: "turn out",
        un: "s'avérer"
      },
      {
        ﻿a: "turn over",
        un: "chiffre d'affaires"
      },
      {
        ﻿a: "turn round",
        un: "se retourner"
      },
      {
        ﻿a: "turn to",
        un: "se tourner vers"
      },
      {
        ﻿a: "turn up",
        un: "venez"
      },
      {
        ﻿a: "TV",
        un: "TV"
      },
      {
        ﻿a: "twelfth",
        un: "douzième"
      },
      {
        ﻿a: "twelve",
        un: "douze"
      },
      {
        ﻿a: "twentieth",
        un: "vingtième"
      },
      {
        ﻿a: "twenty",
        un: "vingt"
      },
      {
        ﻿a: "twice",
        un: "deux fois"
      },
      {
        ﻿a: "twin",
        un: "double"
      },
      {
        ﻿a: "twist",
        un: "torsion"
      },
      {
        ﻿a: "twisted",
        un: "tordu"
      },
      {
        ﻿a: "two",
        un: "deux"
      },
      {
        ﻿a: "type",
        un: "taper"
      },
      {
        ﻿a: "typical",
        un: "typique"
      },
      {
        ﻿a: "typically",
        un: "typiquement"
      },
      {
        ﻿a: "tyre",
        un: "pneu"
      },
      {
        ﻿a: "the unemployed",
        un: "les chômeurs"
      },
      {
        ﻿a: "the unexpected",
        un: "l'inattendu"
      },
      {
        ﻿a: "ugly",
        un: "laid"
      },
      {
        ﻿a: "ultimate",
        un: "ultime"
      },
      {
        ﻿a: "ultimately",
        un: "finalement"
      },
      {
        ﻿a: "umbrella",
        un: "parapluie"
      },
      {
        ﻿a: "unable",
        un: "incapable"
      },
      {
        ﻿a: "unacceptable",
        un: "inacceptable"
      },
      {
        ﻿a: "uncertain",
        un: "incertain"
      },
      {
        ﻿a: "uncle",
        un: "oncle"
      },
      {
        ﻿a: "uncomfortable",
        un: "inconfortable"
      },
      {
        ﻿a: "unconscious",
        un: "inconscient"
      },
      {
        ﻿a: "uncontrolled",
        un: "incontrôlé"
      },
      {
        ﻿a: "under",
        un: "sous"
      },
      {
        ﻿a: "underground",
        un: "souterrain"
      },
      {
        ﻿a: "underneath",
        un: "dessous"
      },
      {
        ﻿a: "understand",
        un: "comprendre"
      },
      {
        ﻿a: "understanding",
        un: "compréhension"
      },
      {
        ﻿a: "underwater",
        un: "sous l'eau"
      },
      {
        ﻿a: "underwear",
        un: "sous-vêtement"
      },
      {
        ﻿a: "undo",
        un: "défaire"
      },
      {
        ﻿a: "unemployed",
        un: "sans emploi"
      },
      {
        ﻿a: "unemployment",
        un: "chômage"
      },
      {
        ﻿a: "unexpected",
        un: "inattendu"
      },
      {
        ﻿a: "unexpectedly",
        un: "de façon inattendue"
      },
      {
        ﻿a: "unfair",
        un: "injuste"
      },
      {
        ﻿a: "unfairly",
        un: "injustement"
      },
      {
        ﻿a: "unfortunate",
        un: "malheureux"
      },
      {
        ﻿a: "unfortunately",
        un: "malheureusement"
      },
      {
        ﻿a: "unfriendly",
        un: "hostile"
      },
      {
        ﻿a: "unhappy",
        un: "malheureux"
      },
      {
        ﻿a: "uniform",
        un: "uniforme"
      },
      {
        ﻿a: "unimportant",
        un: "sans importance"
      },
      {
        ﻿a: "union",
        un: "union"
      },
      {
        ﻿a: "unique",
        un: "unique"
      },
      {
        ﻿a: "unit",
        un: "unité"
      },
      {
        ﻿a: "unite",
        un: "unir"
      },
      {
        ﻿a: "united",
        un: "uni"
      },
      {
        ﻿a: "universe",
        un: "univers"
      },
      {
        ﻿a: "university",
        un: "université"
      },
      {
        ﻿a: "unkind",
        un: "méchant"
      },
      {
        ﻿a: "unknown",
        un: "inconnu"
      },
      {
        ﻿a: "unless",
        un: "sauf si"
      },
      {
        ﻿a: "unlike",
        un: "contrairement à"
      },
      {
        ﻿a: "unlikely",
        un: "peu probable"
      },
      {
        ﻿a: "unload",
        un: "décharger"
      },
      {
        ﻿a: "unlucky",
        un: "malchanceux"
      },
      {
        ﻿a: "unnecessary",
        un: "inutile"
      },
      {
        ﻿a: "unpleasant",
        un: "désagréable"
      },
      {
        ﻿a: "unreasonable",
        un: "déraisonnable"
      },
      {
        ﻿a: "unsteady",
        un: "instable"
      },
      {
        ﻿a: "unsuccessful",
        un: "infructueux"
      },
      {
        ﻿a: "untidy",
        un: "désordonné"
      },
      {
        ﻿a: "until",
        un: "jusqu'à"
      },
      {
        ﻿a: "unusual",
        un: "inhabituel"
      },
      {
        ﻿a: "unusually",
        un: "exceptionnellement"
      },
      {
        ﻿a: "unwilling",
        un: "ne voulant pas"
      },
      {
        ﻿a: "unwillingly",
        un: "à contrecœur"
      },
      {
        ﻿a: "up",
        un: "en haut"
      },
      {
        ﻿a: "upon",
        un: "sur"
      },
      {
        ﻿a: "upper",
        un: "supérieur"
      },
      {
        ﻿a: "upset",
        un: "bouleversé"
      },
      {
        ﻿a: "upsetting",
        un: "bouleversant"
      },
      {
        ﻿a: "upside down",
        un: "à l'envers"
      },
      {
        ﻿a: "upstairs",
        un: "à l'étage"
      },
      {
        ﻿a: "upward",
        un: "vers le haut"
      },
      {
        ﻿a: "upwards",
        un: "vers le haut"
      },
      {
        ﻿a: "urban",
        un: "urbain"
      },
      {
        ﻿a: "urge",
        un: "exhorter"
      },
      {
        ﻿a: "urgent",
        un: "urgent"
      },
      {
        ﻿a: "us",
        un: "nous"
      },
      {
        ﻿a: "use",
        un: "utiliser"
      },
      {
        ﻿a: "used 1",
        un: "utilisé 1"
      },
      {
        ﻿a: "used 2",
        un: "utilisé 2"
      },
      {
        ﻿a: "used to",
        un: "habitué"
      },
      {
        ﻿a: "useful",
        un: "utile"
      },
      {
        ﻿a: "useless",
        un: "inutile"
      },
      {
        ﻿a: "user",
        un: "utilisateur"
      },
      {
        ﻿a: "use up",
        un: "épuiser"
      },
      {
        ﻿a: "usual",
        un: "habituel"
      },
      {
        ﻿a: "usually",
        un: "généralement"
      },
      {
        ﻿a: "vacation",
        un: "vacances"
      },
      {
        ﻿a: "valid",
        un: "valide"
      },
      {
        ﻿a: "valley",
        un: "vallée"
      },
      {
        ﻿a: "valuable",
        un: "précieux"
      },
      {
        ﻿a: "value",
        un: "valeur"
      },
      {
        ﻿a: "van",
        un: "van"
      },
      {
        ﻿a: "variation",
        un: "variation"
      },
      {
        ﻿a: "varied",
        un: "varié"
      },
      {
        ﻿a: "variety",
        un: "variété"
      },
      {
        ﻿a: "various",
        un: "divers"
      },
      {
        ﻿a: "vary",
        un: "varier"
      },
      {
        ﻿a: "vast",
        un: "vaste"
      },
      {
        ﻿a: "vegetable",
        un: "légume"
      },
      {
        ﻿a: "vehicle",
        un: "véhicule"
      },
      {
        ﻿a: "venture",
        un: "aventure"
      },
      {
        ﻿a: "version",
        un: "version"
      },
      {
        ﻿a: "vertical",
        un: "verticale"
      },
      {
        ﻿a: "very",
        un: "très"
      },
      {
        ﻿a: "via",
        un: "via"
      },
      {
        ﻿a: "victim",
        un: "victime"
      },
      {
        ﻿a: "victory",
        un: "victoire"
      },
      {
        ﻿a: "video",
        un: "vidéo"
      },
      {
        ﻿a: "view",
        un: "voir"
      },
      {
        ﻿a: "village",
        un: "village"
      },
      {
        ﻿a: "violence",
        un: "violence"
      },
      {
        ﻿a: "violent",
        un: "violent"
      },
      {
        ﻿a: "violently",
        un: "violemment"
      },
      {
        ﻿a: "virtually",
        un: "pratiquement"
      },
      {
        ﻿a: "virus",
        un: "virus"
      },
      {
        ﻿a: "visible",
        un: "visible"
      },
      {
        ﻿a: "vision",
        un: "vision"
      },
      {
        ﻿a: "visit",
        un: "visite"
      },
      {
        ﻿a: "visitor",
        un: "visiteur"
      },
      {
        ﻿a: "vital",
        un: "vital"
      },
      {
        ﻿a: "vocabulary",
        un: "vocabulaire"
      },
      {
        ﻿a: "voice",
        un: "voix"
      },
      {
        ﻿a: "volume",
        un: "volume"
      },
      {
        ﻿a: "vote",
        un: "voter"
      },
      {
        ﻿a: "wage",
        un: "salaire"
      },
      {
        ﻿a: "waist",
        un: "taille"
      },
      {
        ﻿a: "wait",
        un: "attendez"
      },
      {
        ﻿a: "waiter",
        un: "serveur"
      },
      {
        ﻿a: "wake",
        un: "se réveiller"
      },
      {
        ﻿a: "walk",
        un: "marcher"
      },
      {
        ﻿a: "walking",
        un: "marche"
      },
      {
        ﻿a: "walk out",
        un: "sortir"
      },
      {
        ﻿a: "walk up",
        un: "monter"
      },
      {
        ﻿a: "wall",
        un: "mur"
      },
      {
        ﻿a: "wallet",
        un: "portefeuille"
      },
      {
        ﻿a: "wander",
        un: "errer"
      },
      {
        ﻿a: "want",
        un: "vouloir"
      },
      {
        ﻿a: "war",
        un: "guerre"
      },
      {
        ﻿a: "warm",
        un: "chaud"
      },
      {
        ﻿a: "warmth",
        un: "chaleur"
      },
      {
        ﻿a: "warm up",
        un: "réchauffer"
      },
      {
        ﻿a: "warn",
        un: "avertir"
      },
      {
        ﻿a: "warning",
        un: "avertissement"
      },
      {
        ﻿a: "wash",
        un: "laver"
      },
      {
        ﻿a: "wash away",
        un: "laver"
      },
      {
        ﻿a: "washing",
        un: "lavage"
      },
      {
        ﻿a: "wash off",
        un: "laver"
      },
      {
        ﻿a: "wash out",
        un: "laver"
      },
      {
        ﻿a: "wash up",
        un: "se laver"
      },
      {
        ﻿a: "waste",
        un: "déchets"
      },
      {
        ﻿a: "watch",
        un: "montre"
      },
      {
        ﻿a: "watch out",
        un: "attention"
      },
      {
        ﻿a: "watch out for",
        un: "attention à"
      },
      {
        ﻿a: "water",
        un: "eau"
      },
      {
        ﻿a: "wave",
        un: "vague"
      },
      {
        ﻿a: "way",
        un: "chemin"
      },
      {
        ﻿a: "we",
        un: "nous"
      },
      {
        ﻿a: "weak",
        un: "faible"
      },
      {
        ﻿a: "weakness",
        un: "faiblesse"
      },
      {
        ﻿a: "wealth",
        un: "richesse"
      },
      {
        ﻿a: "weapon",
        un: "arme"
      },
      {
        ﻿a: "wear",
        un: "porter"
      },
      {
        ﻿a: "wear away",
        un: "s'user"
      },
      {
        ﻿a: "wear off",
        un: "se dissiper"
      },
      {
        ﻿a: "wear out",
        un: "épuiser"
      },
      {
        ﻿a: "weather",
        un: "météo"
      },
      {
        ﻿a: "web",
        un: "la toile"
      },
      {
        ﻿a: "website",
        un: "site web"
      },
      {
        ﻿a: "wedding",
        un: "mariage"
      },
      {
        ﻿a: "Wednesday",
        un: "Mercredi"
      },
      {
        ﻿a: "week",
        un: "semaine"
      },
      {
        ﻿a: "weekend",
        un: "fin de semaine"
      },
      {
        ﻿a: "weekly",
        un: "hebdomadaire"
      },
      {
        ﻿a: "weigh",
        un: "peser"
      },
      {
        ﻿a: "weight",
        un: "poids"
      },
      {
        ﻿a: "welcome",
        un: "accueillir"
      },
      {
        ﻿a: "well",
        un: "Bien"
      },
      {
        ﻿a: "well known",
        un: "bien connu"
      },
      {
        ﻿a: "west",
        un: "Ouest"
      },
      {
        ﻿a: "western",
        un: "occidental"
      },
      {
        ﻿a: "wet",
        un: "mouillé"
      },
      {
        ﻿a: "what",
        un: "quoi"
      },
      {
        ﻿a: "whatever",
        un: "peu importe"
      },
      {
        ﻿a: "wheel",
        un: "roue"
      },
      {
        ﻿a: "when",
        un: "quand"
      },
      {
        ﻿a: "whenever",
        un: "chaque fois que"
      },
      {
        ﻿a: "where",
        un: "où"
      },
      {
        ﻿a: "whereas",
        un: "alors que"
      },
      {
        ﻿a: "wherever",
        un: "partout où"
      },
      {
        ﻿a: "whether",
        un: "si"
      },
      {
        ﻿a: "which",
        un: "lequel"
      },
      {
        ﻿a: "while",
        un: "alors que"
      },
      {
        ﻿a: "whisper",
        un: "chuchoter"
      },
      {
        ﻿a: "whistle",
        un: "siffler"
      },
      {
        ﻿a: "white",
        un: "blanc"
      },
      {
        ﻿a: "who",
        un: "OMS"
      },
      {
        ﻿a: "whoever",
        un: "quiconque"
      },
      {
        ﻿a: "whole",
        un: "entier"
      },
      {
        ﻿a: "whom",
        un: "qui"
      },
      {
        ﻿a: "whose",
        un: "dont"
      },
      {
        ﻿a: "why",
        un: "pourquoi"
      },
      {
        ﻿a: "wide",
        un: "large"
      },
      {
        ﻿a: "widely",
        un: "largement"
      },
      {
        ﻿a: "width",
        un: "largeur"
      },
      {
        ﻿a: "wife",
        un: "épouse"
      },
      {
        ﻿a: "wild",
        un: "sauvage"
      },
      {
        ﻿a: "wildly",
        un: "sauvagement"
      },
      {
        ﻿a: "will",
        un: "volonté"
      },
      {
        ﻿a: "willing",
        un: "disposé"
      },
      {
        ﻿a: "willingly",
        un: "volontiers"
      },
      {
        ﻿a: "willingness",
        un: "volonté"
      },
      {
        ﻿a: "win",
        un: "gagner"
      },
      {
        ﻿a: "wind 1",
        un: "vent 1"
      },
      {
        ﻿a: "wind 2",
        un: "vent 2"
      },
      {
        ﻿a: "window",
        un: "fenêtre"
      },
      {
        ﻿a: "wine",
        un: "vin"
      },
      {
        ﻿a: "wing",
        un: "aile"
      },
      {
        ﻿a: "winner",
        un: "gagnant"
      },
      {
        ﻿a: "winning",
        un: "gagnant"
      },
      {
        ﻿a: "winter",
        un: "hiver"
      },
      {
        ﻿a: "wire",
        un: "fil"
      },
      {
        ﻿a: "wise",
        un: "sage"
      },
      {
        ﻿a: "wish",
        un: "souhait"
      },
      {
        ﻿a: "with",
        un: "avec"
      },
      {
        ﻿a: "withdraw",
        un: "retirer"
      },
      {
        ﻿a: "within",
        un: "dans"
      },
      {
        ﻿a: "without",
        un: "sans"
      },
      {
        ﻿a: "witness",
        un: "témoin"
      },
      {
        ﻿a: "woman",
        un: "femme"
      },
      {
        ﻿a: "wonder",
        un: "merveille"
      },
      {
        ﻿a: "wonderful",
        un: "merveilleux"
      },
      {
        ﻿a: "wood",
        un: "bois"
      },
      {
        ﻿a: "wooden",
        un: "en bois"
      },
      {
        ﻿a: "wool",
        un: "laine"
      },
      {
        ﻿a: "word",
        un: "mot"
      },
      {
        ﻿a: "work",
        un: "travail"
      },
      {
        ﻿a: "worker",
        un: "travailleur"
      },
      {
        ﻿a: "working",
        un: "fonctionnement"
      },
      {
        ﻿a: "work out",
        un: "entraînement"
      },
      {
        ﻿a: "world",
        un: "monde"
      },
      {
        ﻿a: "worried",
        un: "inquiet"
      },
      {
        ﻿a: "worry",
        un: "inquiétude"
      },
      {
        ﻿a: "worrying",
        un: "inquiétant"
      },
      {
        ﻿a: "worse",
        un: "pire"
      },
      {
        ﻿a: "worship",
        un: "culte"
      },
      {
        ﻿a: "worst",
        un: "pire"
      },
      {
        ﻿a: "worth",
        un: "valeur"
      },
      {
        ﻿a: "would",
        un: "serait"
      },
      {
        ﻿a: "wound 1",
        un: "blessure 1"
      },
      {
        ﻿a: "wounded",
        un: "blessés"
      },
      {
        ﻿a: "wrap",
        un: "envelopper"
      },
      {
        ﻿a: "wrapping",
        un: "emballage"
      },
      {
        ﻿a: "wrist",
        un: "poignet"
      },
      {
        ﻿a: "write",
        un: "écrire"
      },
      {
        ﻿a: "write back",
        un: "répondre"
      },
      {
        ﻿a: "write down",
        un: "écrire"
      },
      {
        ﻿a: "writer",
        un: "écrivain"
      },
      {
        ﻿a: "writing",
        un: "en écrivant"
      },
      {
        ﻿a: "written",
        un: "écrit"
      },
      {
        ﻿a: "wrong",
        un: "faux"
      },
      {
        ﻿a: "wrongly",
        un: "à tort"
      },
      {
        ﻿a: "yard",
        un: "cour"
      },
      {
        ﻿a: "yawn",
        un: "bâillement"
      },
      {
        ﻿a: "yeah",
        un: "Ouais"
      },
      {
        ﻿a: "year",
        un: "année"
      },
      {
        ﻿a: "yellow",
        un: "jaune"
      },
      {
        ﻿a: "yes",
        un: "Oui"
      },
      {
        ﻿a: "yesterday",
        un: "hier"
      },
      {
        ﻿a: "yet",
        un: "encore"
      },
      {
        ﻿a: "you",
        un: "toi"
      },
      {
        ﻿a: "young",
        un: "jeune"
      },
      {
        ﻿a: "your",
        un: "ton"
      },
      {
        ﻿a: "yours",
        un: "le vôtre"
      },
      {
        ﻿a: "yourself",
        un: "toi-même"
      },
      {
        ﻿a: "youth",
        un: "jeunesse"
      },
      {
        ﻿a: "zero",
        un: "zéro"
      },
      {
        ﻿a: "zone",
        un: "zone"
      }
    
  ]
  export default function Home() {
    const [data, setData] = useState([]); // État pour stocker les données
    const [loading, setLoading] = useState(true); // Pour indiquer le chargement
    const [error, setError] = useState(null); // Pour gérer les erreurs
    const [currentWord, setCurrentWord] = useState(null); // Mot actuel pour le quiz
    const [inputValue, setInputValue] = useState([]); // Réponse de l'utilisateur sous forme de tableau de lettres
    const [score, setScore] = useState(0); // Compteur de score
    const [correctLetters, setCorrectLetters] = useState([]); // Suivi des lettres correctes
    const [showAnswer, setShowAnswer] = useState(false); // Pour révéler la réponse
    const inputRefs = useRef([]); // Références pour chaque cube (input de chaque lettre)

    // Fonction pour initialiser les données depuis un objet
    const initializeData = () => {
        setData(wordsData); // Initialiser l'état avec les données définies ci-dessus
        setLoading(false); // Arrêter l'indicateur de chargement
    };

    useEffect(() => {
        initializeData(); // Charger les données à partir de l'objet lors du montage du composant
    }, []);

    // Fonction pour choisir un mot aléatoire de la liste
    const chooseRandomWord = () => {
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentWord(data[randomIndex]);
            setInputValue(new Array(data[randomIndex]["a"].length).fill('')); // Initialiser un tableau vide pour chaque lettre
            setCorrectLetters(new Array(data[randomIndex]["a"].length).fill(false)); // Réinitialiser les lettres correctes
            setShowAnswer(false); // Cacher la réponse pour le nouveau mot
        }
    };

    // Appel à la fonction pour choisir un mot lorsque les données sont disponibles
    useEffect(() => {
        if (data.length > 0) {
            chooseRandomWord();
        }
    }, [data]);

    // Focus sur le premier cube lors du chargement ou lors du changement de mot
    useEffect(() => {
        if (currentWord) {
            setTimeout(() => {
                if (inputRefs.current[0]) {
                    inputRefs.current[0].focus(); // Mettre le focus sur le premier cube
                }
            }, 0);
        }
    }, [currentWord]);

    // Fonction pour gérer la saisie de lettres dans les cubes
    const handleLetterChange = (index, event) => {
        const value = event.target.value.toLowerCase();
        const newInputValue = [...inputValue];

        if (/^[a-z]$/.test(value)) { // Vérifier si c'est une lettre
            newInputValue[index] = value; // Ajouter la lettre
            setInputValue(newInputValue);

            if (index < inputRefs.current.length - 1) {
                setTimeout(() => {
                    if (inputRefs.current[index + 1]) {
                        inputRefs.current[index + 1].focus();
                    }
                }, 0);
            }

            // Vérification des lettres
            const newCorrectLetters = [...correctLetters];
            newCorrectLetters[index] = value === currentWord["a"][index].toLowerCase();
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
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        } else if (event.key === 'Backspace' && inputValue[index] !== '') {
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
                            {currentWord["a"].split('').map((letter, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className={`cube ${correctLetters[index] ? 'correct' : inputValue[index] ? 'incorrect' : ''}`}
                                    maxLength={1}
                                    value={inputValue[index] || ''}
                                    onChange={(e) => handleLetterChange(index, e)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                />
                            ))}
                        </div>

                        <p>Score : {score}</p>

                        <button onClick={handleShowAnswer}>Je ne sais pas</button>

                        {showAnswer && <p>Le mot correct est : <strong>{currentWord["a"]}</strong></p>}
                    </>
                )}
            </div>
        </div>
    );
}