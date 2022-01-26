let p = document.getElementsByTagName("p");
const body = document.getElementsByTagName("body");
const ans = document.querySelector("#ans");
const img = document.querySelector("#img");

let k = 0;

function changeAns() {
    let value = document.getElementById("console").value;
    console.log(value);

    if (value.includes("안녕")) {
        p[0].innerHTML = "안녕?";
    }

    else if (value.includes("불꺼")) {
        p[0].innerHTML = "불 껐어";
        body[0].style.backgroundColor = "#000000";
        body[0].style.opacity = "0.7";
        ans.style.color = "#ffffff";
        img.src = "screenshots/nn.png";
    }
        
    else if (value.includes("불켜")) {
        p[0].innerHTML = "불 켰어";
        body[0].style.backgroundColor = "#ffff";
        body[0].style.opacity = "1";
        ans.style.color = "#2e363e";
        img.src = "screenshots/kk.jpg";
    }
        
    else {
        p[0].innerHTML = "뭐라고?";
    }

    if (k == 0) {
        if (value.includes("거꾸로")) {
            p[0].innerHTML = "지금부터 거꾸로 말할게!";
            k = 1;
        }
    }
    else if (k == 1) {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            arr[i] = value.charAt(value.length - i - 1);
        }
        let a = arr.join(" ");
        p[0].innerHTML = a + " !";
        

        if (value.includes("그만")) {
            p[0].innerHTML = "다시 똑바로 말할게";
            k = 0;
        }
    }
}
