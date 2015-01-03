function PlayerPk(solider, player) {
  this.solider = solider;
  this.player = player;
}

PlayerPk.prototype.pk = function () {
  var result = '';

  while(true) {

    this.player.hp -= this.solider.getSoliderAttack() + this.solider.getWeaponAttack();

    result += this.solider.occupation + this.solider.name +  '用' +
              this.solider.getWeaponName() + '攻击了' + this.player.occupation +
              this.player.name + '，' + this.player.name + '受到了' +
              (this.solider.attack + this.solider.getWeaponAttack()) +
              '点伤害，' + this.player.name + '的生命值还剩：' + this.player.hp + '\n';

    if(this.player.hp <=0) {
      result += this.player.name + 'OUT!';
      break;
    }

    this.solider.hp -= this.player.attack - this.solider.getArmorDef();

    result += this.player.occupation + this.player.name + '攻击了' +
              this.solider.occupation + this.solider.name + '，' + this.solider.name +
              '受到了' +(this.player.attack - this.solider.getArmorDef()) +
              '点伤害，' + this.solider.name + '的生命值还剩：' + this.solider.hp + '\n';

    if(this.solider.hp <=0) {
      result += this.solider.name + 'OUT!';
      break;
    }
    
  }
  return result;
};

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
