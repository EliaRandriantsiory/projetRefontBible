import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";

import HomePage from "./components/Home";
import {
	BrowserRouter as Router,
	Route,
	Outlet,
	NavLink,
	Routes,
} from "react-router-dom";

import ContactPage from "./components/sectionHomePage/contact";
import HeroSection from "./components/sectionHomePage/Heros";

import AboutSection from "./components/sectionHomePage/about";
import LoginForm from "./components/auth/login";
import RegisterForm from "./components/auth/signInUser";
import HomepageSession from "./pages/sessionPage/homepageSession";
import Home_session from "./pages/sessionPage/pages/homeSession";
import Fampianarana_session from "./pages/sessionPage/pages/fampianarana";
import Baiboly_session from "./pages/sessionPage/pages/baiboly";
import Fihirana_session from "./pages/sessionPage/pages/fihirana";
import BokyComponent from "./pages/sessionPage/components/baiboly/bokycomponent";
import AndininyComponent from "./pages/sessionPage/components/baiboly/andininyComponent";
import TokoComponent from "./pages/sessionPage/components/baiboly/tokoComponents";
import BokyComponents from "./pages/sessionPage/components/printListComponent";
import MizahaBokyComponent from "./pages/sessionPage/components/baiboly/printResultBoky";
import Boky2Component from "./pages/sessionPage/components/baiboly/boky2component";
import Andininy2Component from "./pages/sessionPage/components/baiboly/andininy2Component";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="home" element={<HomePage />} />
					<Route path="/" element={<HomePage />}>
						<Route index element={<HeroSection />} />

						<Route path="contact" element={<ContactPage />} />
						<Route path="login" element={<LoginForm />} />
						<Route path="register" element={<RegisterForm />} />
						<Route path="about" element={<AboutSection />} />

						{/* <Route path="about" element={<AboutPage />} /> */}
					</Route>
					<Route path="/session" element={<HomepageSession />}>
						<Route index element={<Home_session />} />
						<Route path="fampianarana" element={<Fampianarana_session />} />
							{/* <Route path="fampianarana" element={<Baiboly_session />} /> */}
						<Route path="baiboly" element={<Baiboly_session />}>
							<Route index element={<BokyComponent />} />
							<Route path="boky2" element={<Boky2Component />} />
							<Route path="toko" element={<TokoComponent />} />
							<Route path="andininy" element={<AndininyComponent />} />
							<Route path="andininy2" element={<Andininy2Component />} />
							<Route path="result" element={<MizahaBokyComponent />} />
						</Route>
						<Route path="fihirana" element={<Fihirana_session />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
