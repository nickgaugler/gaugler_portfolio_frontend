import React from 'react';
import moderatorImage from "../assets/images/moderatorPlaceholder.svg" 
import moderatorFlipImage from "../assets/images/ModeratorPlaceHolder_Flip.svg" 

const DynamicImage = () => {
    const image1 = {moderatorImage};
    const image2 = {moderatorFlipImage};
  
    const [image, setImage] = useState(image1);
  
    return (
      <Image
        style={{ content: image }}
        onMouseEnter={() => setImage(image2)}
        onMouseOut={() => setImage(image1)}
        width={200}
      />
    )
};

export default DynamicImage;