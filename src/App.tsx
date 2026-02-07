import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import DashboardLayout from "./layouts/dashboard-layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<DashboardLayout>
							<Landing />
						</DashboardLayout>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
