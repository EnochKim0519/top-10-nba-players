const apiData = [
    {
        "ranking": "1st",
        "id": 666786,
        "first_name": "Ja",
        "height_feet": 6,
        "height_inches": 3,
        "last_name": "Morant",
        "position": "G",
        "team": {
            "id": 15,
            "abbreviation": "MEM",
            "city": "Memphis",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Memphis Grizzlies",
            "name": "Grizzlies"
        },
        "weight_pounds": 174
    },
    {
        "ranking": "2nd",
        "id": 15,
        "first_name": "Giannis",
        "height_feet": 6,
        "height_inches": 11,
        "last_name": "Antetokounmpo",
        "position": "F",
        "team": {
            "id": 17,
            "abbreviation": "MIL",
            "city": "Milwaukee",
            "conference": "East",
            "division": "Central",
            "full_name": "Milwaukee Bucks",
            "name": "Bucks"
        },
        "weight_pounds": 242
    },
    {
        "ranking": "3rd",
        "id": 237,
        "first_name": "LeBron",
        "height_feet": 6,
        "height_inches": 8,
        "last_name": "James",
        "position": "F",
        "team": {
            "id": 14,
            "abbreviation": "LAL",
            "city": "Los Angeles",
            "conference": "West",
            "division": "Pacific",
            "full_name": "Los Angeles Lakers",
            "name": "Lakers"
        },
        "weight_pounds": 250
    }
]


// Cached Elements
const $getPlayerInfo = $("#getPlayerInfo");

// get API data
function getInfo() {

    console.log(URL);
    const randomIndex = Math.floor(Math.random() * URL.length);
    const player = URL[randomIndex];
    console.log(player);
}

// Event Listener
$getPlayerInfo.on("click", getInfo)