var feet, inches, toInches, inSquared, weight, bmi;
function calculateBMI()
{
    feet = document.getElementById("feet").value / 10;
    inches = document.getElementById("inches").value;
    weight = document.getElementById("weight").value;
    weight *= 703;
    toInches = ((feet * 12) + inches);
    inSquared = (toInches * toInches);
    bmi = ((weight) / (inSquared));
    bmi = "Your BMI is: " + bmi.toFixed(1);
    document.getElementById("bmiOutput").innerHTML = bmi;

    document.onclick(calculateBMI())
}