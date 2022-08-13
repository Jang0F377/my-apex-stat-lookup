import { ResRealtimeObject } from "../typings";
import { useState } from "react";

interface RealtimeProps {
  realtime?: ResRealtimeObject;
}

function Realtime({ realtime }: RealtimeProps) {
  const [online, setOnline] = useState(realtime?.isOnline);
  const [inGame, setInGame] = useState(realtime?.isInGame);
  const [canJoin, setCanJoin] = useState(realtime?.canJoin);
  const [lobbyState, setLobbyState] = useState(realtime?.lobbyState);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex justify-center mx-auto flex-row space-x-2.5">
        {online ? (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-green-500">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Online
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-bright-light-red">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-bright-light-red"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Offline
          </span>
        )}
        {inGame ? (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-green-500">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Is in a game
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-bright-light-red">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-bright-light-red"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Not in a game
          </span>
        )}
        {lobbyState === "open" ? (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-green-500">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Player&apos;s lobby open when online
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-project-silver text-bright-light-red">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-bright-light-red"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Player&apos;s lobby closed when online
          </span>
        )}
      </div>
    </div>
  );
}

export default Realtime;
