const express = require("express");

const { homePage,
    AllChallengesPage,
    ChallengeDayPage,
    challengePage,
    customizeChallengesPage,
    HideChallengesPage,
    languageSetting,
    profilePage,
    RewardCoinPage,
    settingPage,
    addChallenges } = require("../controllers/web_Pages");



const route = new express.Router();


//routes
route.get("/", homePage);



route.get("/AllChallengesPage", AllChallengesPage)


route.get("/ChallengeDayPage", ChallengeDayPage)

route.get("/challengePage", challengePage)

route.get("/customizeChallengesPage", customizeChallengesPage)

route.get("/HideChallengesPage", HideChallengesPage)

route.get("/languageSetting", languageSetting)


route.get("/profilePage", profilePage)


route.get("/RewardCoinPage", RewardCoinPage)

route.get("/settingPage", settingPage)


route.get("*", (req, res) => {
    res.send("Page not found")

})

route.post("/customizeChallengesPage", addChallenges)



module.exports = route