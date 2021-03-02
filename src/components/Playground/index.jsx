import React, { useEffect, useRef, useState } from "react";

import ReactAudioPlayer from "react-audio-player";
import {
  Container,
  Guy,
  Drone,
  DroneBase,
  DronePropellers,
  AudioMute,
} from "./style";
import droneAudio from "../../ui/assets/audio/drone-sound.mp3";
import { VolumeHighOutline as OpenVolume } from "react-ionicons";
import { VolumeMuteOutline as CloseVolume } from "react-ionicons";

const Playground = () => {
  const droneRef = useRef(null);
  const [audioMuted, setAudioMuted] = useState(false);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - droneRef.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - droneRef.current.clientHeight / 2;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.05;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.05;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      droneRef.current.style.top = `${destinationY}px`;
      droneRef.current.style.left = `${destinationX}px`;
    };

    followMouse();
  }, []);

  return (
    <>
      <Container>
        <Guy></Guy>
        <Drone ref={droneRef}>
          <DroneBase
            src="https://i.ibb.co/VVYP85L/base-drone.png"
            alt="base-drone"
          />
          <DronePropellers
            src="https://i.ibb.co/dQF3c9t/drone-propellers.png"
            alt="propellers-drone"
          />
        </Drone>
        <AudioMute onClick={() => setAudioMuted(!audioMuted)}>
          {!audioMuted ? (
            <OpenVolume color={"#F1F1F1"} height="37px" width="37px" />
          ) : (
            <CloseVolume color={"#F1F1F1"} height="37px" width="37px" />
          )}
        </AudioMute>
      </Container>
      <div style={{ height: "1900px" }}></div>
      <ReactAudioPlayer src={droneAudio} autoPlay loop muted={audioMuted} />
    </>
  );
};

export default Playground;
