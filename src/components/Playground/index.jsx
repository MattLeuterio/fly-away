import React, { useState } from 'react';
import { 
  Container,
  Guy,
  Drone,
  DroneBase,
  DronePropellers 
} from './style';

const Playground = () => {
  const [dronePosition, setDronePosition] = useState({left: '50%', top: '20%'});

    let xMouse, yMouse;
    document.addEventListener("mousemove", (event) => {
      xMouse = event.clientX;
      yMouse = event.clientY;
    });

    let x = void 0,
        y = void 0,
        dx = void 0,
        dy = void 0,
        tx = 0,
        ty = 0,
        key = -1;

    const followMouse = () => {
      key = requestAnimationFrame(followMouse);
      
      if(!x || !y) {
        x = xMouse;
        y = yMouse;
      } else {
        dx = (xMouse - x);
        dy = (yMouse - y);
        if(Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xMouse;
            y = yMouse;
        } else {
          x += dx;
          y += dy;
        }
      }
      setDronePosition({left: x + 'px', top: y + 'px'});

      /**************
       * 
       *  PROVA A NON USARE USESTATE
       * 
       * 
       */
    }   

    const returnPosition = () => {
      key = requestAnimationFrame(returnPosition);
      setDronePosition({left: '50%', top: '20%'});
    }

  return (
    <>
      <Container 
        //className="board"
        onMouseEnter={() => followMouse()}
        onMouseLeave={() => returnPosition()}
      >
        <Guy 
          //className="guy"
        ></Guy>
        <Drone
          style={{ top: `${dronePosition?.top}`, left: `${dronePosition?.left}`}}
          //id="ball"
        >
          <DroneBase 
            src="https://i.ibb.co/VVYP85L/base-drone.png"
            alt="base-drone" 
          />
          <DronePropellers 
            src="https://i.ibb.co/dQF3c9t/drone-propellers.png"
            alt="propellers-drone" 
          />
        </Drone>
      </Container>
      <div style={{height: '1900px'}}></div>
    </>
  )
}

export default Playground;