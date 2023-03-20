import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { RingBuffer } from "ring-buffer-ts";

type ReceivedData = {
  temp: number;
  speed: number;
};

type GraphData = {
  tempgraph: Array<{ x: number; y: number }>;
  speedgraph: Array<{ x: number; y: number }>;
};

type WebsocketMessageSchema = {
  action: string;
  payload: string;
};

type Data = {
  data: ReceivedData;
  graph: GraphData;
  sendmessage: (message: WebsocketMessageSchema) => void;
};

export default (url: string): Data => {
  const ws = new WebSocket(url);
  const [data, setData] = useState<ReceivedData>({ temp: 0, speed: 0 });
  const temp_ring_buffer = useRef<RingBuffer<number>>(new RingBuffer(10));
  const speed_ring_buffer = useRef<RingBuffer<number>>(new RingBuffer(10));
  const [tempgraph, setTempGraph] = useState<Array<{ x: number; y: number }>>(
    []
  );
  const [speedgraph, setSpeedGraph] = useState<Array<{ x: number; y: number }>>(
    []
  );

  const onMessageCallback = useCallback((event: MessageEvent) => {
    let data = JSON.parse(event.data) as { speed: number; temp: number };
    if (data !== undefined) {
      setData(data);
      temp_ring_buffer.current.add(data.temp);
      let new_tempgraph = temp_ring_buffer.current
        .toArray()
        .map((value, index) => {
          return { x: index, y: value };
        });
      setTempGraph(new_tempgraph);
      speed_ring_buffer.current.add(data.speed);
      let new_speedgraph = speed_ring_buffer.current
        .toArray()
        .map((value, index) => {
          return { x: index, y: value };
        });
      setSpeedGraph(new_speedgraph);
    } else {
      console.log("undefined data");
    }
  }, []);

  useLayoutEffect(() => {
    ws.onopen = () => {
      console.log("connected");
      ws.send(JSON.stringify({ type: "subscribe" }));
    };
    ws.onmessage = onMessageCallback;
    ws.onerror = (ev: ErrorEvent) => {
      console.log(ev);
    };
    return () => {
      ws.close();
    };
  }, [onMessageCallback]);

  const sendmessage = (message: WebsocketMessageSchema) => {
    console.log(message);
    try {
      const json_message = JSON.stringify(message);
      ws.send(json_message);
    } catch (e) {
      //add a logger
      console.log(e);
    }
  };

  return { data, graph: { tempgraph, speedgraph }, sendmessage };
};
