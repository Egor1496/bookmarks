import { Routes, Route } from "react-router-dom";

import "./styles/App.sass";

import {
	Error, Main,
	UIKit, Demo,
	Layout
} from "../pages";

// Маршрутизация с использованием on gh-pages плохо работает с BrowserRouter or ReactRouter, вместо этого используйте HashRouter из react-router-dom.

function App() {
  return (
    <>
      <div>
			<Routes>
				<Route path="/bookmarks/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="/bookmarks/demo" element={<Demo />} />
					<Route path="/bookmarks/ui" element={<UIKit />} />
					<Route path="/bookmarks/*" element={<Error />} />
				</Route>
			</Routes>
		</div>
    </>
  );
}

export default App;
