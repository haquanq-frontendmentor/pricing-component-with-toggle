const monthlyPriceElements = document.querySelectorAll(".plan__price--monthly");
const annuallyPriceElements = document.querySelectorAll(".plan__price--annually");

document.querySelector(".switch__input--monthly").addEventListener("change", (e) => {
    monthlyPriceElements.forEach((el) => (el.style.display = "block"));
    annuallyPriceElements.forEach((el) => (el.style.display = "none"));
});

document.querySelector(".switch__input--annually").addEventListener("change", (e) => {
    annuallyPriceElements.forEach((el) => (el.style.display = "block"));
    monthlyPriceElements.forEach((el) => (el.style.display = "none"));
});
