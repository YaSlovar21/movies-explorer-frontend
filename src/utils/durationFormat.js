export const durationFormat = (mins) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    if (hours === 0) {
        return minutes + ' минут';
    }
    return hours + 'ч ' + minutes + 'м';
};