jest.dontMock('../JS/model/armor');

describe('Armor', function() {
  it('should return armor', function() {
    var Armor = require('../JS/model/armor');

    var armor = new Armor('护盾', 5);
    var result =  armor;
    expect(result).toEqual({name:'护盾', protectionValue: 5 });
  });
});
