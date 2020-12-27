var largeurFenetre = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var hauteurFenetre = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var surfaceTravail = Snap(largeurFenetre*0.991, hauteurFenetre*0.97);
var loaderVisuel = surfaceTravail.g();
var arrierePlan1 = loaderVisuel.image("librairieGraphique/images/arrierePlan.jpg", 0,0, largeurFenetre, hauteurFenetre);
var filtreFlou = surfaceTravail.filter(Snap.filter.blur(4));
arrierePlan1.attr({ filter: filtreFlou});

var table = loaderVisuel.image("librairieGraphique/images/table.png", largeurFenetre*0.1, hauteurFenetre*0.6, largeurFenetre*0.4, hauteurFenetre*0.35);
var barbecue = loaderVisuel.image("librairieGraphique/images/bbq.png", largeurFenetre*0.6, hauteurFenetre*0.6, largeurFenetre*0.2, hauteurFenetre*0.3);
var saucisse = loaderVisuel.image("librairieGraphique/images/saucisse.png", largeurFenetre*0.135, hauteurFenetre*0.55, largeurFenetre*0.1, hauteurFenetre*0.15);
saucisse.drag();
var steak1 = loaderVisuel.image("librairieGraphique/images/steak.png", largeurFenetre*0.275, hauteurFenetre*0.55, largeurFenetre*0.05, hauteurFenetre*0.1);
steak1.drag();
var steak2 = loaderVisuel.image("librairieGraphique/images/steak.png", largeurFenetre*0.35, hauteurFenetre*0.55, largeurFenetre*0.05, hauteurFenetre*0.1);
steak2.drag();
var listeViandes = [saucisse, steak1, steak2];
var cuisson = [0, 0, 0];

var timer = 30;
var points = 0;
var estGagne = false;

var hitbox = barbecue.getBBox();
var posSaucisse = saucisse.getBBox();

var i = setInterval(function() {
        for (n = 0; n < listeViandes.length; n++) {
                var viande = listeViandes[n];
                posViande = viande.getBBox();
                //console.log(posViande.cx);
                //console.log(posViande.cy);
                if (Snap.path.isPointInsideBBox(hitbox, posViande.cx, posViande.cy)) {
                        cuisson[n]++;
                        console.log(cuisson);
                }
                if (cuisson[n] == 10) {
                        viande.remove();
                        if (n == 0) viande = loaderVisuel.image("librairieGraphique/images/saucisse-cuite.png", posViande.x, posViande.y, posViande.width, posViande.height);
                        else viande = loaderVisuel.image("librairieGraphique/images/steak-cuit.png", posViande.x, posViande.y, posViande.width, posViande.height);
                        viande.drag();
                        listeViandes[n] = viande;
                }
                if (cuisson[n] == 20) {
                        viande.remove();
                        if (n == 0) viande = loaderVisuel.image("librairieGraphique/images/saucisse-cramée.png", posViande.x, posViande.y, posViande.width, posViande.height);
                        else viande = loaderVisuel.image("librairieGraphique/images/steak-cramé.png", posViande.x, posViande.y, posViande.width, posViande.height);
                        viande.drag();
                        listeViandes[n] = viande;
                }
                if (cuisson[0] > 20 && cuisson[1] > 20 && cuisson[2] > 20) {
                        clearInterval(i);
                        afficherFinPartie();
                }
                if (timer == 0) {
                        clearInterval(i);
                        afficherFinPartie();
                }
                
        }
        console.log(timer);
        timer--;
}, 1000);

function afficherFinPartie() {
        for (n = 0; n < cuisson.length; n++) {
                scoreParViande = cuisson[n];
                if (scoreParViande >= 10 && scoreParViande < 20) {
                        points += (((scoreParViande-10)*20) + 50);
                }
        }
        console.log("SCORE : " + points);
}