import React from 'react';
import style from './App.module.css';
import Sidenav from './Components/sidenav';
import Listchat from './Components/Listchat';
import Rightside from './Components/Rightside';

function App() {
  return (
    <div className={style.home_container}>
      <Sidenav />
      <Listchat />
      <Rightside page="chat" /> {/* You can pass "chat" here later to test views */}
    </div>
  );
}

export default App;