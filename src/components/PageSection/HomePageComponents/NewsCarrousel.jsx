// this component will use the ui reducer to manage the change in Ui other components need to be updated accordingly
import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Carousel from "react-bootstrap/Carousel";

import { getNews } from "../../../Redux/actions/dataActions";

// erase image later just for testing
import promocionImg from "../../../images/promocion1.png";

function NewsCarrousel(props) {
  const [index, setIndex] = useState(0);

  const { news, loading } = props;

  useEffect(() => {
    props.getNews();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function renderNews(data) {
    return data.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <img src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }

  const content = loading ? <div>Loading...</div> : renderNews(news);

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

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
  news: state.data.news,
});

const mapDispatchToProps = {
  getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCarrousel);
