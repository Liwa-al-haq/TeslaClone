import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from './Button';
import './item2.css';

const Item = ({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first
}) => {
  const navigate = useNavigate();

  const navToOrder = (e) => {
    e.preventDefault();
    console.log('hi');
    navigate('/order');
  };

  return (
    <div className='item' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='item_container'>
        <div className="item_text">
          <p>{title}</p>
          <div className='item_textDesc'>
            <p>{desc}</p>
          </div>
        </div>
        <div className='item_lowerThird'>
          <div className={`item_buttons ${twoButtons ? 'two_buttons' : 'one_button'}`}>
            <Button imp='primary' text={leftBtnTxt} onClick={navToOrder} />
            {twoButtons && (
              <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className='item_expand'>
              {/* <ExpandMoreIcon /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
