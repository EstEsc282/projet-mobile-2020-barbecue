class VueJeu{

    constructor(){
        this.html = document.getElementById("html-vue-jeu").innerHTML;
    }

    initialiserViandes(){
        this.viandes = [];
        this.viandes.add(new Viande("merguez"));
        this.viandes.add(new Viande("cote-de-porc"));
        this.viandes.add(new Viande("cote-de-porc"));
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        //mettre le code de Jeu.js ici
        /* let listeViandesHTML = document.getElementById("liste-viandes");
        const listeViandesInnerHTML = listeViandesHTML.innerHTML;
        let listeViandesHTMLRemplacement = "";

        for(var viande in this.viandes){
            let listeViandesInnerHTMLRemplacement = listeViandesInnerHTML;

            listeViandesInnerHTMLRemplacement = listeViandesHTMLRemplacement.replace("{viande.url}", "decoration/illustration/"+viande.type+".png");
            listeViandesHTMLRemplacement += listeViandesInnerHTML;
        }

        listeViandesHTML.innerHTML = listeViandesHTMLRemplacement; */


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
