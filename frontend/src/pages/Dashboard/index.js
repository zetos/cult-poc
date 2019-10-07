import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';

import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);
  const user_id = localStorage.getItem('user');

  const socket = useMemo(
    () =>
      socketio('http://192.168.100.12:3001', {
        query: { user_id }
      }),
    [user_id]
  );

  useEffect(() => {
    // immediately invoked function
    (async () => {
      const user_id = localStorage.getItem('user');

      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      socket.on('booking_request', data => {
        setRequests([...requests, data]);
      });

      setSpots(response.data);
    })();
  }, [requests, socket]);

  return (
    <>
      <ul className="notifications">
        {requests.map(request => (
          <li key={request._id}>
            <p>
              <strong>{request.user.email}</strong> is requesting a reservation
              at <strong>{request.spot.cult}</strong> for the date:{' '}
              <strong>{request.date}</strong>.
            </p>
            <button className="accept">ACCEPT</button>
            <button className="reject">REJECT</button>
          </li>
        ))}
      </ul>

      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.cult}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
