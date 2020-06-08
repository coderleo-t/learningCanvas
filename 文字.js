function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')

    // 文字
    const linear = gra.createLinearGradient(100, 200, 500, 200)
    linear.addColorStop(.8, 'lightgray')
    linear.addColorStop(.5, 'rgb(200, 0, 0)')
    linear.addColorStop(.3, 'rgb(100, 0, 0)')
    gra.font = 'bold italic 160px arial'
    gra.shadowColor = 'rgb(200, 0, 0)'
    gra.shadowBlur = 20
    gra.shadowOffsetX = 20
    gra.shadowOffsetY = 20
    gra.fillStyle = linear
    gra.fillText('heh', 100, 200)

    
  }
}