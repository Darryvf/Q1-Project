
const expect = chai.expect;
var value = 'value'
// var 'data' = '#table'
// describe('createTable', function(){
//   it('creates a table of objects', function(){
//     // expect(createTable).to.equal('data');
// expect($(createTable."table tr:first th:first")).to.equal();
//   })
// })

describe('image', function(){
  it ('returns a image in a string', function(){
    expect(imageFormatter(value)).to.equal('<img src="value">')
  })
})

describe('click', function(){
  it ('retuns values in a format', function(){
    expect(urlFormatter(value)).to.equal('<a href="value">value</a>')
  })
})
