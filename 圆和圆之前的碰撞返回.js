function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')

    class Arc {
      constructor(x, y, radius, startAngle, endAngle, isAnticlockwise, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.isAnticlockwise = isAnticlockwise
        this.speed = speed
      }
      drawFill(color) {
        gra.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.isAnticlockwise)
        gra.fillStyle = color
        gra.fill()
      }
      drawStroke(color) {
        gra.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.isAnticlockwise)
        gra.strokeStyle = color
        gra.stroke()
      }
      move() {
        if(this.x > canvas.width - this.radius) {
          this.speed *= -1
        } else if(this.x < this.radius) {
          this.speed *= -1
        }
        this.x += this.speed
      }
    }



    const arc1 = new Arc(100, 100, 100, 0, Math.PI * 2, false, 10)
    const arc2 = new Arc(canvas.width-100, 100, 100, 0, Math.PI * 2, false, 10)
    arc1.drawFill('red')
    gra.beginPath()
    arc2.drawFill('blue')
    moveAnimation()

    function moveAnimation() {
      gra.clearRect(0, 0, canvas.width, canvas.height)
      arc1.move()
      arc2.move()
      gra.beginPath()
      arc1.drawFill('red')
      gra.beginPath()
      arc2.drawFill('black')
      if(isCrash()) {
        arc1.speed *= -1
        arc2.speed *= -1
      }
      window.requestAnimationFrame(moveAnimation)
    }

    function isCrash() {
      let x1 = arc1.x
      let x1Ra = arc1.radius
      let y1 = arc1.y

      let x2 = arc2.x
      let x2Ra = arc2.radius
      let y2 = arc2.y

      let xDis = x2 - x1
      let yDis = y2 - y1

      let distance = Math.sqrt(xDis * xDis + yDis * yDis)
      if(x1Ra + x2Ra < distance) return false
      else return true
    }


  }
}