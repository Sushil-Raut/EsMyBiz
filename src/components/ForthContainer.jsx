import React, { useEffect, useState, useRef } from "react";
import "../styles/ForthContainer.scss";

const Counter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    // Detect when the element is visible
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  
    // Start counting animation when visible
    useEffect(() => {
      if (!isVisible) return;
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [isVisible, start, end, duration]);
  
    // ✅ Add 'visible' class when the element appears
    useEffect(() => {
      if (isVisible && ref.current) {
        ref.current.classList.add("visible");
      }
    }, [isVisible]);
  
    return <span ref={ref} className="counter">{count}+</span>;
  };
  
  function ForthContainer() {
    return (
      <div className="Forth">
        <h1>Trusted Payroll Outsourcing Solution</h1>
        <div className="counter-container">
          <div className="counter-box">
            <h2><Counter start={0} end={2} duration={2000} /></h2>
            <p>Years in Business</p>
          </div>
          <div className="counter-box">
            <h2><Counter start={0} end={20} duration={2000} /></h2>
            <p>Happy Customers</p>
          </div>
          <div className="counter-box">
            <h2><Counter start={0} end={10} duration={2000} /></h2>
            <p>Industries Served</p>
          </div>
          <div className="counter-box">
            <h2><Counter start={0} end={100} duration={2000} />%</h2>
            <p>Accurate Payroll</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ForthContainer;