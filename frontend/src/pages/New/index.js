import React, { useState, useMemo } from 'react';

import api from '../../services/api';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [cult, setCult] = useState('');
  const [deities, setDeities] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async event => {
    // Send multipart form data.
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('cult', cult);
    data.append('deities', deities);
    data.append('price', price);

    try {
      await api.post('/spots', data, {
        headers: { user_id }
      });
      history.push('/dashboard');
    } catch (err) {
      console.error('Register new spot error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="cult">CULT *</label>
      <input
        type="text"
        id="cult"
        placeholder="Your amazing cult.."
        value={cult}
        onChange={event => setCult(event.target.value)}
      />

      <label htmlFor="cult">
        DEITIES * <span>(separated by comma)</span>{' '}
      </label>
      <input
        type="text"
        id="deities"
        placeholder="What Deities do you worship?"
        value={deities}
        onChange={event => setDeities(event.target.value)}
      />

      <label htmlFor="price">
        CHARGE PER DAY * <span>(leave blank for FREE)</span>{' '}
      </label>
      <input
        id="deities"
        placeholder="Value charged per day.."
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}
