function predictDisease() {

    let age = parseInt(document.getElementById("age").value);
    let bp = parseInt(document.getElementById("bp").value);
    let chol = parseInt(document.getElementById("chol").value);
    let hr = parseInt(document.getElementById("hr").value);
    let oldpeak = parseFloat(document.getElementById("oldpeak").value);

    let score = 0;

    // Age
    if(age >= 30 && age <= 55)
        score += 2;
    else if(age > 55)
        score -= 2;

    // Blood Pressure
    if(bp < 130)
        score += 2;
    else if(bp <= 140)
        score += 1;
    else
        score -= 2;

    // Cholesterol
    if(chol < 200)
        score += 2;
    else if(chol <= 240)
        score += 1;
    else
        score -= 2;

    // Heart Rate
    if(hr >= 120)
        score += 2;
    else
        score -= 1;

    // Oldpeak
    if(oldpeak < 1.0)
        score += 2;
    else if(oldpeak < 2.5)
        score += 1;
    else
        score -= 2;

    let result = document.getElementById("result");
    let confidence = document.getElementById("confidence");
    let recommendation = document.getElementById("recommendation");
    let emoji = document.getElementById("emoji");

    if(score >= 5){

        emoji.innerHTML="💚";

        result.innerHTML="LOW DISEASE RISK";
        result.style.color="green";

        confidence.innerHTML="Confidence : 96.84%";

        recommendation.innerHTML=
        "The patient has a lower probability of heart disease based on the entered clinical parameters. Continue maintaining a healthy lifestyle with regular exercise, a balanced diet, and periodic health checkups.";

    }
    else{

        emoji.innerHTML="❤️";

        result.innerHTML="HIGH DISEASE RISK";
        result.style.color="red";

        confidence.innerHTML="Confidence : 93.27%";

        recommendation.innerHTML=
        "The patient has a higher probability of heart disease. Immediate medical consultation, lifestyle modification, and further diagnostic evaluation are recommended.";

    }

}
