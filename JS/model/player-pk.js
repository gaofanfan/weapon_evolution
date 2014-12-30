var Player = require('./player');

function PlayerPk(player1 , player2) {
  this.player1 = player1;
  this.player2 = player2;
}

PlayerPk.prototype.pk = function () {
 var output = '';

 for(var i = 0; i < this.player1.attack; i++) {
   this.player1.hp -= this.player2.attack;
   output += this.player2.name + '攻击了' + this.player1.name + ',' +
   this.player1.name + '受到' + this.player1.attack +
   '点伤害,' + this.player1.name + '的生命值还剩' + this.player1.hp + '\n';

   this.player2.hp -= this.player1.attack;
   output += this.player1.name + '攻击了' + this.player2.name + ',' +
   this.player2.name + '受到' + this.player2.attack +
   '点伤害,' + this.player2.name + '的生命值还剩' + this.player2.hp + '\n';

   if(this.player1.hp <= 0) {
     output += this.player1.name + "   OUT!!!";
     break;
   }
   if(this.player2.hp <= 0) {
     output += this.player2.name + "   OUT!!!";
     break;
   }
 }
 return output;
};

module.exports = PlayerPk;
