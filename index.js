const brans = [
  { id:1,
    src: "brands/brand1.jpg"
  },
   { id:2,
    src: "brands/brand2.jpg"
  },
   { id:3,
    src: "brands/brand3.jpg"
  },
   { id:4,
    src: "brands/brand4.jpg"
  },
   { id:5,
    src: "brands/brand5.jpg"
  },
   { id:6,
    src: "brands/brand6.jpg"
  },
   { id:7,
    src: "brands/brand7.jpg"
  },
   { id:8,
    src: "brands/brand8.jpg"
  },
   { id:9,
     src: "brands/brand9.jpg"
  },
   { id:10,
    src: "brands/brand10.jpg"
  },
   { id:11,
    src: "brands/brand11.jpg"
  }
];

const time = document.getElementById("currentDate");
time.innerHTML =new Date().getFullYear();


// the nav bar functionality
const toggleBtn= document.querySelector(".bars"); 
const links= document.querySelector(".links"); 
const navBar=document.getElementsByClassName("navBar")[0]; 


window.addEventListener("scroll",function(){
   let scrollHeight=window.pageYOffset;// it returns the height in which u have scrolled down
    const navHeight=navBar.getBoundingClientRect().height; 

    if (scrollHeight > navHeight) {
      navBar.classList.add("fixed-nav");
    } else {
      navBar.classList.remove("fixed-nav");
    }
 
 })

toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show")
})

const moreWork = document.querySelectorAll(".moreWork");
const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener("click",()=>{
  console.log("it's working");
   moreWork.forEach((work)=>{
       work.classList.add("showMore");
   })
})