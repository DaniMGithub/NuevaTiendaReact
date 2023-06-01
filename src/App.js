import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {  
  return (
    <Container className="App">
      <header className="App-header">
        
      <Row>
      <Col xs={3}> <img src={logo} className="App-logo" alt="logo" /></Col>
      <Col xs={3}><img src={logo} className="App-logo" alt="logo" /></Col>
      <Col xs={3}><img src={logo} className="App-logo" alt="logo" /></Col>     
       
      </Row>
        <p>
          Edita el codigo <code>src/App.js</code> y guarda lo editado.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
    </Container>
  
  );
}


export default App;
