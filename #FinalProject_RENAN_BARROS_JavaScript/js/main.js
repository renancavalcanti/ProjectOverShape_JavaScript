var products = document.getElementsByClassName("product");
var searchBar = document.getElementById("search");
var bestSeller = document.getElementById("no-border");
var list = document.querySelector(".products-line");
var amountOrder = 0;
var statusClient = 0;
var tvq = 0;
var tps = 0;
var purchase = new Array(0,0,0,0,0,0,0,0,0,0,0);

searchBar.addEventListener("keyup", (e) => {
	
	var term = e.target.value.toLowerCase();
		
		if(term!=""){
			bestSeller.getElementsByTagName("h1")[0].innerText = "Results";
		}
		
		else{
			bestSeller.getElementsByTagName("h1")[0].innerText = "Best Seller";
		}
	
	Array.from(products).forEach(function(product){
		
		console.log(product);
		var title = product.getElementsByTagName("h4")[0].innerText;
		console.log(title);
		
		if(title.toLowerCase().indexOf(term) !=-1){

			product.style.display = "block";
			
		}			
		
		else{
			
			product.style.display = "none";
		}
		
	})
	
})

list.addEventListener('click', (e)=>{
	
	
		console.log(e.target.name);
		var index = e.target.name.slice(8);
		console.log(index);
		var qty = document.getElementsByName("qty"+index)[0].value;
		console.log(qty);
		var amount = document.getElementById("value"+index);
		amount = amount.innerText.slice(5);
		console.log(amount);
		
		amountOrder = amountOrder + amount*qty;
		console.log(amountOrder);
		
		var btnPay = document.getElementsByClassName("pay");
		btnPay[0].value = amountOrder.toFixed(2);
		purchase[index] += parseInt(qty, 10);;
		
			
})


var modal = document.getElementById('myModal');
var modalPay = document.getElementById('myModalPayment');

var btn = document.getElementById("pay");

var span = document.getElementsByClassName("close")[0];
var spanPay = document.getElementsByClassName("closePayment")[0];

 
btn.onclick = function() {
	if(statusClient==0){
		modal.style.display = "block";
		//statusClient=1;
	}
	
	else if(statusClient==1 && amountOrder==0){
		
		alert("You Don't Have Products To Pay!");
	}
	
	else if(statusClient==1 && amountOrder>0){
		
		modalPay.style.display = "block";
		var ul = document.getElementById("purchaseresume");
		ul.innerHTML = "";
		for(var i=0; i<purchase.length; i++){
			
			if(purchase[i] > 0){
				
				var desc = document.getElementById("desc"+i).innerText;
				var value = document.getElementById("value"+i).innerText;
				var newLi= document.createElement("li");
				var ul = document.getElementById("purchaseresume");
				var img = document.getElementById("Product"+i);
				newImg = img.cloneNode(true);
				newImg.style.width = "32px";
				newImg.style.height = "32px";
				newLi.appendChild(newImg);
				newLi.insertAdjacentHTML("beforeend", "&nbsp;&nbsp;" +desc + "&nbsp;&nbsp;(" + purchase[i] + " X " + value +")" );
				
				
				
				
				ul.appendChild(newLi);
			}
			
		}
		tps = amountOrder*0.05;
		tvq = amountOrder*0.0975;
		
		var newBr = document.createElement("br");
		
		var newLi= document.createElement("li");
		newLi.innerText = "Amount Total with Tax = CAD$ " + (amountOrder).toFixed(2);
		newLi.style.color = "Blue";
		ul.appendChild(newBr);
		ul.appendChild(newLi);
		
		var newBr = document.createElement("br");
		var newLi= document.createElement("li");
		newLi.innerText = "TPS Tax CAD$ = " + tps.toFixed(2);
		newLi.style.color = "Red";
		ul.appendChild(newBr);
		ul.appendChild(newLi);
		
		var newBr = document.createElement("br");
		var newLi= document.createElement("li");
		newLi.innerText = "TVQ Tax = CAD$ " + tvq.toFixed(2);
		newLi.style.color = "Red";
		ul.appendChild(newBr);
		ul.appendChild(newLi);
		
		var newBr = document.createElement("br");
		var newLi= document.createElement("li");
		newLi.innerText = "Amount Total with Tax = CAD$ " + (amountOrder+tps+tvq).toFixed(2);
		newLi.style.color = "Green";
		ul.appendChild(newBr);
		ul.appendChild(newLi);
		
	}
	
}


span.onclick = function() {
  modal.style.display = "none";
}

spanPay.onclick = function() {
  modalPay.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modalPay) {
    modalPay.style.display = "none";
  }
}

var login = document.getElementById("submit-login");


login.onclick = function(){
	
	var username = document.getElementById("username");
	var passwordUser = document.getElementById("passworduser");
	
	
			if(username.value=="admin" && passwordUser.value=="12345"){
				alert("Welcome " + username.value);
				modal.style.display = "none";
				var welcomeUser = document.getElementById("welcomeuser");
				welcomeUser.innerText = "Hi, " + username.value;
				var logout = document.getElementById("welcomeuser");
				var btnLogout = document.getElementById("btnLogout");
				btnLogout.style.display = "block";
				statusClient = 1;
			
			}
			
			else {
				alert("Username or Password Invalid!");
				
			}
	
}


	var btnLogout = document.getElementById("btnLogout");

	console.log(btnLogout);

	btnLogout.onclick = function(){
		var welcomeUser = document.getElementById("welcomeuser");
		welcomeUser.innerText = "";
		var btnLogout = document.getElementById("btnLogout");
		btnLogout.style.display = "none";
		statusClient = 0;
		alert("Thank you for Use OVERSHAPE");
	}
	
var inputs = document.querySelectorAll("input");

console.log(inputs);

var pattern = {
	
	cardnumber: /^\d{16}$/,
	cvc: /^\d{3}$/,
	nameoncard: /^[a-zA-Z-/ ]*$/,
	expiration: /^\d{2}\/\d{2}$/,
	
	
}

function validate (field, regex){
	
	console.log(field.value);
	console.log(regex.test(field.value));
	
	
	
	if(regex.test(field.value)){
		
		field.className = "valid";
		var para = document.getElementById(field.name+"Para");
		console.log(para);
		para.className = "validParagraph";
		
				
	}
	else {
		
		field.className = "invalid";
		var para = document.getElementById(field.name+"Para");
		console.log(para);
		para.className = "invalidParagraph";
		
		
	}
	
}

inputs.forEach(function(input){
	
	input.addEventListener("keyup",function(e){
		
		
		console.log(e.target.attributes.name.value);
		validate(e.target,pattern[e.target.attributes.name.value]);
		
		if(e.target.attributes.name.value=="cardnumber"){
			
			var card = document.getElementById("cardNumber").value;
			var cardType = document.getElementById("imageCard");
			if(card[0]==4){
				cardType.style.display = "block";
				cardType.src = "./img/visa.png";
			}
			
			else if(card[0]==5){
				cardType.style.display = "block";
				cardType.src = "./img/master.png";
			}
			
			else if(card[0]==3){
				cardType.style.display = "block";
				cardType.src = "./img/american.jpg";
				
			}
			
			else{
				document.getElementById("cardNumber").value ="";
				cardType.style.display = "none";
				cardType.src = "";
			}
			
		}
		
		
	})
	
})

var btnSubmit = document.getElementById("submitButton");

btnSubmit.onclick = function(e){
	
	var cardNumber = document.getElementById("cardNumber");
	var cvc = document.getElementById("cvc");
	var name = document.getElementById("nameoncard");
	var expiration = document.getElementById("expiration");
	var formSubmit = document.getElementsByClassName("form-payment");
	
		if(cardNumber.className == "invalid"){
			e.preventDefault();
			//alert("Credit Card Number Invalid!");
			return;
		}
		
		else if(cvc.className=="invalid"){
			e.preventDefault();
			//alert("CVC Number Invalid!");
			return;
		}
		
		else if(name.className=="invalid"){
			e.preventDefault();
			//alert("Name is Invalid!");
			return;
		}
		
		else if(expiration.className=="invalid"){
			e.preventDefault();
			//alert("Expiration Date is Invalid!");
			return;
		}
		
		else{
			
			
		}
		
	
	
	
}