AOS.init();

const dateEvent = new Date("Dec 12, 2023 13:00:00");
const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(function(){
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceToEvent = timeStampEvent - timeStampCurrent;

    const dayMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minuteMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceToEvent / dayMs);
    const hoursToEvent = Math.floor((distanceToEvent % dayMs) / hoursMs);
    const minutesToEvent = Math.floor((distanceToEvent % hoursMs) / minuteMs);
    const secondsToEvent = Math.floor((distanceToEvent % minuteMs) / 1000);


    document.getElementById('cont').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if (distanceToEvent < 0){
        clearInterval(countHours);
        document.getElementById('hero__text__expired').innerHTML = 'Evento expirado'
        document.getElementById('hero__text__expired').style.color = '#E3170A'
    }
}, 1000);