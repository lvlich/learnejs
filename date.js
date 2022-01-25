exports.getDate = function () {
    const day = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return day.toLocaleDateString("en-US", option);
}