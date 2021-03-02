import styled from 'styled-components';
import { vibrate, propellers } from './animationDrone';
import theme from '../../ui/theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('https://i.ibb.co/VgJk54K/j-landscape.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  border-radius: 0px 0px 75px 75px;
`;

export const Guy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: url('https://i.ibb.co/xFV7Y2D/j-guy.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: center;
`

export const Drone = styled.div`
  width: 60px;
  z-index: 1;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 20%;
  margin: -50px 0 0 20px;
  pointer-events: none;
	animation: ${vibrate} 1.2s ease-in-out infinite both;
`;
export const DroneBase = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;
  filter: contrast(0.9) blur(0.6px);
`;
export const DronePropellers = styled.img`
  position: absolute;
  top: 18px;
  left: 0;
  filter: contrast(0.9) blur(0.7px);
	animation: ${propellers} 0.01s linear infinite both;
`;

export const AudioMute = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: ${theme.zIndex.absoluteUp};
  justify-content: center;
  align-items: center;
  right: 70px;
  bottom: 70px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.primary.white};
  display: flex;
`;

