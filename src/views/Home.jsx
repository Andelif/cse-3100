import { useEffect, useState } from 'react';
import './Home.css';
import SphynxImage from '../cats/Sphynx.jpg';
import PeterbaldImage from '../cats/Peterbald.jpg';
import AbyssinianImage from '../cats/Abyssinian.jpg';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian', image: SphynxImage },
  { name: 'Mittens', age: '2', breed: 'Bengal', image: PeterbaldImage },
  { name: 'Shadow', age: '1', breed: 'Sphynx', image: AbyssinianImage },
];

export default function Home() {
 
  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" id="cats-container"></div>
        <div className="mt-2 row g-4" id="cats-container">
          {featuredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info-home">
                  <h2 className="h5 mb-1">{cat.name}</h2>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
