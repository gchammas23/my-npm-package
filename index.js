exports.daysUntil = (date) => {
    const dayInMillis = 24 * 60 * 60 * 1000;
    const today = new Date();
    const thisYear = today.getFullYear();
    let targetDate;

    if (date.year) {
        targetDate = new Date(date.year, date.month, date.day);
    } else {
        targetDate = new Date(thisYear, date.month, date.day);
    }
    const targetTime = targetDate.getTime();
    return Math.abs(Math.ceil(targetTime - today) / dayInMillis);
}
