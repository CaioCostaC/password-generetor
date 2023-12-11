const inputEl = document.querySelector("#password");
const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#numbers-check")
const symbolCheckEl = document.querySelector("#symbol-check")
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")
const buttonOpenModal = document.querySelector("#buttonOpenModal")
const buttonCloseModal = document.querySelector("#return-generetor")
const buttonResponsiveOpenModal = document.querySelector("#buttonReturn2") 
const modalFullEl = document.querySelector("#modalFull")
const buttonDownloadEl = document.querySelector("#download")
const boxContainer = document.querySelector("#box-container");



let passwordlength = 16;

function generatePassword() {
    let chars = "abcdefghjkmnpqrstuvwxyz";

    const upperCaseChars = "ABCDEFGHJKMNPQRSTUVWXYZ";
    const numberChars = "123456789";
    const symbolChars = "?!@&*()[]";

    if(upperCaseCheckEl.checked){
        chars += upperCaseChars;
    }
    if(numberCheckEl.checked){
        chars += numberChars;
    }
    if (symbolCheckEl.checked){
        chars += symbolChars;
    }

    let password = "";

    for (let i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputEl.setAttribute("value", password)
    calculateQuality();
    calculateFontSize();
}

function calculateQuality (){
    const percent = Math.round(
        (passwordlength / 64) * 25 + 
        (upperCaseCheckEl.checked ? 15 : 0) + 
        (numberCheckEl.checked ? 25 : 0) + 
        (symbolCheckEl.checked ? 35 : 0));
    securityIndicatorBarEl.style.width = `${percent}%`

    if (percent > 69){
        //safe
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.add("safe")
    }else if (percent > 50){
        //warning
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.remove("safe")
        securityIndicatorBarEl.classList.add("warning")
    }else{
        //warning
        securityIndicatorBarEl.classList.add("critical")
        securityIndicatorBarEl.classList.remove("safe")
        securityIndicatorBarEl.classList.remove("warning")
    }
    
    if(percent >= 100) {
        securityIndicatorBarEl.classList.add("completed")
    }else{
        securityIndicatorBarEl.classList.remove("completed")
    }
}

function calculateFontSize (){
    if (passwordlength > 45){
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.add("font-xxs")
    }else if (passwordlength > 32){
        inputEl.classList.remove("font-xxs")
        inputEl.classList.remove("font-sm")
        inputEl.classList.add("font-xs")
    }else if(passwordlength > 22){
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
        inputEl.classList.add("font-sm")
    }else{
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
        inputEl.classList.remove("font-sm")
    }
}

function copy () {
    navigator.clipboard.writeText(inputEl.value);
    alert("Copiado com sucesso!")
}

const passwordlengthEl = document.querySelector("#password-length");
passwordlengthEl.addEventListener("input", function() {
    passwordlength = passwordlengthEl.value;
    document.querySelector("#password-length-text").innerText = passwordlength;
    generatePassword();
})

function openModal () {
    modalFullEl.classList.remove("hidden");
}
function closeModal () {
    modalFullEl.classList.add("hidden");
}

const createPasswordCard = () => {
    const divEl = document.createElement("div");
    divEl.classList.add("box-password");
    
    const passwordContainerInnerHtml = `
    <div class="m-password">
    <div class="text">
    <input type="text" name="password" class="name-password" value="Mude o nome">
    <input type="text" name="password" class="password-input" value="${password.value}" readonly>
    </div>
    <div class="actions">
    <button class="copy" id="m-copy" onClick = "copyModal()">
    <img src="img/copy-solid.svg" width="42">
    </button>
    <button class="delet" onClick = "removePasswordCard()">
    <img src="img/delet.svg" width="35">
    </button>
    </div>
    </div>
    `
    divEl.innerHTML = passwordContainerInnerHtml;
    boxContainer.appendChild(divEl);
    openModal();
    console.log(password.value);
}   

const removePasswordCard = () => {
    boxContainer.innerHTML = "";
}

function copyModal () {
    navigator.clipboard.writeText(password.value);
    alert("Copiado com sucesso!")
}



upperCaseCheckEl.addEventListener("click", generatePassword);
numberCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);
buttonOpenModal.addEventListener("click", openModal)
buttonResponsiveOpenModal.addEventListener("click", openModal)
buttonCloseModal.addEventListener("click", closeModal)




buttonDownloadEl.addEventListener("click", createPasswordCard)






document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);
document.querySelector("#renew").addEventListener("click", generatePassword);

generatePassword();
        

// Listagem de senhas
        
        
        




