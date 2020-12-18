# projet-barbecue

Résumé du projet :

Application jeu d'un simulateur de cuisson d'aliments sur un barbecue.

Règles du Jeu :
Cuire les morceaux de viandes sur le barbecue, mais attention ! Si vous les cuisez trop longtemps, c'est perdu ! Vous avez 1 à 2 minutes pour cuire le plus de viandes possibles !

Technologies utilisées : 
-La base de données FireStore pour enregistrer le classement des meilleurs scores de chaque joueur
-La librairie graphique SnapSVG pour jouer au jeu 
-Cordova pour tout le projet
-gesture swipe pour accéder au classement
-screenshot du score à la fin
-lock screen en format paysage


Possibilités d'ajout : 
1 Page Classement local de tout les scores effectués sur l'appareil
-localstorage des scores de toutes les parties faites sur cet appareil



1 Page Menu (avec un beau arrière plan)
1 Page Classement (avec classement des meilleurs scores sur firestore)
1 Page Jeu : Cuire des morceaux de viande sans les cramer, sinon perdu
1 Page Fin de Jeu : avec affichage du score obtenu + bouton screenshot



Déroulement du Jeu : Lancement->Page de chargement avec tutoriel->menu ,swipe pour classement en ligne,bouton jouer->page de jeu avec le jeu->fin de partie entrer le pseudo +enregistrement du score si celui-ci est plus grand que celui qui est sur Firebase pour le même pseudonyme
