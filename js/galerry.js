function Showboom() {
  var boom = document.querySelectorAll(".boom");
  var maintenance = document.querySelectorAll(".line");
   var posconstruction = document.querySelectorAll(".construction");;

  for (var i = 0; i < boom.length; i++) {
    boom[i].hidden = false;
  }

 for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
  for (var m = 0; m < maintenance.length; m++) {
    maintenance[m].hidden = true;
  }
}

function Showmaintenancehome() {
  var boom = document.querySelectorAll(".boom");
  var maintenance = document.querySelectorAll(".line");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < boom.length; l++) {
    boom[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
}


function Showconstruction(){
  var boom = document.querySelectorAll(".boom");
  var maintenance = document.querySelectorAll(".line");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = true;
  }

  for (var l = 0; l < boom.length; l++) {
    boom[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}


function ShowEverything() {
  var boom = document.querySelectorAll(".boom");
  var maintenance = document.querySelectorAll(".line");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < boom.length; l++) {
    boom[l].hidden = false;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}



function logo() {
  //  Swal.fire({
  //     title: "You will be Pumped",
  //     text: "",
  //     icon: "success",
  //   });

    Swal.fire({
  title: "You've been Pumped",
  imageUrl: './img/backgroud/hand.jpeg', // Caminho src local
  width: '320px', // Define a largura aqui
  height: '100',
  imageWidth: 140,
  imageHeight: 200,
  color: 'black',
  confirmButtonColor: 'rgb(243, 105, 55)',
  confirmButtonColor: 'black',
  heightAuto: false // Adicione esta linha
});

}



document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelectorAll(".card-container");
  image.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.add("activa");
      images = document.querySelectorAll("activa");
      image.classList.remove("card-container");
      posconstruction = document.querySelectorAll(".card-container");
      for (var i = 0; i < images.length; i++) {
        if (image[i].classList.contains("activa")) {
          image[i].hidden = false;
        }
      }
      for (var m = 0; m < posconstruction.length; m++) {
        posconstruction[m].hidden = true;
      }
      // }
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
 
  let timer = 0;
let delay = 200;
let clicked = false;

const image = document.querySelectorAll(".card-container");
  image.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.add("activa");
    image.addEventListener('click', () => {
    if (clicked) {
        clearTimeout(timer);
       location.reload();
        clicked = false;
    } 
    else {
        clicked = true;
        timer = setTimeout(() => {
            clicked = false;
        }, delay);
    }
});
    });
  });


});