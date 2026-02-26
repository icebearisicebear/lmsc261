const dailyActivities = [
	"Clean Solar Panel",
	"Video Chat with Houston",
	"Hydrate Space Food",
	"Take Earth Picture",
	"Learn Russian"
]

function pickRandomActivity(){
    let rndIndex = Math.random() * dailyActivities.length;
    let rndActivity = Math.floor(rndIndex);
    // print(rndIndex)
    // print(rndActivity)
    return dailyActivities[rndActivity]
}

print("Todays activity is: " + pickRandomActivity());