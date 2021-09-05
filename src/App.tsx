import Header from "components/Header";
import { SideBar } from "components/Sidebar";
import { CounterProvider } from "context/counter/CounterProvider";
import { ContextPage } from "pages/ContextPage";
import { HomePage } from "pages/HomePage";
import { ReduxPage } from "pages/ReduxPage";
import { Route, Switch } from "react-router-dom";
import { Container, Main } from "styles/globalStyles";

function App() {
  return (
		<>
			<Header />
			<Container>
				<CounterProvider>
				<Main>
				<SideBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/context" component={ContextPage} />
					<Route path="/redux" component={ReduxPage} />
				</Switch>
				</Main>

				</CounterProvider>
			</Container>
		</>
  );
}

export default App;
