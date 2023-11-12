const numeroVencedor = {
    bolas: ["01", "02", "03", "04", "05"],
    estrelas: ["11", "12"],
  };
  
  const minhaAposta = {
    bolas: ["25", "02", "10", "04", "05"],
    estrelas: ["07", "11"],
  };
  
  const confereAposta = (numeroVencedor) => {
    const acertei = {
      bolas: minhaAposta.bolas.filter((bola) => numeroVencedor.bolas.includes(bola)),
      estrelas: minhaAposta.estrelas.filter((estrela) => numeroVencedor.estrelas.includes(estrela)),
    };
  
    console.log("Bolas acertadas:", acertei.bolas);
    console.log("Estrelas acertadas:", acertei.estrelas);
  };
  
 
  confereAposta(numeroVencedor);
  