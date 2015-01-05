function PlayerPk(soldier, player) {
  this.soldier = soldier;
  this.player = player;
}

PlayerPk.prototype.pk = function () {
  var result = '';

  while(true) {

    this.player.hp -= this.soldier.getAttack() + this.soldier.getWeaponAttack();

    result += this.soldier.occupation + this.soldier.name +  '用' +
              this.soldier.getWeaponName() + '攻击了' + this.player.occupation +
              this.player.name + '，' + this.player.name + '受到了' +
              (this.soldier.attack + this.soldier.getWeaponAttack()) +
              '点伤害，' + this.player.name + '的生命值还剩：' + this.player.hp + '\n';

    if(this.player.hp <=0) {
      result += this.player.name + 'OUT!';
      break;
    }

    this.soldier.hp -= this.player.attack - this.soldier.getArmorDef();

    result += this.player.occupation + this.player.name + '攻击了' +
              this.soldier.occupation + this.soldier.name + '，' + this.soldier.name +
              '受到了' +(this.player.attack - this.soldier.getArmorDef()) +
              '点伤害，' + this.soldier.name + '的生命值还剩：' + this.soldier.hp + '\n';

    if(this.soldier.hp <=0) {
      result += this.solider.name + 'OUT!';
      break;
    }

  }
  return result;
};
//
// PlayerPk.prototype.getNewHP  = function(attacker, defencer) {
//   defencer -= this.calculateDamage(attacker, defencer);
// };
// PlayerPk.prototype.calculateDamage  = function(attacker, defencer) {
//   return attacker.attack;
// };
module.exports = PlayerPk;
// PK.prototype.getPlayerPkText = function (attacker, defender) {
//   var result = '';
//   defender.hp -= attacker.attack;
//   result=attacker.name + '攻击了' + defender.name + '，' + defender.name +
//     '受到了' + attacker.attack + '点伤害，' + defender.name +
//     '的生命值还剩：' + defender.hp;
//
//     return result;
//
// };
