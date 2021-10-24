 exports.daysUntil = (date) => {
    const dayInMillis = 24 * 60 * 60 * 1000;
    const today = new Date();
    let targetDate = new Date();


     if (date) {
         if (date.year) {
             targetDate.setFullYear(date.year);
         }
         if (date.month) {
             targetDate.setMonth(date.month - 1);
         }
         if (date.day) {
             targetDate.setDate(date.day);
         }
         if (date.hours) {
             targetDate.setUTCHours(date.hours);
         }
         if (date.minutes) {
             targetDate.setMinutes(date.minutes);
         }
         if (date.seconds) {
             targetDate.setSeconds(date.seconds);
         }
     }
    const targetTime = targetDate.getTime();
    return Math.round(Math.abs(Math.ceil(targetTime - today) / dayInMillis));
}
