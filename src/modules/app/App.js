import { MainLayout } from "./components/MainLayout/MainLayout";
import { AppContainer } from "./containers/AppContainer";


const App = (props) => {
  return <AppContainer {...props}>
          {({isLoading}) => {
            return isLoading ? <div>Loading...</div> : <MainLayout/>;
          }}
        </AppContainer>
}

export default App;
