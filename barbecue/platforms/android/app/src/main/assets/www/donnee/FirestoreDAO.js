class FirestoreDAO{
    constructor(){
        
        /*this.listeMeilleurScores = [
            {nom:"Simon",score:"13",dateScore:"24/10/20",id:0},
            {nom:"Alexandre",score:"14",dateScore:"30/11/20",id:1},
            {nom:"Guillaume",score:"14",dateScore:"25/11/20",id:2},
            {nom:"Esteban",score:"15",dateScore:"01/12/20",id:3}]*/

        this.listeMeilleurScores = [];
        var firebaseConfig = {
            apiKey: "AIzaSyA1eTUjMEhvujywhyIt_HHOXxePknm5w0w",
            authDomain: "barbecue-6d70d.firebaseapp.com",
            databaseURL: "https://barbecue-6d70d.firebaseio.com",
            projectId: "barbecue-6d70d",
            storageBucket: "barbecue-6d70d.appspot.com",
            messagingSenderId: "154873546215",
            appId: "1:154873546215:web:ad77a1a104198e31afe942"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
    }
    

    lister()
    {

        /*if(localStorage['meilleurScores']){
            this.listeMeilleurScores = JSON.parse(localStorage['meilleurScores']);
        }
        for(let position in this.listeMeilleurScores){
            let score = new Score(this.listeMeilleurScores[position].nom,
                               this.listeMeilleurScores[position].score,
                               this.listeMeilleurScores[position].dateScore,
                               this.listeMeilleurScores[position].id);
            this.listeMeilleurScores[score.id] = score;
        }*/
        //------------------------Code Firestore---------------------------
        var db = firebase.firestore();
        db.collection("MeilleurScores").withConverter(convertisseurScore).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`);
            var score = doc.data();
            console.log(score.toString());
            this.listeMeilleurScores[score.id] = score;
            });
        });
        
        
        //-----------------------------------------------------------------
        return this.listeMeilleurScores;
    }
    
    ajouter(score)
    {
        var db = firebase.firestore();
        var dateActuelle = firebase.firestore.Timestamp.fromDate(new Date());
        if(this.listeMeilleurScores.length > 0)
            score.id = this.listeMeilleurScores[this.listeMeilleurScores.length-1].id + 1;
        else
            score.id = 0;

        db.collection("MeilleurScores").add({
            nom: score.nom,
            id: score.id,
            score: score.score,
            dateScore: dateActuelle
        })
        .then(function(docRef) {
            console.log("Document écrit avec l'ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Erreur d'ajout de document: ", error);
        });
        /*this.listeMeilleurScores[score.id] = score;

        localStorage['meilleurScores'] = JSON.stringify(this.listeMeilleurScores);
        console.log("JSON.stringify(this.listeMeilleurScores) : " +
                    JSON.stringify(this.listeMeilleurScores));*/
    }
   
    modifier(nouveauScore)
    {
        var db = firebase.firestore();
        let idFirestore = "";
        let ancienScore = new Score(null,null,null,null);
        var dateActuelle = firebase.firestore.Timestamp.fromDate(new Date());
        
        //cette fonction sert à rechercher dans la base s'il y a un score pour "pseudo". S'il y a un score il faut renvoyer le score pour pouvoir comparer et ensuite call la fonction modifier, s'il n'y a pas de score il faut call la fonction ajouter
        db.collection("MeilleurScores").where("nom", "==", nouveauScore.nom).withConverter(convertisseurScore)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var scoreFirestore = doc.data();
                ancienScore = scoreFirestore;
                idFirestore = doc.id;
                
                if(ancienScore.score < nouveauScore.score)
                {

                    //----------on modifie le score ainsi que la date en fonction du pseudo, l'id n'est pas modifiée----------
                    //console.log("ID firestore =", idFirestore);
                    var scoreAModifier = db.collection("MeilleurScores").doc(idFirestore);

                    /*return scoreAModifier.update({ ANCIEN TEST NON FONCTIONNEL
                        score: nouveauScore.score,
                        dateScore: dateActuelle
                    })
                    .then(function() {
                        console.log("Document successfully updated!");
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });*/
                    
                    // change le score
                    db.collection("MeilleurScores").doc(idFirestore).update({
                        score: nouveauScore.score,
                        dateScore: dateActuelle
                    })
                    .then(function() {
                        console.log("Document mis à jour!");
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Erreur de mise a jour du document: ", error);
                    });

                } 
                
            });
        })
        .catch(function(error) {
            console.log("Erreur en essayant de récupérer le document: ", error);
        });
    
    }

}
