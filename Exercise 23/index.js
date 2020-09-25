let currentDay = prompt("Thanks for contacting Customer Support. As this time, we are only able to provide customer support Monday - Friday, 8am-6pm, Please enter the current day of the week");
let currentHour = prompt("Please enter current hour in 24hr format (values accepted would be a number between 0-23)");

currentWeekday = currentDay.toUpperCase();
currentHour = Number(currentHour);

if (currentWeekday === "SATURDAY" || currentWeekday === "SUNDAY") {
    alert("Our customer support is not available on the weekend. Feel free to contact us Monday-Friday 9-5pm. As a reminder Google is availabe 24-7.");
} else {
    if (currentHour < 0 || currentHour > 23) {
        alert("We are unable to process your request as the time you have entered is not valid.");
    } else if (currentHour > 18 || currentHour < 8) {
        alert("Unfortunately, you have reached us outside of office hours, please come back at 0800.");
    } else {
        alert("Our office is currently open, a customer support representative will be with you shortly.");
    }
}