class VueVelo{
    constructor(){
        this.html = document.getElementById("html-vue-jeu").innerHTML;
        this.velo = null;
    }

    initialiserVelo(velo){
        this.velo = velo;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("velo-modele").innerHTML = this.velo.modele;
        document.getElementById("velo-marque").innerHTML = this.velo.marque;
        document.getElementById("velo-prix").innerHTML = this.velo.prix;


    }



}
