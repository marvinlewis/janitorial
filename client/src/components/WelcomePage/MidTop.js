import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "./Hero.jpg";
import item1 from "./janitorial-item1.jpg";
import item2 from "./item2.jpg";
import item3 from "./item3.jpg";
import item4 from "./item4.jpg";
import item5 from "./item5.jpg";
import item6 from "./item6.jpg";
import item7 from "./item7.jpg";
import item9 from "./item9.jpg";
import item10 from "./item10.jpg";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: item6,
    altText: "hero card",
    caption: "",
  },
  {
    src: item9,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: item7,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: item10,
    altText: "Slide 4",
    caption: "",
  },
  {
    src: item1,
    altText: "hero card",
    caption: "",
  },
  {
    src: hero,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: item2,
    altText: "Slide 3",
    caption: "",
  },
  {
    src: item3,
    altText: "Slide 4",
    caption: "",
  },
  {
    src: item4,
    altText: "Slide 5",
    caption: "",
  },
  {
    src: item5,
    altText: "Slide 6",
    caption: "",
  },
];

const MidTop = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [status, setStatus] = useState("Closed");
  const toggle = () => setCollapse1(!collapse1);
  const toggle2 = () => setCollapse2(!collapse2);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="mid-top-cont">
      <div className="mid-top-img">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
        
      </div>
    </div>
  );
};
export default MidTop;
