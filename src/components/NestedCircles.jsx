import React, { useEffect, useRef, useState } from "react";
import "./NestedCircles.css";
import details from "./details";

const NestedCircles = () => {
  const bigCircleRef = useRef(null);
  const smallCircleRefs = useRef([]);
  const [smallCircles, setSmallCircles] = useState(true);
  const [content, setDetails] = useState([]);

  function changeSmallCircles(title) {
    setSmallCircles(!smallCircles);
    toggleDetails(title);
  }
  function toggleDetails(title) {
    const area = details.find((item) => item.id === title);
    setDetails(area.content);
  }

  useEffect(() => {
    //only trigger the useEffect when there is need to re-draw the small circles
    if (!smallCircles) {
      return;
    }
    const bigCircle = bigCircleRef.current;
    const radius = bigCircle.offsetWidth / 2;
    const smallerRadius = radius * 0.55;

    const numberOfCircles = 4;
    const angleIncrement = (2 * Math.PI) / numberOfCircles;

    smallCircleRefs.current.forEach((smallCircle, index) => {
      const angle = angleIncrement * index;
      const x = smallerRadius * Math.cos(angle) + radius;
      const y = smallerRadius * Math.sin(angle) + radius;

      smallCircle.style.left = `${x - smallCircle.offsetWidth / 2}px`;
      smallCircle.style.top = `${y - smallCircle.offsetHeight / 2}px`;
    });
  }, [smallCircles]);

  return (
    <div className="big-circle" ref={bigCircleRef}>
      {smallCircles ? (
        [1, 2, 3, 4].map((index) => (
          <div
            className="small-circle"
            key={index}
            ref={(el) => (smallCircleRefs.current[index - 1] = el)}
          >
            {index === 1 && (
              <div
                className="circleText hobbies"
                onClick={() => changeSmallCircles("hobby")}
              >
                <>
                  <h1>Hobbies</h1>
                </>
              </div>
            )}
            {index === 2 && (
              <div
                className="circleText education"
                onClick={() => changeSmallCircles("education")}
              >
                <>
                  <h1>Education</h1>
                </>
              </div>
            )}
            {index === 3 && (
              <div
                className="circleText experience"
                onClick={() => changeSmallCircles("experience")}
              >
                <>
                  <h1>Experience</h1>
                </>
              </div>
            )}
            {index === 4 && (
              <div
                className="circleText skills"
                onClick={() => changeSmallCircles("skill")}
              >
                <>
                  <h1>Skills</h1>
                </>
              </div>
            )}
          </div>
        ))
      ) : (
        <>
          <div className="bigMoon-details">
            {content.map((item, index) => {
              return (
                <>
                  <h2 className="bigMoon-title" key={index}>
                    {item.title}
                  </h2>
                  <p
                    className="bigMoon-content"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.details }}
                  ></p>
                  {index === content.length - 1 && (
                    <button onClick={setSmallCircles}>Back</button>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default NestedCircles;
