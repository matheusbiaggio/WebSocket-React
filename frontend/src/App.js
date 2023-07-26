import './App.css';
import useWebSocket from 'react-use-websocket';
import { useState } from 'react';

function App() {

  const [temperature, setTemperature] = useState(0);

  const { lastJsonMessage } = useWebSocket('ws://localhost:3001', {
    onOpen: () => console.log(`Connected com o App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        setTemperature(lastJsonMessage.temperature);
      }
    },
    queryParams: { 'topic': 'temperature' },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  return (
    <div>
      <h1>WebSockt com Node.js e React</h1>
      <span>{`Temperatura: ${temperature}`}</span>
    </div>
  );
}

export default App;