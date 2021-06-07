import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content">
          <h2 className="dashboard-content__title">LA CANTÁBRICA</h2>
          <p className="dashboard-content__phrase">
            Ofrecemos los mejores, más frescos y seleccionados pescados
            y mariscos, frescos y congelados. Fileteamos todos los productos que vendemos.
          </p>
          <button type="button" className="dashboard-content__button button">ir a la tienda</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
