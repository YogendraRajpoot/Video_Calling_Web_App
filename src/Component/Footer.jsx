import {
  useAVToggle,
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import { useEffect, useState } from "react";

const Footer = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;
    if (isConnected) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isConnected]);

  return (
    <div className="control-bar">
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? "Mute" : "Unmute"}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
      {isConnected && (
        <button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </button>
      )}
      <div>
        Time {(((time / 60) | 0) / 60) | 0}:{(time / 60) | 0}:{time%60}
      </div>
    </div>
  );
};

export default Footer;
