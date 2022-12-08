/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: utils sets a standard timestamp ecosystem that is used accross the platform.
*/

//Determins the timestamp and sets it according to how log its been since a post, chat, or comment was made.
function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return 'Now';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' months ago';
    }

    else {
        return Math.round(elapsed / msPerYear) + ' years ago';
    }
}

export { timeDifference };
