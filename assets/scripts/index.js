const contentEl = document.querySelector('.content');
const data = [{
		img: './assets/images/flowers-img2.jpg',
		name: 'ТЮЛЬПАН',
		desc: 'Цвет: розовый',
		price: 100,
	},
	{
		img: './assets/images/flowers-img2.jpg',
		name: 'ТЮЛЬПАН',
		desc: 'Цвет: белый',
		price: 150,
	},
	{
		img: './assets/images/flowers-img3.jpg',
		name: 'БУКЕТ',
		desc: 'Цвет:многоцветие',
		price: 1000,
	},
	{
		img: './assets/images/flowers-img4.jpg',
		name: 'БУКЕТ в корзине',
		desc: 'Цвет: многоцветие',
		price: 1500,
	},
]
data.forEach(element => {
	const productEl = document.createElement('div');
	productEl.classList.add('product');

	// for (let i = 0; i < 4; i++) {
	// console.log(productEl);
	// }
	const productImg = document.createElement('img');
	productImg.classList.add('product__img');
	productImg.src = element.img;

	const productName = document.createElement('h3');
	productName.classList.add('product__name');
	productName.textContent = element.name;

	const productDesc = document.createElement('p');
	productDesc.classList.add('product__description');
	productDesc.textContent = element.desc;

	// const productQuantity = document.createElement ('p');
	// productQuantuty.classList.add('product__quantity');
	// productQuantity.textContent = 'Количество товара';

	const productPrice = document.createElement('p');
	productPrice.classList.add('product__price');
	productPrice.textContent = element.price;

	productEl.appendChild(productImg);
	productEl.appendChild(productName);
	productEl.appendChild(productDesc);
	// productEl.appendChild (productQuantity);
	productEl.appendChild(productPrice);
	contentEl.appendChild(productEl);

	console.log(productEl);
});

add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};


var arr = [100, 150, 1000, 1500];

var sum = add(arr);
console.log(sum);

document.querySelector ('.total__discount').onclick=function(){
	// alert('Вы нажали на кнопку');
	return productPrice * 0.8;
}
function salePrice()
{
	return productPrice * 0.8;

	console.log(salePrice);
};