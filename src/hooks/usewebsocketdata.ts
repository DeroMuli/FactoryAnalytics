import { useEffect, useState } from "react";
import { SOCKET_URL } from "@env";
import { RingBuffer } from "ring-buffer-ts";

type ReceivedData = {
  temp: number;
  speed: number;
};

type GraphData = {
  tempgraph: RingBuffer<number>;
  speedgraph: RingBuffer<number>;
};

type Data = {
  data: ReceivedData;
  graph: GraphData;
};

export default (): Data => {
  const [data, setData] = useState<ReceivedData>({ temp: 0, speed: 0 });
  let ws = new WebSocket(SOCKET_URL);
  const tempgraph = new RingBuffer<number>(5);
  const speedgraph = new RingBuffer<number>(5);
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (event: MessageEvent) => {
      let data = JSON.parse(event.data) as { speed: number; temp: number };
      if (data !== undefined) {
        setData(data);
        tempgraph.add(data.temp);
        speedgraph.add(data.speed);
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
