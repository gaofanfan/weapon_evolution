function Soldier(occupation,name , hp , attack, armor, weapon) {
  this.occupation = occupation;
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.armor = armor;
  this.weapon = weapon;

}

Soldier.prototype.getOccupation = function() {
  return this.occupation;
};
Soldier.prototype.getName = function() {
  return this.name;
};

Soldier.prototype.getHp = function() {
  return this.hp;
};

Soldier.prototype.getAttack = function() {
  return this.attack;
};

Soldier.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Soldier.prototype.getWeaponAttack = function() {
  return this.weapon.attack;
};

Soldier.prototype.getArmorName = function() {
  return this.armor.name;
};

Soldier.prototype.getArmorDef = function() {
  return this.armor.def;
};

module.exports = Soldier;
