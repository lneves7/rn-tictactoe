import { useContext, useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { PlayerIdEnum, SymbolEnum } from '../../types';
import { AVATARS, COLORS, SYMBOLS } from '../../constants';
import { PlayerDataContext } from '../../context';

interface BoardProps {
  currentTurn: PlayerIdEnum;
  onEndTurnCallback: () => void;
  onWinCallback: (winner: PlayerIdEnum) => void;
  onPlayAgainCallback: () => void;
  onTieCallback: () => void;
}

const Board: React.FC<BoardProps> = ({
  currentTurn,
  onEndTurnCallback,
  onWinCallback,
  onPlayAgainCallback,
  onTieCallback,
}) => {
  const { playerData } = useContext(PlayerDataContext);
  const [boardData, setBoardData] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [highlightTiles, setHighlightTiles] = useState<number[][]>([]);
  const [winnerData, setWinnerData] = useState<{
    name?: string;
    symbol?: SymbolEnum;
    avatarId?: string;
    winCount: number;
  }>();
  const [winner, setWinner] = useState<PlayerIdEnum>();
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

    const checkLines = (data: number[][]) =>
      data.some((line, lineIndex) => {
        const hasVictory = checkVictory(line);
        if (hasVictory)
          setHighlightTiles([
            [lineIndex, 0],
            [lineIndex, 1],
            [lineIndex, 2],
          ]);
        return hasVictory;
      });

    const checkColumns = (data: number[][]) => {
      for (let idx = 0; idx < 3; idx += 1) {
        if (checkVictory([data[0][idx], data[1][idx], data[2][idx]])) {
          setHighlightTiles([
            [0, idx],
            [1, idx],
            [2, idx],
          ]);
          return true;
        }
      }
      return false;
    };

    const checkDiagonals = (data: number[][]) => {
      if (checkVictory([data[0][0], data[1][1], data[2][2]])) {
        setHighlightTiles([
          [0, 0],
          [1, 1],
          [2, 2],
        ]);
        return true;
      }
      if (checkVictory([data[0][2], data[1][1], data[2][0]])) {
        setHighlightTiles([
          [0, 2],
          [1, 1],
          [2, 0],
        ]);
        return true;
      }
      return false;
    };

    const hasVictory =
      checkLines(boardData) || checkColumns(boardData) || checkDiagonals(boardData);
    if (!hasVictory && boardData.every((line) => line.every((tile) => tile !== 0))) {
      setIsTied(true);
      onTieCallback();
    }
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
    setHighlightTiles([]);
    setWinner(undefined);
    setWinnerData(undefined);
    setIsTied(false);
    onPlayAgainCallback();
  };

  const renderTiles = () =>
    boardData.map((line, lineIndex) =>
      line.map((each, columnIndex) => (
        <Pressable
          style={[
            styles.tile,
            highlightTiles.some(
              (coordinates) => coordinates[0] === lineIndex && coordinates[1] === columnIndex
            ) && styles.tile__highlighted,
          ]}
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
