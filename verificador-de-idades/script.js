function verificar() {
  let data = new Date()
  let anoAtual = data.getFullYear()

  let anoNascimento = document.getElementById("campoAno")
  let resultadoImagem = document.getElementById("resultado")

  if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
    alert("Verifique os dados e tente novamente!")
  } else {
    let sexoOpcoes = document.getElementsByName("sexualidade")
    let idade = anoAtual - anoNascimento.value
    let genero = ""
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    if (sexoOpcoes[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 13) {
        // Criança
        imagem.setAttribute('src', 'img/crianca-homem.png')
      } else if (idade < 22) {
        // Jovem
        imagem.setAttribute('src', 'img/jovem-homem.png')
      } else if (idade < 51) {
        // Adulto
        imagem.setAttribute('src', 'img/adulto-homem.png')
      } else {
        // Idoso(a)
        imagem.setAttribute('src', 'img/idoso-homem.png')
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 13) {
        // Criança
        imagem.setAttribute('src', 'img/crianca-mulher.png')
      } else if (idade < 22) {
        // Jovem
        imagem.setAttribute('src', 'img/jovem-mulher.png')
      } else if (idade < 51) {
        // Adulta
        imagem.setAttribute('src', 'img/adulta-mulher.png')
      } else {
        // Idosa
        imagem.setAttribute('src', 'img/idosa-mulher.png')
      }
    }

    resultadoImagem.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resultadoImagem.appendChild(imagem)
  }
}