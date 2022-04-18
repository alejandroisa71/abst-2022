import React from "react";
import PropTypes from "prop-types";

import "./clubes.css";
import { Animated } from "react-animated-css";

function Club({ title, imageSource, text, url }) {
  return (
    <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
      <div className="card text-center bg-dark mt-4 ">
        <div className="card-body text-light">
          <div className="overflow p-5">
            <img src={imageSource} alt="" className="card-img-top " />
          </div>
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe\
          aliquam magni commodi quae quis veniam nam. Autem veritatis aut, porro\
          facere sed eius quisquam cupiditate distinctio provident consectetur\
          fugit totam."}
          </p>
          <a
            href={url}
            className="btn btn-outline-secondary rounded-0"
            target="_blank"
          >
            Mas
          </a>
        </div>
      </div>
    </Animated>
  );
}

Club.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};

export default Club;
