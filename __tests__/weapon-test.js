jest.dontMock('../JS/model/weapon');

describe('Weapon', function() {

  it('should return weapon', function() {
    var Weapon = require('../JS/model/weapon');

    var weapon = new Weapon('尚方宝剑', 4);
    var result =  weapon;
    expect(result).toEqual({name:'尚方宝剑', attack: 4});
  });
  
});
