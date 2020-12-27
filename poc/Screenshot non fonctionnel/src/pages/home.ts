import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Screenshot } from '@iconic-native/screenshot';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage{
    screen: any;
    state: boolean = false;
    
    constructor(public navCtrl: NavController, private screenshot: Screenshot){
    
    }
    reset(){
        var self = this;
        setTimeout(function(){
        slf.state = false;
        }, 1000);
    }
    
    screenShot(){
    
    this.screenShot.save('jpg',80,'myScreenShot.jpg').then(res => {
    this.screen = res.filePath;
    this.state = true;
    this.reset();
    });
    }
    
    screenShotURI(){
    
    this.screenShot.URI(80).then(res => {
    this.screen = res.URI;
    this.state = true;
    this.reset();
    });
    }
}