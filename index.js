//set color
let allh1 = document.getElementsByTagName('h1')
for (h1 of allh1) {

    h1.style.color = 'lightblue '
}
//give background color
let backpag = document.getElementById('backpag')
backpag.style.backgroundColor = 'tomato'
backpag.style.display = 'inline-block'
    //give border radius for all card classes
let cards = document.getElementsByClassName('card')
for (card of cards) {
    card.style.borderRadius = '30px'

}
//add funtction on button if return console
const btnlast = document.getElementById('btnlast')
btnlast.addEventListener('click', function() {
        console.log('this is the last button')
    })
    //btn remove with function 
let bunn = document.getElementById('removebtn1').addEventListener('click', function() {

    console.log(23)

})

// submit email button  desible
let submitBtn = document.getElementById('inputBtn')
let inputfeild = document.getElementById('input-feild')
let par = document.getElementById('para')
inputfeild.addEventListener('keyup', function(event) {
        let getValue = event.target.value

        if (getValue != ' ') {
            submitBtn.removeAttribute('disabled')
        }
    })
    // remove the paragraph
submitBtn.addEventListener('click', function() {
    par.remove()
})


// images changing with mouse enter
let imgGet = document.getElementById('imgchang')

imgGet.addEventListener('mouseenter', function() {
    console.log('enter');
})