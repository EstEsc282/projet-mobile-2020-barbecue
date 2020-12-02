# projet-initial

Résumé du projet :

Application jeu d'un simulateur de cuisson d'aliments sur un barbecue.


Technologies utilisées : 
-La base de données FireStore pour enregistrer le classement des meilleurs scores de chaque joueur
-La librairie graphique SnapSVG pour jouer au jeu 
-Cordova pour tout le projet
-gesture swipe pour accéder au classement
-screenshot du score à la fin


-lock screen en format paysage

Possibilités d'ajout : 
-localstorage des scores de toutes les parties faites sur cet appareil

1 Page Menu (avec en arrière plan un barbecue qui tourne)
1 Page Classement (avec classement des meilleurs scores sur firestore)
1 Page Classement local de tout les scores effectués sur l'appareil
1 Page Jeu : Cuire des morceaux de viande sans les cramer, sinon perdu



Déroulement du Jeu : Lancement->Page de chargement avec tutoriel->menu avec choix de pseudonyme,swipe pour classement en ligne,bouton jouer->page de jeu avec le jeu->fin de partie enregistrement du score si celui-ci est plus grand que celui qui est sur Firebase pour le même pseudonyme
