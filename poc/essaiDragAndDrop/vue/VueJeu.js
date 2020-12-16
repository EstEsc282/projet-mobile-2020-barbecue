class VueJeu{

    constructor(){
        this.html = document.getElementById("html-vue-jeu").innerHTML;
    }

    initialiserViandes(){
        this.viandes = [];
        this.viandes.add(new Viande("saucisse"));
        this.viandes.add(new Viande("steak"));
        this.viandes.add(new Viande("steak"));
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        /*var script = document.createElement('script');           
        script.src =  "librairieGraphique/Jeu.js";
        document.getElementsByTagName("body")[0].innerHTML = 
        document.getElementsByTagName("body")[0].appendChild(script);*/

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "librairieGraphique/Jeu.js";
        document.head.appendChild(script);

        eval(script);
    }

}
