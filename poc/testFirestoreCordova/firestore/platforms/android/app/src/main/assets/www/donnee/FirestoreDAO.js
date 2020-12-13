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
    ajouter(score){

        if(this.listeMeilleurScores.length > 0)
            score.id = this.listeMeilleurScores[this.listeMeilleurScores.length-1].id + 1;
        else
            score.id = 0;

        this.listeMeilleurScores[score.id] = score;

        localStorage['meilleurScores'] = JSON.stringify(this.listeMeilleurScores);
        console.log("JSON.stringify(this.listeMeilleurScores) : " +
                    JSON.stringify(this.listeMeilleurScores));
        //--------------------------------------
         var options = {
            "datePrefix": '__DATE:',
            "fieldValueDelete": "__DELETE",
            "fieldValueServerTimestamp" : "__SERVERTIMESTAMP",
            "persist": true,
            "config" : {}
        };
        //if (cordova.platformId === "browser") {
            //console.log("cordova.platformId === browser");
            options.config = {
                apiKey: "AIzaSyAWosaGuJOPDcYc5UBN3nPS2YQ4WPlI4iE",
                authDomain: "localhost",
                projectId: "barbecue-6d70d"
            };
        //}
 
        Firestore.initialise(options).then(function(db) {
        // Add a second document with a generated ID.
            //console.log("Firestore.initialise",db);
        db.get().collection("MeilleurScores").add({
            nom: "Alan",
            score: "48",
            dateScore: "2014-07-30T11:25:00Z",
            id: 3
        })
            .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
            .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        });
        //---------------------------------------------------
    }



}
