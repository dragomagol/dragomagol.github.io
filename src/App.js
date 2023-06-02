import './App.css';
import React from "react";
import TabBar from "./components/TabBar";
import URLBar from "./components/URLBar";
import Toolbar from "./components/Toolbar";

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
