import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Survey from './pages/Survey'
import Navbar from './components/Navbar'
import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/survey" element={<Survey />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
