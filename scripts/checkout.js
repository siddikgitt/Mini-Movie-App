// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let lsamount = JSON.parse(localStorage.getItem("amount")) || 0;
  let wallet = document.getElementById("wallet");
  wallet.innerText = lsamount ;

  let data =  JSON.parse(localStorage.getItem("movie"));
  let mainDiv = document.getElementById("movie");
    let div = document.createElement("div");

    let title = document.createElement("h5");
    title.innerText = data.Title;

    let img = document.createElement("img");
    img.src = data.Poster;
    img.style.height = "200px";
    img.style.width = "200px";

    let year = document.createElement("p");
    year.innerText = data.Year;

    div.append(title, img, year);
    mainDiv.append(div);
  
  const book = () =>{
    let name = document.getElementById("user_name").value;
    let person = Number(document.getElementById("number_of_seats").value);

    let bill = 100*person ;
    let billjson = JSON.parse(localStorage.getItem("amount")) || 0;

    if(bill <= billjson){
      let lsamount = JSON.parse(localStorage.getItem("amount")) || 0;
      console.log(lsamount)
      let totalAmount = lsamount - bill;
      localStorage.setItem("amount", totalAmount);
      let aq = JSON.parse(localStorage.getItem("amount"));
      let wallet = document.getElementById("wallet");
      wallet.innerText = aq ;
      alert("Booking successful!");
      
    }
    else{
      alert("Insufficient Balance!")
    }
  }