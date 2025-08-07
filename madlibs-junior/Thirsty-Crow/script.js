let play = document.getElementById('play-button');
let wordSelection = document.getElementById('word-selection');
let nouns = document.getElementById('nouns');
let nouns2 = document.getElementById('nouns2');
let adjs = document.getElementById('adjs');
let adjs2 = document.getElementById('adjs2');
let adjs3 = document.getElementById('adjs3');
let verbs = document.getElementById('verbs');
let miscs = document.getElementById('misc');
let title = document.getElementById('title');

let adj1 = document.getElementById('adj-1');
let adj2 = document.getElementById('adj-2');
let adj3 = document.getElementById('adj-3');
let noun1 = document.getElementById('noun-1');
let noun2 = document.getElementById('noun-2');
let verb1 = document.getElementById('verb-1');
let misc1 = document.getElementById('misc-1');
// let mediaNouns;
// let mediaNouns2;


// Nouns Boolean
nounBool = false;

// Adjectives Boolean
adjBool = false;

// Verbs Boolean
verbBool = false;

// Misc Boolean
miscBool = false;

nouns.style.display = 'none';
adjs.style.display = 'none';
verbs.style.display = 'none';
miscs.style.display = 'none';


////////////////////////////////////////


// Instructions (hide/show)
$(document).ready(function(){
    $(play).click(function(){
      $("#instructions").slideToggle();
      play.innerHTML = "How To Play";
      play.style.marginTop = "15px";
      document.getElementById('madlib').style.display = "inline";
    });
  });


  // Refresh Page
  document.getElementById('restart').addEventListener('click', function() {
    location.reload();
  });

  // Tooltips
  $(".apple").attr('title', 'Apple');
  $(".cat").attr('title', 'Cat');
  $(".dragon").attr('title', 'Dragon');
  $(".flamingo").attr('title', 'Flamingo');
  $(".football").attr('title', 'Football');
  $(".lion").attr('title', 'Lion');
  $(".pinnoccio").attr('title', 'Pinnoccio');
  $(".snorkler").attr('title', 'Snorkler');
  $(".tree").attr('title', 'Tree');
  $(".ufo").attr('title', 'UFO');

  $(".astronaut").attr('title', 'Astronaut');
  $(".cake").attr('title', 'Cake');
  $(".car").attr('title', 'Car');
  $(".carrot").attr('title', 'Carrot');
  $(".dragon").attr('title', 'Dragon');
  $(".grapes").attr('title', 'Grapes');
  $(".guitar").attr('title', 'Guitar');
  $(".potion").attr('title', 'Potion');
  $(".robot").attr('title', 'Robot');
  $(".teapot").attr('title', 'Teapot');


////////////////////////////////////////

// NOUN 1
noun1.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns.style.display = "inline";
    nouns2.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    verbs.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.noun-words').forEach(nouns_1 => {
    nouns_1.addEventListener('click', function() {
      noun1.innerHTML = nouns_1.innerHTML;
      noun1.style.padding = '0px 0px';
      noun1.className = 'no-underline';
      // document.querySelectorAll('.noun-images').forEach(noun_images => {
      //   mediaNouns = window.matchMedia( "(max-width: 909px)" );
      //   if (mediaNouns.matches) {
      //       // window width is at less than 909px
      //       noun_images.style.width = '20%';
      //       noun_images.style.marginTop = '-3px';
      //   }
      //   else {
      //       // window width is greater than 909px
      //         noun_images.style.width = '16%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 1
adj1.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs.style.display = "inline";
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    verbs.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words').forEach(adjs_1 => {
    adjs_1.addEventListener('click', function() {
      adj1.innerHTML = adjs_1.innerHTML;
      adj1.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// MISC 1
misc1.addEventListener('click', function() {
  miscBool = true;
  if (miscBool == true) {
    miscs.style.display = "inline";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    verbs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.misc-words').forEach(misc_1 => {
    misc_1.addEventListener('click', function() {
      misc1.innerHTML = misc_1.innerHTML;
      misc1.style.padding = '0px 0px';
      misc1.className = 'no-underline';
      $('#closeModal').trigger("click");
    });
  });
});

// VERB 1
verb1.addEventListener('click', function() {
  verbBool = true;
  if (verbBool == true) {
    verbs.style.display = "inline";
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.verb-words').forEach(verbs_1 => {
    verbs_1.addEventListener('click', function() {
      verb1.innerHTML = verbs_1.innerHTML;
      verb1.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 2
adj2.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs2.style.display = "inline";
    adjs.style.display = "none";
    adjs3.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    verbs.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words2').forEach(adjs_2 => {
    adjs_2.addEventListener('click', function() {
      adj2.innerHTML = adjs_2.innerHTML;
      adj2.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 3
adj3.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs3.style.display = "inline";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    verbs.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words3').forEach(adjs_3 => {
    adjs_3.addEventListener('click', function() {
      adj3.innerHTML = adjs_3.innerHTML;
      adj3.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// NOUN 2
noun2.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns2.style.display = "inline";
    nouns.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    verbs.style.display = 'none';
    miscs.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.noun-words2').forEach(nouns_2 => {
    nouns_2.addEventListener('click', function() {
      noun2.innerHTML = nouns_2.innerHTML;
      noun2.style.padding = '0px 0px';
      noun2.className = 'no-underline';
      // document.querySelectorAll('.noun-images2').forEach(noun_images2 => {
      //   mediaNouns2 = window.matchMedia( "(max-width: 909px)" );
      //   if (mediaNouns2.matches) {
      //       // window width is at less than 909px
      //       noun_images2.style.width = '20%';
      //       noun_images2.style.marginTop = '-3px';
      //   }
      //   else {
      //       // window width is greater than 909px
      //       noun_images2.style.width = '10%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});