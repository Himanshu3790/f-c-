
function startClassifing() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4pGVFSwi8/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)

}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("dected_sound").innerHTML= "I can hear the sound of  -" + results[0].label;
        document.getElementById("animal_accuracy").innerHTML= "Accuracy of sound -" + (results[0].confidence*100).toFixed(2);

        dog=dogument.getElementById("img");
        cat=document.getElementById("img");
        if (results[0].label == "cat" ){
            dog.src="one-cute-dog-white-background_1308-44313-removebg-preview.png"
            
        }
        else{
            cat.src="stock-vector-cute-grey-cat-cartoon-1044708187-removebg-preview.png"
        }
    }


}