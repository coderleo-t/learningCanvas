function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')
    console.log(gra)

    // 线性渐变
    const linear = gra.createLinearGradient(0, 150, 0, 0)
    linear.addColorStop(.1, 'rgb(200, 0, 0)')
    linear.addColorStop(.7, '#fff')
    linear.addColorStop(.9, '#c6c776')
    gra.fillStyle = linear
    gra.fillRect(100, 10, 330, 330)

    // 径向渐变
    const radial = gra.createRadialGradient(45, 45, 10, 45, 45, 30)
    radial.addColorStop(0, '#A7D30C')
    radial.addColorStop(.9, '#019F62')
    radial.addColorStop(1, 'rgba(1, 159, 98, 0)')
    gra.fillStyle = radial
    gra.fillRect(0, 0, 150, 150)

    // 图片的两种绘画方式，第一种
    // let img = new Image()
    // img.src = './timg.jpg'
    // img.onload = () => {
    //   const background = gra.createPattern(img, 'no-repeat')
    //   gra.fillStyle = background
    //   gra.fillRect(0, 0, 500, 500)
    // }

    // 图片的两种绘画方式，第二种
    // let img = new Image()
    // img.src = './timg.jpg'
    // img.onload = () => {
    //   gra.drawImage(img, 0, 0, 200, 200)
    // }

    // 图片使用clit
    let img = new Image()
    img.src = './timg.jpg'
    img.onload = () => {
      gra.beginPath()
      gra.arc(300, 300, 200, Math.PI*2, false)
      gra.fill()
      gra.clip()
      gra.drawImage(img, 70, 80)
    }
    
    

  }
}