import React, { useState } from 'react';
import style from './App.module.css';
import Sidenav from './Components/sidenav';
import Middle from './Components/middle';
import Rightside from './Components/Rightside';
import Auth from './pages/auth';

function App() {
  const [value, setvalue] = useState("Chats")
  const navpage = (data) => {
    setvalue(data)
  }
  return (
    <div className={style.home_container}>
      <Sidenav setActivePage={navpage} />
      <Middle middlepage={value} />
      <Rightside page="chat" />
      {/* <Auth/> */}
    </div>
  );
}

export default App;