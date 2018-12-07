//variables
const imageBody = document.getElementById("images");
const tags = ["dog", "cat","umbrella","mountain", "mommy", "sky", "popcorn", "iron", "caramel", "car", "baby", "lion", "food"];
let tagItem = [];
const items = document.getElementById("list-item");
let exist = false;
let randomOther = 0;
let otherTag = "";
let temp = 0;
const clickedButton = document.getElementsByTagName('body');
 
/*Get Random Answer Tag */
let random = Math.floor(Math.random() * tags.length);
let tag = tags[random];

/*Push the Answer Tag into array tagItem*/
tagItem.push(String(tag));

/*Check whether the other tags generated already exist in array tagItem*/
function isExist(tagOther, tagCompare){
	for(let k = 0; k < tagCompare.length; k++){
		if(tagOther == tagCompare[k]){
			exist = true;
			break;
		}else{
			exist = false;
		}
	}
	return exist;
}

/*Generate other tag Number for choices and then push all the tags generated
array tagItem*/
for(let j = 1; j < 4; j++){
	/*if temporary value is not 0*/
	if(temp != 0){
		j = temp;
		temp = 0;
	}
	randomOther = Math.floor(Math.random() * tags.length);
	otherTag = tags[randomOther];
	
	if(otherTag != tag){
		isExist(otherTag, tagItem);
		console.log(exist);
		if(exist == false){
			tagItem.push(String(otherTag));		
		}else{
			temp = j;
			if (j == 3){
				j--;
				temp = 0;
			}
		}
	}else{
		temp = j;
		if (j == 3){
			j--;
			temp = 0;
		}
	}			
	
}

//sort the items in array tagItem
tagItem.sort();

//generate random color for button
function getRandomColor(){
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	return "rgba("+ r +", "+ g +", "+ b +", "+0.8+")";
}

//append those tags generated to the screen in button form
for(let z = 0; z < tagItem.length; z++){
	let li = document.createElement('li');
	let button = document.createElement('button');
	let tagNode = document.createTextNode(tagItem[z]);
	button.appendChild(tagNode);
	button.id = z;
	button.style.backgroundColor = getRandomColor();
	li.append(button);
	items.appendChild(li);
}

//fetch photos in tumblr of the answer tag
const tumblr = fetch('https://api.tumblr.com/v2/tagged?tag='+tag+'&api_key=xiDlDtA4NDdr53FlI9xt9R692YnRR6KFSRODXYLVuJcjtcUx0H').
then(function(response){
	return response.json();
}).then(function(result){
	let allPhotos = result.response
	for(let i = 0; i < allPhotos.length; i++){
		if (allPhotos[i].type == "photo"){
			let url = allPhotos[i].photos[0].original_size.url;
			let img = document.createElement('img');
			img.src = url;
			imageBody.appendChild(img);
		}				
	}
	
})

//click the button and guess the tag
clickedButton[0].onclick = function(event){

	if(String(event.target.innerHTML) == tag || (event.target.innerHTML == "undefined" && tag == undefined)){
		alert("Correct! :)");
		location.reload();
	}else{
		alert("The correct answer is "+tag+"!");
		location.reload();
	}
}