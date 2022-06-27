import BA_hermann from "../assets/BA_hermann.jpg";
import ComputerCenter from "../assets/computercenter.JPG";

const imgs = [
    { src: `${BA_hermann}`, des: 'Brad Hermann, Owner of the Computer Center.' },
    { src: `${ComputerCenter}`, des: 'The Peru Computer Center.' },
];



export const RenderImage = () => {

    let Img, imgSrc = [];

    for(let i = 0; i < imgs.length; i++) {
          Img = new Image();

           imgSrc[i] = Img.src = imgs[i].src;
    }

}

export default imgs;