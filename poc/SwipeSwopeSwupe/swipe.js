var counter = 0;
var region = new ZingTouch.Region(document.getElementById('parent'));
var target = document.getElementById('child');

region.bind(target, 'pan', function(e){
  counter++;
  document.getElementById('output').innerHTML = 
    "Input currently panned: " + counter + " times";
});
        region.bind(target, 'swipe', function(e){
            console.log("au SECOURS");
            console.log(e.detail.data[0].velocity);
            console.log(e.detail.data[0].currentDirection);
            if(e.detail.data[0].currentDirection <= 230 && e.detail.data[0].currentDirection >= 130 ){
                console.log(e.detail.data[0].currentDirection);
                this.html.href="liste-meilleur-scores";
            }
        });