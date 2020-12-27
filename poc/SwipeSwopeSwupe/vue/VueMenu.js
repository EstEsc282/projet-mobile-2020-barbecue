class VueMenu{
    constructor(){

        this.html =document.getElementById("html-vue-menu").innerHTML;
    }


    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        
        
        var counter = 0;
var region = new ZingTouch.Region(document.getElementById('child'));
var target = document.getElementById('child');
        
        region.bind(target, 'swipe', function(e){
            console.log(e.detail.data[0].velocity);
            console.log(e.detail.data[0].currentDirection);
            if(e.detail.data[0].currentDirection <= 280 && e.detail.data[0].currentDirection >= 130 ){
                console.log(e.detail.data[0].currentDirection); 
                window.location.hash='#liste-meilleur-scores';
            }
        });
        
        
        
        
        
        
        
        
        
        /*var zt = new ZingTouch.Region(document.body);
        new ZingTouch.Swipe({
        numInputs: 1,
        maxRestTime: 100,
        escapeVelocity: 0.25
        });
        
        var container = document.getElementById('container');

        zt.bind(container, 'swipe', function(e){
            console.log("au SECOURS");
            console.log(e.detail.data[0].velocity);
            console.log(e.detail.data[0].currentDirection);
        }, false);*/
        //let listeVelo = document.getElementById("liste-velo");
        //const listeVeloInnerHTML = listeVelo.innerHTML;
        //let listeVeloHTMLRemplacement = "";

        //listeVelo.innerHTML = listeVeloHTMLRemplacement;
    }


}

/*

        <div class="swiper-slide">
            <div data-swiper-parallax="500" data-swiper-parallax-opacity="0"> Slide 2</div>
            <div class="page-swiper">
                <h1>Classement des meilleurs scores</h1>
            <a class="action" href="#liste-meilleur-scores">Glisser vers la droite pour acceder au classement</a>
            </div>
        </div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
*/