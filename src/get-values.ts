import { amort } from "./amort";
import { validateInputs } from "./validate-inputs";


export function getValues(){

    let principal:any = document.querySelector<HTMLButtonElement>('#principal');
    let balance = parseFloat(principal?.value)
    let interest:any = document.querySelector<HTMLButtonElement>('#interest');
    let interestRate = parseFloat(interest?.value)/100.0;
    let monts:any = document.querySelector<HTMLButtonElement>('#terms');
	let terms = monts?.value;
	

	let div:any = document.querySelector<HTMLDivElement>("#Result");
	div.innerHTML = "";
	

	let balVal = validateInputs(balance);
	let intrVal = validateInputs(interestRate);
	let termsVal = validateInputs(terms);
	
	if (balVal && intrVal && termsVal)
	{
		div.innerHTML += amort(balance, interestRate, terms);
	}
	else
	{

		div.innerHTML += "Please enter any amount - invalid values.";
	}
}
