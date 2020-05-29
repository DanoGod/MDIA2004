var counter = 80;

		setInterval( function(){
			counter--;

			if( counter >= 0 ){
				id = document.getElementById("count");
				id.innerHTML = counter;
			}

			if( counter === 0 ){
				id.innerHTML = "Time is up";
			}
		}, 1000);