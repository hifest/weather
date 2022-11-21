export function getWeekDay(date) {
    let days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб'];
    return days[date.getDay()];
}
