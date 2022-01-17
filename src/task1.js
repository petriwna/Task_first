function getDays(year, month){
    const arrMonths = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    if (typeof month === 'string'){
        return new Date(year, arrMonths.indexOf(month), 0).getDate();
    }
    return new Date(year, month, 0).getDate();
}

module.exports = {getDays}