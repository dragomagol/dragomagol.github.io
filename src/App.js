import logo from './logo.svg';
import './App.css';
import React from "react";
import TabBar from "./components/TabBar";
import URLBar from "./components/URLBar";
import Toolbar from "./components/Toolbar";
import HomeTab from "./components/HomeTab";
import SkillsTab from "./components/SkillsTab";
import HistoryTab from "./components/HistoryTab";
import ProjectsTab from "./components/ProjectsTab";
import ContactTab from "./components/ContactTab";

function App() {
  return (
	<div className="App">
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
		}}>
			<TabBar />
			<URLBar />
		</div>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
				Learn React
			</a>
	  	</header>
		  <div style={{
			position: 'fixed',
			bottom: 0,
			left: 0,
			right: 0,
		}}>
			<Toolbar />
		</div>
	</div>
  );
}

export default App;
