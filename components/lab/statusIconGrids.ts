import type { PixelGrid } from "./PixelSprite";

const _ = "";

// 1. Gear — 11x11
export const GEAR: PixelGrid = [
  [_, _, _, _, "metal", "metal", "metal", _, _, _, _],
  [_, _, _, _, "metal", "metal", "metal", _, _, _, _],
  [_, _, "metal", "metal", "metal", "metal", "metal", "metal", "metal", _, _],
  [_, "metal", "metal", "metalD", "metalD", "metalD", "metalD", "metalD", "metal", "metal", _],
  ["metal", "metal", "metalD", "metalD", "metalD", "k", "metalD", "metalD", "metalD", "metal", "metal"],
  ["metal", "metal", "metalD", "metalD", "k", "k", "k", "metalD", "metalD", "metal", "metal"],
  ["metal", "metal", "metalD", "metalD", "metalD", "k", "metalD", "metalD", "metalD", "metal", "metal"],
  [_, "metal", "metal", "metalD", "metalD", "metalD", "metalD", "metalD", "metal", "metal", _],
  [_, _, "metal", "metal", "metal", "metal", "metal", "metal", "metal", _, _],
  [_, _, _, _, "metal", "metal", "metal", _, _, _, _],
  [_, _, _, _, "metal", "metal", "metal", _, _, _, _],
];

// 2. Anvil + hammer — 2 frames (hammer up / hammer down + spark)
export const ANVIL_UP: PixelGrid = [
  [_, "brownD", "brownD", _, _, _, _, _, _],
  [_, "brown", "brown", "brownD", _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, "metalD", "metalD", "metalD", _, _, _],
  [_, _, "metal", "metal", "metal", "metal", "metal", _, _],
  [_, _, _, "metalD", "metal", "metalD", _, _, _],
  [_, _, _, "metalD", "metalD", "metalD", _, _, _],
  [_, "k", "k", "k", "k", "k", "k", "k", _],
];
export const ANVIL_DOWN: PixelGrid = [
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _],
  [_, _, _, "brownD", "brownD", _, _, _, _],
  [_, _, _, "brown", "gold", "brownD", _, _, _],
  [_, _, _, "metalD", "metalD", "metalD", _, _, _],
  [_, _, "metal", "metal", "metal", "metal", "metal", _, _],
  [_, _, _, "metalD", "metal", "metalD", _, _, _],
  [_, _, _, "metalD", "metalD", "metalD", _, _, _],
  [_, "k", "k", "k", "k", "k", "k", "k", _],
];

// 3. Hourglass — 2 frames (sand top / sand bottom), rotated via CSS between cycles
export const HOURGLASS_A: PixelGrid = [
  ["metalD", "metalD", "metalD", "metalD", "metalD", "metalD", "metalD"],
  ["metalD", "gold", "gold", "gold", "gold", "gold", "metalD"],
  [_, "metalD", "gold", "gold", "gold", "metalD", _],
  [_, _, "metalD", "gold", "metalD", _, _],
  [_, _, _, "gold", _, _, _],
  [_, _, "metalD", "cream", "metalD", _, _],
  [_, "metalD", "cream", "cream", "cream", "metalD", _],
  ["metalD", "cream", "cream", "cream", "cream", "cream", "metalD"],
  ["metalD", "metalD", "metalD", "metalD", "metalD", "metalD", "metalD"],
];
export const HOURGLASS_B: PixelGrid = [
  ["metalD", "metalD", "metalD", "metalD", "metalD", "metalD", "metalD"],
  ["metalD", "cream", "cream", "cream", "cream", "cream", "metalD"],
  [_, "metalD", "cream", "cream", "cream", "metalD", _],
  [_, _, "metalD", "cream", "metalD", _, _],
  [_, _, _, "gold", _, _, _],
  [_, _, "metalD", "gold", "metalD", _, _],
  [_, "metalD", "gold", "gold", "gold", "metalD", _],
  ["metalD", "gold", "gold", "gold", "gold", "gold", "metalD"],
  ["metalD", "metalD", "metalD", "metalD", "metalD", "metalD", "metalD"],
];

// 4. Terminal cursor — the ">" prompt glyph; the blinking block is a
// separate overlay element rendered by the component.
export const CURSOR_PROMPT: PixelGrid = [
  ["green", _, _, _],
  [_, "green", _, _],
  [_, _, "green", _],
  [_, "green", _, _],
  ["green", _, _, _],
];

// 5. Zzz — handled as text glyphs in component (no grid needed)

// 6. Bell — 9x10
export const BELL: PixelGrid = [
  [_, _, _, "gold", "gold", _, _, _],
  [_, _, "goldD", "gold", "gold", "goldD", _, _],
  [_, "goldD", "gold", "gold", "gold", "gold", "goldD", _],
  [_, "goldD", "gold", "gold", "gold", "gold", "goldD", _],
  ["goldD", "gold", "gold", "gold", "gold", "gold", "gold", "goldD"],
  ["goldD", "goldD", "goldD", "goldD", "goldD", "goldD", "goldD", "goldD"],
  [_, _, _, "gold", "gold", _, _, _],
];

// 7. Coin — single grid, spun via CSS scaleX
export const COIN: PixelGrid = [
  [_, "goldD", "gold", "gold", "gold", "goldD", _],
  ["goldD", "gold", "cream", "gold", "gold", "gold", "goldD"],
  ["gold", "cream", "gold", "gold", "gold", "gold", "gold"],
  ["gold", "gold", "gold", "goldD", "gold", "gold", "gold"],
  ["gold", "gold", "gold", "gold", "gold", "gold", "gold"],
  ["goldD", "gold", "gold", "gold", "gold", "gold", "goldD"],
  [_, "goldD", "gold", "gold", "gold", "goldD", _],
];

// 8. Quest mark "!" — 5x11
export const EXCLAIM: PixelGrid = [
  [_, "orange", "orange", _],
  [_, "orange", "orange", _],
  [_, "orange", "orange", _],
  [_, "orange", "orange", _],
  [_, "orange", "orange", _],
  [_, _, _, _],
  [_, "orange", "orange", _],
];

// 9. Power star — 11x11
export const STAR: PixelGrid = [
  [_, _, _, _, "gold", _, _, _, _],
  [_, _, _, "gold", "gold", "gold", _, _, _],
  [_, _, _, "gold", "gold", "gold", _, _, _],
  ["gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold"],
  [_, "goldD", "gold", "gold", "gold", "gold", "gold", "goldD", _],
  [_, _, "goldD", "gold", "gold", "gold", "goldD", _, _],
  [_, _, "gold", "gold", _, "gold", "gold", _, _],
  [_, "gold", "gold", _, _, _, "gold", "gold", _],
  ["gold", "gold", _, _, _, _, _, "gold", "gold"],
];

// 10. Floppy disk — 10x10
export const FLOPPY: PixelGrid = [
  ["ink", "ink", "ink", "ink", "ink", "ink", "ink", "ink"],
  ["ink", "metalL", "metalL", "metalL", "metalL", "metalL", "white", "ink"],
  ["ink", "metalL", "metalL", "metalL", "metalL", "metalL", "white", "ink"],
  ["ink", "metalD", "metalD", "metalD", "metalD", "metalD", "metalD", "ink"],
  ["ink", "white", "white", "white", "white", "white", "white", "ink"],
  ["ink", "white", "blue", "blue", "blue", "blue", "white", "ink"],
  ["ink", "white", "blue", "blue", "blue", "blue", "white", "ink"],
  ["ink", "white", "white", "white", "white", "white", "white", "ink"],
  ["ink", "ink", "ink", "ink", "ink", "ink", "ink", "ink"],
];

// 11. Level-up arrow — 9x9
export const ARROW_UP: PixelGrid = [
  [_, _, _, _, "green", _, _, _, _],
  [_, _, _, "green", "green", "green", _, _, _],
  [_, _, "green", "green", "green", "green", "green", _, _],
  [_, "green", "green", "green", "green", "green", "green", "green", _],
  [_, _, _, "green", "green", "green", _, _, _],
  [_, _, _, "green", "green", "green", _, _, _],
  [_, _, _, "green", "green", "green", _, _, _],
];

// 12. Pixel heart — 9x8
export const HEART: PixelGrid = [
  [_, "red", "red", _, _, "red", "red", _],
  ["red", "redD", "red", "red", "red", "red", "redD", "red"],
  ["red", "red", "red", "red", "red", "red", "red", "red"],
  [_, "red", "red", "red", "red", "red", "red", _],
  [_, _, "red", "red", "red", "red", _, _],
  [_, _, _, "red", "red", _, _, _],
];

// 13. Radar sweep — ring drawn as a circle outline, sweep line via overlay in component
export const RADAR_RING: PixelGrid = [
  [_, _, "metalD", "metalD", "metalD", "metalD", "metalD", _, _],
  [_, "metalD", _, _, _, _, _, "metalD", _],
  ["metalD", _, _, _, _, _, _, _, "metalD"],
  ["metalD", _, _, _, "green", _, _, _, "metalD"],
  ["metalD", _, _, _, _, _, _, _, "metalD"],
  [_, "metalD", _, _, _, _, _, "metalD", _],
  [_, _, "metalD", "metalD", "metalD", "metalD", "metalD", _, _],
];

// 14. Moon + star — 10x8
export const MOON: PixelGrid = [
  [_, _, "metalL", "metalL", _, _, _, _],
  [_, "metalL", "cream", "cream", "metalL", _, _, "white"],
  ["metalL", "cream", "cream", "cream", _, _, _, _],
  ["metalL", "cream", "cream", "cream", _, _, _, _],
  ["metalL", "cream", "cream", "cream", _, _, _, _],
  [_, "metalL", "cream", "cream", "metalL", _, _, _],
  [_, _, "metalL", "metalL", _, _, _, _],
];

// 15. Bubbling flask — 9x12
export const FLASK: PixelGrid = [
  [_, _, "metalD", "metalD", _, _, _],
  [_, _, "glass", "glass", _, _, _],
  [_, _, "glass", "glass", _, _, _],
  [_, "glass", "glass", "glass", "glass", _, _],
  ["glass", "green", "green", "green", "green", "glass", _],
  ["glass", "green", "green", "green", "green", "green", "glass"],
  ["glass", "green", "white", "green", "green", "green", "glass"],
  ["glass", "glass", "glass", "glass", "glass", "glass", "glass"],
];

// 16. Lightning bolt — 8x11
export const BOLT: PixelGrid = [
  [_, _, "gold", "gold", _],
  [_, "gold", "gold", _, _],
  [_, "gold", "gold", "gold", _],
  ["gold", "gold", "gold", "gold", "gold"],
  [_, _, "gold", "gold", _],
  [_, _, "gold", "gold", _],
  [_, "gold", "gold", _, _],
  ["gold", "gold", _, _, _],
];

// 17. Treasure chest — 2 frames (closed / open)
export const CHEST_CLOSED: PixelGrid = [
  [_, "brownD", "brownD", "brownD", "brownD", "brownD", "brownD", _],
  ["brownD", "brown", "brown", "gold", "brown", "brown", "brown", "brownD"],
  ["brownD", "brown", "brown", "brown", "brown", "brown", "brown", "brownD"],
  ["brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD"],
  ["brownD", "brown", "brown", "gold", "brown", "brown", "brown", "brownD"],
  ["brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD"],
];
export const CHEST_OPEN: PixelGrid = [
  ["brownD", "brownD", _, _, _, _, "brownD", "brownD"],
  ["brown", "brownD", _, _, _, _, "brownD", "brown"],
  [_, _, _, _, _, _, _, _],
  ["brownD", "brown", "brown", "gold", "brown", "brown", "brown", "brownD"],
  ["brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD"],
  ["brownD", "brown", "brown", "brown", "brown", "brown", "brown", "brownD"],
  ["brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD", "brownD"],
];

// 18. Flag on pole — 8x11
export const FLAG: PixelGrid = [
  ["metalD", "green", "green", "green", _],
  ["metalD", "green", "green", "green", "green"],
  ["metalD", "green", "green", "green", _],
  ["metalD", _, _, _, _],
  ["metalD", _, _, _, _],
  ["metalD", _, _, _, _],
  ["metalD", _, _, _, _],
  ["metalD", _, _, _, _],
  ["metalD", "metalD", "metalD", _, _],
];

// 19. "?" Block — 9x9
export const QBLOCK: PixelGrid = [
  ["goldD", "goldD", "goldD", "goldD", "goldD", "goldD", "goldD"],
  ["goldD", "gold", "gold", "gold", "gold", "gold", "goldD"],
  ["goldD", "gold", "cream", "cream", "cream", "gold", "goldD"],
  ["goldD", "gold", "gold", "gold", "cream", "gold", "goldD"],
  ["goldD", "gold", "cream", "gold", "gold", "gold", "goldD"],
  ["goldD", "gold", "gold", "gold", "gold", "gold", "goldD"],
  ["goldD", "gold", "cream", "gold", "gold", "gold", "goldD"],
  ["goldD", "goldD", "goldD", "goldD", "goldD", "goldD", "goldD"],
];

// 20. Sonar ring — small dot, ring drawn via CSS pseudo/overlay in component
export const DOT_CORE: PixelGrid = [
  [_, "green", "green", _],
  ["green", "green", "green", "green"],
  ["green", "green", "green", "green"],
  [_, "green", "green", _],
];

// 21. Sprout — 3 frames (seed / stem / leaves)
export const SPROUT_1: PixelGrid = [
  [_, _, _],
  [_, _, _],
  [_, _, _],
  [_, "brownD", _],
];
export const SPROUT_2: PixelGrid = [
  [_, _, _],
  [_, "green", _],
  [_, "green", _],
  [_, "brownD", _],
];
export const SPROUT_3: PixelGrid = [
  ["green", "green", "green"],
  [_, "green", _],
  [_, "green", _],
  [_, "brownD", _],
];

// 22. Campfire — 2 frames (flicker)
export const FIRE_A: PixelGrid = [
  [_, _, "gold", _, _],
  [_, "orange", "gold", "orange", _],
  ["red", "orange", "gold", "orange", "red"],
  [_, "red", "orange", "red", _],
  ["brownD", "brownD", "brownD", "brownD", "brownD"],
];
export const FIRE_B: PixelGrid = [
  [_, "gold", _, _, _],
  ["orange", "gold", "orange", _, _],
  ["red", "orange", "gold", "orange", "red"],
  [_, "red", "orange", "red", _],
  ["brownD", "brownD", "brownD", "brownD", "brownD"],
];

// 23. Health orb — liquid rises via CSS clip-path animation
export const ORB: PixelGrid = [
  [_, "metalD", "metalD", "metalD", "metalD", "metalD", _],
  ["metalD", "blue", "blue", "blue", "blue", "blue", "metalD"],
  ["metalD", "blue", "white", "blue", "blue", "blue", "metalD"],
  ["metalD", "blue", "blue", "blue", "blue", "blue", "metalD"],
  ["metalD", "blue", "blue", "blue", "blue", "blue", "metalD"],
  [_, "metalD", "metalD", "metalD", "metalD", "metalD", _],
];

// 24. Segmented progress bar — 5 segments, filled count driven by JS
export const SEGMENT_FILLED = "green";
export const SEGMENT_EMPTY = "metalD";
