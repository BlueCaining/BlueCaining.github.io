// Variables
const greet = document.getElementById("greeting");
const titleBackground = document.getElementById("title-cover");
const bodyBackground = document.getElementById("background");
const navHomeColor = document.getElementById("navBar-home");
const navItemColor = document.getElementById("navbarNav");
const titleWordColor = document.getElementById("title-cover-word");
const myAge = document.getElementById("age");
const closeButton = document.querySelector(".lightbox-close");
const lightBox = document.querySelector(".lightbox");
const galleryItem = document.querySelectorAll(".gallery-list-item");
const lightboxImage = document.querySelector(".lightbox-image");
const prevButton = document.querySelector(".lightbox-prev");
const nxtButton = document.querySelector(".lightbox-next");
let yearOfBirth = 1992;

// Set Interval to check the hours of today and change the background of title cover and greeting
setInterval(getDateTime, 1000);

// Get the current hour and my age
function getDateTime(){
	let currentDate = new Date();
	let hour = currentDate.getHours();
	let year = currentDate.getFullYear();
	let ageNow = year - yearOfBirth;
	getGreeting(hour);
	myAge.innerHTML = ageNow;
}

// Get Greeting and change the background of title cover, background color based on hour now
function getGreeting(h){
	if(h >= 0 && h < 7){
		titleBackground.style.backgroundImage = "url(img/dawn.jpg)";
		bodyBackground.style.backgroundColor = "#f2e6ff";
		greet.innerHTML = "Good Morning";
	}else if(h >= 7 && h < 12){
		titleBackground.style.backgroundImage = "url(img/morning.jpg)";
		bodyBackground.style.backgroundColor = "#e6eeff";
		greet.innerHTML = "Good Morning";
	}else if(h >= 12 && h < 18){
		titleBackground.style.backgroundImage = "url(img/afternoon.jpg)";
		bodyBackground.style.backgroundColor = "#e6eeff";
		greet.innerHTML = "Good Afternoon";
	}else if(h >= 18 && h < 20){
		titleBackground.style.backgroundImage = "url(img/evening.jpg)";
		greet.innerHTML = "Good Evening";
		bodyBackground.style.backgroundColor = "#ffffcc";
	}else{
		titleBackground.style.backgroundImage = "url(img/night.jpg)";
		bodyBackground.style.backgroundColor = "#e6eeff";
		greet.innerHTML = "Good Night";
	}
}

//Hide light box
function hideLightBox(event){
	event.preventDefault();
	lightBox.classList.add("hidden");
}

//Show light box
function showLigthBox(event){
		lightBox.classList.remove("hidden");

		const elementClickedOn = event.target;
		const galleryItemParent = elementClickedOn.parentElement;
		
		lightboxImage.innerHTML = galleryItemParent.innerHTML;
}

//Click close button to close the light box
closeButton.onclick = hideLightBox;

//loop item in my gallery and show the light box of image on click
for(let i = 0; i < galleryItem.length; i++){
	let item = galleryItem[i];
	item.onclick = showLigthBox;

}