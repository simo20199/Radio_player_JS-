class Player{

  constructor() {
    const heightMain = document.getElementById('player');
    heightMain.style.height = screen.height + "px";
    if(screen.width < 500) {
        heightMain.style.width = screen.width + "px";

    }
    const heightDiv = document.getElementById('content');
    heightDiv.style.height = screen.height-300 + "px";
  }

}

onload = new Player();

// Class buttons

class audio_player {

 constructor() {
   this.audio_file = document.getElementById("audio_file");
   this.title_audio = document.getElementById("title_radio");
   this.play_pause_button = document.getElementById("play_pause");
   this.isPlayed;
   this.play_pause_button.addEventListener('click', ()=>{
   this.play_pause();

   });

   //this.play_pause();


   this.names_radio = [];
   this.names_radio[0] = "Virgin Radio";
   this.names_radio[1] = "bbc Radio London";
   this.names_radio[2] = "talk sport";
   this.names_radio[3] = "BOX UK";



   this.source_audio = [];
   this.source_audio[0] = "http://radio.virginradio.co.uk/stream";
   this.source_audio[1] = "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_lrldn_mf_q";
   this.source_audio[2] = "https://radio.talksport.com/stream";
   this.source_audio[2] = "http://51.75.170.46:6191/stream/1/";

   this.server = 0;

   this.setResource();

   document.getElementById("next").addEventListener('click',()=>{
      if(this.server<this.source_audio.length-1){
        ++this.server;
        this.isPlayed = false;
      }else{
        this.server=0;
      }
       localStorage.setItem("SAVE-POSITION", this.server);
       this.setResource();
   });

   document.getElementById("back").addEventListener('click',()=>{
      if(this.server>0){
        --this.server;
      this.isPlayed =false;
      }else{

        this.server =this.source_audio.length-1;
    }
      localStorage.setItem("SAVE-POSITION", this.server);
      this.setResource();

   });

 }

  setResource() {
    if(localStorage.getItem("SAVE-POSITION")!=null){
      this.server=localStorage.getItem("SAVE-POSITION");

    }

   this.audio_file.src = this.source_audio[this.server];
   this.title_audio.innerHTML = this.names_radio[this.server];
   this.play_pause();
  }

  play_pause(){

    if(this.isPlayed == false){
      this.play_pause_button.src = "./img/pause.png";
      this.audio_file.play();
      this.isPlayed = true;

    }else{
      this.play_pause_button.src = "./img/play.png";
      this.audio_file.pause();
      this.isPlayed = false;
    }

  }
}


onload = new audio_player();
