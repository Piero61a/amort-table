import { getValues } from "./get-values";

export function calculate (){
    let btn_calculate:any = document.querySelector<HTMLButtonElement>('#btn-calculate')
    btn_calculate.addEventListener('click', function(e:any){
        e.preventDefault();
        getValues();
    });
}