import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Bar } from "react-chartjs-2"; // Chart.js for React
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { width, height } = Dimensions.get("window"); // Get screen dimensions

const HeroSection = () => {
  const data = {
    labels: ["LVV", "PDK", "LDK", "AAK", "LS", "KPF"],
    datasets: [
      {
        label: "Votes",
        data: [339350, 184087, 146241, 62086, 36784, 18785],
        backgroundColor: [
          "#e63946",
          "#457b9d",
          "#1d3557",
          "#0077b6",
          "#000",
          "#6a0572",
        ],
        borderRadius: 10,
        hoverBackgroundColor: [
          "#e63946", // Same as backgroundColor
          "#457b9d",
          "#1d3557",
          "#0077b6",
          "#000",
          "#6a0572",
        ], // Match hover color to original color
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to scale properly
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 14 }, // Smaller tooltip font
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#333", // Darker text for better visibility
          font: { size: 12 }, // Smaller font size for ticks
        },
      },
      y: {
        ticks: {
          color: "#333",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: "https://source.unsplash.com/featured/?news" }}
          style={styles.heroImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.heroTitle}>
            <Text style={{ color: "#FFD700", fontSize: 18 }}>Zgjedhjet në Kosovë</Text> -
            <Text style={{ fontSize: 16, fontStyle: "italic" }}> Latest Polls</Text>
          </Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Poll Results</Text>
        <View style={styles.chartStyle}>
          <Bar data={data} options={options} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the top
    backgroundColor: "#f4f4f4",
    width: width,
    height: height,
    paddingTop: 20, // Add some padding at the top
  },
  heroContainer: {
    position: "relative",
    width: "100%",
    marginBottom: 20, // Add margin to separate from the chart
  },
  heroImage: {
    width: "100%",
    height: 150, // Reduced height for the hero image
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 0, // Position overlay at the bottom of the image
    left: 80,
    right: 80,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  heroTitle: {
    fontSize: 16, // Smaller font size
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  chartContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15, // Reduced padding
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  chartTitle: {
    fontSize: 18, // Smaller font size
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  chartStyle: {
    height: 300, // Fixed height for the chart
    borderRadius: 10,
  },
});

export default HeroSection;