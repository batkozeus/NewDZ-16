// Task 1

const btnShape = document.querySelector('#btnShape');
const btnRectangle = document.querySelector('#btnRectangle');
const btnCircle = document.querySelector('#btnCircle');


// --------------------------------------------------------------


class Shape {

	constructor ({ color = "none", initX = 0, initY = 0 }) {
		this.color = color;
		this.initX = initX;
		this.initY = initY;
	}


	getColor () {
		console.log(`Ваш цвет - ${this.color}`);
		document.querySelector('#getColor').innerHTML = `Ваш цвет - ${this.color}`;
	}

	setColor (val) {
		this.color = val;
		console.log(`Вы поменяли цвет на - ${this.color}`);
		document.querySelector('#setColor').innerHTML = `Вы поменяли цвет на - ${this.color}`;
	}

	getCoords () {
		console.log(`Координаты (ось x: ${this.initX}; ось y: ${this.initY})`);
		document.querySelector('#getCoords').innerHTML = `Координаты (ось x: ${this.initX}; ось y: ${this.initY})`;
	}

	moveTo(newX, newY) {
		this.initX = newX;
		this.initY = newY;
		console.log(`Переместились (ось x: ${this.initX}; ось y: ${this.initY})`);
		document.querySelector('#moveTo').innerHTML = `Переместились (ось x: ${this.initX}; ось y: ${this.initY})`;
	}

}

let testingSample = () => {
	let shapeSample = new Shape ({
	  color: "white",
	  initX: 45,
	  initY: 30
	});
	shapeSample.getColor();
	shapeSample.setColor('black');
	shapeSample.getCoords();
	shapeSample.moveTo(90,60);
};

btnShape.addEventListener("click", testingSample);


// --------------------------------------------------------------


class Rectangle extends Shape {

	constructor (params, initWidth, initHeight) {
		super (params);
		this.initWidth = initWidth;
		this.initHeight = initHeight;
	}

	setWidth (newWidth) {
		this.initWidth = newWidth;
		console.log(`Вы задали ширину прямоугольника - ${this.initWidth}`);
		document.querySelector('#setWidth').innerHTML = `Вы задали ширину прямоугольника - ${this.initWidth}`;
	}

	setHeight (newHeight) {
		this.initHeight = newHeight;
		console.log(`Вы задали высоту прямоугольника - ${this.initHeight}`);
		document.querySelector('#setHeight').innerHTML = `Вы задали высоту прямоугольника - ${this.initHeight}`;
	}

	getDims () {
		console.log(`Параметры прямоугольника: ширина - ${this.initWidth}, высота - ${this.initHeight}`);
		document.querySelector('#getDims').innerHTML = `Параметры прямоугольника: ширина - ${this.initWidth}, высота - ${this.initHeight}`;
	}

	draw () {
		console.log(`Drawing a Rectangle at:\n  (x: ${this.initX}, y: ${this.initY})\nWith dimentions:\n  width: ${this.initWidth}\n  height: ${this.initHeight}\nFilled with color: ${this.color}`);
		document.querySelector('#drawRectangle').innerHTML = `Drawing a Rectangle at:<br>  (x: ${this.initX}, y: ${this.initY})<br>With dimentions:<br> width: ${this.initWidth}<br>  height: ${this.initHeight}<br>Filled with color: ${this.color}`;
	}
}

let testingRectangle = () => {
	let rectangleSample = new Rectangle ({
	  color: "#FF5722",
	  initX: 50,
	  initY: 50
	});
	rectangleSample.setWidth(100);
	rectangleSample.setHeight(100);
	rectangleSample.getDims();
	rectangleSample.draw();
};

btnRectangle.addEventListener("click", testingRectangle);


// --------------------------------------------------------------


class Circle extends Shape {

	constructor (params, initRadius) {
		super (params);
		this.initRadius = initRadius;
	}
	
	setRadius (val) {
		this.initRadius = val;
		console.log(`Вы задали радиус круга - ${this.initRadius}`);
		document.querySelector('#setRadius').innerHTML = `Вы задали радиус круга - ${this.initRadius}`;
	}

	getRadius () {
		console.log(`Параметры круга: радиус - ${this.initRadius}`);
		document.querySelector('#getRadius').innerHTML = `Параметры круга: радиус - ${this.initRadius}`;
	}

	draw () {
		console.log(`Drawing a Circle at:\n  (x: ${this.initX}, y: ${this.initY})\nWith dimentions:\n  radius: 100\nFilled with color: #009688`);
		document.querySelector('#drawCircle').innerHTML = `Drawing a Circle at:<br>  (x: ${this.initX}, y: ${this.initY})<br>With dimentions:<br>  radius: 100<br>Filled with color: #009688`;
	}
}

let testingCircle = () => {
	let circleSample = new Circle ({
	  color: "#0093688",
	  initX: 10,
	  initY: 10
	});
	circleSample.setRadius(250);
	circleSample.getRadius();
	circleSample.draw();
};

btnCircle.addEventListener("click", testingCircle);