export function valorCmQuadrado(cmQuadrado) {
  switch (true) {
    case (cmQuadrado <= 2000):
      return 245.00;
    case (cmQuadrado <= 2500):
      return (((cmQuadrado - 2000) * 0.02) + 245.00).toFixed(2);
    case (cmQuadrado <= 3000):
      return (((cmQuadrado - 2500) * 0.02) + 255.00).toFixed(2);
    case (cmQuadrado <= 3500):
      return (((cmQuadrado - 3000) * 0.02) + 265.00).toFixed(2);
    case (cmQuadrado <= 4000):
      return (((cmQuadrado - 3500) * 0.03) + 275.00).toFixed(2);
    case (cmQuadrado <= 4500):
      return (((cmQuadrado - 4000) * 0.05) + 290.00).toFixed(2);
    case (cmQuadrado <= 5000):
      return (((cmQuadrado - 4500) * 0.03) + 315.00).toFixed(2);
    case (cmQuadrado <= 5500):
      return (((cmQuadrado - 5000) * 0.05) + 330.00).toFixed(2);
    case (cmQuadrado <= 6000):
      return (((cmQuadrado - 5000) * 0.05) + 330.00).toFixed(2);
    case (cmQuadrado <= 9000):
      return (((cmQuadrado - 6000) * 0.0116) + 380.00).toFixed(2);
    case (cmQuadrado > 9000):
      return 415.00;
    default:
      return 0;
  }
}
  // if ((cmQuadrado >= 400) && (cmQuadrado <= 2000)) {
  //     valor = 245.00;
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 2000) && (cmQuadrado <= 2500)) {
  //     valor = (((cmQuadrado - 2000) * 0.02) + 245.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 2500) && (cmQuadrado <= 3000)) {
  //     valor = (((cmQuadrado - 2500) * 0.02) + 255.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 3000) && (cmQuadrado <= 3500)) {
  //     valor = (((cmQuadrado - 3000) * 0.02) + 265.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 3500) && (cmQuadrado <= 4000)) {
  //     valor = (((cmQuadrado - 3500) * 0.03) + 275.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 4000) && (cmQuadrado <= 4500)) {
  //     valor = (((cmQuadrado - 4000) * 0.05) + 290.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 4500) && (cmQuadrado <= 5000)) {
  //     valor = (((cmQuadrado - 4500) * 0.03) + 315.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 5000) && (cmQuadrado <= 5500)) {
  //     valor = (((cmQuadrado - 5000) * 0.05) + 330.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 5500) && (cmQuadrado <= 6000)) {
  //     valor = (((cmQuadrado - 5500) * 0.05) + 355.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if ((cmQuadrado > 6000) && (cmQuadrado <= 9000)) {
  //     valor = (((cmQuadrado - 6000) * 0.0116) + 380.00);
  //     return "R$ " + valor.toFixed(2);

  // } else if (cmQuadrado > 9000) {
  //     valor = 415.00;
  //     return "R$ " + valor.toFixed(2);

  // } else {
  //     alert("fora do padrão");
  //     return "R$ 0.00";
  // }
