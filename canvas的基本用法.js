function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')
    console.log(gra)

    // 画实心矩形
    gra.fillStyle = 'rgb(200, 0, 0)'
    gra.fillRect(10, 10, 200, 200)

    // 画空心矩形
    gra.strokeStyle = 'rgb(200, 0, 0)'
    gra.strokeRect(10, 300, 200, 200)

    // 清除矩形
    gra.clearRect(50, 50, 100, 100)
    
    // 用路径画实心的三角形
    gra.moveTo(400, 200)
    gra.lineTo(400, 300)
    gra.lineTo(500, 300)
    gra.fill()

    // 用路径画连线
    gra.moveTo(200, 200)
    gra.lineTo(200, 300)
    gra.lineTo(300, 300)
    gra.closePath()
    gra.stroke()

    // 画圆,指定圆心的坐标从圆心三点钟方向画圆，当调用beginPath的时候就会重新找个地方画而不会相连了
    gra.beginPath()
    gra.lineWidth = 10
    gra.arc(600, 500, 100, 0, Math.PI, true)
    gra.fill()

    // 画笑脸
    gra.beginPath()
    gra.lineWidth = 2
    gra.arc(400, 400, 100, 0, Math.PI*2, false)
    gra.moveTo(460, 420)
    gra.arc(400, 420, 60, 0, Math.PI, false)
    gra.moveTo(380, 380)
    gra.arc(350, 380, 30, 0, Math.PI*2, false)
    gra.moveTo(480, 380)
    gra.arc(450, 380, 30, 0, Math.PI * 2, false)
    gra.moveTo(360, 380)
    gra.arc(350, 380, 10, 0, Math.PI * 2, false)
    gra.moveTo(460, 380)
    gra.arc(450, 380, 10, 0, Math.PI * 2, false)
    gra.stroke()

  }
}