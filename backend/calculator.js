let input = document.querySelector("#display");

let num_1 = document.querySelector(".num1");
let num_2 = document.querySelector(".num2");
let num_3 = document.querySelector(".num3");
let num_4 = document.querySelector(".num4");
let num_5 = document.querySelector(".num5");
let num_6 = document.querySelector(".num6");
let num_7 = document.querySelector(".num7");
let num_8 = document.querySelector(".num8");
let num_9 = document.querySelector(".num9");
let num_0 = document.querySelector(".num0");

let barobar = document.querySelector(".equal")
let qoshish = document.querySelector(".pluss")
let ayiruv = document.querySelector(".minus")
let kopay = document.querySelector(".mul")
let boluv = document.querySelector(".div")
let nuqtacha = document.querySelector(".dot")
let ochirish_R = document.querySelector(".remove-element_r")
let ochirish_C = document.querySelector(".remove-element_c")

let display = ""
let amal = ""

class Calculator {

    amalniTekshir(value) {
        this.tekshirish_2()
        if (display[display.length - 1] !== value && ("+-x÷").includes(display[display.length - 1])) {
            return display.slice(0, -1) + value
        } else if (amal && display[0] !== amal) {
            return display
        } else if ((value !== display[display.length - 1] && display !== "")) {
            return display + value
        } else {
            return display
        }

    }

    tekshirish_2() {
        if (display.slice(1).includes("+")) amal = "+"
        else if (display.slice(1).includes("x")) amal = "x"
        else if (display.slice(1).includes("÷")) amal = "÷"
        else if (display.slice(1).includes("-")) amal = "-"
        else amal = ""
    }


    tekshirish_0(value) {
        if (display === "0") return value
        else if (("+-x÷").includes(display[display.length - 2]) && display[display.length - 1] === "0") {
            return display.slice(0, -1) + value
        } else {
            return display + value
        }
    }


    nuqtanitekshir() {
        this.tekshirish_2()
        if (!display.includes(".") && display !== "") {
            display += nuqtacha.textContent
        } else if (amal && !display.slice(display.indexOf(amal, 1)).includes(".")) {
            if (display[display.indexOf(amal, 1) + 1] === undefined) {
                display += 0 + nuqtacha.textContent
            } else {
                display += nuqtacha.textContent
            }
        }
        this.natija(display)
    }

    hisoblash() {
        this.tekshirish_2()
        let olma = display[display.indexOf(amal, 1) + 1] != undefined
        if (amal === '+' && olma)
            display = display.split('+').reduce((sum, el) => ((parseFloat(sum) * 10) + (parseFloat(el) * 10)) / 10).toString()
        else if (amal === '-' && olma)
            if (display[0] === '-')
                display = (display.slice(0, display.indexOf('-', 1)) - display.slice(display.indexOf('-', 1) + 1)).toString()
            else
                display = display.split('-').reduce((sum, el) => ((parseFloat(sum) * 10) - (parseFloat(el) * 10)) / 10).toString()
        if (amal === 'x' && olma)
            display = display.split('x').reduce((sum, el) => ((parseFloat(sum) * 10) * (parseFloat(el) * 10)) / 100).toString()
        else if (amal === '÷' && olma)
            display = display.split('÷').reduce((sum, el) => (parseFloat(sum) * 10) / (parseFloat(el) * 10)).toString()
        this.natija(display)
    }


    natija(value) {
        input.setAttribute("value", value)
        this.tekshirish_2()
    }
}

let calculate = new Calculator()

console.log(calculate.tekshirish_2());

num_1.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_1.textContent)
    calculate.natija(display)
})

num_2.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_2.textContent)
    calculate.natija(display)
})

num_3.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_3.textContent)
    calculate.natija(display)
})

num_4.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_4.textContent)
    calculate.natija(display)
})

num_5.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_5.textContent)
    calculate.natija(display)
})

num_6.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_6.textContent)
    calculate.natija(display)
})

num_7.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_7.textContent)
    calculate.natija(display)
})

num_8.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_8.textContent)
    calculate.natija(display)
})

num_9.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_9.textContent)
    calculate.natija(display)
})

num_0.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    display = calculate.tekshirish_0(num_0.textContent)
    calculate.natija(display)
})

nuqtacha.addEventListener("click", (event) => calculate.nuqtanitekshir())

qoshish.addEventListener("click", (event) => {
    display = calculate.amalniTekshir(qoshish.textContent)
    calculate.natija(display)
})

ayiruv.addEventListener("click", (event) => {
    display = calculate.amalniTekshir(ayiruv.textContent)
    calculate.natija(display)
})

boluv.addEventListener("click", (event) => {
    display = calculate.amalniTekshir(boluv.textContent)
    calculate.natija(display)
})

kopay.addEventListener("click", (event) => {
    display = calculate.amalniTekshir(kopay.textContent)
    calculate.natija(display)
})

ochirish_R.addEventListener("click", () => {
    display = display.slice(0, -1)
    calculate.natija(display)
})

ochirish_C.addEventListener("click", () => {
    display = ""
    calculate.natija(display)
})

barobar.addEventListener("click", () => {
    calculate.hisoblash()
})