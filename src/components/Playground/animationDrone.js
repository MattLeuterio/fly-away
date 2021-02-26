import { keyframes } from 'styled-components';

export const vibrate = keyframes`
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`;

export const propellers = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
  80% {
    -webkit-transform: translateX(2px);
            transform: translateX(2px);
  }
  90% {
    -webkit-transform: translateX(-2px);
            transform: translateX(-2px);
  }
`;