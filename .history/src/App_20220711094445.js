
import './App.css';
import SignIn from './components/SignIn';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./Firebase"

function App() {
  const user = useAuthState(auth);
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default App;
