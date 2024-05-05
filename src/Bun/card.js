// Card.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

import like from './stuff/like.png';

const Card = ({ title, image, price }) => {
  const [count, setCount] = useState(1);
  const [showHide, setShowHide] = useState(false);

  const show = () => {
    setShowHide(!showHide);
  };

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{title}</h5>
          <Button variant="link" onClick={show}>
            <img src={like} height={"20px"} alt="Like" />
          </Button>
        </div>
        <p className="card-text">Starting at ${price}/-</p>
        <div className={`d-flex ${showHide ? 'd-flex' : 'd-none'}`}>
          <Button variant="outline-success" onClick={dec}>-</Button>
          <p className="m-2">{count}</p>
          <Button variant="outline-success" onClick={inc}>+</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
