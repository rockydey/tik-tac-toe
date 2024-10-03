import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <TouchableOpacity
              key={cellIndex}
              style={styles.cell}
              onPress={() => onPress(rowIndex, cellIndex)}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 75,
    height: 75,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 36,
  },
});
