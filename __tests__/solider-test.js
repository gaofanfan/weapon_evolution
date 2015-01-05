jest.dontMock('../JS/model/soldier');
jest.dontMock('../JS/model/armor');
jest.dontMock('../JS/model/weapon');
Soldier = require('../JS/model/soldier');
Armor = require('../JS/model/armor');
Weapon = require('../JS/model/weapon');

describe('Soldier', function() {
  var soldier;
  var armor;
  var weapon;
  beforeEach(function() {
    armor = new Armor('护盾', 5);
    weapon = new Weapon('尚方宝剑', 4);
    soldier = new Soldier('战士' ,'张三' , 50, 10, armor, weapon);
  });

  describe('#getOccupation', function() {
    it('it should return soldierOccupation', function() {

      var result = soldier.getOccupation();
      expect(result).toBe('战士');
    });
  });

  describe('#getName', function() {
    it('it should return soliderName', function() {

      var result = soldier.getName();
      expect(result).toBe('张三');
    });
  });

  describe('#geHp', function() {
    it('it should return soldierHP', function() {

      var result = soldier.getHp();
      expect(result).toBe(50);
    });
  });

  describe('#getAttack', function() {
    it('it should return soldierAttack', function() {

      var result = soldier.getAttack();
      expect(result).toBe(10);
    });
  });

  describe('#getArmorName', function() {
    it('should return ArmorName', function() {

      var result = soldier.getArmorName();
      expect(result).toBe('护盾');
    });
  });

  describe('#getArmorDef', function() {
    it('should return ArmorDef', function() {

      var result = soldier.getArmorDef();
      expect(result).toBe(5);
    });
  });

  describe('#getWeaponName', function() {
    it('should return WeaponName', function() {

      var result = soldier.getWeaponName();
      expect(result).toBe('尚方宝剑');
    });
  });

  describe('#getWeaponAttack', function() {
    it('should return WeaponAttack', function() {

      var result = soldier.getWeaponAttack();
      expect(result).toBe(4);
    });
  });

});
