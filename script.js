console.log("Yalla Foot يعمل بنجاح!");

const matches = [
    {
        home: "ريال مدريد",
        away: "برشلونة",
        time: "21:00"
    },
    {
        home: "ليفربول",
        away: "تشيلسي",
        time: "22:00"
    },
    {
        home: "مانشستر سيتي",
        away: "أرسنال",
        time: "20:30"
    }
];

const matchesContainer = document.getElementById("matches");

matchesContainer.innerHTML = "";

matches.forEach(function(match) {

    const matchElement = document.createElement("div");

    matchElement.className = "match";

    matchElement.innerHTML = `
        <div>${match.home}</div>
        <div class="time">${match.time}</div>
        <div>${match.away}</div>
    `;

    matchesContainer.appendChild(matchElement);
});
