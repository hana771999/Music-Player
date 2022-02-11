const musicContainer = document.querySelector(".music-container");
const playBtn  = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const cover = document.querySelector("#cover");
const title = document.querySelector("#title");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");

const sounds =["FairyTale","into_your_arms","Harleys In Hawaii","Let_Me_Down_Slowly"];
let index = 2;



loadMusic(sounds[index]) 

function loadMusic(sound){
    title.innerText = sound;
    audio.src = `./sound/${sound}.mp3`
    cover.src = `./images/${sound}.jfif`


}

function playSound(){
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
    
    audio.play()
}
function pauseSound(){
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    
    audio.pause()
}
function prevSound(){
    index--;
    if(index <= 0){
        index = sounds.length -1;
        loadMusic(sounds[index])
        playSound()
    }

}
function nextSound(){
    index++;
    if(index >= sounds.length ){
        index = 0;
        loadMusic(sounds[index])
        playSound()
    }


}
function updateProgress(e){
    const {duration , currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width =` ${progressPercent}% `

}  
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration; 
    audio.currentTime = (clickX / width) * duration
}
playBtn.addEventListener("click",()=>{
    const isPlaying = musicContainer.classList.contains("play");
    if(isPlaying){
        pauseSound();
    }else{
        playSound();
    }
    
})



prevBtn.addEventListener("click", prevSound);
nextBtn.addEventListener("click", nextSound);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click" , setProgress);

audio.addEventListener("ended",nextSound)







