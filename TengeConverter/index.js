

function convert(){
    let num = +document.getElementById("teng").value
    let selected = document.querySelector('input[name="input_cur"]:checked').value
    if (Number.isInteger(num) && num > 0) {
        if(selected == "Dollar") {
            document.getElementById("ans").innerHTML = (num * 350) + " тг"
        }
        if (selected == "EURO") {
            document.getElementById("ans").innerHTML = (num * 508) + " тг"
        }
        if (selected == "RUB") {
            document.getElementById("ans").innerHTML = (num * 6) + " тг"
        }
    } else {
        alert("Enter the numberd not string and not negative number")
    }
}