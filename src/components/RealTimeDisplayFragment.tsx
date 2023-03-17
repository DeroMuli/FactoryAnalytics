import React, { useEffect, useState, useRef, useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { useSocket } from "../context/MockSocketContext";

const RealTimeDisplayFragment = () => {
  useEffect(() => {
    console.log("RealTimeDisplayFragment mounted");
  }, []);
  const real_time_data = useSocket();
  let temp = real_time_data.data.temp;
  let speed = real_time_data.data.speed;
  return (
    <>
      <Text style={styles.datatext}> {temp}° C</Text>
      <Text style={styles.datatext}> {speed} m/s </Text>
    </>
  );
};

const styles = StyleSheet.create({
  datatext: {
    margin: 5,
    fontSize: 15,
  },
});

export default RealTimeDisplayFragment;
