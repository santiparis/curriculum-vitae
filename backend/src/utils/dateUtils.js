export function validDate(dateStr) {
    const dateSplit = dateStr.split("-"); 

    const day = parseInt(dateSplit[2]);
    const month = parseInt(dateSplit[1]);
    const year = parseInt(dateSplit[0]);
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() ===  year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

export function leapYear(year) {
    return year % 400 === 0 ||
        (year % 4 === 0 && year % 100 !== 0);
}
