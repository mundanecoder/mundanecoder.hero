var navbar = document.getElementById("navbar")
// var menu = document.getElementById("menu")


window.addEventListener("scroll",() => {
const scrolled = window.scrollY;

if(scrolled > 180){
navbar.classList.add("sticky");
}
else{
    navbar.classList.remove("sticky");
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var section = document.querySelectorAll('section');
var navli = document.querySelectorAll('nav .fixed span ');

window.addEventListener('scroll', ()=> {
    let current = ''; 
    // console.log(window.scrollY);
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop);
        const sectionHeight = section.clientHeight;
        if(window.scrollY > sectionTop){
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    navli.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current )){

            a.classList.add('active')

        }
    })

    }
    
)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Modal = document.getElementById('mySizeChartModal');

var Btn = document.getElementById("mySizeChart");

var Span = document.getElementsByClassName("close")[0];

Btn.onclick = function() {
    Modal.style.display = "block";
}

Span.onclick = function() {
    Modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Modal) {
        Modal.style.display = "none";
    }
};


/////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

var carou_box = document.querySelectorAll('.carousel1');
var carou_item_= document.querySelectorAll('.carousel_item')
var btn_l = document.getElementById('back');
var btn_R = document.getElementById('next');
var carou_items = document.querySelectorAll(`.item[data-no]`);
var carou_bttn = document.querySelectorAll('.a_btn');
var i =1;

function next(e){
    if(e.target.id.includes('next')){
         i++;
        (document.querySelector(`.item[data-no="${i}"]`)).classList.add('show')
        
        setInterval((document.querySelector(`.item[data-no="${i-1}"]`)).classList.remove('show'),100 )
        
    }

    else if(e.target.id.includes('back')){
        i--;
        (document.querySelector(`.item[data-no="${i}"]`)).classList.add('show')

        setInterval((document.querySelector(`.item[data-no="${i+1}"]`)).classList.remove('show'),100 )

        console.log(i);




    }
}
carou_bttn.forEach(bttn => (bttn.addEventListener('click',next)))

///////////////////////////////////////////////////////////////////////////////////
