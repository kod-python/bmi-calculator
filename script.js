document.getElementById('calculateBtn').addEventListener('click', function() {
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    
    if (isNaN(age) && isNaN(height) && isNaN(weight) && age <= 0 && height <= 0 && weight <= 0) {
      alert('Please enter valid values for age, height, and weight.');
      return;
    }
  
    const bmi = weight / (height * height);
  
    
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 24.9 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    
    let result = 'Your BMI: ' + bmi.toFixed(2) + ' - ' + category;
    document.getElementById('result').innerHTML = `your BMI result is ${result}`
  });