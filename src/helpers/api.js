

export const getDataPaginate = async(categoria, paginate = 5, buscar = '', pageNumber = 1, tenant=1) => {

   switch (categoria) {
    case 'empleados':
    case 'pacientes':
    case 'tratamientos':
    case 'citas':
      const resp = await fetch(urlPaginate(categoria, paginate, buscar, pageNumber, tenant));
      const {data} = await resp.json();
      return data;

    default:
      break;
  }

 
}


export const getCitas = async(categoria) => {


     const resp = await fetch(url(categoria));
     const {data} = await resp.json();
     return data;

  
 }


 
export const urlPaginate=(categoria, paginate, buscar, pageNumber, tenant)=>{
  // console.log('urlPaginate',categoria, paginate, buscar, pageNumber)

  return `http://127.0.0.1:8000/api/${categoria}/filter/paginate/${paginate}/tenant/${tenant}/${buscar}?page=${pageNumber}`;
  // return `http://127.0.0.1:8000/api/${categoria}/limit/5?page=${pageNumber}`;
}

//EN USO TODAVIA PARA LAS PETICIONES DEL CRUD
export const url=(categoria)=>{

  return `http://127.0.0.1:8000/api/${categoria}`;
}

    