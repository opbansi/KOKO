const glitterBackground=document.getElementById("glitter-background");

for(let i=0;i<100;i++){
  const el=document.createElement("span");
  el.className=i%18===0?"spark":"glitter";
  if(i%21===0)el.classList.add("gold");
  el.style.left=Math.random()*100+"%";
  el.style.top=Math.random()*100+"%";
  el.style.setProperty("--duration",(2+Math.random()*4)+"s");
  el.style.animationDelay=(-Math.random()*5)+"s";
  glitterBackground.appendChild(el);
}

/*
  Add your permitted community URL here.
  Example:
  const COMMUNITY_LINK = "https://example.com";
*/
const COMMUNITY_LINK = "";

const joinButton=document.getElementById("joinButton");

joinButton.addEventListener("click",function(event){
  if(!COMMUNITY_LINK){
    event.preventDefault();
    alert("Please add your community URL in script.js.");
    return;
  }
  joinButton.href=COMMUNITY_LINK;
});
