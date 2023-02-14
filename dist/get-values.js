import { amort } from "./amort";
import { validateInputs } from "./validate-inputs";
export function getValues() {
    let principal = document.querySelector('#principal');
    let balance = parseFloat(principal === null || principal === void 0 ? void 0 : principal.value);
    console.log(balance);
    let interest = document.querySelector('#interest');
    let interestRate = parseFloat(interest === null || interest === void 0 ? void 0 : interest.value) / 100.0;
    let monts = document.querySelector('#terms');
    let terms = parseFloat(monts === null || monts === void 0 ? void 0 : monts.value);
    let div = document.querySelector("#Result");
    div.innerHTML = "";
    let balVal = validateInputs(balance);
    let intrVal = validateInputs(interestRate);
    console.log(balVal, intrVal);
    if (balVal && intrVal) {
        div.innerHTML += amort(balance, interestRate, terms);
    }
    else {
        div.innerHTML += "Please Check your inputs and retry - invalid values.";
    }
}
//# sourceMappingURL=get-values.js.map