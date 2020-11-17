class Application{
    constructor(window, firestoreDAO, vueMenu, vueJeu, vueClassementMeilleurs){
        this.window = window;
        this.firestoreDAO = firestoreDAO;

        this.vueClassementMeilleurs = vueClassementMeilleurs;
        this.vueJeu = vueJeu;
        this.vueMenu = vueMenu;


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

            this.vueMenu.afficher();

        }else if(hash.match(/^#lancer-partie/)){

            this.vueJeu.afficher();
        }else{
            this.vueClassementMeilleurs.initialiserListeMeilleurScores(this.firestoreDAO.lister());
            this.vueClassementMeilleurs.afficher();

        }
    }


}



new Application(window,new FirestoreDAO(), new VueMenu(), new VueJeu(), new VueClassementMeilleurs());
