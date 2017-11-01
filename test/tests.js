
const expect = chai.expect;
var value = 'value'
// describe('createTable', function(){
//   it('creates a table of objects', function(){
//     expect(expect.createTable).to.equal();
//   })
// })

describe('image', function(){
  it ('returns a image in a string', function(){
    expect(imageFormatter(value)).to.equal('<img src="value">')
  })
})
