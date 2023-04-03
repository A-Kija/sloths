class Div {

    constructor() {
        const bin = document.querySelector('#bin');
        this.div = document.createElement('div');
        const text = document.createTextNode(this.rand(1000, 9999))
        this.div.append(text);
        bin.append(this.div);
        this.div.addEventListener('click', _ => this.changeColor(this.randColor()))
    }

    rand(min = 1000, max = 9999) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    changeDigit(digit) {
        this.div.innerText = digit;
    }

    changeColor(color) {
        this.div.style.color = color;
        this.div.style.borderColor = color;
    }

    randColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
    }

}



const divs = [...Array(200)].map(_ => new Div());

setInterval(_ => divs.forEach(d => d.changeColor(d.randColor()) || d.changeDigit(d.rand())), 500);