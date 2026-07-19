import React, { useEffect } from 'react'

const useCustomCursor = (ringRef,dotRef) => {
    useEffect(() => {
      const move = (e) => {
        if (ringRef.current) { ringRef.current.style.left = e.clientX + "px"; ringRef.current.style.top = e.clientY + "px"; }
        if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; }
      };
      const over = (e) => {
        if (e.target.closest("a, button, .work-item")) ringRef.current?.classList.add("hovering");
        else ringRef.current?.classList.remove("hovering");
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseover", over);
      return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
    }, [ringRef,dotRef])
}

export default useCustomCursor;
