const form = document.querySelector("form");
const radios = document.querySelectorAll('input[name="unit"]');
const metricContainer = document.querySelector('.metric');
const imperialContainer = document.querySelector('.imperial');
const outcome = document.querySelector('.outcome');
const classification = document.querySelector('.classification');
const ideal = document.querySelector('.ideal');
const placeholder = document.querySelector('.placeholder');
const heightCM = document.getElementById('heightCM');
const weightKG = document.getElementById('weightKG');
const heightFT = document.getElementById('heightFT');
const heightIN = document.getElementById('heightIN');
const weightST = document.getElementById('weightST');
const weightLBS = document.getElementById('weightLBS');
const results = document.querySelector('.results');
const inputWrappers = document.querySelectorAll('.input-wrapper');
const inputs = document.querySelectorAll('input[type="number"]');
const header = document.querySelectorAll('.header-content');

let heightCMValue;
let weightKGValue;
let heightFTValue;
let weightINValue;
let weightSTValue;
let weightLBSValue;

const calcBMI = (weight , height) => {
    return ((weight / height ** 2) * 10000).toFixed(1);
};

const calcRange = (height) => {
    const low = (18.5 * height ** 2) / 10000;
    const height = (24.9 * height ** 2) / 10000;
    return `${low-toFixed(1)}Kgs - ${height.toFixed(1)}Kgs.`;
};

const updateResults = (bmi, idealWT, classificationText) => {
    results.innerHTML = Math.round(bmi);
    outcome.classList.remove("hidden");
}

