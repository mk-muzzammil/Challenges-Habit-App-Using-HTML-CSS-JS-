const hubergerIcon=document.querySelector('#menuIcon');
const mobileDrower=document.querySelector('.drowerMobile');
const closeIcon=document.querySelector('#closeIcon');
hubergerIcon.addEventListener('click',()=>{
    mobileDrower.classList.add('showDrowerMoile');
})
closeIcon.addEventListener('click',()=>{
    mobileDrower.classList.remove('showDrowerMoile');
})

function openChallenges(evt, challengeType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(challengeType).style.display = "block";
    evt.currentTarget.className += " active";
  }