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
		<main className="mt-[100px] h-[100%] text-gray-400 bg-blue-950 body-font absolute">
			{/* <HomeTab /> */}
            <HistoryTab />
	  	</main>
        <div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
		}}>
			<TabBar />
			<URLBar />
		</div>
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
