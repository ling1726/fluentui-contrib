import { playAnim } from './anims/play';
import { hasMozElement, hasWebkitCanvas } from '../../util/featureDetect';
import { appendWrapper } from './util/wrapper';
import {
  appendCanvas,
  createDataUrlContext,
  createMozContext,
} from './util/canvas';
import type {
  FallbackAnimationParams,
  FallbackAnimationReturn,
  FallbackAnimationState,
  PaintWorkletBase,
} from '../../types';

const cannotDraw = {
  id: '',
  canvas: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  play: () => {},
};

let flairFallbackId = 0;

export const fallbackPaintAnimation = (
  target: HTMLElement,
  paintWorklet: PaintWorkletBase,
  animationParams: FallbackAnimationParams
): FallbackAnimationReturn => {
  const state: FallbackAnimationState = {
    target,
    ctx: null,
    mode: 'to-data-url',
    id: `houdini-fallback-${++flairFallbackId}`,
    wrapper: null,
  };

  // Non-Houdini fallbacks require a canvas element be present in the DOM.
  // Create a wrapper for us to store these elements in so we avoid
  // thrashing the DOM with appends.
  if (!state.wrapper) {
    state.wrapper = appendWrapper(document.body);
  }

  if (hasMozElement()) {
    const ctx = createMozContext(state.id);
    if (!ctx) {
      return cannotDraw;
    }

    state.ctx = ctx;
    state.mode = 'moz-element';
    appendCanvas(state.wrapper as HTMLElement, state.ctx.canvas);
  } else if (hasWebkitCanvas()) {
    state.mode = 'webkit-canvas';
    // We need to get a new context for every draw to account for potential
    // size changes. We're just doing a null check here so we won't absorb
    // the overhead of a null check for every render tick.
  } else {
    const ctx = createDataUrlContext(state.id);
    if (!ctx) {
      return cannotDraw;
    }

    state.ctx = ctx;
    state.mode = 'to-data-url';
    appendCanvas(state.wrapper as HTMLElement, state.ctx.canvas);
  }

  const play = playAnim(state, paintWorklet, animationParams);

  return {
    id: state.id,
    canvas: state.ctx?.canvas ?? null,
    play,
  };
};
