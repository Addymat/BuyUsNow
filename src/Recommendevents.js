import React, { useEffect, useRef, useState } from 'react'
import { RSAPI } from './constants';
import p1 from "./p1.svg";
import p2 from "./p2.svg";
import p3 from "./p3.svg";
import p4 from "./p4.svg";
import p5 from "./p5.svg";
import p6 from "./p6.svg";
import p7 from "./p7.svg";
import geoalt from "./geoalt.svg";


let i=0;
const PAGE_SIZE=10;
function Recommendevents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page,setPage] = useState(1);
  const arr= [p1,p2,p3,p4,p5,p6,p7,p4];
  const containerRef= useRef(null);
  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);

    try {
        const details = await fetch(`${RSAPI}?page=${page}&pageSize=${PAGE_SIZE}`);
        const data = await details.json();
        console.log(data);
        setEvents(data.events);
  
        

      if (!details.ok) {
        throw new Error(`Error fetching events: ${details.status}`);
      }

      setEvents(prevEvents => [...prevEvents, ...data.events]); 
      setPage(prevPage => prevPage + 1); 

      
      
    } catch (error) {
      console.error('Error fetching events:', error);
      setError(error.message); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []); 


  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.clientHeight + container.scrollTop >= container.scrollHeight - 20) {
        fetchEvents(); 
      }
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [events]);

  const renderEvents = () => {

    if (events.length === 0) {
        return <p>Loading events...</p>;
      }

    if (isLoading) {
      return <p>Loading events...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
    return events.map((event,i) => (
        
        <div class="recommendlist">
        <div class="card">
        <img class="img_card" src={arr[i%7]} />
  <div class="card-body">
    <p class="card-text">{event.eventName}</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
{event.cityName}</p>
<p class="date">{event.date}</p>


  </div>
</div>


            {/* <h4 class="img_title">{event.eventName}</h4>
          <p>{`${event.cityName} - ${event.date}`}</p>
          </iframe> */}
          
      
          </div>
    
    )
    ,arr[i]);
  };

  return (
    <div class="recommended_movie" ref={containerRef}>
      <div class="title_rec">Recommended Events <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></div>
      <div class="event-card">{renderEvents()}</div>
    </div>
  );
}

export default Recommendevents;
