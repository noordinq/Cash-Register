const cash = document.getElementById("cash");
const dueChange = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const checkRegister = () => {
  if(!cash.value) {
    return;
  }

  if(cash.value < price) {
    alert("Customer does not have enough money to purchase the item")
    cash.value = "";
    return;
  } else if (cash.value == price){
    dueChange.innerHTML = "No change due - customer paid with exact cash";
    cash.value = "";
    return;
  }
}

purchaseBtn.addEventListener("click", checkRegister);