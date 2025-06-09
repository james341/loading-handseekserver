//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
	"image10.jpg",
	"image11.jpg",
	"image12.jpg",
	"image13.jpg",
	"image14.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "freddyspoweroutsongmodifiedsprin.ogg", name: "Installation Music"},
	{ogg: "cheapshop.ogg", name: "Installation Music"},
	{ogg: "fnaf2remix.ogg", name: "Installation Music"},
	{ogg: "suburbanteam.ogg", name: "Installation Music"},
	{ogg: "thefthomer.ogg", name: "Installation Music"},
	{ogg: "behindtheslaughteremix.ogg", name: "Installation Music"},
	{ogg: "heldwantedmusic.ogg", name: "Installation Music"},
	{ogg: "Incredibleagain.ogg", name: "Installation Music"},
	{ogg: "chocolatelandmusic.ogg", name: "Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = false;

// Enter your custom messages below
var l_messages = [
	"Staff ALWAYS have the final say; if they tell you to stop- you got to stop. Otherwise, you can/will be warned!",
	"Abusing glitches or hacks will result in a warning or ban, depending on the severity of the offense!",
	"Staff members have the final say. If you feel something was unfair, appeal respectfully through the proper channels!",
	"Please No spamming or causing any kind of nuisance or inconveniences!",
	"No DM advertising or advertising in general chats. (#server-content and #server-clips are exceptions, promoting the  Pill Pack Hide & Seek discord server and sharing clips of the GMod server are exceptions!",
	"Recording is allowed on the server and playing on it has the added chance of you being in someone elses videos!",
	"Do not impersonate any individuals on the server. Abuse of this will result in kick or ban!",
	"No malicious content No grabify links, viruses, crash videos, links to viruses, or token grabbers. These will result in an automated ban!",
	"No abuse of glitches/hacks, it will result in a warning or ban depending on the severity of the offense!",
	"Failure to follow these rules will result in an appealable ban, on your second ban you can not appeal!",
	"No DM advertising or advertising in general chats. (#server-content and #server-clips are exceptions!",
	"Be respectful with all members Be respectful to others , No death threats, sexism, hate speech, racism (NO N WORD, this includes soft N) > No doxxing, swatting, witch hunting, or any drama in the slightest. Drama will result in consequences!",
	"Racial slurs, homophobic comments, or any other offensive remarks are prohibited according to the rules. Staff have the final authority to determine what is permissible!",
	"No abuse of glitches/hacks will result in a warning or ban depending on the severity of the offense!",
	"Treat all members with respect. Banter is fine, but offensive, hateful, or harassing behavior will not be tolerated!",
	"DDoS or the publicizing of other member's private information (DOX) will result in a permanent ban. (This includes all/any hacking threats!",
	"Sending any NSFW, Gore, Racist, Queerphobic or etcetera messages this will result in a permanent NOT APPEALABLE ban!",
	"Raiding the server is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"Recording is allowed on the server, so by playing here, you might just find yourself starring in someone else's videos!",
	"Oh, any violations of these oh-so-important rules will have our incredibly loyal mods give you a gentle warning. Keep it up, and you'll be kicked out—or if it's something really bad, banned. So, pretty please, don't cause any trouble. Have a nice day!",
	"Press f1 to toggle third-person camera on and off Press f2 to access the shop Press f3 to access your profile information with season and leaderboard information. Press f5 to take a screenshot Press f7 to show the emote wheel!",
        "Feel free to ask any of our lovely staff members, they are always open to help. The community is also very helpful as our active player base is very welcoming to new players If you need this in another language or context, please let me know!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
