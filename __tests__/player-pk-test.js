jest.autoMockOff();
Player = require('../JS/model/player');
Solider = require('../JS/model/solider');
PlayerPk = require('../JS/model/player-pk');
Armor = require('../JS/model/armor');
Weapon = require('../JS/model/weapon');

describe('PlayerPk', function() {
  var solider;
  var player;
  var armor;
  var weapon;
  beforeEach(function() {
    armor = new Armor('护盾', 5);
    weapon = new Weapon('尚方宝剑', 4);
    solider = new Solider('战士', '张三', 50, 10, armor, weapon);
    player = new Player('普通人', '李四', 40, 8);
  });

  describe('#pk()', function() {
    it('should return text', function() {

      var playerpk = new PlayerPk(solider, player);
      var attackResult =
        '战士张三用尚方宝剑攻击了普通人李四，李四受到了14点伤害，李四的生命值还剩：26\n' +
        '普通人李四攻击了战士张三，张三受到了3点伤害，张三的生命值还剩：47\n' +
        '战士张三用尚方宝剑攻击了普通人李四，李四受到了14点伤害，李四的生命值还剩：12\n' +
        '普通人李四攻击了战士张三，张三受到了3点伤害，张三的生命值还剩：44\n' +
        '战士张三用尚方宝剑攻击了普通人李四，李四受到了14点伤害，李四的生命值还剩：-2\n' +
        '李四OUT!';

      var result = playerpk.pk();

      expect(result).toBe(attackResult);
    });
  });

});
