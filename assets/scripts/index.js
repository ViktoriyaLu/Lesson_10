// ОБРАЗЕЦ для одного  Элемента!

// const priceOne = document.querySelector('.js-price');
// const price = +priceOne.textContent; //100
// console.log(price);
// const discount = document.querySelector('.total__discount'); //кнопка 
// discount.addEventListener('click', () => { //анонимная функция
// 	priceOne.textContent = price * 0.8;
// 	console.log(discount);
// })
//НАЧАЛО здесь 


// Получаем все элементы с классом "js-price"
const priceElements = document.querySelectorAll('.js-price');

//До комментов Kота было так:

// const priceOne = +priceElements[0].textContent;
// const priceTwo = +priceElements[1].textContent;
// const priceThree = +priceElements[2].textContent;
// const priceFour = +priceElements[3].textContent;
// const bigSum = (priceOne + priceTwo + priceThree + priceFour);

// Инициализируем переменную для хранения общей суммы
let bigSum = 0;
// Вычисляем общую сумму, пройдя по каждому элементу
for (let i = 0; i < priceElements.length; i++) {
const price = +priceElements[i].textContent;
bigSum += price;
}
//Выводим общую сумму на страницу
document.querySelector('.total__bigSum').innerHTML = bigSum;

//Получаем кнопку  со скидкой
const discount = document.querySelector('.total__discount'); //кнопка 

//Инициализируем переменную для коэффциента скидки
const discountFactor = 0.8;

//Добавляем обработчик события на кнопку со скидкой
discount.addEventListener('click', () => { //анонимная функция
	//До комментов Kота было так:
	// priceElements[0].textContent = priceOne * 0.8;
	// priceElements[1].textContent = priceTwo * 0.8;
	// priceElements[2].textContent = priceThree * 0.8;
	// priceElements[3].textContent = priceFour * 0.8;
	// const bigSumSale = 0.8 * (priceOne + priceTwo + priceThree + priceFour);
	
	// Применяем скидку к каждлму элементу
	for (let i = 0; i < priceElements.length; i++) {
		const price = +priceElements[i].textContent;
		priceElements[i].textContent = price * discountFactor;
		}
		// Вычисляем новую общую сумму со скидкой
		const bigSumSale = discountFactor * bigSum;

		// Выводим новую общую сумму со скидкой на страницу
		document.querySelector('.total__bigSum').innerHTML = bigSumSale;

		// отключаем кнопку со скидкой
		discount.setAttribute('disable', true);
	});



//Вариант с массивом ! Доделать позже!!!!

// const contentEl = document.querySelector('.content');
// const data = [{
// 		img: './assets/images/flowers-img2.jpg',
// 		name: 'ТЮЛЬПАН',
// 		desc: 'Цвет: розовый',
// 		price: 100,
// 	},
// 	{
// 		img: './assets/images/flowers-img2.jpg',
// 		name: 'ТЮЛЬПАН',
// 		desc: 'Цвет: белый',
// 		price: 150,
// 	},
// 	{
// 		img: './assets/images/flowers-img3.jpg',
// 		name: 'БУКЕТ',
// 		desc: 'Цвет:многоцветие',
// 		price: 1000,
// 	},
// 	{
// 		img: './assets/images/flowers-img4.jpg',
// 		name: 'БУКЕТ в корзине',
// 		desc: 'Цвет: многоцветие',
// 		price: 1500,
// 	},
// ]
// data.forEach(element => {
// 	const productEl = document.createElement('div');
// 	productEl.classList.add('product');

// 	// for (let i = 0; i < 4; i++) {
// 	// console.log(productEl);
// 	// }
// 	const productImg = document.createElement('img');
// 	productImg.classList.add('product__img');
// 	productImg.src = element.img;

// 	const productName = document.createElement('h3');
// 	productName.classList.add('product__name');
// 	productName.textContent = element.name;

// 	const productDesc = document.createElement('p');
// 	productDesc.classList.add('product__description');
// 	productDesc.textContent = element.desc;

// 	// const productQuantity = document.createElement ('p');
// 	// productQuantuty.classList.add('product__quantity');
// 	// productQuantity.textContent = 'Количество товара';

// 	const productPrice = document.createElement('p');
// 	productPrice.classList.add('product__price');
// 	productPrice.textContent = element.price;

// 	productEl.appendChild(productImg);
// 	productEl.appendChild(productName);
// 	productEl.appendChild(productDesc);
// 	// productEl.appendChild (productQuantity);
// 	productEl.appendChild(productPrice);
// 	contentEl.appendChild(productEl);

// 	console.log(productEl);
// 	function salePrice()
// {
// 	return productPrice * 0.8;

// 	console.log(salePrice);
// };
// });

// add = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };

// var arr = [100, 150, 1000, 1500];

// var sum = add(arr);
// console.log(sum);
// console.log(arr[0]);


