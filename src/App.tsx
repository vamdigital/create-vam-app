import Header from "components/Header";
import { CounterProvider } from "context/counter/CounterProvider";
import { ContextPage } from "pages/ContextPage";
import { HomePage } from "pages/HomePage";
import { ReduxPage } from "pages/ReduxPage";
import { Route, Switch } from "react-router-dom";
import { Container } from "styles/globalStyles";

function App() {
  return (
		<>
			<Header />
		<Container>
			<Switch>
				<Route path="/" exact><HomePage/></Route>
				<Route path="/context" >
					<CounterProvider>
					<ContextPage/>
					</CounterProvider>
				</Route>
				<Route path="/redux"><ReduxPage /></Route>
			</Switch>
		</Container>
		</>
  );
}

export default App;
