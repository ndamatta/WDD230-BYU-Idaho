
// GET TEMPERATURE AND WINDSPEED ELEMENTS
export function runWindChill() {
    const temperatureC = parseFloat(document.querySelector("#temperature").textContent);
    const windSpeedKmh = parseFloat(document.querySelector("#windSpeed").textContent);

// If temperature in °C is below 10 and Wind speed in Km/h is above 4.8, run the code...
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const temperatureF = celsiusToFahrenheit(temperatureC);
    const windSpeedMph = kmhToMph(windSpeedKmh);

    const windChill = calculateWindChill(temperatureF,windSpeedMph);
    document.querySelector("#windChill").textContent = `${fahrenheitToCelsius(windChill).toFixed(1)} °C`;
}
else {
    document.querySelector("#windChill").textContent = "N/A";
}
}

// -----FUNCTIONS-----
/**
 * Converts the temperature from °C to °F and returns it
 * @param {float} temperatureC Temperature in Celsius
 * @returns  {float} Temperature in Fahrenheit 
 */
function celsiusToFahrenheit(temperatureC) {
    
    return (temperatureC * 9 / 5) + 32;
}

/**
 * Converts the temperature from °F to °C and returns it
 * @param {float} temperatureF Temperature in Fahrenheit
 * @returns  {float} Temperature in Celsius 
 */
export function fahrenheitToCelsius(temperatureF) {
    return (temperatureF - 32) * 5 / 9;
}

/**
 * Converts the speed from Kmh to Mph and returns it
 * @param {float} speedKmh Speed in Kmh
 * @returns Speed in Mph
 */
function kmhToMph(speedKmh) {
    return speedKmh / 1.60934;
}

/**
 * Converts the speed from Mph to Kmh and returns it
 * @param {float} speedMph Speed in Mph
 * @returns Speed in Kmh
 */
export function mphToKmh(speedMph) {
    return speedMph * 1.60934 
}
/**
 * Calculates the windchill using the formula and returns it
 * @param {float} temperatureF Temperature in Fahrenheit
 * @param {float} windSpeedMph Windspeed in Mph
 * @returns Windchill in Fahrenheit
 */
function calculateWindChill(temperatureF, windSpeedMph) {
    const windChill = 35.74 + 0.6215 * temperatureF - 35.75 * Math.pow(windSpeedMph,0.16) + 0.4275 * temperatureF * Math.pow(windSpeedMph, 0.16);
    return windChill;
}
