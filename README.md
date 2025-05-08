# 🏀 NBA Top Shot — Pack Opening Experience Prototype

**By:** Chuck Howard  
**Submission for:** *Dapper Labs Frontend Engineering Exercise*

---

## 🎯 Overview

This prototype demonstrates a reimagined **Pack Opening experience** for NBA Top Shot.  
It aims to deliver an exciting, visually engaging, and user-centric flow that reflects the delight and anticipation of collectible pack openings.

Built with:

- **React**
- **Styled-components**
- **Phosphor-react icons**
- **react-confetti**

---

## 🔥 Key Features

✅ **Cover → Play → Reveal Flow**  
Users hover to reveal a **Play Video** button. Upon clicking, the pack video plays **with audio**, enhancing the anticipation. An **Open Pack** button then appears to reveal the player.

✅ **Dynamic Flip Animation**  
Once opened, the card flips dynamically and stays revealed even after returning to the main pack selection screen.

✅ **Confetti Celebration**  
A confetti animation plays continuously while the player card is shown, creating a rewarding visual moment.

✅ **Sound Effects**  
Audio is incorporated into both video playback and card reveal to amplify engagement (browser autoplay restrictions respected).

✅ **Responsive Design**  
The interface scales gracefully for mobile and desktop screen sizes.

✅ **Clean, Modern UI**  
All visual elements (backgrounds, card designs, and iconography) were selected to be consistent with NBA Top Shot’s style, with thoughtful animations and transitions.

---

## 🗂 Folder Structure

```plaintext
src/
  components/
    PackCover.jsx
    PlayerCardReveal.jsx
    PackOpener.jsx
  images/
    player1.png
    player2.png
    ...
  videos/
    player1video.mp4
    ...
public/
  sounds/
    card-flip.m4a
