import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setPos({
          x: e.pageX,
          y: e.pageY
        });
      }
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }, []);
  
    return pos;
}

export default useMousePosition;