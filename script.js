let bill = document.querySelector("#billTotalInput");

let tip = document.querySelector("#tipInput");

let numpeople = document.querySelector("#numberOfPeople")
let numpp =Number(numpeople.innerText);
let pp = document.querySelector("#perPersonTotal");

const calculateBill = ()=> {

    let ti = Number(tip.value)
    let bil = Number(bill.value)

    const percentage = ti / 100
    const  costBill = percentage + bil
    const  ppe = costBill / numpp
        pp.innerText = `$${ppe.toFixed(2)}`

}

const increasePeople = () =>{
    numpp += 1

    numpeople.innerText = numpp

    calculateBill()
}

const decreasePeople =() =>{

    if(numpp <=1){
        alert("Hey! You cannot have less than 1 person!")
        throw 'Hey! You cannot have less than 1 person!'
        
        return
    }
    numpp -= 1

    numpeople.innerText = numpp
        calculateBill()
}

// function calculate(k, tipInput.value) {
//     let percentage = (tipInput.value / 100);
//     let finalcal = billTotalInput / percentage;
//     return finalcal;
    
// }