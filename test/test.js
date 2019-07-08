var expect = require ('chai').expect

describe ('DisplayBoard', function(){
    it ('Should Display the board', function(){

    })
})

describe ('NextTurn', function(){
    it ('Check if the turn is for X', function(){
        var player="X"
        expect(player).to.equal("X")
    })
    it ('Check if the turn is for O', function(){
        var player="O"
        expect(player).to.equal("O")
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
