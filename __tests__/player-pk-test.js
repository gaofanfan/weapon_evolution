jest.dontMock('../JS/model/player-pk');
jest.dontMock('../JS/model/player');

describe('PlayerPk', function() {

  describe('#pk()', function() {

    it('should return value', function() {

      var Player = require('../JS/model/player');
      var PlayerPk = require('../JS/model/player-pk');
      var player1 = new Player('张三' , 100 , 10);
      var player2 = new Player('李四' , 80 , 8);
      var playerpk = new PlayerPk(player1 , player2);
      var attackResult =
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩92\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩70\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩84\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩60\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩76\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩50\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩68\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩40\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩60\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩30\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩52\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩20\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩44\n'+
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩10\n' +
        '李四攻击了张三,张三受到10点伤害,张三的生命值还剩36\n' +
        '张三攻击了李四,李四受到8点伤害,李四的生命值还剩0\n' +
        '李四   OUT!!!';

      var result = playerpk.pk();

      expect(result).toBe(attackResult);
    });

  });

});
