import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import React, {useState}  from 'react';

export default function GoTop() {
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };  
  
  const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    }
  
  const isBrowser = () => typeof window !== "undefined"

  isBrowser() && window.addEventListener('scroll', toggleVisible)

    return (
    <button><BsFillArrowUpCircleFill className="gotop" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} aria-label="gotop" /></button>
    )
}