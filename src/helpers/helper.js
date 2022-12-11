const monthes = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек',
];

const modifyDate = (str) => {
    const items = str.split('.');
    return `${items[0]}${monthes[Number(items[1]-1)]}${items[2]}`;
};

const createLabel = (str) => {
    let newStr = str.length > 2 ? str.slice(str.length-2) : str;
    if(Number(newStr) < 15 && Number(newStr) > 10) {
        return 'дней';
    } else if (newStr.at(-1) === '1' ) {
        return 'день';
    } else if (Number(newStr.at(-1)) >= 2 && Number(newStr.at(-1)) <= 4) {
        return 'дня'
    } else {

        return 'дней';
    }
};

const coutDays = (createDate, finishDate) => {
    const finish = finishDate.length === 0 ? new Date(): getDateOfString(finishDate);
    const start = getDateOfString(createDate);
    const diff = Math.floor((finish - start)/(1000*60*60*24));
    return String(diff);
};

const getDateOfString = (str) => {
    const items = str.split('.');
    return new Date(items[2], items[1]-1, items[0]);
};

export {modifyDate, createLabel, coutDays};