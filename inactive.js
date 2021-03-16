const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
//** This function is running every second rather than after every minute. */
setInterval(function(){
    // please write your code here
    const { lastActivity } = user;
    const currentTime = new Date().getTime();
    // Finding elapsed minutes
    // Converting the miliseconds to minutes
    const elapsedTime = ((currentTime - lastActivity) / (1000 * 60)) % 5;
    if (elapsedTime < 2) inactiveFirstStage()
    else if (elapsedTime < 4) inactiveSecondStage()
    else inactiveThirdStage()
}, 1000);