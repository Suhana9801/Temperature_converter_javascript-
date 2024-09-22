function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultElement = document.getElementById('result');
    
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;
    
    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number for temperature.";
        return;
    }
    
    let convertedTemperature;
    let resultUnit;
    
    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * (5/9);
        resultUnit = 'Celsius';
    } else {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    }
    
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
