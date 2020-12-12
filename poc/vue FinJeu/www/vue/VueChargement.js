class VueChargement{
    constructor(){
        this.html = document.getElementById("html-vue-chargement").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }


}
