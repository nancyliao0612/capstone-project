import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
  const { photos } = useContext(Context);

  const imageElements = photos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });
  // Get the allPhotos array from context
  // map over it, creating <Image /> elements of the component we just made
  //   <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
