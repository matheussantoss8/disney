import { useParams } from 'react-router-dom';
import { api } from '../../service/api';
import { useEffect, useState} from 'react';
import ModalPerson from '../../components/Modal';
import Error from '../error';
import { Search } from '../../components/Search';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/iconeDisney.png'
import '../../styles/style.css'

export default function Person() {
  const { name } = useParams();
  const [person, setPerson] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    async function loadPerson() {
      try {
        const response = await api.get(`/character?name=${name}`);
        setPerson(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPerson();
  }, [name]);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className='person-container'>
      {person.length === 0 && (
        <div>
          <Error />
        </div>
      )}

      {person.length >= 1 && (
        <div>
          <div className="person-nav">
            <Link to={"/"}>
            <img src={Logo} alt="logo disney" />
            </Link>
            <Search/>
          </div>
          <div className='persons-box'>
            {person.map((item) => (
              <div
                className='persons'
                key={item._id}
                onClick={() => handlePersonClick(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          {selectedPerson && (
            <ModalPerson
              key={selectedPerson._id}
              imageUrl={selectedPerson.imageUrl}
              name={selectedPerson.name}
              film={selectedPerson.films[0]}
              videoGames={selectedPerson.videoGames[0]}
              tvShows={selectedPerson.tvShows[0]}
              onClose={() => setSelectedPerson(null)}
              _id={selectedPerson._id}
            />
          )}
        </div>
      )}
    </div>
  );
}