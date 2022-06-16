
import React from 'react'
import {Provider} from 'react-redux' 
import {store} from './store/store'
import './App.css';

import { AppRouter } from './routers/AppRouter';


function Sigleclid() {

  


  return (
  <>
     <Provider store={store}>
    <AppRouter />
     </Provider>
   
</>
  );
}

export default Sigleclid;
