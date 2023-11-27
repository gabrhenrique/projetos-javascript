function carregar()  {
  let messageField = document.getElementById("message")
  let imageField = document.getElementById("img")

  let date = new Date()
  let hour = sdate.getHours()
  messageField.innerHTML = `Agora são ${hour} horas.`

  if(hour >= 0 && hour < 12) {
    imageField.src = "img/morning-circle.png"
    document.body.style.background = "#F2C36B"
  } else if(hour >= 12 && hour <= 18) {
    imageField.src = "img/afternoon-circle.png"
    document.body.style.background = "#3772A6"
  } else {
    imageField.src = "img/night-circle.png"
    document.body.style.background = "#213740"
  }
}