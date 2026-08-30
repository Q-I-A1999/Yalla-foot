const matches = [
{
home: "ريال مدريد",
away: "برشلونة",
time: "21:00",
league: "الدوري الإسباني",
stadium: "سانتياغو برنابيو"
},
{
home: "ليفربول",
away: "تشيلسي",
time: "22:00",
league: "الدوري الإنجليزي",
stadium: "أنفيلد"
},
{
home: "مانشستر سيتي",
away: "أرسنال",
time: "20:30",
league: "الدوري الإنجليزي",
stadium: "ملعب الاتحاد"
},
{
home: "بايرن ميونخ",
away: "بوروسيا دورتموند",
time: "19:30",
league: "الدوري الألماني",
stadium: "أليانز أرينا"
}
];

const container = document.getElementById("matches-container");
const search = document.getElementById("search");

const matchModal = document.getElementById("match-modal");
const leagueModal = document.getElementById("league-modal");

function showMatches(list) {

container.innerHTML = "";

if (list.length === 0) {

    container.innerHTML = `
        <div class="live-box">
            لا توجد مباريات
        </div>
    `;

    return;
}

list.forEach(function(match) {

    const button = document.createElement("button");

    button.className = "match";

    button.innerHTML = `
        <div class="team">${match.home}</div>
        <div class="match-time">${match.time}</div>
        <div class="team">${match.away}</div>
    `;

    button.addEventListener("click", function() {
        showMatchDetails(match);
    });

    container.appendChild(button);
});

}

function showMatchDetails(match) {

document.getElementById("home-team").textContent = match.home;

document.getElementById("away-team").textContent = match.away;

document.getElementById("match-time").textContent = match.time;

document.getElementById("match-league").textContent = match.league;

document.getElementById("match-stadium").textContent = match.stadium;

matchModal.style.display = "flex";

}

function showLeague(leagueName) {

document.getElementById("league-name").textContent = leagueName;

const box = document.getElementById("league-matches");

box.innerHTML = "";

const leagueMatches = matches.filter(function(match) {
    return match.league === leagueName;
});

if (leagueMatches.length === 0) {

    box.innerHTML = `
        <div class="live-box">
            لا توجد مباريات لهذه البطولة حاليًا
        </div>
    `;

} else {

    leagueMatches.forEach(function(match) {

        const item = document.createElement("div");

        item.className = "league-match";

        item.innerHTML = `
            <strong>${match.home}</strong>
            <span>${match.time}</span>
            <strong>${match.away}</strong>
        `;

        item.addEventListener("click", function() {

            leagueModal.style.display = "none";

            showMatchDetails(match);

        });

        box.appendChild(item);
    });
}

leagueModal.style.display = "flex";

}

document.querySelectorAll(".league").forEach(function(button) {

button.addEventListener("click", function() {

    const name = button.dataset.league;

    showLeague(name);

});

});

document.getElementById("close-match").addEventListener("click", function() {
matchModal.style.display = "none";
});

document.getElementById("close-league").addEventListener("click", function() {
leagueModal.style.display = "none";
});

matchModal.addEventListener("click", function(event) {

if (event.target === matchModal) {
    matchModal.style.display = "none";
}

});

leagueModal.addEventListener("click", function(event) {

if (event.target === leagueModal) {
    leagueModal.style.display = "none";
}

});

search.addEventListener("input", function() {

const text = search.value.trim().toLowerCase();

const filtered = matches.filter(function(match) {

    return (
        match.home.toLowerCase().includes(text) ||
        match.away.toLowerCase().includes(text) ||
        match.league.toLowerCase().includes(text)
    );

});

showMatches(filtered);

});

showMatches(matches);
