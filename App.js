import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import Game from "./src/Game/Game";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#1d976c", "#93f9b9"]} style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/strategic-plan.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Tic Tac Toe</Text>
        </View>
        <View style={styles.gameContainer}>
          <Game />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 5,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
