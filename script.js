function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



  // i navbarit
   
  // Funksioni për të ndryshuar mënyrën e faqes nga dritë në errët dhe anasjelltas
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    // Ndryshoni tekst në buton në përputhje me mënyrën aktuale
    var darkModeBtn = document.getElementById("darkModeBtn");
    if (body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
}

// Lidhni funksionin me ngjarjen klikimi të butonit
var darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", toggleDarkMode);








  // Funksioni për të ndryshuar mënyrën e faqes nga dritë në errët dhe anasjelltas
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    // Ndryshoni tekst në buton në përputhje me mënyrën aktuale
    var darkModeBtn = document.getElementById("darkModeBtni");
    if (body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtni.textContent = "Dark Mode";
    }
}

// Lidhni funksionin me ngjarjen klikimi të butonit
var darkModeBtn = document.getElementById("darkModeBtni");
darkModeBtni.addEventListener("click", toggleDarkMode);






// Tekstet që do të shfaqen në typewriter
var texts = ["Im Front-End-Developer", "Im Programer"];
var index = 0; // Indeksi i tekstit aktual

// Funksioni për të ndryshuar tekstin në mënyrë dinamike duke përdorur efektin typewriter
function changeText() {
  var text = document.getElementById("typewriter");
  var currentText = texts[index]; // Merni tekstin aktual nga lista e tekstave
  
  // Funksioni për animacionin typewriter
  function typeWriterEffect() {
    var i = 0;
    var typingSpeed = 100; // Koha midis çdo shkronje (ms)

    // Funksioni rekursiv për të shfaqur tekstin si në efektin typewriter
    function type() {
      if (i < currentText.length) {
        text.innerHTML += currentText.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
      }
    }

    // Fshij tekstin aktual dhe fillo animacionin typewriter
    text.innerHTML = "";
    type();
  }

  // Fshij tekstin pasi të ketë përfunduar animacioni
  setTimeout(function() {
    text.innerHTML = "";
    index = (index + 1) % texts.length; // Zgjedh tekstin e ardhshëm në listë
    changeText(); // Fillo procesin për tekstin e ardhshëm
  }, 3500); // Prit 3.5 sekonda përpara se të fshihet teksti aktual dhe të fillojë teksti i ri
  
  // Fillo animacionin typewriter
  typeWriterEffect();
}

// Thirr funksionin për të filluar procesin
changeText();
