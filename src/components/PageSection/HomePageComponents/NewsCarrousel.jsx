import { Flex } from "@aws-amplify/ui-react";
import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import promocionImg from "../../../images/promocion1.png";

function NewsCarrousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const arr = ["Hello", "News", "Here"  ];

  function renderNews(data) {
    return data.map((item) => {
      return (
        <Carousel.Item>
          <img src={promocionImg} alt="computer" />
          <Carousel.Caption>{item}</Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  const content = renderNews(arr);

  return (
    <div>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        className="news-div"
      >
        {content}
      </Carousel>
    </div>
  );
}

export default NewsCarrousel;
