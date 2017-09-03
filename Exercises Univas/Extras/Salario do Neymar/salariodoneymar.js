function myFunction() {
        var contador = 0
        var sec = 0
        setInterval(function () {
            contador += 3.50;
            sec++
            console.log("O Neymar ganhou: " + contador.toFixed(1) + " Em " + sec + " segundos!")
            var p1 = document.createElement("p");
            p1.innerHTML = "O Neymar ja Ganhou: " + contador.toFixed(1) + " em " + sec + " segundos!"
            var p2 = document.createElement("p");
            document.getElementById("salarioNeymar").appendChild(p1)
            setTimeout(function () {
                document.getElementById("salarioNeymar").removeChild(p1)
            }, 1000);
        }, 1000);
}