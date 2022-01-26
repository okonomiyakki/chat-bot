let h = 0;
let m = 0;
let s = 0;
let num;
let time;
let count = 0;  



let t = document.getElementsByClassName("time");
// let click = document.getElementsByClassName('start');
document.getElementById("start").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("stop").addEventListener("click", stop);

function start() {
    
    prog();
    num = setTimeout(start, 1000);

    count = 1;
    if (count == 1) {
        click.disabled = true;
    }
}

function reset() {
    clearTimeout(num);
    time = "00 : 00 : 00";
    h = 0;
    m = 0;
    s = 0;
    t[0].innerHTML = time;

    count = 0;
    if (count == 0) {
        click.disabled = false;
    }
}
function stop() {
    timestop();

    count = 0;
    if (count == 0) {
        click.disabled = false;
    }
}

function prog() {
    time = "";
    s++;
    if (s >= 60) {
        s -= 60;
        m++;
    }

    if (m >= 60) {
        m -= 60;
        h++
    }
    
    if (h < 10)
        time += "0";
	time += h;
	time += " : ";
        
    if (m < 10)
        time += "0";
	time += m;
	time += " : ";

    if (s < 10)
        time += "0";
	time += s;

	t[0].innerHTML = time;	
}

function timestop() {
    clearTimeout(num);
}


// var session = prompt("골라보세요. 1-돈까스, 2-냉면, 3-비빔밥");

// switch (session) {
//     case "1": document.write("<p>돈까쓰안돼</p>")
//         break;
//     case "2": document.write("<p>냉면안돼</p>")
//         break;
//     case "3": document.write("<p>비빕밥안돼</p>")
//         break;
//     default: alert("잘못 입력했어요.")
// }