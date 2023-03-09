import { useEffect, useState } from "react";
import { SOCKET_URL } from "@env";
import { RingBuffer } from "ring-buffer-ts";

type ReceivedData = {
  temp: number;
  speed: number;
};

type GraphData = {
  tempgraph: Array<{ x: number; y: number }>;
  speedgraph: Array<{ x: number; y: number }>;
};

type Data = {
  data: ReceivedData;
  graph: GraphData;
};

export default (): Data => {
  const [data, setData] = useState<ReceivedData>({ temp: 0, speed: 0 });
  let ws = new WebSocket(SOCKET_URL);
  const temp_ring_buffer = new RingBuffer<number>(10);
  const speed_ring_buffer = new RingBuffer<number>(10);
  const [tempgraph, setTempGraph] = useState<Array<{ x: number; y: number }>>(
    []
  );
  const [speedgraph, setSpeedGraph] = useState<Array<{ x: number; y: number }>>(
    []
  );

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (event: MessageEvent) => {
      let data = JSON.parse(event.data) as { speed: number; temp: number };
      if (data !== undefined) {
        setData(data);
        temp_ring_buffer.add(data.temp);
        let new_tempgraph = temp_ring_buffer.toArray().map((value, index) => {
          return { x: index, y: value };
        });
        setTempGraph(new_tempgraph);
        speed_ring_buffer.add(data.speed);
        let new_speedgraph = speed_ring_buffer.toArray().map((value, index) => {
          return { x: index, y: value };
        });
        setSpeedGraph(new_speedgraph);
      } else {
        console.log("undefined data");
      }
    };
    ws.onerror = (ev: ErrorEvent) => {
      console.log(ev);
    };
    return ws.close();
  }, []);
  return { data, graph: { tempgraph, speedgraph } };
};
