
buttonDiv = document.getElementById('yourGun');

//images for guns
let flatlineImage = 'images/Flatline_Icon.png'
let scoutImage = 'images/G7_Scout_Icon.png'
let hemlockImage = 'images/Hemlok_Icon.png'
let rThreeOhOneImage = 'images/r301.png'
let havocImage = 'images/havoc.png'
let alternatorImage = 'images/alternator.png'
let prowlerImage = 'images/prowler.png'
let rNineNineImage = 'images/r99.png'
let spitfireImage = 'images/spitfire.png'
let lStarImage = 'images/lstar.png'
let longbowImage = 'images/longbow.png'
let tripleTakeImage = 'images/tripleTake.png'
let sentinelImage = 'images/sentinel.png'
let chargeRifleImage = 'images/chargeRifle.png'
let evaEightImage = 'images/eva.png'
let mastiffImage = 'images/mastiff.png'
let mozambiqueImage = 'images/mozambique.png'
let reFourFiveImage = 'images/reFourFive.png'
let pTwentyTwentyImage = 'images/pTwentyTwenty.png'
let wingmanImage = 'images/wingman.png'

//class contructor for guns
class Gun{
    constructor(name, image, description) {
        this.name = name; 
        this.image = image;
        this.description = description;
}
}
//unique weapons
let flatline = new Gun('VK-47 Flatline', flatlineImage, 'Full-auto with a punch');
let scout = new Gun('G7 Scout', scoutImage,'Semi-auto light marksman rifle');
let hemlock = new Gun('Hemlock Burst AR', hemlockImage,'3-round burst assault rifle');
let rThreeOhOne = new Gun('R-301 Carbine', rThreeOhOneImage, 'Full-auto and low recoil');
let havoc = new Gun('HAVOC Rifle', havocImage, 'Wind-up energy assault rifle');
let alternator = new Gun('Alternator SMG', alternatorImage, 'Twin barrel full-auto SMG');
let prowler = new Gun('Prowler Burst PDW', prowlerImage, '5-round burst SMG');
let rNineNine = new Gun('R-99', rNineNineImage, 'Rapid-fire automatic SMG');
let spitfire = new Gun('M600 Spitfire', spitfireImage, 'Full-Auto LMG');
let lStar = new Gun('L-STAR EMG', lStarImage, 'Plasma fueled EMG');
let longbow = new Gun('Longbow DMR', longbowImage, 'Slow fire-rate semi-auto');
let tripleTake = new Gun('Triple Take', tripleTakeImage, 'Triple-barrel sniper rifle');
let sentinel = new Gun('Sentinel', sentinelImage, 'Bolt-action sniper rifle');
let chargeRifle = new Gun('Charge Rifle', chargeRifleImage,  'Directed energy beam rifle');
let evaEight = new Gun('EVA-8 Auto', evaEightImage, 'Full-auto shotgun');
let mastiff = new Gun('Mastiff Shotgun', mastiffImage, 'Powerful semi-auto shotgun');
let mozambique = new Gun('Mozambique Shotgun', mozambiqueImage, 'Triple-barrel shotgun pistol');
let reFourFive = new Gun('RE-45 Auto', reFourFiveImage, 'Full-auto pistol');
let pTwentyTwenty = new Gun('P2020', pTwentyTwentyImage, 'semi-auto pistol');
let wingman = new Gun('Wingman', wingmanImage, 'High-powered revolver');

gunArr = [flatline, scout, hemlock, rThreeOhOne, havoc, alternator, prowler, rNineNine, spitfire, lStar, longbow, tripleTake, sentinel, chargeRifle, evaEight, mastiff, mozambique, reFourFive, pTwentyTwenty, wingman];

// gunsArray = ['flatline', 'g7 scout', 'hemlock'];
//random math


//function tied to onClick to return random gun
function randomGun() {
        gun = gunArr[Math.floor(Math.random() * gunArr.length)];
        image = gunArr[Math.floor(Math.random() * gunArr.length)];
        
        console.log(gun)
        // console.log(gunArr)
        yourGun.innerHTML = `Your gun is the ${gun.name}`;
        document.getElementById("gunImage").src = gun.image;
        gunDescription.innerHTML = gun.description;
    };


