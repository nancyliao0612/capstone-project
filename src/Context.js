import React, { useState, useEffect } from "react";
const Context = React.createContext();

// # Challenge

// Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

// 1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
//     a. Have this function also console.log something so we know it's running correctly
//     b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
// 2. Make it so clicking the heart icon on any given image runs this method

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  function toggleFavorite(id) {
    const updatedArr = photos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setPhotos(updatedArr);
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json()) // Get the data from the api
      .then((data) => setPhotos(data)); // save the data to state
  }, []);

  return (
    <Context.Provider value={{ photos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

// function toggleFavorite(id) {
//   setPhotos((photo) => {
//     return photo.map((item) => {
//       return item.id === id
//         ? { ...item, isFavorite: !item.isFavorite }
//         : item;
//     });
//   });
//   console.log(id);
// }
