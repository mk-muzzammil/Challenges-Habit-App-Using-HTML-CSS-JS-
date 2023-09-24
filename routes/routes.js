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
route.route("/").get(homePage);



route.route("/AllChallengesPage").get( AllChallengesPage)


route.route("/ChallengeDayPage").get( ChallengeDayPage)

route.route("/challengePage").get( challengePage)

route.route("/customizeChallengesPage").get( customizeChallengesPage).post(addChallenges)

route.route("/HideChallengesPage").get( HideChallengesPage)

route.route("/languageSetting").get( languageSetting)


route.route("/profilePage").get( profilePage)


route.route("/RewardCoinPage").get( RewardCoinPage)

route.route("/settingPage").get( settingPage)


route.get("*", (req, res) => {
    res.send("Page not found")

})


module.exports = route