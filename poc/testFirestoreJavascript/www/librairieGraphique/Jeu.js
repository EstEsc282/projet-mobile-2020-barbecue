function lancerJeu() {

                        var largeurFenetre = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

                        var hauteurFenetre = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

                        var surfaceTravail = Snap(largeurFenetre*0.991, hauteurFenetre*0.97);

                        var loaderVisuel = surfaceTravail.g();

                        var arrierePlan1 = loaderVisuel.image("librairieGraphique/images/arrierePlan.jpg", 0,0, largeurFenetre, hauteurFenetre);

                        var filtreFlou = surfaceTravail.filter(Snap.filter.blur(4));

                        arrierePlan1.attr({ filter: filtreFlou});

                        var table = loaderVisuel.image("librairieGraphique/images/table.png", largeurFenetre*0.1, hauteurFenetre*0.6, largeurFenetre*0.4, hauteurFenetre*0.35);

                        var barbecue = loaderVisuel.image("librairieGraphique/images/bbq.png", largeurFenetre*0.6, hauteurFenetre*0.6, largeurFenetre*0.2, hauteurFenetre*0.3);

                        var sauscisse = loaderVisuel.image("librairieGraphique/images/sauscisse.png", largeurFenetre*0.135, hauteurFenetre*0.55, largeurFenetre*0.1, hauteurFenetre*0.15);
                        sauscisse.drag();

                        var steak1 = loaderVisuel.image("librairieGraphique/images/steak.png", largeurFenetre*0.275, hauteurFenetre*0.55, largeurFenetre*0.05, hauteurFenetre*0.1);
                        steak1.drag();

                        var steak2 = loaderVisuel.image("librairieGraphique/images/steak.png", largeurFenetre*0.35, hauteurFenetre*0.55, largeurFenetre*0.05, hauteurFenetre*0.1);
                        steak2.drag();

                        var regroupement = surfaceTravail.group(sauscisse, steak1, steak2);                        
                }

lancerJeu();