export function formateDate(date) {
    return date.toLocalDateString("en-US", {
        month:"short",
        day:"numeric",
        year:"numeric",
    });
}
