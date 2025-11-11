//seleciona os butões


const btnVermelho = document.getElementById('vermelho')
const btnVerde = document.getElementById('verde');
const btnAzul = document.getElementById('azul');

//adicionando os eventos cliques aos botões

btnVermelho.addEventListener('click' , () => { document.body.style.backgroundColor = 'red';
})

btnVerde.addEventListener('click' , () => { document.body.style.backgroundColor = 'green';
})

btnAzul.addEventListener('click' , () => { document.body.style.backgroundColor = 'blue';
})


