let player = true;
let step = 0;
let win = false;
let alrdyWin = false;
const clickedBox = document.getElementsByTagName('body');
const resetGame = document.getElementById('reset');

//fill the box with 'X' and 'O'
function fillBox(index, symbol){
	let box = document.getElementById(index);
	box.innerHTML = symbol;
}

//give symbol 'X' to player 1 and symbol 'O' to player 2
function givePlayerSymbol(){
	if (player){
		return "X";
	}else {
		return "O";
	}

}

//Switch player
function switchPlayer(){
	player = !player;
}

//Check whether the game already win
function checkWin(symbol){
	
	if(document.getElementById('0').innerHTML == symbol && document.getElementById('1').innerHTML == symbol && document.getElementById('2').innerHTML == symbol){
		return win = true;
	}else if (document.getElementById('3').innerHTML == symbol && document.getElementById('4').innerHTML == symbol && document.getElementById('5').innerHTML == symbol){
		return win = true;
	}else if (document.getElementById('6').innerHTML == symbol && document.getElementById('7').innerHTML == symbol && document.getElementById('8').innerHTML == symbol){
		return win = true;
	}else if (document.getElementById('0').innerHTML == symbol && document.getElementById('3').innerHTML == symbol && document.getElementById('6').innerHTML == symbol){
		return win = true;
	}else if(document.getElementById('1').innerHTML == symbol && document.getElementById('4').innerHTML == symbol && document.getElementById('7').innerHTML == symbol){
		return win = true;
	}else if(document.getElementById('2').innerHTML == symbol && document.getElementById('5').innerHTML == symbol && document.getElementById('8').innerHTML == symbol){
		return win = true;
	}else if(document.getElementById('0').innerHTML == symbol && document.getElementById('4').innerHTML == symbol && document.getElementById('8').innerHTML == symbol){
		return win = true;
	}else if(document.getElementById('2').innerHTML == symbol && document.getElementById('4').innerHTML == symbol && document.getElementById('6').innerHTML == symbol){
		return win = true;
	}else {
		return win = false;
	}
}


//play game
clickedBox[0].onclick = function(event){
	
	if(event.target.innerHTML == ''){
		if (alrdyWin == false){
			fillBox(event.target.id, givePlayerSymbol());	
		}
		//Check whether player is win	
		checkWin(givePlayerSymbol());
		if (win == true && alrdyWin == false){
			alrdyWin = true;
			if(player == true){
				window.alert('Player 1 win');
			}else{
				window.alert('Player 2 win');
			}

		}else{
			step++;
			switchPlayer();
			if (step >= 9){
				window.alert("Game tie");
			}
		}
	}


}

//reset the game
resetGame.onclick = function(){
	for (let i = 0; i < document.getElementsByTagName('div').length; i++){
		document.getElementsByTagName('div')[i].innerHTML = '';
		alrdyWin = false;
		step = 0;
	}
}



