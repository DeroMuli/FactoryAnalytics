import React, { useEffect, useState, useRef, useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { useMockSocket } from "../context/MockSocketContext";
import { useTestSocket } from "../context/TestSocketContext";

const RealTimeDisplayFragment = (props: { mock: boolean }) => {
  useEffect(() => {
    console.log("RealTimeDisplayFragment mounted");
  }, []);
  const real_time_data = props.mock ? useMockSocket() : useTestSocket();
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
