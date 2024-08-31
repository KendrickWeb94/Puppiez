
// const navlinks = [
//     { id: "1", label: "Home" , img: ""},
//     { id: "2", label: "Book a session" , img: ""},
//     { id: "3",  label: "Contact Us", img: "" },
//   ];
  
//   function generateNavLinks() {
//     const navContainer = document.getElementById('nav-links');
  
//     navlinks.forEach(link => {
     
  
//       const img = document.createElement('img');
//       img.src = `/assets/img/dogs/dog1.svg${link.img}`; // Path to your img images
//       img.alt = link.label;
  
//       const label = document.createElement('span');
//       label.textContent = link.label;
  
//       navItem.appendChild(img);
//       navItem.appendChild(label);
      
//       navContainer.appendChild(navItem);
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', generateNavLinks);
  
let navbar = document.getElementById("navbar");
let responsivenav = document.getElementById("responsive_nav")


document.querySelector ('#menu_btn').onclick = () =>{
    if(responsivenav.classList.contains("inactive")) {
        responsivenav.classList.remove("inactive");
        responsivenav.classList.add("active");
        console.log("clockinggg")
    } else {
        responsivenav.classList.add("inactive")
    }
   
}

document.querySelector ('#toggleres').onclick = () => {
    if (responsivenav.classList.contains("active") ) {
        responsivenav.classList.add("inactive")
        responsivenav.classList.remove("active")
    }
};

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         600: {
//             items: 3,
//             nav: false
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: false
//         }
//     }
// })