import { Gallery } from "../../lib/react-grid-library";
import { PhotoGridStyled } from "./PhotoGridStyled";

function PhotoGrid() {

  const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       alt: "Boats (Jeshu John - designerspics.com)",
       width: 320,
       height: 212,
    },
 ];

  return (
    <PhotoGridStyled>
      <div className="gallery">
         {images.map((image, index) => 
            <img key={index} src={image.src} alt={image.alt} />
         )}
      </div>
    </PhotoGridStyled>
  );
}

export default PhotoGrid