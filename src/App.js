import Navbar from './components/Navbar/Navbar'
import {useContext} from 'react';
import Main from './components/Home/Main'
import {isAuth} from './Contexts/AuthContext'
function App() {
  const {loginStatus} = useContext(isAuth);

  return (
    <div className="App">
        <Navbar />
        {loginStatus === true ? <Main /> : null}
    </div>
  );
}

export default App;
