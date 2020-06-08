function painting() {
  const canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    const gra = canvas.getContext('2d')

    gra.fillStyle = 'red'
    // 执行此函数会将此样式放入栈中
    gra.save()
    gra.arc(50, 50, 50, 0, Math.PI*2, false)
    gra.fill()

    gra.beginPath()
    gra.fillStyle = 'black'
    gra.save()
    gra.arc(200, 200, 50, 0, Math.PI * 2, false)
    gra.fill()

    gra.beginPath()
    gra.fillStyle = 'blue'
    gra.save()
    gra.arc(350, 350, 50, 0, Math.PI * 2, false)
    gra.fill()


    gra.beginPath()
    // 执行此函数会将入栈的样式从栈顶取出来一个样式
    gra.restore()
    gra.arc(450, 450, 50, 0, Math.PI * 2, false)
    gra.fill()

    gra.beginPath()
    gra.restore()
    gra.arc(550, 550, 50, 0, Math.PI * 2, false)
    gra.fill()

    gra.beginPath()
    gra.restore()
    gra.arc(650, 650, 50, 0, Math.PI * 2, false)
    gra.fill()

  }
}