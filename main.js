var navbar = document.getElementById("navbar")
var menu = document.getElementById("menu")


window.addEventListener("scroll",() => {
// console.log('scrolled');
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
// console.log(scrolled);

if(scrolled > 180){
navbar.classList.add("sticky");
}
else{
    navbar.classList.remove("sticky");
}
});


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





var ebModal = document.getElementById('mySizeChartModal');

var ebBtn = document.getElementById("mySizeChart");

var ebSpan = document.getElementsByClassName("close")[0];

ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
};



// var spanc = '<span class="btn"></span>;

document.querySelectorAll(".carousel").forEach( carousel => {
    var items = carousel.querySelectorAll(".carousel_item");
            const button = Array.from(items,() => {
                 return '<span class="btn"></span>'
            });
            // console.log(button)

            carousel.insertAdjacentHTML("beforeend", `
            <div class="car_nav">
            ${button.join("")}
            
            </div>
            
            `);
             
            const buttons = carousel.querySelectorAll(".btn");

            buttons.forEach((button, i)  => {
                button.addEventListener("click", () => {
                items.forEach(item => item.classList.remove("item_selected") );
                buttons.forEach(button => button.classList.remove("btn_selected")); 

                items[i].classList.add("item_selected");
                button.classList.add("btn_selected");


                });
            
             });

            //  console.log(buttons);

             items[0].classList.add("item_selected");
             button[0].classList.add("btn_selected");
        });


    

//  document.querySelectorAll(".blog_nav .blog_container").forEach( blog_carousel => {
//         var content = blog_carousel.querySelectorAll(".blog_items");
//              const blogton = Array.from(content,() => {
//                      return '<span> <a class="blog_items" href=""></a></span>'
//                     });
//                     console.log(blogton);
        
//                     blog_carousel.insertAdjacentHTML("", `
//                     <div class="blog_container" >
//                     ${blogton.join("")}
                    
//                     </div>
                    
//                     `); 
//                 });
                     
//                     const blogtons = carousel.querySelectorAll(".btn");
        
//                 //     buttons.forEach((button, i)  => {
//                 //         button.addEventListener("click", () => {
//                 //         items.forEach(item => item.classList.remove("item_selected") );
//                 //         buttons.forEach(button => button.classList.remove("btn_selected")); 
        
//                 //         items[i].classList.add("item_selected");
//                 //         button.classList.add("btn_selected");
        
        
//                 //         });
                    
//                 //      });
        
//                 //      console.log(buttons);
        
//                 //      items[0].classList.add("item_selected");
//                 //      button[0].classList.add("btn_selected");
//                 // });
        