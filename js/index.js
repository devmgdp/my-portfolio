$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  /* Menu mobile - ativo */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
  });
});

/* Animação de escrever */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" FullStack Developer", " Web Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Light Scroll

$("nav a").click(function (e) {
  e.preventDefault();
  let id = $(this).attr("href");
  targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    500
  );
});

// Block User click in project not complet

$(".link-desen").click(function (e) {
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
});

// Função para mostrar ou ocultar o botão dependendo da posição da página
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var botao = document.getElementById("botaoTopo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botao.style.display = "block";
    botao.style.opacity = "1"; // Torna o botão visível com a animação
  } else {
    botao.style.opacity = "0"; // Torna o botão invisível com a animação
    setTimeout(function () {
      botao.style.display = "none";
    }, 300); // Oculta o botão após a animação terminar
  }
}

// Função para rolar a página para o topo suavemente
function voltarAoTopo() {
  scrollStep();
}

function scrollStep() {
  if (window.pageYOffset === 0) {
    return;
  }
  window.scrollBy(0, -50); // Valor que define a "velocidade" da rolagem. Quanto menor, mais lento.
  setTimeout(scrollStep, 15); // Valor que define a frequência da atualização da posição da página. Quanto menor, mais suave.
}

// Seleciona todos os links âncora na página
const links = document.querySelectorAll('a[href^="#"]');

// Adiciona um evento de clique a cada link
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Obtém o ID do elemento alvo do link
    const targetId = this.getAttribute('href').substring(1);

    // Encontra o elemento alvo na página
    const targetElement = document.getElementById(targetId);

    // Usa o SmoothScroll para rolar suavemente até o elemento alvo
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // Rola suavemente até o elemento alvo
      });
    }
  });
});


const translate = document.querySelector(".translate");
const divAbout = document.querySelector(".div-about");
const divPort = document.querySelector(".div-portugues");
const spanAbout = document.querySelector(".span-about");
const spanPort = document.querySelector(".span-portugues");
const pAbout = document.querySelector(".p-about");
const pPortugues = document.querySelector(".about-portugues");


let translated = false;
translate.addEventListener("click", e => {
  e.preventDefault();
  if (translated) {
    pAbout.style.display = "block";
    pPortugues.style.display = "none";
    divAbout.style.display = "block";
    divPort.style.display = "none";
  } else {
    pAbout.style.display = "none";
    pPortugues.style.display = "block"
    divAbout.style.display = "none";
    divPort.style.display = "block";
  }

  translated = !translated;
});

