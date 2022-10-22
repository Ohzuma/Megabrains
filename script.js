
const part = document.querySelector('.parntner-logos')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let box = document.querySelector('.logo-box')
var para = document.getElementById('text');
let accordion = document.querySelector('.accordion')

const mobileView = document.getElementById('mobile-menu');
const items =
    document.querySelector('.nav-items');
let list = document.querySelectorAll('.list-items')
mobileView.addEventListener('click', myFunction);

function myFunction() {
    items.classList.toggle('active');
    mobileView.classList.toggle('is-active')
    console.log(items)
}


// For the partners
const Logos = [
    {id:1,
    img:"images/partners logo/logo1-1.png", 
    paragraph:"1Our focus is to provide a mechanism to educate the students in areas that they require education so as to elevate them in their fields of endeavor"
    },
    {id:2,
        img:"images/partners logo/logo2.png",
        paragraph:"2Our focus is to provide a mechanism to educate the students in areas that they require education so as to elevate them in their fields of endeavor"
        },
          {id:3,
    img:"images/partners logo/logo3.png", 
    paragraph:"3Our focus is to provide a mechanism to educate the students in areas that they require education so as to elevate them in their fields of endeavor"
    },
    {id:3,
        img:"images/partners logo/logo4.png", 
        paragraph:"4Our focus is to provide a mechanism to educate the students in areas that they require education so as to elevate them in their fields of endeavor"
        },
        {id:3,
            img:"images/partners logo/logo5.png", 
            paragraph:"5Our focus is to provide a mechanism to educate the students in areas that they require education so as to elevate them in their fields of endeavor"
            }
]

// slide functions
next.addEventListener('click',nextSlide);

var position = 0;


function nextSlide(){
    if(position == Logos.length-1){
        position = 0;
    }else{
        position +=1;
    }

var image = Logos[position].img;
var paragraphText = Logos[position].paragraph;
box.innerHTML =  `<img src='${image}' /> <p>${paragraphText}</p>`;

 }
 

 prev.addEventListener('click',prevSlide);
 function prevSlide(){
     if(position == 0){
         position = Logos.length-1;
     }else{
        position -=1;
     }
 
     var image = Logos[position].img;
     var paragraphText = Logos[position].paragraph;
     
     box.innerHTML =  `<img src='${image}' /> <p>${paragraphText}</p>`;
    
     
     }

     setInterval(()=>{
        if(position == Logos.length-1){
            position = 0;
        }else{
            position +=1;
        }
      
        var image = Logos[position].img;
        var paragraphText = Logos[position].paragraph;
        box.innerHTML =  `<img src='${image}' /> <p>${paragraphText}</p>`;

     },3000)

    //  Accordions Datas

    const fqa = [
        {
            question:'How can i reqister?',
            ans:'You can reqister through the login page, or contact us'
        },
        {
            question:'How many course can You offer?',
            ans:'Visit our Course page the see the list of course we offer'
        },
        {
            question:'Can i make a partial payment?',
            ans:'Yes u can'
        },
        {
            question:'Is it only for corpers?',
            ans:'No. Megabrains infotech institute is for everybody'
        },
        {
            question:'Where is your head office?',
            ans:'Our head office is in Gombe state.'
        },
        
    ]

fqa.map((questions)=>{
    const{question,ans} = questions;
    const div = document.createElement('div');
    div.classList = `accordion-div`
    const btnItem = document.createElement('button');
    div.appendChild(btnItem)
    btnItem.classList = `accordion-btn`;
btnItem.innerHTML = question
accordion.appendChild(div);

let paragraph = document.createElement('p');
paragraph.innerHTML ='Ans:' + ' ' + ans;
div.appendChild(paragraph);
btnItem.addEventListener('click',()=>{
  paragraph.classList.toggle('active');
  btnItem.classList.toggle('active')
})

})

