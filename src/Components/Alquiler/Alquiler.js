import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import '../Products/Products.css'

const Alquiler = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db, 'alquiler');

    getDocs(itemCollections).then((snapshotList) => {
      const docs = snapshotList.docs.map(snapshot => ({
        id: snapshot.id, ...snapshot.data(),
      }));
      setItems(docs);
    })
  }, [])

  return (
    <div>
      {items.map((item) => (
        <div className="card mb-3 w-75 mx-auto">
          <div className="row g-0">
            <div className="col-md-4">
              <div id={`carouselExampleRide-${item.id}`} className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={ item.image } className="d-block w-100" alt="Casa en venta" />
                  </div>
                  <div className="carousel-item">
                    <img src={ item.image1 } className="d-block w-100" alt="Casa en venta" />
                  </div>
                  <div className="carousel-item">
                    <img src={ item.image2 } className="d-block w-100" alt="Casa en venta" />
                  </div>
                  <div className="carousel-item">
                    <img src={ item.image3 } className="d-block w-100" alt="Casa en venta" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleRide-${item.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleRide-${item.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <img src={ item.image } className="max-width:100% " alt="Casa en venta" /> */}
              <button type="button" className="btn btn-primary mt-1">Consultar por e-mail</button>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Descripción de la propiedad: {item.description}</h5>
                <p className="card-text">Dirección: {item.adress}</p>
                <p className="card-text">Antigüedad: {item.anos}</p>
                <p className="card-text">Vendedor: {item.nameVendedor}</p>
                <p className="card-text">Contacto: {item.phoneVendedor}</p>
                <p className="card-text">E-mail: {item.emailVendedor}</p>
                <p className="card-text">Precio: {item.precio}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alquiler