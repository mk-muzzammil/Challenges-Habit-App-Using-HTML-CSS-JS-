const upload = require("../Middleware/multer");
const Challenges = require("../model/challenge_Schema");



let homePage = (req, res) => {
    res.render("index")
}

let AllChallengesPage = (req, res) => {
    res.render("AllChallengesPage")
}


let ChallengeDayPage = (req, res) => {
    res.render("ChallengeDayPage")
}

let challengePage = (req, res) => {
    res.render("challengePage")
}

let customizeChallengesPage = (req, res) => {
    res.render("customizeChallengesPage")
}

let HideChallengesPage = (req, res) => {
    res.render("HideChallengesPage")
}

let languageSetting = (req, res) => {
    res.render("languageSetting")
}


let profilePage = (req, res) => {
    res.render("profilePage")
}


let RewardCoinPage = (req, res) => {
    res.render("RewardCoinPage")
}

let settingPage = (req, res) => {
    res.render("settingPage")
}

let addChallenges = () => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }

        else {
            const newChallenge = new Challenges({
                image: {
                    data: req.file.filename,
                    contentType: "image/jpeg"
                },
                Title: req.body.title,
                Description: req.body.description,
                Day_01: req.body.day_01,
                Day_02: req.body.day_02,
                Day_03: req.body.day_03,
                Day_04: req.body.day_04,
                Day_05: req.body.day_05,
                Day_06: req.body.day_06,
                Day_07: req.body.day_07,
                Day_08: req.body.day_08,
                Day_09: req.body.day_09,
                Day_10: req.body.day_10,
                Day_11: req.body.day_11,
                Day_12: req.body.day_12,
                Day_13: req.body.day_13,
                Day_14: req.body.day_14,
                Day_15: req.body.day_15,
                Day_16: req.body.day_16,
                Day_17: req.body.day_17,
                Day_18: req.body.day_18,

            });

            newChallenge.save().then(() => {
                console.log("data has been saved in database");
            }).catch(() => {
                console.log("data has not been saved in database");

            })
        }
    })

    res.status("201").redirect("/customizeChallengesPage")
}


module.exports = { homePage,
    AllChallengesPage,
    ChallengeDayPage,
    challengePage,
    customizeChallengesPage,
    HideChallengesPage,
    languageSetting,
    profilePage,
    RewardCoinPage,
    settingPage,
    addChallenges }