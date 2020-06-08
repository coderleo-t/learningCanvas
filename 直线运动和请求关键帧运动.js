function painting() {
  const canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    const gra = canvas.getContext('2d')

    gra.fillStyle = 'red'
    let speedX = 2
    let speedY = 2
    let x = 50
    let y = 50
    let radius = 50

    function move() {
      gra.clearRect(0, 0, canvas.width, canvas.height)
      gra.beginPath()
      gra.arc(x, y, radius, 0, Math.PI * 2, false)
     
      if (x > canvas.width - radius) {
        speedX *= -1
      } else if(x < radius) {
        speedX *= -1
      } 
      if (y > canvas.height - radius) {
        speedY *= -1
      } else if (y < radius) {
        speedY *= -1
      }
       x += speedX
       y += speedY
      gra.fill()

      // 调用此方法会根据电脑、浏览器重复执行上面操作，代替setInterval()
      window.requestAnimationFrame(move)
    }
    move()

    // setInterval(() => {
    //   move()
    // }, 10)

  }
}