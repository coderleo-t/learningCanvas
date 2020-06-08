function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')
    gra.strokeStyle = 'rag(200, 0, 0)'
    gra.lineWidth = 10
    canvas.onmousedown = (e) => {
      e = e || window.event
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