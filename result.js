import {calculate} from './calculator.js';

// string formatting
String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

// Date object -> YYYY년 MM월
function toString_YYYY_MM(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return '{0}년 {1}월'.format(year, month);
};

// rank_int -> 이병 / 일병 / 상병 / 병장
function toString_rank(rank_int) {
    if (rank_int === 0) {
        return '이병';
    } else if (rank_int === 1) {
        return '일병';
    } else if (rank_int === 2) {
        return '상병';
    } else {
        return '병장'
    }
};


var yearMonth = document.getElementById("yearMonth");
var rank = document.getElementById("rank");
var monthlyWage = document.getElementById("monthlyWage");

function resultAdd(ipdae, totalMonthSpan, rankByMonth, wageByMonth) {
    yearMonth.innerHTML = "<p></p>";
    rank.innerHTML = "<p></p>";
    monthlyWage.innerHTML = "<p></p>";
    
    for (let n = 0; n < totalMonthSpan; n++) {  
        var tempDate = new Date(
            ipdae.getFullYear(),
            ipdae.getMonth() + n
        ); 
        yearMonth.innerHTML += toString_YYYY_MM(tempDate) + "<br>";
        rank.innerHTML += toString_rank(rankByMonth[n]) + "<br>";
        monthlyWage.innerHTML += wageByMonth[n] + "원<br>";
    };
}

function wageSumAdd(wageByMonth) {
    const wageSum = wageByMonth.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    monthlyWage.innerHTML += "<br>총" + wageSum + "원";
}

// Edit DOM
window.onload = function() {
    const ipdae = document.getElementById('ipdae');
    ipdae.addEventListener('change', function() {
        console.log('yea');
        console.log('eventlistener')
        const result = calculate(ipdae.value);
        resultAdd(result['ipdae'], result['totalMonthSpan'], result['rankByMonth'], result['wageByMonth']);
        wageSumAdd(result['wageByMonth']);
    });
};