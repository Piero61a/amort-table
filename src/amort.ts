export function amort(balance: number, interestRate: number, terms: number) {

    let monthlyRate:number = interestRate / 12;

    let payment:number = balance * (monthlyRate / (1 - Math.pow(
        1 + monthlyRate, -terms)));

    let result:any =
        `<span>Total loan amount: $  ${balance.toFixed(2)} </span>
        <span>Interest rate:   ${(interestRate * 100).toFixed(2)} %</span>
        <span>Number of months:   ${terms}  </span>
        <span>Total paid: $  ${(payment * terms).toFixed(2)} </span>`


    result += `<table border='1px' style = 'margin : 0 auto; ;'> <tr><th style='padding:1em'>Month #</th><th style='padding:1em'>Balance</th>  <th style='padding:1em'>Interest</th><th style='padding:1em'>Principal</th><th style='padding:1em'>Monthy fee</th></tr>`;


    for (let count = 0; count < terms; ++count) {
        let interest = 0;
        let monthlyPrincipal = 0;

        result += `<tr align = 'center'>`;
        result += `<td>  ${(count + 1)}  </td>`;
        result += `<td> $  ${balance.toFixed(2)}  </td>`;

        interest = balance * monthlyRate;
        result += `<td> $ ${interest.toFixed(2)} </td>`;
        monthlyPrincipal = payment - interest;
        
        result += `<td> $ ${monthlyPrincipal.toFixed(2)} </td>`;
        balance = balance - monthlyPrincipal;
        result += `<td> $ ${payment.toFixed(2)} </td>`
    }

    //result += "</table>";
    return result;
}
