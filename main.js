const input_Name = document.querySelector("#Name");
const input_Phone = document.querySelector("#Phone");

const nameP = document.querySelector("#name");
const phone = document.querySelector("#phone");
const btnRender = document.querySelector("#btn_render");
nameP.innerText = input_Name.value
phone.innerText = input_Phone.value
const avataText = document.querySelector(".T-avata");


function handlePhone(s){
    let x;
    if (s.length<=11){
        s = s.split("");
    
        for (let i = 3; i < 8; i++) {
            s[i] = "*";
    
        }
        x = "";
        for (let i = 0; i < s.length; i++){
            x += s[i];
    
        }
    }
    return x;
    
}
btnRender.addEventListener("click",()=>{
    nameP.innerText = input_Name.value.toUpperCase()
    phone.innerText = handlePhone(input_Phone.value)
    let T =  input_Name.value.toUpperCase().split(" ")
    
    avataText.innerText = T[T.length-1][0]
    
    
    
    


})

