import { createContext, useMemo, useState } from 'react';
import { PlayerData, SymbolEnum } from '../types';

const DEFAULT_VALUE = {
  playerData: {
    PlayerOne: { winCount: 0, symbol: SymbolEnum.X },
    PlayerTwo: { winCount: 0, symbol: SymbolEnum.CIRCLE },
  },
  setPlayerData: () => {},
};

interface PlayerDataContextProps {
  playerData: PlayerData;
  setPlayerData: React.Dispatch<React.SetStateAction<PlayerData>>;
}

export const PlayerDataContext = createContext<PlayerDataContextProps>(DEFAULT_VALUE);

export const PlayerDataContextProvider: React.FC<any> = ({ children }) => {
  const [playerData, setPlayerData] = useState<PlayerData>(DEFAULT_VALUE.playerData);

  const providerValue = useMemo(() => ({ playerData, setPlayerData }), [playerData, setPlayerData]);

  return <PlayerDataContext.Provider value={providerValue}>{children}</PlayerDataContext.Provider>;
};
