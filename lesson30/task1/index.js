//addImage With promise

 export const addImageWithPromise = imgSrc =>{
 const p = new Promise((resolve , reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const  onImageLoaded = ()=> {
        const { width, height } = imgElem;
        resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject( new Error('Image load failed')));
 });

  return p;
};

const imgSrc='https://pngimg.com/uploads/mario/mario_PNG125.png';

const resultPromise = addImageWithPromise(imgSrc);
resultPromise.then(data => console.log(data));
