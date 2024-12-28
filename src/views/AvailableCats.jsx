import { useState } from 'react';
import './AvailableCats.css';

import SphynxImage from '../cats/Sphynx.jpg';
import PeterbaldImage from '../cats/Peterbald.jpg';
import AbyssinianImage from '../cats/Abyssinian.jpg';
import BengalImage from '../cats/Bengal.jpg';
import SiameseImage from '../cats/Siamese.jpg';
import PersianImage from '../cats/Persian.jpg';
import Boltu from '../cats/Boltu.jpg';


const availableCats = [
  { name: 'Poochie', age: '2', breed: 'Persian', image: PersianImage },
  { name: 'Kitty', age: '3', breed: 'Bengal', image: BengalImage },
  { name: 'Whiskers', age: '2', breed: 'Sphynx', image: SphynxImage },
  { name: 'Mitten', age: '2', breed: 'Peterbald', image: PeterbaldImage },
  { name: 'Boltu', age: '2', breed: 'Bengal', image: Boltu },
  { name: 'Shadow', age: '1', breed: 'Abyssinian', image: AbyssinianImage },
  { name: 'Luna', age: '4', breed: 'Siamese', image: SiameseImage },
  
];

export default function AvailableCats() {
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const filteredCats = availableCats.filter((cat) => {
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchTerm);
    return matchesBreed && matchesName;
  });

  const uniqueBreeds = [...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
      <div className="Greetings">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      </div>
      

      <div className="filters-container">
        <div className="filter">
          <label htmlFor="breedFilter" className="form-label">
            Breed:
          </label>
          <select id="breedFilter" className="filter-dropdown" onChange={handleBreedChange} value={selectedBreed}>
            <option value="All">All</option>
            {uniqueBreeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className={`search ${isFocused ? 'focused' : ''}`}>
          <input type="text" id="search" className="search-input" placeholder="Search by cat's name" onChange={handleSearchChange} value={searchTerm} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
      </div>

      <div className="cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div className="cats">

            <div key={i} className="another-cat">
              
                <img src={cat.image} alt={cat.name} className="Catimg"  />
                <div className="cat-info">
                  <h3 className="h5 mb-1" id='Name'>{cat.name}</h3>
                  <div className="info">
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>

                  </div>
                  
                </div>
              
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}
