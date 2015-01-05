function Player(occupation, name, hp , attack, weapon, armor ) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.occupation = occupation;
  this.weapon = weapon;
  this.armor = armor;
}

Player.prototype.getOccupation = function() {
  return this.occupation;
};

Player.prototype.getName = function() {
  return this.name;
};

Player.prototype.getHp = function() {
  return this.hp;
};

Player.prototype.getAttack = function() {
  return this.attack;
};

Player.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Player.prototype.getWeaponAttack = function() {
  return this.weapon.attack;
};

Player.prototype.getArmorName = function() {
  return this.armor.name;
};

Player.prototype.getArmorDef = function() {
  return this.armor.def;
};
module.exports = Player;
