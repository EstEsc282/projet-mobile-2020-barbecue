class VueJeu{

    constructor(){
        this.html = document.getElementById("html-vue-jeu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        //mettre le code de Jeu.js ici

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
