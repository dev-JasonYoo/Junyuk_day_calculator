import { wage, installmentSavingFund } from "./wage.js";

function calculate(ipdae_input, branch) {
    const ipdae = new Date(ipdae_input + 'T00:00');
    console.log('ipdae:', ipdae);

    var exception1 = 0; // exeptional correction for those who is enlisted on the first day of a month
    if (ipdae.getDate() === 1) {
        exception1 = 1;
    };

    var junyukAddition = null; // default: 육군, 해병대 18개월
    if (branch === 0 || branch == 3) {
        junyukAddition = 0;
    } else if (branch === 1) { // 해군 20개월 (+2)
        junyukAddition = 2;
    } else { // 공군, 공익 21개월 (+3)
        junyukAddition = 3;
    }
    console.log(junyukAddition);

    const junyuk = new Date(
        ipdae.getFullYear(),
        ipdae.getMonth() + 18 + junyukAddition,
        ipdae.getDate() - 1,
    );
    console.log('junyuk:', junyuk);

    const totalDays = (junyuk - ipdae) / ( 1000 * 60 * 60 * 24 );
    console.log(totalDays);

    const minMonthPromotion = [
        3 - exception1, 
        9 - exception1, 
        15 - exception1
    ];
    var promotionDay = [ipdae];
    for ( var n = 0; n < minMonthPromotion.length; n++ ) {
        promotionDay.push(new Date(
            ipdae.getFullYear(),
            ipdae.getMonth() + minMonthPromotion[n],
            1
        ));
    };
    console.log(promotionDay)

    const totalMonthSpan = 19 + junyukAddition - exception1; // Span of total month is exceptionally 18 months for those who enlisted on the first day of a month (the others are 19 months)
    console.log(totalMonthSpan);
    var rankByMonth = [];
    for ( n = 0; n < totalMonthSpan; n++ ) {
        if (n < minMonthPromotion[0]) {
            rankByMonth.push(0);
        } else if (n < minMonthPromotion[1]) {
            rankByMonth.push(1);
        } else if (n < minMonthPromotion[2]) {
            rankByMonth.push(2);
        } else {
            rankByMonth.push(3);
        }
    };
    console.log(rankByMonth);

    var yearByMonth = [];
    var tempDate = new Date();
    for (n = 0; n < totalMonthSpan; n++) {
        tempDate = new Date (
            ipdae.getFullYear(),
            ipdae.getMonth() + n,
            ipdae.getDate()
        );
        yearByMonth.push(tempDate.getFullYear());
    };
    console.log(yearByMonth);

    var wageByMonth = [];
    for (n=0; n < totalMonthSpan; n++ ) {
        wageByMonth.push(
            wage[yearByMonth[n]][rankByMonth[n]]
        );
    };
    console.log(wageByMonth);

    let calculationResult = {
        'wage': wage,
        'installmentSavingFund': installmentSavingFund,
        'ipdae': ipdae,
        'junyuk': junyuk,
        'totalDays': totalDays,
        'totalMonthSpan': totalMonthSpan,
        'rankByMonth': rankByMonth,
        'wageByMonth': wageByMonth,
    }
    return calculationResult;
}

export {calculate};