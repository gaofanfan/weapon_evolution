function Solider(occupation,name , hp , attack, armor, weapon) {
  this.occupation = occupation;
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.armor = armor;
  this.weapon = weapon;

}

Solider.prototype.getSoliderOccupation = function() {
  return this.occupation;
};
Solider.prototype.getSoliderName = function() {
  return this.name;
};

Solider.prototype.getSoliderHp = function() {
  return this.hp;
};

Solider.prototype.getSoliderAttack = function() {
  return this.attack;
};

Solider.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Solider.prototype.getWeaponAttack = function() {
  return this.weapon.attack;
};

Solider.prototype.getArmorName = function() {
  return this.armor.name;
};

Solider.prototype.getArmorDef = function() {
  return this.armor.def;
};

module.exports = Solider;
