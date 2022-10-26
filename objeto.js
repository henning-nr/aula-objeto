var carro = {
  marca: 'GM',
  cor: 'verde',
  potencia: 1.5,
};

// Template string

console.log(
  `Eu encontrei um carro ${carro.marca} na cor ${carro.cor} com a potência ${carro.potencia}`
);

console.log(
  'Eu encontrei um carro ' +
    carro.marca +
    ' na cor ' +
    carro.cor +
    ' com a potência ' +
    carro.potencia
);
