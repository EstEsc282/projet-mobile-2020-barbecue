class FirestoreDAO{
    constructor(){
        
        this.listeMeilleurScores = [
            {nom:"Simon",score:"13",dateScore:"24/10/20",id:0},
            {nom:"Alexandre",score:"14",dateScore:"30/11/20",id:1},
            {nom:"Guillaume",score:"14",dateScore:"25/11/20",id:2},
            {nom:"Esteban",score:"15",dateScore:"01/12/20",id:3}]

        //this.listeMeilleurScores = [];

    }

    lister(){

        if(localStorage['meilleurScores']){
            this.listeMeilleurScores = JSON.parse(localStorage['meilleurScores']);
        }
        for(let position in this.listeMeilleurScores){
            let score = new Score(this.listeMeilleurScores[position].nom,
                               this.listeMeilleurScores[position].score,
                               this.listeMeilleurScores[position].dateScore,
                               this.listeMeilleurScores[position].id);
            this.listeMeilleurScores[score.id] = score;
        }

        return this.listeMeilleurScores;
    }
   /* ajouter(nouveauMeilleurScore){

        if(this.listeVelo.length > 0)
            velo.id = this.listeVelo[this.listeVelo.length-1].id + 1;
        else
            velo.id = 0;

        this.listeVelo[velo.id] = velo;

        localStorage['velo'] = JSON.stringify(this.listeVelo);
        console.log("JSON.stringify(this.listeVelo) : " +
                    JSON.stringify(this.listeVelo));

    }*/



}
