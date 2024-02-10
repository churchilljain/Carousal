import './App.css'
import Courasal from './components/Courasal'
import {slides} from './data/cdata.json'
import Navbar from './components/Navbar'
import UncontrolledExample from '../src/components/C'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* <Courasal data={slides}/> */}
      <UncontrolledExample />
    </div>
  )
}

export default App
