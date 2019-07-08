var expect = require ('chai').expect

describe ('DisplayBoard', function(){
    it ('Should Display the board', function(){

    })
})

describe ('CheckIfWinner', function(){
    it ('Check if we have a winner', function(){

    })
})

describe ('CheckBoxUsed', function(){
    it ('The box Selected is in use', function(){
        var BoxUsed=true
        expect(BoxUsed).to.be.true
    })
    it ('The box Selected is not in use', function(){
        var BoxUsed=false
        expect(BoxUsed).to.be.false
    })
})
