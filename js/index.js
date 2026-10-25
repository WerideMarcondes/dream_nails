var movment = 1;

document.getElementById("rd1").checked = true;

setInterval(function () {
  nextPicture();
}, 5000);

function nextPicture() {
  movment++;
  if (movment > 4) {
    movment = 1;
  }
  document.getElementById("rd" + movment).checked = true;
}

function logo() {
  //  Swal.fire({
  //     title: "You will be Pumped",
  //     text: "",
  //     icon: "success",
  //   });

  Swal.fire({
    title: "You've been Pumped",
    imageUrl: "./img/backgroud/hand.jpeg", // Caminho src local
    width: "320px", // Define a largura aqui
    height: "100",
    imageWidth: 140,
    imageHeight: 200,
    color: "black",
    confirmButtonColor: "rgb(243, 105, 55)",
    confirmButtonColor: "black",
    heightAuto: false, // Adicione esta linha
  });
}

window.onload = function () {
  let contador = 1;
  let contadorexterno = 1;
  var button = document.querySelectorAll(".to_cart");
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (event) {
      document.getElementById("contadorexterno").innerHTML = contador++;
      document.getElementById("contadormodal").innerHTML = contadorexterno++;
    });
  }

  // 1. Seleciona todos os botões dos cards
  const botoes = document.querySelectorAll(".to_cart");

  // 2. Passa por cada botão adicionando o evento de clique
  botoes.forEach((botao) => {
    botao.addEventListener("click", function (event) {
      // .closest() sobe no HTML até encontrar o container do card pai
      const cardPai = this.closest(".modal-body-rent_me");

      // Agora buscamos as informações APENAS dentro desse card pai
      const name = cardPai.querySelector(".description").innerText;
      const valor = cardPai.querySelector(".value").innerText;
      const type = cardPai.querySelector(".type").innerText;
      const image = document.querySelector(".image");
      const newimage = image.classList[image];

      // Pronto! Você já tem as informações do card específico
      console.log("Produto clicado:", name);
      console.log("Valor do produto:", newimage);

      // Exemplo de uso: você pode mandar isso para um modal, carrinho, etc.
      // alert(`Você selecionou a bin: ${type} ${nome} por ${valor}`);

      const containercart = document.getElementById("modal-dialog_Cart");
      // 3. Cria o elemento <div> na memória do navegador
      const new_modalboby = document.createElement("div");

      // 4. Adiciona a classe desejada para a nova div
      new_modalboby.classList.add("modal-body");

      const new_p_modalboby = document.createElement("p");
      const new_p2_modalboby = document.createElement("p");
      const new_p3_modalboby = document.createElement("p");
      const new_delimitation = document.createElement("hr");
      const new_image = document.createElement("div");

      new_p_modalboby.classList.add("type");
      new_p2_modalboby.classList.add("description");
      new_p3_modalboby.classList.add("value");
      new_delimitation.classList.add("delimitation");
      new_image.classList.add(newimage);

      new_p_modalboby.innerText = type;
      new_p2_modalboby.innerText = name;
      new_p3_modalboby.innerText = valor;

      //6. Coloca a nova div dentro do container no HTML
      containercart.appendChild(new_modalboby);
      new_modalboby.appendChild(new_image);
      new_modalboby.appendChild(new_p_modalboby);
      new_modalboby.appendChild(new_p2_modalboby);
      new_modalboby.appendChild(new_p3_modalboby);
      new_modalboby.appendChild(new_delimitation);
    });
  });
};
