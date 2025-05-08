import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../../images/background.png";
import gemsLogo from "../../images/gems.png";

const flipBounce = keyframes`
  0% { transform: rotateY(0deg) scale(1); }
  60% { transform: rotateY(200deg) scale(1.05); }
  80% { transform: rotateY(170deg) scale(0.98); }
  100% { transform: rotateY(180deg) scale(1); }
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  position: relative;
  width: 300px;
  height: 400px;
  z-index: 2;
`;

const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--space-3);
  position: relative;
  transform-style: preserve-3d;
  animation: ${flipBounce} 0.8s forwards ease-in-out;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  border-radius: var(--space-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
`;

const PlayerImage = styled.img`
    width: 350%;
    height: auto;
    position: absolute;
    bottom: calc(0px - 299px);
`;

const GemsLogo = styled.img`
  width: 100%;
  margin-top: var(--space-2);
  align-self: center;
`;

const PlayerName = styled.h2`
  color: var(--neutral-500);
  text-align: center;
  margin-bottom: var(--space-2);
  background: white;
  padding: var(--space-1);
  border-radius: var(--space-1);
  box-shadow: 0 6px 12px rgba(0 ,0,0,0.15);
`;

const PlayerCardReveal = ({ player }) => {
  return (
    <FlipContainer>
      <FlipCard>
        <CardBack>
          <GemsLogo src={gemsLogo} alt="Freshman Gems" />
          <PlayerImage src={player.image} alt={player.name} />
          <PlayerName>{player.name}</PlayerName>
        </CardBack>
      </FlipCard>
    </FlipContainer>
  );
};

export default PlayerCardReveal;
