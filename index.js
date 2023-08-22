const hubergerIcon=document.querySelector('#menuIcon');
const mobileDrower=document.querySelector('.drowerMobile');
const closeIcon=document.querySelector('#closeIcon');
hubergerIcon.addEventListener('click',()=>{
    mobileDrower.classList.add('showDrowerMoile');
})
closeIcon.addEventListener('click',()=>{
    mobileDrower.classList.remove('showDrowerMoile');
})
