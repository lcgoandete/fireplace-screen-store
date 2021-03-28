document.getElementById("btnCalcularTela").addEventListener("click", function (event) {
  let largura = document.getElementById("largura").value;
  let altura = document.getElementById("altura").value;
  calcularTela(largura, altura);
});

function calcularTela(largura, altura) {
  let descricao = "Tela sob Medida";
  let preco = 0;

  if ((largura >= 20) && (largura <= 120)) {
      if ((altura >= 20) && (altura <= 80)) {
          let cmQuadrado = largura * altura;
          preco = valorCmQuadrado(cmQuadrado);
          document.getElementById("resultado").textContent = preco;
          
      } else {
          limparCampos();
          alert("A altura deve estar entre 20cm e 80cm");
      }

  } else {
      limparCampos();
      alert("A largura deve estar entre 20cm e 120cm");
  }

  const pedido = {
    produto: {
        descricao: descricao,
        altura: altura,
        largura: largura,
        preco: preco,
        espessura: "12",
        peso: "5"
    }
  };
  
  sessionStorage.setItem("pedido", JSON.stringify(pedido));
}


function limparCampos() {
  document.getElementById("largura").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").textContent = "R$ 0.00";
}


function valorCmQuadrado(cmQuadrado) {
  let valor = 0;

  if ((cmQuadrado >= 400) && (cmQuadrado <= 2000)) {
      valor = 245.00;
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 2000) && (cmQuadrado <= 2500)) {
      valor = (((cmQuadrado - 2000) * 0.02) + 245.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 2500) && (cmQuadrado <= 3000)) {
      valor = (((cmQuadrado - 2500) * 0.02) + 255.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 3000) && (cmQuadrado <= 3500)) {
      valor = (((cmQuadrado - 3000) * 0.02) + 265.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 3500) && (cmQuadrado <= 4000)) {
      valor = (((cmQuadrado - 3500) * 0.03) + 275.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 4000) && (cmQuadrado <= 4500)) {
      valor = (((cmQuadrado - 4000) * 0.05) + 290.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 4500) && (cmQuadrado <= 5000)) {
      valor = (((cmQuadrado - 4500) * 0.03) + 315.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 5000) && (cmQuadrado <= 5500)) {
      valor = (((cmQuadrado - 5000) * 0.05) + 330.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 5500) && (cmQuadrado <= 6000)) {
      valor = (((cmQuadrado - 5500) * 0.05) + 355.00);
      return "R$ " + valor.toFixed(2);

  } else if ((cmQuadrado > 6000) && (cmQuadrado <= 9000)) {
      valor = (((cmQuadrado - 6000) * 0.0116) + 380.00);
      return "R$ " + valor.toFixed(2);

  } else if (cmQuadrado > 9000) {
      valor = 415.00;
      return "R$ " + valor.toFixed(2);

  } else {
      alert("fora do padrão");
      return "R$ 0.00";
  }
}
