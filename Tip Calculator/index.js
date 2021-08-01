function calculateTip() {
    const bill = document.getElementById("bill").value
    const tip = document.getElementById("tip").value
    const splitCheck = document.getElementById("split-check").value
    let total = ""
    let totalBill = ""
    if (bill ==="" || tip > 100){
        return alert("Check your Data")

    }else{
        total = (bill * tip)/100
    }
    totalBill = +bill + +total
    if (splitCheck > 0 ){
        total = total/ splitCheck
    }
    
     document.getElementById("tip-cal").innerHTML = "Your Tip: " + total
     document.getElementById("total-bill").innerHTML = "Total BIll " + totalBill
}

document.getElementById("btn").onclick = function() {
    calculateTip()
}