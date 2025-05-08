import React, { useState } from "react";
import styled from "styled-components";
import PackCover from "./PackCover";
import PlayerCardReveal from "./PlayerCardReveal";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import player1cover from "../../images/player1cover.png";
import player2cover from "../../images/player2cover.png";
import player3cover from "../../images/player3cover.png";
import player4cover from "../../images/player4cover.png";

import player1video from "../../videos/player1video.mp4";
import player2video from "../../videos/player2video.mp4";
import player3video from "../../videos/player3video.mp4";
import player4video from "../../videos/player4video.mp4";

import player1img from "../../images/player1.png";
import player2img from "../../images/player2.png";
import player3img from "../../images/player3.png";
import player4img from "../../images/player4.png";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: var(--space-5);
    position: relative;
    flex-direction: column;
`;

const FlashLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.4s;
  z-index: 999;
  pointer-events: none;
`;

const PacksGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  border-radius: var(--space-2);
  cursor: pointer;
  z-index: 2;
`;

const players = [
  {
    name: "Player 1",
    coverImage: player1cover,
    video: player1video,
    image: player1img
  },
  {
    name: "Player 2",
    coverImage: player2cover,
    video: player2video,
    image: player2img
  },
  {
    name: "Player 3",
    coverImage: player3cover,
    video: player3video,
    image: player3img
  },
  {
    name: "Player 4",
    coverImage: player4cover,
    video: player4video,
    image: player4img
  }
];

const PackOpener = () => {
  const { width, height } = useWindowSize();

  const [openedPlayer, setOpenedPlayer] = useState(null);
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [flash, setFlash] = useState(false);
  const [openedPacks, setOpenedPacks] = useState([]);

  const handlePackClick = (player) => {
    if (openedPacks.includes(player.name)) return;

    const audio = new Audio("/sounds/card-flip.m4a");
    audio.play();

    setFlash(true);
    setTimeout(() => setFlash(false), 400);

    setOpenedPlayer(player);
    setOpenedPacks([...openedPacks, player.name]);
  };

  const goBack = () => {
    setOpenedPlayer(null);
  };

  return (
    <Container>
      <FlashLayer show={flash} />
      {openedPlayer && <Confetti width={width} height={height} />}

      {!openedPlayer ? (
        <PacksGrid>
          {players.map((player, index) =>
            openedPacks.includes(player.name) ? (
              <PlayerCardReveal key={index} player={player} />
            ) : (
              <PackCover
                key={index}
                player={player}
                onClick={handlePackClick}
                isDimmed={hoveredPlayer && hoveredPlayer !== player}
                onMouseEnter={() => setHoveredPlayer(player)}
                onMouseLeave={() => setHoveredPlayer(null)}
              />
            )
          )}
        </PacksGrid>
      ) : (
        <>
          <PlayerCardReveal player={openedPlayer} />
          <BackButton onClick={goBack}>Back to Packs</BackButton>
        </>
      )}
    </Container>
  );
};

export default PackOpener;
