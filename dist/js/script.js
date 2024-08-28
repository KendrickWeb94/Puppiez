// script.js

// const navlinks = [
//     { id: "1", icon: "home.png", route: "/", label: "Home" },
//     { id: "2", icon: "getstarted.png", route: "/BookSession", label: "Book a session" },
//     { id: "3", icon: "lock.png", route: "/Contact", label: "Contact Us" },
//   ];
  
//   function generateNavLinks() {
//     const navContainer = document.getElementById('nav-links');
  
//     navlinks.forEach(link => {
//       const navItem = document.createElement('a');
//       navItem.href = link.route;
//       navItem.className = 'nav-link';
  
//       const icon = document.createElement('img');
//       icon.src = `assets/icons/${link.icon}`; // Path to your icon images
//       icon.alt = link.label;
  
//       const label = document.createElement('span');
//       label.textContent = link.label;
  
//       navItem.appendChild(icon);
//       navItem.appendChild(label);
      
//       navContainer.appendChild(navItem);
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', generateNavLinks);
  