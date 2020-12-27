class VueMenu{
    constructor(){

        this.html = document.getElementById("html-vue-menu").innerHTML;
    }


    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        var region = new ZingTouch.Region(document.getElementById('child'));
        var target = document.getElementById('child');

        region.bind(target, 'swipe', function(e){
            console.log(e.detail.data[0].velocity);
            console.log(e.detail.data[0].currentDirection);
            if(e.detail.data[0].currentDirection <= 270 && e.detail.data[0].currentDirection >= 90 && e.detail.data[0].velocity <= 5 && e.detail.data[0].velocity >= 0.2){
                window.location.hash='#liste-meilleur-scores';
            }
        });

        //let listeVelo = document.getElementById("liste-velo");
        //const listeVeloInnerHTML = listeVelo.innerHTML;
        //let listeVeloHTMLRemplacement = "";

        //listeVelo.innerHTML = listeVeloHTMLRemplacement;
    }


}
