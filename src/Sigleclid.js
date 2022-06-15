
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
    {/* <Helmet>
     
     <script 
     src="styles/vendors/perfect-scrollbar/perfect-scrollbar.min.js" 
     type="text/babel" 
     async="true">
     </script>
     
     <script src="styles/js/bootstrap.bundle.min.js" 
     type="text/babel" 
     async="true">
     </script>
     
     {/* <script src="assets/vendors/apexcharts/apexcharts.js" 
     type="text/babel" 
     async="true">
     </script> 
     
     <script src="/styles/js/pages/dashboard.js" 
     type="text/babel" 
     async="true">
     </script>

     <script src="styles/js/main.js" 
     type="text/babel" 
     async="true">
     </script>
    
    </Helmet> */}
</>
  );
}

export default Sigleclid;
