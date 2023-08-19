import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { PlayerIdEnum, PlayerData, SymbolEnum } from '../../types';
import { AVATARS, COLORS, SYMBOLS } from '../../constants';

interface BoardProps {
  currentTurn: PlayerIdEnum;
  playerData: PlayerData;
  onEndTurnCallback: () => void;
  onWinCallback: (winner: PlayerIdEnum) => void;
  onPlayAgainCallback: () => void;
  onTieCallback: () => void;
}

const Board: React.FC<BoardProps> = ({
  currentTurn,
  playerData,
  onEndTurnCallback,
  onWinCallback,
  onPlayAgainCallback,
  onTieCallback,
}) => {
  const [boardData, setBoardData] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [winner, setWinner] = useState<PlayerIdEnum>();
  const [winnerData, setWinnerData] = useState<{
    name?: string;
    symbol?: SymbolEnum;
    avatarId?: string;
    winCount: number;
  }>();
  const [isTied, setIsTied] = useState<boolean>(false);

  useEffect(() => {
    const checkVictory = (arr: number[]) => {
      const sum = arr.reduce((prev, acc) => prev + acc, 0);
      if (sum === 15) {
        setWinner(PlayerIdEnum.PLAYER_ONE);
        setWinnerData(playerData.PlayerOne);
      }
      if (sum === 21) {
        setWinner(PlayerIdEnum.PLAYER_TWO);
        setWinnerData(playerData.PlayerTwo);
      }
      return sum === 15 || sum === 21;
    };

    const checkLines = (data: number[][]) => {
      data.some((line) => checkVictory(line));
    };

    const checkColumns = (data: number[][]) => {
      for (let idx = 0; idx < 3; idx += 1) {
        if (checkVictory([data[0][idx], data[1][idx], data[2][idx]])) break;
      }
    };

    const checkDiagonals = (data: number[][]) => {
      if (
        checkVictory([data[0][0], data[1][1], data[2][2]]) ||
        checkVictory([data[0][2], data[1][1], data[2][0]])
      ) {
        return false;
      }
      return true;
    };

    if (boardData.every((line) => line.every((tile) => tile !== 0))) {
      setIsTied(true);
      onTieCallback();
      return;
    }
    checkLines(boardData);
    checkColumns(boardData);
    checkDiagonals(boardData);
  }, [boardData]);

  useEffect(() => {
    if (winner) {
      onWinCallback(winner);
    }
  }, [winner]);

  const handleTilePress = (lineIndex: number, columnIndex: number) => {
    if (winner || isTied || boardData[lineIndex][columnIndex] !== 0) return;
    const valueToSet = currentTurn === PlayerIdEnum.PLAYER_ONE ? 5 : 7;
    setBoardData((prevBoardData) => {
      const cloneBoard = [...prevBoardData];
      cloneBoard[lineIndex][columnIndex] = valueToSet;
      return cloneBoard;
    });
    onEndTurnCallback();
  };

  const handlePlayAgainPress = () => {
    setBoardData([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setWinner(undefined);
    setWinnerData(undefined);
    setIsTied(false);
    onPlayAgainCallback();
  };

  const renderTiles = () =>
    boardData.map((line, lineIndex) =>
      line.map((each, columnIndex) => (
        <Pressable
          style={styles.tile}
          key={`tile-${lineIndex}-${columnIndex}`}
          android_ripple={{ color: COLORS.lightblue }}
          onPress={() => handleTilePress(lineIndex, columnIndex)}
        >
          {each === 5 && <Image style={styles.tileImage} source={SYMBOLS.x} />}
          {each === 7 && <Image style={styles.tileImage} source={SYMBOLS.circle} />}
        </Pressable>
      ))
    );

  return (
    <View style={[styles.wrapper, (winner || isTied) && styles.wrapper__full]}>
      <View style={[styles.board, (winner || isTied) && styles.board__withFeedback]}>
        {renderTiles()}
      </View>
      {(winnerData || isTied) && (
        <View style={styles.feedback}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
            }}
          >
            {winnerData && (
              <>
                <Image style={styles.feedbackAvatar} source={AVATARS[winnerData.avatarId || '']} />
                <Text style={styles.feedbackText}>{winnerData.name} wins!</Text>
              </>
            )}
            {isTied && <Text style={styles.feedbackText}>Game tied!</Text>}
          </View>
          <Pressable style={styles.feedbackButton} onPress={() => handlePlayAgainPress()}>
            <Text style={styles.feedbackButtonText}>Play again</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Board;
