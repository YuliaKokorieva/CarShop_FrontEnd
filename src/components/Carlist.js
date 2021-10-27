import React, {useState, useEffect, useRef} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Addcar from './Addcar';
import DeleteButtonRenderer from './DeleteButtonRenderer';
import EditButtonRenderer from './EditButtonRenderer';

function Carlist() {
  const [cars, setCars] = useState([]);

  const gridRef = useRef();

  useEffect(()=> fetchData(), []);
  
  const fetchData =() => {
    fetch('https://carstockrest.herokuapp.com/cars')
      .then(response => response.json())
      .then(data => setCars(data._embedded.cars))
      .catch(err=> console.log(err))
      }

  const deleteCar = (link) => {
    if (window.confirm('Are you sure?')) {
      fetch(link, {method: 'DELETE'})
      .then(_ => fetchData())
      .catch(err => console.error(err))
    }
  }   
  const saveCar=(car)=> {
    fetch('https://carstockrest.herokuapp.com/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res=> fetchData())
    .catch(err=>console.error(err))
  }

  const updateCar=(car, link) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(res=> fetchData())
    .catch(err=>console.error(err))
  }

  const columns = [
    {field: 'brand', sortable: true, filter: true, maxWidth: 120},
    {field: 'model', sortable: true, filter: true, maxWidth: 120},
    {field: 'color', sortable: true, filter: true, maxWidth: 120},
    {field: 'fuel', sortable: true, filter: true, maxWidth: 120},
    {field: 'year', sortable: true, filter: true, maxWidth: 120},
    {field: 'price', sortable: true, filter: true, maxWidth: 120},
    {field: '_links.self.href', sortable: false, filter: false, 
      cellRenderer: "editButtonRenderer",
      cellRendererParams: {
        updateCar: updateCar,
      }
    },
    {field: '_links.self.href', sortable: false, filter: false, 
      cellRenderer: "deleteButtonRenderer", 
      cellRendererParams: {
        deleteCar: deleteCar
      },
      maxWidth: 160
    },
  ]

  return (
    <div style={{marginTop: 20, marginBottom: 20 }}>
        <Addcar saveCar={saveCar} />


      <div className="ag-theme-material" style={{margitTop: 20, height: 600, width: '90%', margin: 'auto'}}>
        <AgGridReact
          frameworkComponents={{
            deleteButtonRenderer: DeleteButtonRenderer,
            editButtonRenderer: EditButtonRenderer,
          }}
          ref={gridRef}
          onGridReady={params => gridRef.current=params.api}
          rowSelection="single"
          rowData={cars}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      
    </div>
  )
}

export default Carlist;