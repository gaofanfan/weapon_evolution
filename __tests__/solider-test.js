jest.dontMock('../JS/model/solider');
jest.dontMock('../JS/model/armor');
jest.dontMock('../JS/model/weapon');
Solider = require('../JS/model/solider');
Armor = require('../JS/model/armor');
Weapon = require('../JS/model/weapon');

describe('Solider', function() {
  var solider;
  var armor;
  var weapon;
  beforeEach(function() {
    armor = new Armor('护盾', 5);
    weapon = new Weapon('尚方宝剑', 4);
    solider = new Solider('战士' ,'张三' , 50 , 10, armor, weapon);
  });

  describe('#getSoliderOccupation', function() {
    it('it should return soliderOccupation', function() {

      var result = solider.getSoliderOccupation();
      expect(result).toBe('战士');
    });
  });

  describe('#getSoliderName', function() {
    it('it should return soliderName', function() {

      var result = solider.getSoliderName();
      expect(result).toBe('张三');
    });
  });

  describe('#getSoliderHp', function() {
    it('it should return soliderHP', function() {

      var result = solider.getSoliderHp();
      expect(result).toBe(50);
    });
  });

  describe('#getSoliderAttack', function() {
    it('it should return soliderAttack', function() {

      var result = solider.getSoliderAttack();
      expect(result).toBe(10);
    });
  });

  describe('#getArmorName', function() {
    it('should return ArmorName', function() {

      var result = solider.getArmorName();
      expect(result).toBe('护盾');
    });
  });

  describe('#getArmorDef', function() {
    it('should return ArmorDef', function() {

      var result = solider.getArmorDef();
      expect(result).toBe(5);
    });
  });

  describe('#getWeaponName', function() {
    it('should return WeaponName', function() {

      var result = solider.getWeaponName();
      expect(result).toBe('尚方宝剑');
    });
  });

  describe('#getWeaponAttack', function() {
    it('should return WeaponAttack', function() {

      var result = solider.getWeaponAttack();
      expect(result).toBe(4);
    });
  });

});
