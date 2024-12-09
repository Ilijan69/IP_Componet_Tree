import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const posts = [
      { id: 1, title: "React Basics", description: "Въведение в React компоненти." },
      { id: 2, title: "Component Tree", description: "Как компонентите създават дървовидна структура." },
      { id: 3, title: "Props and State", description: "Предаване на данни надолу по дървото." }
    ];

    return (
      <div>
        <Header />
        <Main posts={posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
