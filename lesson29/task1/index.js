export const  addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const  onImageLoaded = ()=> {
        const { width, height } = imgElem;
        callback( null ,{ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => callback('Image load failed'));
};

const imgSrc='https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

const  onImageLoaded = (error, data)=> {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};


addImage(imgSrc ,onImageLoaded);

