import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  function addImageToCart(newItem) {
    setCartItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function removeImageFromCart(id) {
    const newArray = cartItems.filter((item) => item.id !== id);
    setCartItems(newArray);
    // setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        cartItems,
        addImageToCart,
        removeImageFromCart,
        setCartItems,
      }}
    >
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
