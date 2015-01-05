var Player = require('./model/player');
var Soldier = require('./model/soldier');
var PlayerPk = require('./model/player-pk');
var Armor = require('./model/armor');
var Weapon = require('./model/weapon');
var Effect = require('./model/effect');

function WeaponEvolution() {
  var armor = new Armor('护盾', 5);
  var weapon = new Weapon('尚方宝剑', 4);
  var effect = new Effect();

  var soldier = new Soldier('战士', '张三', 50, 10, armor, weapon);
  var player = new Player('普通人', '李四', 40, 8);
  var playerpk = new PlayerPk(soldier, player);
  console.log(playerpk.pk());
}

WeaponEvolution();
