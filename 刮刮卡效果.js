function painting() {
  const canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    const gra = canvas.getContext('2d')
  
    // 先将画板都给画满然后再用画笔刮出原来的背景
    gra.beginPath()
    gra.fillStyle = 'rgb(200, 0, 0)'
    gra.fillRect(0, 0, canvas.width, canvas.height)

    // 设置刮出画笔,这个复合操作的设置模式out可以将原图像显示
    gra.globalCompositeOperation = 'destination-out'
    gra.lineCap = 'round'
    gra.lineWidth = 20

    canvas.onmousedown = (e) => {
      let stratPointx = e.clientX - canvas.offsetLeft + document.documentElement.scrollLeft
    let stratPointy = e.clientY - canvas.offsetTop + document.documentElement.scrollTop
    gra.beginPath()
    gra.moveTo(stratPointx, stratPointy)
      canvas.onmousemove = (e) => {
        e = e || window.event
        gra.lineTo(e.clientX - canvas.offsetLeft + document.documentElement.scrollLeft
          , e.clientY - canvas.offsetTop + document.documentElement.scrollTop)
        gra.stroke()
        document.onmouseup = (e) => {
          canvas.onmousemove = null
          return
        }
      }
    }
  }
}