import { SymbolEnum } from "./SymbolEnum";

export interface PlayerData {
    PlayerOne: {
        name?: string;
        symbol?: SymbolEnum;
        avatarId?: string;
        winCount: number;
    },
    PlayerTwo: {
        name?: string;
        symbol?: SymbolEnum;
        avatarId?: string;
        winCount: number;
    },
}