const btnCheckBalance: HTMLElement = document.querySelector("#check");

let balanceValue: number = 12000;

const headerValue = document.querySelector("#balanceView");

const btnCashDeposite = document.querySelector("#deposite");

const btnGetCash = document.querySelector("#getCash");

const subDiv = document.querySelector("#subDiv");

const getBalance = function () {
  headerValue.innerHTML = `Balance : ${balanceValue}$`;
  subDiv.innerHTML = " ";
};

const getDeposit = function () {
  subDiv.innerHTML = " ";
  const cashDiv = document.createElement("div");
  cashDiv.id = "cashDiv";
  const cashInput: HTMLInputElement = document.createElement("input");
  cashInput.classList.add("chasInput");
  cashInput.type = "number";
  const addbtn: HTMLElement = document.createElement("button");
  addbtn.addEventListener("click", () => {
    const getCashInputValue = parseFloat(
      (<HTMLInputElement>document.querySelector(".chasInput")).value
    );
    if (!getCashInputValue) return;
    balanceValue += getCashInputValue;
    headerValue.innerHTML = `Your Deposite : ${getCashInputValue}$`;
    cashInput.value = "";
  });
  addbtn.classList.add("btn-primary");
  addbtn.innerText = "Add Cash";
  cashDiv.append(cashInput, addbtn);
  document.querySelector("#subDiv").appendChild(cashDiv);
};

const getCash = function () {
  subDiv.innerHTML = " ";
  const getDiv = document.createElement("div");
  getDiv.id = "getDiv";
  const getCashinput: HTMLInputElement = document.createElement("input");
  getCashinput.type = "number";
  getCashinput.classList.add("chasInput");
  const getBtn: HTMLElement = document.createElement("button");
  getBtn.innerText = "Get Cash";
  getBtn.classList.add("btn-primary");
  getBtn.addEventListener("click", () => {
    const getValuefromInput = parseFloat(
      (<HTMLInputElement>document.querySelector(".chasInput")).value
    );
    if (!getValuefromInput) return;
    balanceValue -= getValuefromInput;
    headerValue.innerHTML = `You get : ${getValuefromInput}$`;
    getCashinput.value = "";
  });
  getDiv.append(getCashinput, getBtn);
  document.querySelector("#subDiv").appendChild(getDiv);
};

btnCheckBalance.addEventListener("click", getBalance);

btnCashDeposite.addEventListener("click", getDeposit, false);

btnGetCash.addEventListener("click", getCash, false);
