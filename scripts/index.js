// Store the wallet amount to your local storage with key "amount"

 let lsamount = JSON.parse(localStorage.getItem("amount")) || 0;
  let wallet = document.getElementById("wallet");
  wallet.innerText = lsamount ;


  const redirect = () =>{
    window.location.href = "movies.html";
  }

  const addToWallet = () =>{
    let amount = Number(document.getElementById("amount").value);

    let lsAmount = JSON.parse(localStorage.getItem("amount")) || 0;

    let totalAmount = lsAmount + amount

    localStorage.setItem("amount", totalAmount);

    wallet.innerText = totalAmount;
  }