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
		<main className="mt-[100px] h-[100%] text-gray-400 bg-gray-900 grow-0 body-font">
			<HomeTab />
	  	</main>
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
