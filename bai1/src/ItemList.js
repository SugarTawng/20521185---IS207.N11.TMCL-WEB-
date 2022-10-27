import React from "react";
import Item from "./Item";

import wDrum from "./imgs/wDrum.png";
import aDrum from "./imgs/aDrum.png";
import sDrum from "./imgs/sDrum.png";
import dDrum from "./imgs/dDrum.png";
import jDrum from "./imgs/jDrum.png";
import kDrum from "./imgs/kDrum.png";
import lDrum from "./imgs/lDrum.png";
import piano from "./imgs/piano.png";
import maracas from "./imgs/maracas.png";
import xylophone from "./imgs/xylophone.png";

import tom1 from "./sounds/sounds_tom-1.mp3";
import tom2 from "./sounds/sounds_tom-2.mp3";
import tom3 from "./sounds/sounds_tom-3.mp3";
import tom4 from "./sounds/sounds_tom-4.mp3";
import snare from "./sounds/sounds_snare.mp3";
import crash from "./sounds/sounds_crash.mp3";
import kickbass from "./sounds/sounds_kick-bass.mp3";
import pianoSound from "./sounds/piano-mp3_A0.mp3";
import maracasSound from "./sounds/maracas.mp3";
import xylophoneSound from "./sounds/xylophone.mp3";

function ItemList() {
	const imgs = [wDrum, aDrum, sDrum, dDrum, jDrum, kDrum, lDrum, piano, maracas, xylophone];
	const sounds = [tom1, tom2, tom3, tom4, snare, crash, kickbass, pianoSound, maracasSound, xylophoneSound];

	document.addEventListener("keypress", (e) => {
		let key = e.keyCode;
		console.log(key);
		switch (key) {
			case 119:
				let wSound = new Audio(tom1);
				wSound.play();
				break;
			case 97:
				let aSound = new Audio(tom2);
				aSound.play();
				break;
			case 115:
				let sSound = new Audio(tom3);
				sSound.play();
				break;
			case 100:
				let dSound = new Audio(tom4);
				dSound.play();
				break;
			case 106:
				let jSound = new Audio(snare);
				jSound.play();
				break;
			case 107:
				let kSound = new Audio(crash);
				kSound.play();
				break;
			case 108:
				let lSound = new Audio(kickbass);
				lSound.play();
				break;
			case 122:
				let zSound = new Audio(pianoSound);
				zSound.play();
				break;
			case 120:
				let xSound = new Audio(maracasSound);
				xSound.play();
				break;
			case 99:
				let cSound = new Audio(xylophoneSound);
				cSound.play();
				break;
			default:
				wSound.play();
		}
	});

	return (
		<div className="ItemList">
			{imgs.map(function (img, index) {
				return <Item ImgSrc={img} SoundSrc={sounds[index]} />;
			})}
		</div>
	);
}

export default ItemList;
