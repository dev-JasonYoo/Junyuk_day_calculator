export { wage, installmentSavingFund };

const wage = {
    2019: [306100, 331300, 366200, 405700],
    2020: [408100, 441700, 488200, 540900],
    2021: [459100, 496900, 549200, 608500],
    2022: [510100, 552100, 610200, 676100],
    2023: [600000, 680000, 800000, 1000000], // https://www.korea.kr/news/pressReleaseView.do?newsId=156523086
    2024: [750000, 850000, 100000, 1250000], // estimated
    2025: [900000, 1020000, 1200000, 1500000], // estimated
};

// https://www.econedu.go.kr/mec/ots/dif/view.do?comBaseCd=DIFPERCD&difPer1=DIFPER001&difSer=01ab1013-155e-487a-9850-3694e0723f2d&temp=2022&temp2=HALF001
const installmentSavingFund = {
    2019: 0,
    2020: 0,
    2021: 0,
    2022: 141000, // 2022년의 경우, 원리금의 33% (원리금: 원금, 은행이자(최대 5%), 국가지원이자(1%))
    2023: 300000,
    2024: 400000,
    2025: 550000,
};