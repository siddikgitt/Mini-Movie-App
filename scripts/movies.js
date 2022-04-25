// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let lsamount = JSON.parse(localStorage.getItem("amount")) || 0;
  let wallet = document.getElementById("wallet");
  wallet.innerText = lsamount ;
  const showMovies = async () =>{
    // let s = document.getElementById("search").value;
    try{
      let s = document.getElementById("search").value;
      const url = `https://www.omdbapi.com/?apikey=103efe9a&s=${s}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.Search;
      
      //console.log(data.Search);
    }
    catch(err){
      console.log("Error:", err);
    }
  }

  const show = (data) =>{
    let mainDiv = document.getElementById("movies");
    mainDiv.innerHTML = "";
    data.forEach(function (el) {
      let div = document.createElement("div");
      div.style.border = "1px solid black"
      div.style.padding = "20px"
      
      let img = document.createElement("img");
      img.src = el.Poster;
      img.style.height = "200px";
      img.style.width = "200px";

      let title = document.createElement("h5");
      title.innerText = el.Title;

      let bookBtn = document.createElement("button");
      bookBtn.innerText = "Book Now" ;
      bookBtn.setAttribute("class", "book_now");
      bookBtn.onclick = () =>{
        checkout(el);
      }

      div.append(img, title, bookBtn);
      mainDiv.append(div);
    });
  }

  const checkout = (el) =>{
    console.log(el);
    localStorage.setItem("movie", JSON.stringify(el));
    window.location.href = "checkout.html";
  }

  const main = async () =>{
    let data = await showMovies();

    if(data == undefined){
      let mainDiv = document.getElementById("movies");
      mainDiv.innerHTML = "";
      return false;
    }
    else{
      show(data)
    }
  }

  let id;
  function debounce(main, delay){
    if(id){
      clearTimeout(id);
    }
    id = setTimeout(function(){
      main();
    }, delay);
  }