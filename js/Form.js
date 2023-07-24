class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
     this.playButton = createButton("Play");
      this.titleImg = createImg("./assets/title.png", "título do jogo");
     this.greeting = createElement("h2");
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
    this.titleImg.position(120, 100);
     this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
       this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  setElementsStyle() { this.titleImg.class("gameTitle");
   this.input.class("customInput");
   this.playButton.class("customButton");
    this.greeting.class("greeting"); }

  hide() {
   // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
   this.greeting.hide();
   this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
   
   this.playButton.mousePressed(() => { this.input.hide();
     this.playButton.hide();
     var message = ` Olá ${this.input.value()} </br>espere outro jogador entrar...`;
      this.greeting.html(message);
playerCount += 1
    player.name = this.input.value();
    player.index = playerCount;
     player.addPlayer(); 
     player.updateCount(playerCount);
     player.getDistance();
    });
   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementPosition();
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.handleMousePressed()
    this.setElementsStyle()
  }
}
