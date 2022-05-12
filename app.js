// Variables --------

const jaString = "I rank Ja Morant as my number 1 due to his absurd athleticism and dog-mentality. His ability to penetrate the defense and pull off some Kyrie/Jordanesque layups is ja-dropping! He continues to get better day by day, working on his court vision and shooting. Ja has had some insane highlights this year and for a young guy, he is fearless and isn't afraid to show his emotions. It's inspiring to watch someone so young thriving at the pinnacle of his sport. On a side note, his griddy is elite."

const curryString = "Considered by many as the greatest 3 point shooter of all time, Curry is a nightmare for any team he goes against. He has broken the record for most 3 pointers in the regular season and in the playoffs. He is also the first ever player to win the MVP award unanimously. Just this past All-Star game, Curry dropped a ridiculous 17 three pointers! In one game! That's 4 more points than the regular season record."

const giannisString = "If Ja Morant wasn't on this list, Giannis Antetokounmpo would be the best player in the NBA right now. Winner of last years NBA finals, he continues to dominate any team that he goes up against. He is the biggest matchup problem the NBA has ever seen. His freakish size and athletcism even warranted him the nickname 'The Greek Freak'. He has gotten even better this year, as he continues to work on his shortcomings, such as his jumpshot."

const jokicString = "Nikola Jokic has been lighting it up for the Denver Nuggets ever since his 2nd year on the team. However, I don't think anyone expected him to perform at the level he is right now. Coming into the NBA as the 41st pick in the NBA draft in 2014, he has solidified himself as a top 3 player in the game, winning the last 2 MVP awards back to back."

const leBronString = "In his 19th NBA season, LeBron James is still an athlete like no other. He continues to perform at a high level with no signs of slowing down. Many players at this age are on the verge of retirement, but LeBron looks as if he could play for another 10 years. Although the Lakers were a huge disappointment this season, LeBron put on a show for Laker fans."

const joelString = "Joel Embiid has the most diverse skillset of any big man in NBA history. There has never been a center in the NBA that can shoot the ball from the 3, handle the ball like a guard, and dominate in the paint like Joel has. Like Giannis, He is a big body that is extremely agile. Yet again, another huge matchup problem for the other team. Unfortunately, he is being held down again by his own teammate, James Harden."

const bookerString = "Devin Booker has made a name for himself as one of the best scorers in the NBA right now. He can find his spots on the floor at will, and controls the pace of the game. He is lights out from mid range, shooting a ridiculous 75% in the clutch. As they make their run for the NBA Finals this year, Booker continues to dominate and show people why he's in the upper echelon of scorers in the NBA."

const tatumString = "Tatum is the one of the most well-rounded player in the NBA. A lethal scorer and a great defender, Tatum will do everything he can to win. His footwork with and without the ball are a treat to the eyes and his playmaking is no exception either. Many people compare Jason Tatum with Kobe Bryant. I'm not the type to make comparisons, but the similarities are definitely there. (Tatum is also one of Paul's favorite players)."

const cp3String = "Chris Paul has always been an amazing point guard. However, I wasn't a big fan of his until recently. I realized that every team he went to, they adopted a winning culture. CP3 is a winner by heart. He, like many other greats, are not afraid of the pressure. His midrange game and court vision is the best in the league. He doesn't just play well himself; he has the ability to make ALL of his teammates shine and thrive. He will go down as one of the best point guards to ever grace the game of basketball."

const lukaString = "Luka Doncic has been an anomaly in the NBA ever since his debut in 2018. He didn't look the most athletic compared to his draft class, which had people speculating if he would ever make it in the NBA. Those critics were quickly shut down. Luka plays the game at HIS speed. It's tough to get him out of his rhythm when he is locked in. His game IQ, shot making, and control make him dangerous. He isn't afraid to launch a bomb from 30 feet away and isn't afraid to get in your face while going for a contested lay up."

const ja = "https://www.balldontlie.io/api/v1/players/666786"
const giannis = "https://www.balldontlie.io/api/v1/players/15"
const jokic = "https://www.balldontlie.io/api/v1/players/246"
const leBron = "https://www.balldontlie.io/api/v1/players/237"
const joel = "https://www.balldontlie.io/api/v1/players/145"
const booker = "https://www.balldontlie.io/api/v1/players/57"
const curry = "https://www.balldontlie.io/api/v1/players/115"
const tatum = "https://www.balldontlie.io/api/v1/players/434"
const cp3 = "https://www.balldontlie.io/api/v1/players/367"
const luka = "https://www.balldontlie.io/api/v1/players/132"

 const arrayOfURLs = [ja, giannis, jokic, leBron, joel, booker, curry, tatum, cp3, luka];


// Cached Elements --------

const $getPlayerInfo = $("#getPlayerInfo");
const $playerName = $("#playerName");
const $playerInformation = $("#playerInformation");
const $playerPosition = $(".position");
const $playerTeam = $(".team")
const $playerConference = $(".conference");
const $playerHeight = $(".height");
const $playerWeight = $(".weight");
const $playerDesc = $("#playerDesc");
const $form = $("form");

// get API data (Functions) --------

function getInfo(event) {
    const randomIndex = Math.floor(Math.random() * arrayOfURLs.length);
    const randomPlayer = arrayOfURLs[randomIndex];
    event.preventDefault();
    $.ajax(randomPlayer).then(function(data) {
        $playerName.text(data.first_name + " " + data.last_name);
    $playerPosition.text("Position: " + data.position)
    $playerTeam.text("Team Name: " + data.team.full_name);
    $playerConference.text("Conference: " + data.team.conference);
    $playerHeight.text("Height: " + data.height_feet + "'" + " " + data.height_inches + "'' ");
    $playerWeight.text("Weight: " + data.weight_pounds + " " + "lbs");
        if (randomPlayer === ja) {
            $playerDesc.text(jaString); 
        } else if (randomPlayer === curry) {
            $playerDesc.text(curryString);
        } else if (randomPlayer === giannis) {
            $playerDesc.text(giannisString);
        } else if (randomPlayer === jokic) {
            $playerDesc.text(jokicString);
        } else if (randomPlayer === leBron) {
            $playerDesc.text(leBronString);
        } else if (randomPlayer === joel) {
            $playerDesc.text(joelString);
        } else if (randomPlayer === booker) {
            $playerDesc.text(bookerString);
        } else if (randomPlayer === tatum) {
            $playerDesc.text(tatumString);
        } else if (randomPlayer === cp3) {
            $playerDesc.text(cp3String);
        } else {
            $playerDesc.text(lukaString);
        }
    })
}


// Event Listener --------
$getPlayerInfo.on("click", getInfo);
$form.on("#button", getInfo);
