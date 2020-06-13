// 可以使用增加一个头部去掉一个尾部的方法使蛇进行移动

function painting() {
  const canvas = document.getElementById('canvas')
  if(canvas.getContext) {
    const gra = canvas.getContext('2d')

    class Snake {
      constructor(x, y, radius) {
        this.initSnacke(x, y, radius)
      }
      initSnacke(x, y, radius) {
        this.head = new Body(x, y, radius, 0, Math.PI * 2, false)
        this.direct = 'right'
        this.length = 1
        this.foodLocation = []
        this.snakeLoction = []
        this.isStart = false
        this.startFontX = 100
        this.startFontY = canvas.height / 2
        this.speedX = 2
        this.speedY = 2
        this.animation = null

        this.drawHead()

        if(!this.isStart) {
          this.drawStartFont()
        }
        
      }

      toggleStart() {
        this.isStart = !this.isStart
        if(this.isStart) {
          gra.clearRect(0, 250, canvas.width, 120)
          this.move()
          if (this.foodLocation.length === 0)this.addFood()
          else {
            let location = this.foodLocation[0]
            gra.arc(location[0], location[1], 10, 0, Math.PI * 2, false)
            gra.fillStyle = 'red'
            gra.fill()
          }
        } else {
          window.cancelAnimationFrame(this.animation)
          this.drawStartFont()
        }
      }

      drawStartFont() {
        gra.beginPath()
        gra.font = 'bold italic 80px arial'
        gra.shadowColor = 'lightgray'
        gra.strokeText('按空格开始游戏', this.startFontX, this.startFontY)
      }

      move() {
        if (this.isStart) {
          switch (this.direct) {
            case 'right':
              this.head.x += this.speedX
              this.oldHead = [this.head.x - this.head.radius * 2, this.head.y]
              this.drawHead()
              break;
            case 'left':
              this.head.x -= this.speedX
              this.oldHead = [this.head.x + this.head.radius * 2, this.head.y]
              this.drawHead()
              break;
            case 'up':
              this.head.y -= this.speedY
              this.oldHead = [this.head.x, this.head.y + this.head.radius * 2]
              this.drawHead()
              break;
            case 'down':
              this.head.y += this.speedY
              this.oldHead = [this.head.x, this.head.y - this.head.radius * 2]
              this.drawHead()
              break;
          }
          if (this.animation) window.cancelAnimationFrame(this.animation)
          this.animation = window.requestAnimationFrame(this.move.bind(this))
        }
        
      }

      drawHead() {
        gra.clearRect(0, 0, canvas.width, canvas.height)
        if(this.foodLocation.length === 1) {
          gra.beginPath()
          gra.arc(this.foodLocation[0][0], this.foodLocation[0][1], 10, 0, Math.PI * 2, false)
          gra.fillStyle = 'red'
          gra.fill()
        }

        gra.beginPath()
        gra.arc(this.head.x, this.head.y, this.head.radius, this.head.startAngle,
           this.head.endAngle, this.isAnticlockwise)
        gra.stroke()
        if(this.snakeLoction.length === 0) {
          this.snakeLoction.push([this.head.x, this.head.y])
        } else {
          this.snakeLoction[0][0] = this.head.x
          this.snakeLoction[0][1] = this.head.y
        }

        if(this.direct === 'right' || this.direct === 'left') {
          gra.beginPath()
          gra.arc(this.head.x, this.head.y - this.head.radius + this.head.radius / 4,
            this.head.radius / 4, this.head.startAngle, this.head.endAngle, this.isAnticlockwise)
          gra.stroke()
          gra.beginPath()
          gra.arc(this.head.x, this.head.y + this.head.radius - this.head.radius / 4,
            this.head.radius / 4, this.head.startAngle, this.head.endAngle, this.isAnticlockwise)
          gra.stroke()
        } else {
          gra.beginPath()
          gra.arc(this.head.x - this.head.radius + this.head.radius / 4, this.head.y,
            this.head.radius / 4, this.head.startAngle, this.head.endAngle, this.isAnticlockwise)
          gra.stroke()
          gra.beginPath()
          gra.arc(this.head.x + this.head.radius - this.head.radius / 4, this.head.y,
            this.head.radius / 4, this.head.startAngle, this.head.endAngle, this.isAnticlockwise)
          gra.stroke()
        }
        

        if (this.foodLocation.length === 1) {
          let snakeX = this.head.x
          let snakeY = this.head.y
          let snakeRadius = this.head.radius

          let foodX = this.foodLocation[0][0]
          let foodY = this.foodLocation[0][1]
          let foodRadius = 10

          let distanceX = foodX - snakeX
          let distanceY = foodY - snakeY

          let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
          if (distance - 5 <= snakeRadius + foodRadius) {
            this.foodLocation.pop()
            gra.clearRect(0, 0, canvas.width, canvas.height)
            this.addFood()
            this.addBody()
          }
        }
      }

      addBody() {
        let location = this.snakeLoction[this.snakeLoction.length-1]
        if(this.direct === 'right') {
          this.snakeLoction.push([location[0]-this.head.radius*2, location[1]])
        } else if(this.direct === 'left') {
          this.snakeLoction.push([location[0] + this.head.radius * 2, location[1]])
        } else if (this.direct === 'up') {
          this.snakeLoction.push([location[0], location[1] + this.head.radius * 2])
        } else{
          this.snakeLoction.push([location[0], location[1] - this.head.radius * 2])
        }
        this.length++
      }

      addFood() {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        if(x < 10) x = 10
        else if(x > canvas.width - 10) x = canvas.width - 10
        if (y < 10) y = 10
        else if (y > canvas.height - 10) y = canvas.height - 10
        this.foodLocation.push([x, y])
        gra.beginPath()
        gra.arc(x, y, 10, 0, Math.PI*2, false)
        gra.fillStyle = 'red'
        gra.fill()
      }
      toggleDirect(direct) {
        this.direct = direct
      }

    }

    class Body {
      constructor(x, y, radius, startAngle, endAngle, isAnticlockwise) {
        this.x = x
        this.y = y
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.isAnticlockwise = isAnticlockwise
      }
    }

    const snake = new Snake(40, 20, 10)

    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 32:
          snake.toggleStart()
          break;
        case 87:
          snake.toggleDirect('up')
          snake.move('up')
          break;
        case (83):
          snake.toggleDirect('down')
          snake.move('down')
          break;
        case 65:
          snake.toggleDirect('left')
          snake.move('left')
          break;
        case 68:
          snake.toggleDirect('right')
          snake.move('right')
          break;
      }
    }
  }
}