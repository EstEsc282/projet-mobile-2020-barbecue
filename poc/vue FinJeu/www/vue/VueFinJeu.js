class VueFinJeu{
    constructor(){

        this.html = document.getElementById("html-vue-finJeu").innerHTML;
    }


    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }


}
