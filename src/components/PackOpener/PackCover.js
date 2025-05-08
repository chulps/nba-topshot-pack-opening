import React, { useRef, useState } from "react";
import styled from "styled-components";
import backgroundImage from "../../images/background.png";
import { Play } from "phosphor-react";

const CoverContainer = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, filter 0.3s, z-index 0.3s;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 260px;
  }
`;

const CoverBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5) blur(1px);
`;

const CoverImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s;
`;

const CoverVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const Button = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - var(--space-2));
  bottom: var(--space-1);
`;




const PackCover = ({ player, onClick, isDimmed }) => {
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handlePlayVideo = (e) => {
    e.stopPropagation();
    setVideoPlaying(true);
    videoRef.current?.play();
  };

  const handleOpenPack = (e) => {
    e.stopPropagation();
    videoRef.current?.pause();
    onClick(player);
  };

  return (
    <CoverContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: isDimmed ? "blur(2px) brightness(0.7)" : "none",
        transform: isDimmed ? "scale(0.95)" : undefined
      }}
    >
      <CoverBackground />
      <CoverImage src={player.coverImage} alt={`${player.name} Cover`} visible={!videoPlaying} />
      <CoverVideo
        ref={videoRef}
        src={player.video}
        visible={videoPlaying}
        controls={false}
        muted={false}
      />
      {!videoPlaying && (
        <Button visible={hovering} onClick={handlePlayVideo}>
          <Play size={24} weight="fill" />
        </Button>
      )}
      {videoPlaying && (
        <Button visible={true} onClick={handleOpenPack}>
          Open Pack
        </Button>
      )}
    </CoverContainer>
  );
};

export default PackCover;
