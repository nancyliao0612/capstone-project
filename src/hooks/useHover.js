import { useState } from "react";

function useHover() {
  // Keep track of hover state in this hook
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered((prevState) => !prevState);
  }

  return { hovered, handleHover };
}

export default useHover;
