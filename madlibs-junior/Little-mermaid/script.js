let play = document.getElementById('play-button');
let wordSelection = document.getElementById('word-selection');
let nouns = document.getElementById('nouns');
let nouns2 = document.getElementById('nouns2');
let nouns3 = document.getElementById('nouns3');
let nouns4 = document.getElementById('nouns4');
let nouns5 = document.getElementById('nouns5');
let adjs = document.getElementById('adjs');
let adjs2 = document.getElementById('adjs2');
let adjs3 = document.getElementById('adjs3');
let adjs4 = document.getElementById('adjs4');
let adjs5 = document.getElementById('adjs5');
let adjs6 = document.getElementById('adjs6');
let verbs = document.getElementById('verbs');
let verbs2 = document.getElementById('verbs2');
let miscs = document.getElementById('misc');
let miscs2 = document.getElementById('misc2');
let miscs3 = document.getElementById('misc3');
let title = document.getElementById('title');

let adj1 = document.getElementById('adj-1');
let adj2 = document.getElementById('adj-2');
let adj3 = document.getElementById('adj-3');
let adj4 = document.getElementById('adj-4');
let adj5 = document.getElementById('adj-5');
let adj6 = document.getElementById('adj-6');
let noun1 = document.getElementById('noun-1');
let noun2 = document.getElementById('noun-2');
let noun3 = document.getElementById('noun-3');
let noun4 = document.getElementById('noun-4');
let noun5 = document.getElementById('noun-5');
let verb1 = document.getElementById('verb-1');
let verb2 = document.getElementById('verb-2');
let misc1 = document.getElementById('misc-1');
let misc2 = document.getElementById('misc-2');
let misc3 = document.getElementById('misc-3');

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
  $(".canoe").attr('title', 'Canoe');
  $(".castle").attr('title', 'Castle');
  $(".clown").attr('title', 'Clown');
  $(".elephant").attr('title', 'Elephant');
  $(".fish").attr('title', 'Fish');
  $(".flowers").attr('title', 'Flowers');
  $(".knight").attr('title', 'Knight');
  $(".parrot").attr('title', 'Parrot');
  $(".pirate").attr('title', 'Pirate');
  $(".soccerball").attr('title', 'Soccer Ball');
  $(".tortoise").attr('title', 'Tortoise');
  $(".unicorn").attr('title', 'Unicorn');

  $(".bat").attr('title', 'Bat');
  $(".beaker").attr('title', 'Beaker');
  $(".caterpillar").attr('title', 'Caterpillar');
  $(".dinosaur").attr('title', 'Dinosaur');
  $(".dolphin").attr('title', 'Dolphin');
  $(".frog").attr('title', 'Frog');
  $(".kid").attr('title', 'Kid');
  $(".little-red-riding-hood").attr('title', 'Little Red Riding Hood');
  $(".eel").attr('title', 'Eel');
  $(".piano").attr('title', 'Piano');
  $(".present").attr('title', 'Present');
  $(".rocks").attr('title', 'Rocks');


////////////////////////////////////////

// ADJ 1
adj1.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs.style.display = "inline";
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'an adjective';
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
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    adjs6.style.display = "none";
    adjs5.style.display = "none";
    adjs4.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
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

// NOUN 1
noun1.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns.style.display = "inline";
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
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
      //         noun_images.style.width = '10%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});

// VERB 1
verb1.addEventListener('click', function() {
  verbBool = true;
  if (verbBool == true) {
    verbs.style.display = "inline";
    verbs2.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
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

// NOUN 2
noun2.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns2.style.display = "inline";
    nouns.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
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
      //         noun_images2.style.width = '10%';
      //   }
      // });
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
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
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

// NOUN 3
noun3.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns3.style.display = "inline";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.noun-words3').forEach(nouns_3 => {
    nouns_3.addEventListener('click', function() {
      noun3.innerHTML = nouns_3.innerHTML;
      noun3.style.padding = '0px 0px';
      noun3.className = 'no-underline';
      // document.querySelectorAll('.noun-images3').forEach(noun_images3 => {
      //   mediaNouns3 = window.matchMedia( "(max-width: 909px)" );
      //   if (mediaNouns3.matches) {
      //       // window width is at less than 909px
      //       noun_images3.style.width = '20%';
      //       noun_images3.style.marginTop = '-3px';
      //   }
      //   else {
      //       // window width is greater than 909px
      //         noun_images3.style.width = '10%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});

// MISC 2
misc2.addEventListener('click', function() {
  miscBool = true;
  if (miscBool == true) {
    miscs2.style.display = "inline";
    miscs3.style.display = "none";
    miscs.style.display = "none";
    adjs6.style.display = "none";
    adjs5.style.display = "none";
    adjs4.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.misc-words2').forEach(misc_2 => {
    misc_2.addEventListener('click', function() {
      misc2.innerHTML = misc_2.innerHTML;
      misc2.style.padding = '0px 0px';
      misc2.className = 'no-underline';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 3
adj3.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs3.style.display = "inline";
    adjs6.style.display = "none";
    adjs5.style.display = "none";
    adjs4.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
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

// MISC 3
misc3.addEventListener('click', function() {
  miscBool = true;
  if (miscBool == true) {
    miscs3.style.display = "inline";
    miscs2.style.display = "none";
    miscs.style.display = "none";
    adjs6.style.display = "none";
    adjs5.style.display = "none";
    adjs4.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.misc-words3').forEach(misc_3 => {
    misc_3.addEventListener('click', function() {
      misc3.innerHTML = misc_3.innerHTML;
      misc3.style.padding = '0px 0px';
      misc3.className = 'no-underline';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 4
adj4.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs4.style.display = "inline";
    adjs6.style.display = "none";
    adjs5.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words4').forEach(adjs_4 => {
    adjs_4.addEventListener('click', function() {
      adj4.innerHTML = adjs_4.innerHTML;
      adj4.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// NOUN 4
noun4.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns4.style.display = "inline";
    nouns5.style.display = "none";
    nouns3.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.noun-words4').forEach(nouns_4 => {
    nouns_4.addEventListener('click', function() {
      noun4.innerHTML = nouns_4.innerHTML;
      noun4.style.padding = '0px 0px';
      noun4.className = 'no-underline';
      // document.querySelectorAll('.noun-images4').forEach(noun_images4 => {
      //   mediaNouns4 = window.matchMedia( "(max-width: 909px)" );
      //   if (mediaNouns4.matches) {
      //       // window width is at less than 909px
      //       noun_images4.style.width = '20%';
      //       noun_images4.style.marginTop = '-3px';
      //   }
      //   else {
      //       // window width is greater than 909px
      //         noun_images4.style.width = '10%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});

// NOUN 5
noun5.addEventListener('click', function() {
  nounBool = true;
  if (nounBool == true) {
    nouns5.style.display = "inline";
    nouns4.style.display = "none";
    nouns3.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.noun-words5').forEach(nouns_5 => {
    nouns_5.addEventListener('click', function() {
      noun5.innerHTML = nouns_5.innerHTML;
      noun5.style.padding = '0px 0px';
      noun5.className = 'no-underline';
      // document.querySelectorAll('.noun-images5').forEach(noun_images5 => {
      //   mediaNouns5 = window.matchMedia( "(max-width: 909px)" );
      //   if (mediaNouns5.matches) {
      //       // window width is at less than 909px
      //       noun_images5.style.width = '20%';
      //       noun_images5.style.marginTop = '-3px';
      //   }
      //   else {
      //       // window width is greater than 909px
      //         noun_images5.style.width = '10%';
      //   }
      // });
      $('#closeModal').trigger("click");
    });
  });
});

// VERB 2
verb2.addEventListener('click', function() {
  verbBool = true;
  if (verbBool == true) {
    verbs2.style.display = "inline";
    verbs.style.display = 'none';
    adjs.style.display = 'none';
    adjs2.style.display = "none";
    adjs3.style.display = "none";
    adjs4.style.display = "none";
    adjs5.style.display = "none";
    adjs6.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.verb-words2').forEach(verbs_2 => {
    verbs_2.addEventListener('click', function() {
      verb2.innerHTML = verbs_2.innerHTML;
      verb2.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 5
adj5.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs5.style.display = "inline";
    adjs6.style.display = "none";
    adjs4.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words5').forEach(adjs_5 => {
    adjs_5.addEventListener('click', function() {
      adj5.innerHTML = adjs_5.innerHTML;
      adj5.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});

// ADJ 6
adj6.addEventListener('click', function() {
  adjBool = true;
  if (adjBool == true) {
    adjs6.style.display = "inline";
    adjs5.style.display = "none";
    adjs4.style.display = "none";
    adjs3.style.display = "none";
    adjs2.style.display = "none";
    adjs.style.display = "none";
    nouns.style.display = 'none';
    nouns2.style.display = 'none';
    nouns3.style.display = 'none';
    nouns4.style.display = "none";
    nouns5.style.display = "none";
    verbs.style.display = 'none';
    verbs2.style.display = 'none';
    miscs.style.display = 'none';
    miscs2.style.display = "none";
    miscs3.style.display = "none";
    title.innerHTML = 'any word';
  }
  document.querySelectorAll('.adj-words6').forEach(adjs_6 => {
    adjs_6.addEventListener('click', function() {
      adj6.innerHTML = adjs_6.innerHTML;
      adj6.style.padding = '0px 25px';
      $('#closeModal').trigger("click");
    });
  });
});