jest.dontMock('../JS/model/player');

describe('Player', function() {
  it('should return player', function() {
    var Player = require('../JS/model/player');

    var player1 = new Player('张三' , 100 , 10);
    var result =  player1;
    expect(result).toEqual({attack: 10, hp: 100 , name: '张三'});
  });
});
