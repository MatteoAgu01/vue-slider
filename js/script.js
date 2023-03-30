/*Descrizione:

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.  y



Bonus:

1- al click su una thumb, visualizzare in grande l'immagine corrispondente  y
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente  y
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce  y  */


const { createApp } = Vue;

createApp({
	data() {
		return {
			//arrey object
			images: [
				{
					image: './img/01.webp',
					title: 'Marvel\'s Spiderman Miles Morale',
					text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
				},

				{
					image: './img/02.webp',
					title: 'Ratchet & Clank: Rift Apart',
					text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
				},

				{
					image: './img/03.webp',
					title: 'Fortnite',
					text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
				},

				{
					image: './img/04.webp',
					title: 'Stray',
					text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
				},

				{
					image: './img/05.webp',
					title: "Marvel's Avengers",
					text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
				}
			],

			currentImg: 0,
		}
	},
	
	//creating setinterval
	mounted() {
		this.startInterval();
	},
	methods: {

		//setting interval change slides
		startInterval() {
			this.setInterval = setInterval(() => {
				this.currentImg = (this.currentImg + 1) % this.images.length;
			}, 3500);
		},

		//setting button for go to previous slide
		prevSlide() {
			this.currentImg = (this.currentImg + this.images.length - 1) % this.images.length;
		},
		//setting button for go to next slide
		nextSlide() {
			this.currentImg = (this.currentImg + 1) % this.images.length;
		},

		//setting for click on a thumbnails onClick
		selectImg(index) {
			this.currentImg = index;
		},

		//setting for mouse, if u go over div of carousel container with pointer, clear setinterval
		mouseOver() {
			clearInterval(this.setInterval);
		}
	}
}).mount('#app');