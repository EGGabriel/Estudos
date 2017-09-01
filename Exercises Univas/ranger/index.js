console.log('Hi Everyone!');

var cont = 0;
function myFunction() {
    if (cont < 1) {
        var br = document.createElement("br");
        document.body.appendChild(br);
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        x.setAttribute("min", "0");
        x.setAttribute("max", "100");
        x.setAttribute("id", "rangeValue");
        x.setAttribute("value", "0");
        x.setAttribute("oninput", "textValue.value=this.value");
        document.body.appendChild(x);
        br = document.createElement("br");
        document.body.appendChild(br);
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        y.setAttribute("id", "textValue");
        y.setAttribute("value", "0");
        y.setAttribute("oninput", "rangeValue.value=this.value");
        document.body.appendChild(y);
        cont++;
    }
}