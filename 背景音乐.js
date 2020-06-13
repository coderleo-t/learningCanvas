function painting() {
  const canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    const audio = new Audio('路径')
    audio.loop = true
    audio.play()
  }
}