function painting() {
  const canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    const gra = canvas.getContext('2d')

    // 先将画板都给画满然后再用画笔刮出原来的背景
    gra.beginPath()
    gra.fillStyle = 'rgb(200, 0, 0)'
    gra.fillRect(0, 0, 100, 100)

    // 已经存在画布上的图像为目标图像，即将画的图像为源图像
    // 如果有两个图像，此混合模式将只会显示不重叠的部分，且显示不重叠的目标图像
    gra.globalCompositeOperation = 'destination-out'

    // 此混合模式如果两个图像重叠，重叠部分不显示，显示不重叠的源图像
    gra.globalCompositeOperation = 'source-out'


    // 如果设此混合模式且两个图像有重叠部分，
    // 那么用此混合模式画的图像将在目标图像上面显示
    gra.globalCompositeOperation = 'source-over'

    // 如果设此混合模式且两个图像有重叠部分，
    // 那么用此混合模式画的图像重叠部分将会在目标图像下边
    gra.globalCompositeOperation = 'destination-over'

    // 如果设此混合模式且两个图像有重叠部分，那么用此画笔画出来的图形将
    // 只会显示与目标图像重叠的部分，且此图像会覆盖目标图像
    gra.globalCompositeOperation = 'source-atop'

    // 如果设此混合模式且两个图像有重叠部分， 那么源图像将只会显示与此画笔图像重合的部分，
    // 且会覆盖目标图像
    gra.globalCompositeOperation = 'destination-atop'

    // 如果设此混合模式且两个图像有重叠部分,那么只会显示源图像和目标图像重合的部分，且图像显示
    // 的为源图像的样子
    gra.globalCompositeOperation = 'source-in'

    // 如果设此混合模式且两个图像有重叠部分,那么只会显示源图像和目标图像重合的部分，且图像显示
    // 的为目标图像的样子
    gra.globalCompositeOperation = 'destination-in'



    gra.lineCap = 'round'
    gra.lineWidth = 20

  }
}