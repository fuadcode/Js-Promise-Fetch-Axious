function getMonthlyPrayerTimes() {
    const month = document.getElementById('month').value;
    fetch(`http://api.aladhan.com/v1/calendar/2017/${month}?latitude=51.508515&longitude=-0.1254872&method=2`)
        .then(response => response.json())
        .then(data => {
            const prayerTimes = data.data[0].timings;
            displayPrayerTimes(prayerTimes);
        })
        .catch(error => console.error('Aylıq namaz vaxtında xəta baş verdi:', error));
}

function getDailyPrayerTimes() {
    fetch(`http://api.aladhan.com/v1/timingsByCity?city=London&country=United Kingdom&method=2`)
        .then(response => response.json())
        .then(data => {
            const prayerTimes = data.data.timings;
            displayPrayerTimes(prayerTimes);
        })
        .catch(error => console.error('Gündəlik namaz vaxtında xəta baş verdi:', error));
}

function displayPrayerTimes(prayerTimes) {
    const prayerTimesList = document.getElementById('prayerTimes');
    prayerTimesList.innerHTML = '';
    for (const time in prayerTimes) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${time}:</strong> ${prayerTimes[time]}`;
        prayerTimesList.appendChild(listItem);
    }
}