import './App.css';
import { BrowserRouter, Route , Routes, useParams} from 'react-router-dom';
import LobbyPage from "../src/components/LobbyPage/LobbyPage"
import OneCodePage from '../src/components/OneCodePage/OneCodePage';

function App() {
  const roomIdParams = useParams()
  console.log(roomIdParams)

  return (
		<BrowserRouter>
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="/oneCodePage/:id" element={<OneCodePage roomCodeId={roomIdParams} />} />
      </Routes>
		</BrowserRouter>
  );
}

export default App;