// import { Content } from "./components-prueba/Content";
// import { Footer } from "./components-prueba/Footer";
// import { Header } from "./components-prueba/Header";
// import { Menu } from "./components-prueba/Menu";
import {Provider} from 'react-redux' 
import { AppRouter } from './routers/AppRouter'
import {store} from './store/store'
function App() {
  return (
    <>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  
      {/* <Header />
      <Menu />
      <Content />
      <Footer /> */}
    </>
  );
}

export default App;
