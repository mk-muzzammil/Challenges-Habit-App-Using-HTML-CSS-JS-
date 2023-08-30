const hubergerIcon=document.querySelector('#menuIcon');
const mobileDrower=document.querySelector('.drowerMobile');
const closeIcon=document.querySelector('#closeIcon');
const imageInput=document.querySelector('#imageInput');
const imagePreview=document.querySelector('#imageShow');
const dayInputFields=document.querySelectorAll('.input');
const mainBody=document.querySelector('.mainBody');



hubergerIcon.addEventListener('click',()=>{
    mobileDrower.classList.add('showDrowerMoile');
    mainBody.style.overflow='hidden';
})
closeIcon.addEventListener('click',()=>{
    mobileDrower.classList.remove('showDrowerMoile');
    mainBody.style.overflow='auto';
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
    document.getElementById(challengeType).style.display = "inline-block";
    evt.currentTarget.className += " active";
  }
  // const darkModeSwitch = document.querySelector(".dark-mode-switch");

  // darkModeSwitch.addEventListener("click", () => {
  //   darkModeSwitch.classList.toggle("active");
  //   document.body.classList.toggle("dark-mode");
  // });
  imageInput.addEventListener('change',changePhoto);

function changePhoto(){
  const filePath=imageInput.files;
  if(imageInput.files.length > 0){
  imagePreview.src=URL.createObjectURL(filePath[0]);

  console.log(filePath[0].name);

  imagePreview.style.borderRadius = "50%";
  }
  else{
    const para=document.createElement('p');
    para.textContent='No file selected';
    imagePreview.appendChild(para);
    
  }
}

// const createElement=(id)=>{
//   return `<div id="inputTask">
//             <input type="text" id="taskInput${id}" placeholder="Enter name your Challenge">
//             <img src="../images/saveImg.png" alt="Save File Image">
//           </div>`
// }


const addEventListenerToDayInputFields=()=>{
  dayInputFields.forEach((dayInputField)=>{
    dayInputField.addEventListener('click',(event)=>{
      const target=event.target;
      // const id=target.name;
      const targetParent=event.target.parentNode;
      
      const inputTask=targetParent.children[0];
      const inputTaskInputField=inputTask.children[0];
      const inputTaskSaveButton=inputTask.children[1];
      const inputFeild=targetParent.children[1];


      // console.log(inputTask);
      console.log(inputTaskInputField);
      
      inputFeild.classList.add('hideInput');
      inputTask.classList.add('showInputask');

      inputTaskSaveButton.addEventListener("click",()=>{
        if(inputTaskInputField.value){
          const value=inputTaskInputField.value;
          inputFeild.setAttribute('placeholder',value);
          inputFeild.classList.remove('hideInput');
          inputTask.classList.remove('showInputask');
        }
        else{
          inputFeild.textContent='No Task';
          inputFeild.classList.remove('hideInput');
          inputTask.classList.remove('showInputask');
        }


      })
      

    })
  })



}

addEventListenerToDayInputFields();





  var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);