// input data

// let name = prompt("Input name: ")
// let x = parseInt(prompt("Input x: "))
// let y = parseInt(prompt("Input y: "))

// data processing

// let result = "Hello, " + name + "!"
// let result = `Hello, ${name}`
// if (y === 0) {
//     alert("Div by 0!")
// } else {
//     let result = x / y
//     // output data
//     alert(`${x} / ${y} = ${result}`)
// }

var str="";

function send() {
    let name = document.getElementById("name").value
    let message = document.getElementById("message").value
    document.getElementById("message").value = ""
    document.getElementById("output").innerText = ""
    document.getElementById("error").innerText = ""

    main = document.getElementsByName("main")
    
    if (message == "") {
        document.getElementById("error").innerText = "Error! Enter your message."
        return
    }

    if (name == "") {
        name = "Guest"
    }

    let history = document.getElementById("history")
    let p = document.createElement("p")
    p.innerHTML = `<b>${name}</b>: ${message}`
    document.getElementById("history").appendChild(p)

}