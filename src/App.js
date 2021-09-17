import './App.css';
import { LandingPage } from './components/LandingPage';
import SignIn from './components/signIn';
import SignUp from './components/signUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage/>
        <SignIn/>
        <SignUp/>
      </header>
    </div>
  );
}

export default App;