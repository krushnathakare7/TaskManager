
import './App.css';
import { Container } from '@mui/material';
import {Nav} from './components/AppBar'
import { TaskManager } from './components/TaskManager';


function App() {


  return (
    <div >

     <Nav/>
     <Container maxWidth= "lg">
      <TaskManager />
     </Container>
   
      
    </div>
  );
}

export default App;
