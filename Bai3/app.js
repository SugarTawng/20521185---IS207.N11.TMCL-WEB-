document.addEventListener("keypress", (e) => {
	let key = e.keyCode;
	switch (key) {
		case 119:
			let wSound = new Audio("./sounds/sounds_tom-1.mp3");
			wSound.play();
			break;
		case 97:
			let aSound = new Audio("./sounds/sounds_tom-2.mp3");
			aSound.play();
			break;
		case 115:
			let sSound = new Audio("./sounds/sounds_tom-3.mp3");
			sSound.play();
			break;
		case 100:
			let dSound = new Audio("./sounds/sounds_tom-4.mp3");
			dSound.play();
			break;
		case 106:
			let jSound = new Audio("./sounds/sounds_snare.mp3");
			jSound.play();
			break;
		case 107:
			let kSound = new Audio("./sounds/sounds_crash.mp3");
			kSound.play();
			break;
		case 108:
			let lSound = new Audio("./sounds/sounds_kick-bass.mp3");
			lSound.play();
			break;
	}
});
const images = document.querySelectorAll(".drum");
images.forEach((image) => {
	image.addEventListener("click", (e) => {
		let drum = e.target.alt;
		switch (drum) {
			case "wDrum":
				let wSound = new Audio("./sounds/sounds_tom-1.mp3");
				wSound.play();
				break;
			case "aDrum":
				let aSound = new Audio("./sounds/sounds_tom-2.mp3");
				aSound.play();
				break;
			case "sDrum":
				let sSound = new Audio("./sounds/sounds_tom-3.mp3");
				sSound.play();
				break;
			case "dDrum":
				let dSound = new Audio("./sounds/sounds_tom-4.mp3");
				dSound.play();
				break;
			case "jDrum":
				let jSound = new Audio("./sounds/sounds_snare.mp3");
				jSound.play();
				break;
			case "kDrum":
				let kSound = new Audio("./sounds/sounds_crash.mp3");
				kSound.play();
				break;
			case "lDrum":
				let lSound = new Audio("./sounds/sounds_kick-bass.mp3");
				lSound.play();
				break;
		}
	});
});
