class Score{
    constructor(nom,score,dateScore,id)
    {
    this.id = id;
    this.score = score;
    this.nom = nom;
    this.dateScore = dateScore;
    }
    toString() {
        return this.nom + ', ' + this.score + ', ' + this.dateScore + ', ' + this.id;
    }

}
// convertisseur entre firestore et JS
    var convertisseurScore = {
    toFirestore: function(score) {
        return {
            nom: score.nom,
            score: score.score,
            id: score.id,
            dateScore: score.dateScore
            }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        var date = new Date(data.dateScore.toDate());
        return new Score(data.nom, data.score, date.toLocaleDateString("fr-FR"), data.id)
    }
    }