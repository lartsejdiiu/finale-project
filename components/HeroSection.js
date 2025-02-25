import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const pollResults = [
  { city: "Prishtina", votes: 120000, color: "#e63946", winner: "Perperim Rama", percentage: "55%" },
  { city: "Peja", votes: 90000, color: "#457b9d", winner: "Gazmend Muhaxheri", percentage: "52%" },
  { city: "Gjakova", votes: 75000, color: "#1d3557", winner: "Ardian Gjini", percentage: "48%" },
  { city: "Mitrovica", votes: 85000, color: "#0077b6", winner: "Agim Bahtiri", percentage: "50%" },
  { city: "Ferizaj", votes: 78000, color: "#000", winner: "Agim Aliu", percentage: "49%" },
  { city: "Gjilan", votes: 82000, color: "#6a0572", winner: "Alban Hyseni ", percentage: "51%" }
];

const HeroSection = () => {
  const [showResults, setShowResults] = useState(false);
  const { width, height } = useWindowDimensions(); 

  return (
    <ScrollView 
      style={styles.scrollContainer} 
      contentContainerStyle={styles.contentContainer} 
      showsVerticalScrollIndicator={true}  // Shfaq scrollbar-in vertikal
    >
      <View style={[styles.container, { width, height }]}>
        <View style={styles.chartContainerFull}>
          <Text style={styles.chartTitle}>Zgjedhjet Poll Results</Text>
          <View style={styles.chartStyle}>
            <Bar data={{ labels: ["LVV", "PDK", "LDK", "AAK", "LS", "KPF"], datasets: [{ label: "Votes", data: [339350, 184087, 146241, 62086, 36784, 18785], backgroundColor: ["#e63946", "#457b9d", "#1d3557", "#0077b6", "#000", "#6a0572"], borderRadius: 10 }] }} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'x', plugins: { legend: { display: false } } }} />
          </View>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Zgjedhjet Komunale Poll Results</Text>
          <View style={styles.chartStyle}>
            <Bar data={{ labels: pollResults.map((poll) => poll.city), datasets: [{ label: "Votes", data: pollResults.map((poll) => poll.votes), backgroundColor: pollResults.map((poll) => poll.color), borderRadius: 10 }] }} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (tooltipItem) { const poll = pollResults[tooltipItem.dataIndex]; return `${poll.winner} - ${poll.percentage}`; } } } } }} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowResults(!showResults)}
        >
          <Text style={styles.buttonText}>Election Results</Text>
        </TouchableOpacity>

        {showResults && (
          <View style={styles.rightPanel}>
            {pollResults.map((poll, index) => (
              <View key={index} style={styles.resultBox}>
                <Text style={styles.cityName}>{poll.city}</Text>
                <Text style={styles.winnerName}>{poll.winner}</Text>
                <Text style={styles.percentage}>{poll.percentage}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 1, // Shton hapësirë poshtë për scrolling më të mirë
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f4f4f4",
    paddingTop: 5,
  },
  chartContainerFull: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20,
  },
  chartContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0077b6",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  rightPanel: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  cityName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  winnerName: {
    fontSize: 14,
    color: "#555",
  },
  percentage: {
    fontSize: 14,
    color: "#0077b6",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  chartStyle: {
    height: 300,
    borderRadius: 10,
  },
});

export default HeroSection;
