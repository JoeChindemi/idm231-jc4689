document.getElementById("dateofbirth").onchange=function(){
/*ASTROLOGICAL VARIABLES: Sets vars for sign text and sound, 
later used with getElementByID to get data for 
when calendar clicks with ur and urtext elements in function
*/
var astrological_sign = '';
var astrological_text = '';
var astrological_sound= '';
/*SPLIT COMMAND: splits calendar data so month and day input can be read from click and stored into 
seperate variable.  Helps determine the day and zodiac sign for input/if-else tree later*/
var dob = document.getElementById("dateofbirth").value;
var dobs = dob.split("-");
var month = parseInt(dobs[1]);
var day = parseInt(dobs[2]);
/*IF ELSE TREE: Takes month and day data from calender, thne uses data to determine what 
astrological data will be displayed and runs function click picture function at bottom*/
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        astrological_sign = './zodiacTeamPhotos/camReddishPhoto.jpeg';
        astrological_text = 'YOU ARE CAM REDDISH<br>-Went to Duke with RJ Barrett<br>-Played with Hawks and Knicks<br>-Moved to Portland at trade deadline<br><br>11.8 PTS<br>3.1 RB<br>2.2 AST';
        astrological_sound = './zodiacTeamSounds/camReddishSound.mp3';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        astrological_sign = './zodiacTeamPhotos/juliusRandlePhoto.jpeg';
        astrological_text = 'YOU ARE JULIUS RANDLE<br>-Went to Kentucky<br>-Played with Lakers and Pelicans<br>-2 time all-star and 1 time most improved player<br><br>25.2 PTS<br>10.3 RB<br>4.1 AST';
        astrological_sound = './zodiacTeamSounds/juliusRandleSound.mp3';
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        astrological_sign = './zodiacTeamPhotos/jalenBrunsonPhoto.jpeg';
        astrological_text = 'YOU ARE JALEN BRUNSON<br>-Went to Villanova<br>-Played with Mavericks<br>-The best Knicks point guard in over a decade<br><br>23.8 PTS<br>3.6 RB<br>6.1 AST';
        astrological_sound = './zodiacTeamSounds/jalenBrunsonSound.mp3';
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        astrological_sign = './zodiacTeamPhotos/jerichoSimsPhoto.jpeg';
        astrological_text = 'YOU ARE JERICHO SIMS<br>-Went to Texas<br>-44.5 inch vertical<br>-Notoriously dissapointing dunk contest<br><br>3.5 PTS<br>4.7 RB<br>0.5 AST';
        astrological_sound = './zodiacTeamSounds/jerichoSimsSound.mp3';
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        astrological_sign = './zodiacTeamPhotos/joshHartPhoto.jpeg';
        astrological_text = 'YOU ARE JOSH HART<br>-Went to Villanova with Brunson<br>-Got traded for Cam Reddish<br>-Hustles and does the little things<br><br>9.9 PTS<br>7.9 RB<br>3.9 AST';
        astrological_sound = './zodiacTeamSounds/joshHartSound.mp3';
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        astrological_sign = './zodiacTeamPhotos/evanFournierPhoto.jpeg';
        astrological_text = 'YOU ARE EVAN FOURNIER<br>-From France<br>-Played for Orlando and Boston<br>-Can shoot, sits on the bench<br><br>6.8 PTS<br>2.0 RB<br>1.5 AST';
        astrological_sound = './zodiacTeamSounds/evanFournierSound.mp3';
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        astrological_sign = './zodiacTeamPhotos/rjBarrettPhoto.jpeg';
        astrological_text = 'YOU ARE RJ BARRETT<br>-Went to Duke with Cam Reddish<br>-Drafted #3 overall by the Knicks in 2019<br>-Has potential, but needs to be more consistent<br><br>19.9 PTS<br>5.1 RB<br>2.7 AST';
        astrological_sound = './zodiacTeamSounds/rjBarrettSound.mp3';
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        astrological_sign = './zodiacTeamPhotos/mitchellRobinsonPhoto.jpeg';
        astrological_text = 'YOU ARE MITCHELL ROBINSON<br>-Went to Western Kentucky University, but dropped out<br>-Second round pick by the Knicks<br>-Underrated rim protector and finisher<br><br>7.5 PTS<br>9.1 RB<br>0.9 AST';
        astrological_sound = './zodiacTeamSounds/mitchellRobinsonSound.mp3';
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrological_sign = './zodiacTeamPhotos/quentinGrimesPhoto.jpeg';
        astrological_text = 'YOU ARE QUENTIN GRIMES<br>-Went to Houston University<br>-2022 All-Summer League First Team<br>-Solid shooter and perimeter defender<br><br>9.8 PTS<br>3.1 RB<br>1.9 AST';
        astrological_sound = './zodiacTeamSounds/quentinGrimesSound.mp3';
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrological_sign = './zodiacTeamPhotos/obiToppinPhoto.jpeg';
        astrological_text = 'YOU ARE OBI TOPPIN<br>-Went to Dayton University<br>-Dynamic dunker and corner shooter<br>-Has potential but does not get minutes<br><br>6.2 PTS<br>2.8 RB<br>0.8 AST';
        astrological_sound = './zodiacTeamSounds/obiToppinSound.mp3';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        astrological_sign = './zodiacTeamPhotos/immanuelQuickleyPhoto.jpeg';
        astrological_text = 'YOU ARE IMMANUEL QUICKLEY<br>-Went to Kentucky<br>-Craft shot creator and perimeter defender<br>-One of the best role players in the NBA<br><br>13.6 PTS<br>4.1 RB<br>3.2 AST';
        astrological_sound = './zodiacTeamSounds/immanuelQuickleySound.mp3';
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        astrological_sign = './zodiacTeamPhotos/derrickRosePhoto.jpeg';
        astrological_text = 'YOU ARE DERRICK ROSE<br>-Went to Memphis<br>-2011 MVP, youngest in NBA history at 22 with the Bulls<br>-Injuries hurt his career, but now is a veteran presence on the bench<br><br>5.6 PTS<br>1.5 RB<br>1.7 AST';
        astrological_sound = './zodiacTeamSounds/derrickRoseSound.mp3';
      }
        clickPicture(astrological_sign,astrological_text,astrological_sound);
        
}
/*CLICK PICTURE FUNCTION: Uses 3 astrological parameters, uses getElementByID 
to target ur and urText to show image and text box display USING the data above.
Also runs playSound with astrological_sound*/
function clickPicture(astrological_sign,astrological_text,astrological_sound){
    var myImage = document.getElementById("ur");
    var myText = document.getElementById("urText");
    /*var mySound = document.getElementById("urSound");*/
    myText.innerHTML = astrological_text;
    myImage.src = astrological_sign;
    playSound(astrological_sound);
}
/*PLAY SOUND FUNCTION: Helps play astrological sound, put back into 
clickPicture function and uses astrological sound parameter */
playSound = function (astrological_sound) {
  var audio = new Audio(astrological_sound);
  audio.loop = false;
  audio.play(); 
}
/*OVERLAY FUNCTION: Helps toggle on off click for help overlay*/
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
  }