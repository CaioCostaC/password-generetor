 
const params = new URLSearchParams(window.location.search);
var password = params.get('password');


console.log('Password:', password);

const boxContainer = document.querySelector("#box-container");

const createPasswordCard = () => {
    const divEl = document.createElement("div");
    divEl.classList.add("box-password");
    
    const passwordContainerInnerHtml = `
        <div class="password">
            <div class="text">
                <input type="text" name="password" class="name-password" value="Senha 1">
                <input type="text" name="password" class="password-input" value="${password}" readonly>
            </div>
            <div class="actions">
                <button class="copy">
                    <img src="img/copy-solid.svg" width="42">
                </button>
                <button class="delet">
                    <img src="img/delet.svg" width="35">
                </button>
            </div>
        </div>
    `
    divEl.innerHTML = passwordContainerInnerHtml;
    boxContainer.appendChild(divEl);
}

createPasswordCard()



// const p = document.querySelector("#download1")
// p.addEventListener("click", createPasswordCard);





