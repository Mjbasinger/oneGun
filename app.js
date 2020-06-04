
const $randomButton = document.getElementById('#random');
const $gunOne = document.getElementById('gunOne');
const $gunTwo = document.getElementById('gunTwo');
const $yourLegend = document.getElementById('yourLegend');

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

//images for legends
let bangaloreImage = 'images/bangalore.jpg'
let wraithImage = 'images/wraith.jpg'
let mirageImage = 'images/mirage.jpg'
let octaneImage = 'images/octane.jpg'
let revenantImage = 'images/revenant.jpg'
let gibralterImage = 'images/gibralter.jpg'
let causticImage = 'images/caustic.jpg'
let wattsonImage = 'images/wattson.jpg'
let lifelineImage = 'images/lifeline.jpg'
let lobaImage = 'images/loba.jpg'
let bloodhoundImage = 'images/bloodhound.jpg'
let pathfinderImage = 'images/pathfinder.jpg'
let cryptoImage = 'images/crypto.jpg'

//class contructor for guns
class Gun{
    constructor(name, image, description) {
        this.name = name; 
        this.image = image;
        this.description = description;
}
}
///constructor for legends
class Legend{
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
//gun array
let gunArr = [flatline, scout, hemlock, rThreeOhOne, havoc, alternator, prowler, rNineNine, spitfire, lStar, longbow, tripleTake, sentinel, chargeRifle, evaEight, mastiff, mozambique, reFourFive, pTwentyTwenty, wingman];

//unique legends
let bangalore = new Legend('Bangalore', bangaloreImage, 'Professional Soldier')
let wraith = new Legend('Wraith', wraithImage, 'Interdimensional Skirmisher')
let mirage = new Legend('Mirage', mirageImage, 'Holographic Trickster')
let octane = new Legend('Octane', octaneImage, 'High-Speed Daredevil')
let revenant = new Legend('Revenant', revenantImage, 'Synthetic Nightmare')
let gibralter = new Legend('Gibralter', gibralterImage, 'Shielded Fortress')
let caustic = new Legend('Caustic', causticImage, 'Toxic Trapper')
let wattson = new Legend('Wattson', wattsonImage, 'Static Defender')
let lifeline = new Legend('Lifeline', lifelineImage, 'Combat Medic')
let loba = new Legend('Loba', lobaImage, 'Translocating Thief')
let bloodhound = new Legend('Bloodhound', bloodhoundImage, 'Technological Tracker')
let pathfinder = new Legend('Pathfinder', pathfinderImage, 'Forward Scout')
let crypto = new Legend('Crypto', cryptoImage, 'Surveillance Expert')

//legends array

let legendsArray = [bangalore, wraith, mirage, octane, revenant, gibralter, caustic, wattson, lifeline, loba, bloodhound, pathfinder, crypto];

//random math

$(()=>{ 
//function tied to onClick to return random gun
function randomGun() {
        gun = gunArr[Math.floor(Math.random() * gunArr.length)];
        image = gunArr[Math.floor(Math.random() * gunArr.length)];

        gun2 = gunArr[Math.floor(Math.random() * gunArr.length)];
        image2 = gunArr[Math.floor(Math.random() * gunArr.length)];

        gunIs.innerHTML = 'Your guns: ';
        yourGun.innerHTML = `${gun.name}`;
        document.getElementById("gunImage").src = gun.image;
        // gunDescription.innerHTML = gun.description;
       
        yourGunTwo.innerHTML = `${gun2.name}`;
        document.getElementById("gunImage2").src = gun2.image;
        // gunDescription2.innerHTML = gun2.description;
    };


function randomLegend(){
        legend = legendsArray[Math.floor(Math.random()*legendsArray.length)];
        image = legendsArray[Math.floor(Math.random()*legendsArray.length)];

        yourLegend.innerHTML = `Your legend: ${legend.name}`;
        document.getElementById('legendImage').src = legend.image;
        legendDescription.innerHTML = legend.description;
        
        
}


    $("button").click( function randomizeAll(){
    randomGun();
    randomLegend();
    $("#gunOne").addClass('addBorder');
    $("#gunTwo").addClass('addBorder');
    // $("#yourLegend").addClass('addBorder');
    $("#legendImage").addClass('addBorder')
    
})

})