import { getValues } from "./get-values";
export function calculate() {
    let btn_calculate = document.querySelector('#btn-calculate');
    btn_calculate.addEventListener('click', function (e) {
        e.preventDefault();
        getValues();
    });
}
//# sourceMappingURL=calculate.js.map