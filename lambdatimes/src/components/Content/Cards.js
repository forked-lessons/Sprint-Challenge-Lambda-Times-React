import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
`;
const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map(card => (
        <Card card={card} />
      ))}
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    })
  )
};
export default Cards;
