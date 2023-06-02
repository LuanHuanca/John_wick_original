import React from 'react'
import { useEffect, useState } from "react";
import Search from '../components/Search'
import PosterCard from '../components/SeccionMovie'
import SeccionMovie from '../components/SeccionMovie'
import NavBar from '../components/NavBar'
import { getPelis } from "../services/pelis";

const Home = () => {
  
  const [newMovies, setNewMovies] = useState([]);
  const [coming, setComing] = useState([]);
  const [top, setTop] = useState([]);
  const [action, setAction] = useState([]);

  useEffect(() => {
    getPelis('now playing').then((data) => setNewMovies(data.results))
    getPelis('upcoming').then((data) => setComing(data.results))
    getPelis('popular').then((data) => setTop(data.results))
    getPelis('top rated').then((data) => setAction(data.results))
  }, []);

  return (
    <div>
      <Search/>

      <SeccionMovie title="New Movies" movies={newMovies}/>
      <SeccionMovie title="Coming Soon" movies={coming} />
      <SeccionMovie title="Top Movie" movies={top } />
      <SeccionMovie title="Action Movie" movies={action} / >
      <NavBar/>
    </div>
  )
}

export default Home
