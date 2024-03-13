const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');

// Створення фрагмента для оптимізації додавання елементів
const fragment = document.createDocumentFragment();

images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = image.url;
    img.alt = image.alt;
    img.classList.add('gallery-image'); // Додати клас для стилізації

    li.appendChild(img);
    fragment.appendChild(li);
});

// Додавання фрагмента з усіма елементами до списку галереї
galleryList.appendChild(fragment);