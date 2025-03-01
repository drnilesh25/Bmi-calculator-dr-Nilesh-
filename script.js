document.getElementById('bmiForm').addEventListener('submit', function (e) {
       e.preventDefault();

       // Get weight and height values
       const weight = parseFloat(document.getElementById('weight').value);
       const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

       // Calculate BMI
       const bmi = (weight / (height * height)).toFixed(1);

       // Display BMI
       document.getElementById('bmiValue').textContent = bmi;

       // Determine BMI category and diet advice
       let category = '';
       let advice = '';

       if (bmi < 18.5) {
         category = 'Underweight';
         advice = 'You should focus on gaining weight healthily. Include more protein, healthy fats, and carbohydrates in your diet.';
       } else if (bmi >= 18.5 && bmi < 24.9) {
         category = 'Normal weight';
         advice = 'Maintain a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains.';
       } else if (bmi >= 25 && bmi < 29.9) {
         category = 'Overweight';
         advice = 'Consider reducing calorie intake and increasing physical activity. Focus on whole foods and avoid processed snacks.';
       } else {
         category = 'Obese';
         advice = 'Consult a healthcare professional for a personalized plan. Focus on a calorie deficit, regular exercise, and nutrient-dense foods.';
       }

       // Display category and advice
       document.getElementById('bmiCategory').textContent = `Category: ${category}`;
       document.getElementById('dietAdvice').textContent = `Diet Advice: ${advice}`;
     });