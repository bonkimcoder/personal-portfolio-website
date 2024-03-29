import { useState, useEffect, useRef } from "react";
import { stats } from "./Data";

const Counter = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [counterRef]);

  const startCounting = () => {
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          const targetValue = stats[index].value;
          const newValue = Math.floor(lerp(0, targetValue, progress));
          return newValue;
        })
      );

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  };

  return (
    <div
      className="max-w-5xl bg-teal-700 flex justify-around flex-wrap ss:mx-5 my-6 p-10 rounded-2xl"
      ref={counterRef}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex-1 justify-center items-center flex-row"
        >
          <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center">
            {counters[index]}%
          </h4>
          <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[20px] text-white uppercase mt-3 text-center">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;

// import { useState, useEffect } from "react";
// import { stats } from "./Data";

// const Counter = () => {
//   const [counters, setCounters] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const duration = 3000;
//     const startTime = Date.now();

//     const animate = () => {
//       const currentTime = Date.now();
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(1, elapsed / duration);

//       setCounters((prevCounters) =>
//         prevCounters.map((count, index) => {
//           const targetValue = stats[index].value;
//           const newValue = Math.floor(lerp(0, targetValue, progress));
//           return newValue;
//         })
//       );

//       if (elapsed < duration) {
//         requestAnimationFrame(animate);
//       }
//     };

//     const lerp = (start, end, t) => start * (1 - t) + end * t;

//     const animationFrameId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [stats]);

//   return (
//     <div className="max-w-4xl bg-teal-700 flex justify-center flex-wrap  ss:mx-5 my-6 p-10 rounded-2xl">
//       {stats.map((stat, index) => (
//         <div
//           key={stat.id}
//           className="flex-1 justify-center items-center flex-row"
//         >
//           <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center">
//             {counters[index]}%
//           </h4>
//           <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[20px] text-white uppercase mt-3 text-center">
//             {stat.title}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Counter;
