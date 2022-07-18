import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import VehicleCard from '../Components/VehicleCard.jsx'

const estiloCard = {
    width: "100%"
}

const Vehicles = ({identificador3, setIdentificador3}) => {
    const { store, actions } = useContext(Context);
    return (
        <>
        <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            actions.getVehiculos(store?.vehiculos.previous);
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            actions.getVehiculos(store?.vehiculos.next);
          }}
        >
          Next
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {
              !!store.vehiculos &&
              store.vehiculos.results.length > 0 &&
              store.vehiculos.results.map((item, i) => (
                <VehicleCard {...item} key={item.name} index={i} identificador3={identificador3} setIdentificador3={setIdentificador3}/>
              ))
            }
          </div>
        </div>
      </div>
      </>
    );
};

export default Vehicles;
 