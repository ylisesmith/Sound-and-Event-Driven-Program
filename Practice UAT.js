//startfunction
function stop(){
    document.getElementById("startButton").disabled = false;

    document.getElementById("playButton").disabled = false;

    document.getElementById("stopButton").disabled = true;
}
function start(){

    //document getelement start button

    document.getElementById("startButton").disabled = true;

    //document getelement stop button

    document.getElementById("stopButton").disabled = false;

    document.getElementById("playButton").disabled = true;

               

                 //timer 10 different timmers

    var count=10;

               //going through a loop

            for (i=1;i<=11;i++) {
                setTimeout(function(){

                    if(count==0){
                        document.getElementById("countdisplay").innerHTML = "blastoff";

                    }
                    else if (count<5){
                        document.getElementById("countdisplay").innerHTML = "warning less than 1/2 way there,"  + count + " secs left";

                    }
                    else {
                        document.getElementById("countdisplay").innerHTML = count;

                    }
                    count--;
                },1000*i);

            }

        }
function playstation() {

    //mysound start *//

    mysound = new sound("us-lab-background.mp3");

    //my sound + play *//

    mysound.play();



}

//function begining

function sound(src) {

    //audio play *//

    this.sound = document.createElement("audio");

    //add src to sound *//

    this.sound.src =src;

    //setattribute *//

    this.sound.setAttribute("preload","auto");

    // control for sound *//

    this.sound.setAttribute("controls","none");

    // style for sound *//

    this.sound.style.display = "none";

    //document body *//

    document.body.appendChild(this.sound)

    //play fuction *//

    this.play = function() {

        // sound. play *//

         this.sound.play();

       

    }

    //stop function *//

    this.stop = function() {

        //pause function *//

        this.sound.pause();

    }



}