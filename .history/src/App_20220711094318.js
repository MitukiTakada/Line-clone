
import './App.css';
import SignIn from './components/SignIn';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./FIrebase"

function App() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default App;