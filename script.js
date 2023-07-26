const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "`@$%^&*()_+:?";

const passBox = document.getElementById("pass");
const len = document.getElementById("length");
const Ucase = document.getElementById("upperCase");
const lcase = document.getElementById("lowerCase");
const niput = document.getElementById("number");
const sinput = document.getElementById("symbols");

const Random = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generate = (password = "")=>{
    if(Ucase.checked){
        password += Random(upperSet);
    }
    if(lcase.checked){
        password += Random(lowerSet);
    }
    if(niput.checked){
        password += Random(numbers);
    }
    if(sinput.checked){
        password += Random(symbols);
    }
    if(password.length < len.value){
        return generate(password);
    }
    // passBox.innerText = truncateString(password, len.value);
    console.log(password);

}
generate();

const button = document.getElementById("btn");

button.addEventListener("click",function(){
    generate();
})
