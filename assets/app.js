import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Catalogo from './components/catalogo';
import Footer from './components/footer';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Hero />
        <section id="Catalogo">
        <Catalogo />
        </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));