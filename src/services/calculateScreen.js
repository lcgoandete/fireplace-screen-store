function valorCmQuadrado(cmQuadrado) {
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

export default valorCmQuadrado;
