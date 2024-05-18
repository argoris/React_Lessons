import React from 'react';
import './Details.css';
import ButtonDetails from '../ButtonDetails/ButtonDetails';

const Details = ({item}) => {
  const { imgUrl, name, category, timeForDone, description, plan, ingredients } = item;

  const wrapTextAfterColon = (text) => {
    const parts = text.split(': ');
    return (
      <>
        {parts[0]}: <span className={'details-span'}>{parts[1]}</span>
      </>
    );
  };

  return (
    <div className={"details-container"}>
      <div className={"details-card"}>
        <img className={'details-img'} src={imgUrl} alt={`${item.name} photo`} />
        <div className={'card-content'}>
            <h3 className="name-details">{name}</h3>
            <h4 className="category-details">{wrapTextAfterColon(category)}</h4>
            <h5 className="tfd-details">{wrapTextAfterColon(timeForDone)}</h5>
            <h6 className="description-details">{wrapTextAfterColon(description)}</h6>
        </div>
      </div>
      <div className={"ingredients-plan--box"}>
        <p className={"ingredients-details"}>{ingredients.join('')}</p>
        <p className={'plan-details'}>{plan}</p>
        <ButtonDetails>Back</ButtonDetails>
      </div>
    </div>
  );
}

export default Details
