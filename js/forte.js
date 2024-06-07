

// Seleciona todos os atributos que contenham button
document.querySelectorAll('button').forEach(
  button => {
      // O botão adiciona um evento
      button.addEventListener('click', () => {
          // Recupera o valor do button e faz a requisição
          fetch(`/led?turnTo=${button.id}`)
             
                  // Atribui o nome da classe do button após a resposta
                  document.body.className = button.id;
             
      })
  })

