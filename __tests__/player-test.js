jest.dontMock('../JS/model/player');

var Player = require('../JS/model/player');


describe('Player', function() {
  it('should return player', function() {

    var player1 = new Player('普通人','李四' , 40, 8);
    var result =  player1;
    expect(result).toEqual({occupation:'普通人',name:'李四' , hp:40, attack:8});
  });
});
