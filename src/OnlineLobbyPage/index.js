import React from "react";
import intl from "react-intl-universal";
import { Game } from "territories-core";
import { Lobby } from "boardgame.io/react";

import OnlineLobby from "../OnlineLobby";
import UI from "../UI";

const OnlineLobbyPage = () => (
  <Lobby
    gameServer={process.env.REACT_APP_API_URL}
    lobbyServer={process.env.REACT_APP_API_URL}
    gameComponents={[
      {
        game: Game,
        board: UI,
        loading: () => <div>{intl.get("online.connecting")}</div>
      }
    ]}
    renderer={({
      errorMsg,
      gameComponents,
      gameInstances,
      phase,
      playerName,
      runningGame,
      handleEnterLobby,
      handleExitLobby,
      handleCreateRoom,
      handleJoinRoom,
      handleLeaveRoom,
      handleExitRoom,
      handleRefreshRooms,
      handleStartGame
    }) => (
      <OnlineLobby
        errorMsg={errorMsg}
        gameComponents={gameComponents}
        gameInstances={gameInstances}
        phase={phase}
        playerName={playerName}
        runningGame={runningGame}
        onEnterLobby={handleEnterLobby}
        onExitLobby={handleExitLobby}
        onCreateRoom={handleCreateRoom}
        onJoinRoom={handleJoinRoom}
        onLeaveRoom={handleLeaveRoom}
        onExitRoom={handleExitRoom}
        onRefreshRooms={handleRefreshRooms}
        onStartGame={handleStartGame}
      />
    )}
  />
);

export default OnlineLobbyPage;
