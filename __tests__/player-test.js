jest.dontMock('../JS/model/player');
jest.dontMock('../JS/model/armor');
jest.dontMock('../JS/model/weapon');

Player = require('../JS/model/player');
Armor = require('../JS/model/armor');
Weapon = require('../JS/model/weapon');

describe('Player', function() {
  var player;
  var armor;
  var weapon;
  beforeEach(function() {
    armor = new Armor('护盾', 5);
    weapon = new Weapon('尚方宝剑', 4);
    player = new Player('普通人','李四' , 40, 8, weapon, armor);
  });
  describe('#getOccupation', function() {

    it('should return occupation', function() {
      var result =  player.getOccupation();
      expect(result).toBe('普通人');
    });

  });
  describe('#getName', function() {

    it('should return playerName', function() {
      var result =  player.getName();
      expect(result).toBe('李四');
    });

  });
  describe('#getHp', function() {

    it('should return playerHP', function() {
      var result =  player.getHp();
      expect(result).toBe(40);
    });

  });
  describe('#getAttack', function() {

    it('should return playerAttack', function() {
      var result =  player.getAttack();
      expect(result).toBe(8);
    });

  });
  describe('#getWeaponName', function() {
    it('should return WeaponName', function() {

      var result = player.getWeaponName();
      expect(result).toBe('尚方宝剑');
    });
  });

  describe('#getWeaponAttack', function() {
    it('should return WeaponAttack', function() {

      var result = player.getWeaponAttack();
      expect(result).toBe(4);
    });
  });

  describe('#getArmorName', function() {
    it('should return ArmorName', function() {

      var result = player.getArmorName();
      expect(result).toBe('护盾');
    });
  });

  describe('#getArmorDef', function() {
    it('should return ArmorDef', function() {

      var result = player.getArmorDef();
      expect(result).toBe(5);
    });
  });

});
