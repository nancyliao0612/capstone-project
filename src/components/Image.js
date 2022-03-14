import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const { toggleFavorite, addImageToCart, cartItems, removeImageFromCart } =
    useContext(Context);
  const { hovered, handleHover } = useHover();

  const heartIcon = img.isFavorite ? (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  ) : (
    hovered && (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )
  );

  function addIcon() {
    const alreayInCart = cartItems.some((item) => item.id === img.id);
    if (alreayInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeImageFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImageToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon}
      {addIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  // An object taking on a particular shape
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
