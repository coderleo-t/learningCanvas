function painting() {
  const canvas = document.querySelector('#canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')
    const img = new Image()
    img.src = './timg.jpg'
    img.onload = () => {
      let x = 0
      function moveImage() {
        gra.save() 
        gra.clearRect(0, 0, canvas.width, canvas.height)
        gra.translate(-x, 0)
        gra.drawImage(img, 0, 0)
        gra.drawImage(img, 700, 0)
        x++
        if(x > 700) {
          x = 0
        }
        gra.restore()
        window.requestAnimationFrame(moveImage)
      }
      moveImage()
    }
  }
}