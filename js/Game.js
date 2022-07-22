class Game {
  constructor() {
    this.playerMoving= false
  }
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  start() {
    player = new Player()
    playerCount = player.getCount()
    
    form = new Form()
    form.display()

    bb = createSprite(width/2,3*height/4)
    bb.addImage('blue_bird.jpg',bbImg)
    bb.scale = 1

    boi = createSprite(width/2 - 100, 3*height/4)
    boi.addImage('boi.jpg',boiImg)
    boi.scale = 1

    a = createSprite(width/2-50,height/2)
    a.addImage('a_person.jpg',aImg)
    a.scale = 1

    brs = [bb,boi] 

    music = new Group()
  }

  addSprites() {

  }

  handleElements() {
    form.hide();
    form.titleImg.position(width/2, height/2);

    this.resetTitle.html("Reset Game")
    this.resetTitle.position(width/2 + 200, 40)
    this.handleResetButton.position(width/2+230,100)
  }

  play() {
    this.handleElements()
    this.handleResetButton()

    Player.getPlayersInfo()
    
    if (allPlayers !== undefined) {
      var index = 0
      for (var plr in allPlayers){
        index=index+1

        var x = allPlayers[plr].positionX
        var y = allPlayers[plr].positionY

        brs[index-1].position.x = x
        brs[index-1].position.y = y
        if (index === player.index) {
          stroke(10)
          fill('green')
          ellipse(x,y,60,60)
        }
      }
      if (this.playerMoving) {
        player.positionY +=5
        player.update()
      }
      this.handlePlayerControls()
      drawSprites()
    }
  }
  handleResetButton() {
  }



  handlePlayerControls() {
  }

  gameOver() {
  }

  end() {
    console.log("Game Over");
  }
}
