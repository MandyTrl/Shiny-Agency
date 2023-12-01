import { Link } from 'react-router-dom'
import logo from '../assets/shiny-logo.svg'

const Navbar = () => {
	return (
		<header className="flex justify-between max-w-screen-2xl mx-auto mt-7">
			<img src={logo} alt="logo shiny agency" />
			<nav>
				<ul className="flex justify-between items-center">
					<li className="px-3">
						<Link to="/">Accueil</Link>
					</li>
					<li className="px-3">
						<Link to="/profils">Profils</Link>
					</li>
					<li className="pl-3">
						<Link to="/survey">
							<button className="bg-[#5843E4] text-white px-6 py-1 rounded-full cursor-pointer">
								Faire le test
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Navbar
