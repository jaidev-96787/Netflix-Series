import React, { Component } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/in/title/80990668?source=35"
      />
      <Card
        imgsrc="https://www.koimoi.com/wp-content/new-galleries/2022/10/hombale-films-kantara-sees-a-huge-jump-in-the-box-office-on-monday-due-to-a-drop-in-ticket-prices-001.jpg"
        title="Netflix Original Series"
        sname="KANTARA"
        link="https://www.netflix.com/in/title/81656709"
      />
    </div>
  );
}

export default App;
