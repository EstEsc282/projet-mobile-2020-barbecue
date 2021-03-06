class Application{
    constructor(window, firestoreDAO, vueMenu, vueJeu, vueClassementMeilleurs, vueChargement){
        this.window = window;
        this.firestoreDAO = firestoreDAO;

        this.vueClassementMeilleurs = vueClassementMeilleurs;
        this.vueClassementMeilleurs.initialiserActionAjouterScore(score =>this.actionAjouterScore(score));
        this.vueJeu = vueJeu;
        this.vueMenu = vueMenu;

        this.vueChargement = vueChargement;

        this.window.addEventListener("hashchange", () =>this.naviguer());

        this.naviguer();
        
        //document.addEventListener('deviceready', () => this.initialiserNavigation(), false);

    }
    
    
   /* initialiserNavigation(){
    
        console.log("Application-->initialiserNavigation");
        
        this.window.addEventListener("hashchange", () =>this.naviguer());
        
        setTimeout(() =>this.naviguer(), 3000);
           
    }*/

    naviguer(){
        let hash = window.location.hash;

        if(!hash){
            this.vueChargement.afficher();
            //this.vueMenu.afficher();

        }else if(hash.match(/^#menu/)){
            this.vueMenu.afficher();

        }else if(hash.match(/^#lancer-partie/)){

            this.vueJeu.afficher();
        }else{
            this.vueClassementMeilleurs.initialiserListeMeilleurScores(this.firestoreDAO.lister());
            this.vueClassementMeilleurs.ajouter();
            this.vueClassementMeilleurs.afficher();

        }
    }
    actionAjouterScore(score){
        this.firestoreDAO.ajouter(score);
        //this.window.location.hash = "#menu";
    }


}


new Application(window,new FirestoreDAO(), new VueMenu(), new VueJeu(), 
                    new VueClassementMeilleurs(), new VueChargement());
