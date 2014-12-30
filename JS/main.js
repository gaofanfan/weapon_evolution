var Player = require('./model/player');
var PlayerPk = require('./model/player-pk');
var Armor = require('./model/armor');
var Weapon = require('./model/weapon');

function WeaponEvolution() {
  var armor = new Armor('护盾', 5);
  var weapon = new Weapon('尚方宝剑', 4);
  var player1 = new Player('张三' , 100 , 10);
  var player2 = new Player('李四' , 80 , 8);
  var playerpk = new PlayerPk(player1 , player2);
  console.log(playerpk.pk());
}

WeaponEvolution();
