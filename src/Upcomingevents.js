import React, { useEffect, useState } from 'react';
import { UEAPI } from './constants';
import geoalt from "./geoalt.svg";
import r1 from "./r1.svg";
import r2 from "./r2.svg";
import r3 from "./r3.svg";
import r4 from "./r4.svg";
import r5 from "./r5.svg";
import r6 from "./r6.svg";
import r7 from "./r7.svg";
import r8 from "./r8.svg";
import r9 from "./r9.svg";
import r10 from "./r10.svg";

const PAGE_SIZE = 10; // Number of events to fetch per page
const arr= [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10];
let i=0;

const Upcomingevents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${UEAPI}?page=${page}&pageSize=${PAGE_SIZE}`);
      if (!response.ok) {
        throw new Error(`Error fetching events: ${response.status}`);
      }
      const data = await response.json();
      setEvents(prevEvents => [...prevEvents, ...data.events]);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]); 

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom && !isLoading && !error) {
      setPage(prevPage => prevPage + 1); // Fetch next page when scrolled to the bottom
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <p className="title_upc">Upcoming Events
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </p>
      <div className="upcoming_movie">
        <div className="uc_event-card">
          {events.map((event, i) => (
            <div key={i} className="upcoming_List">
              <div className="g-col-6 g-col-md-4">
                <img className="img_card" src={arr[i%10]} alt={`Event ${i + 1}`} />
                <div className="uc_card-body">
                  <p className="uc_card-text">{event.eventName}</p>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    {event.cityName}
                  </p>
                  <p className="date">{event.date}</p>
                </div>
              </div>
            </div>
          ))
          
          }
          {isLoading && <p>Loading events...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </>
  );
};

export default Upcomingevents;
