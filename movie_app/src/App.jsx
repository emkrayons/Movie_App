import React, {useState} from 'react'
import Addmovie from './component/Addmovie'
import Filtered from './component/Filtered'
import Movielist from './component/Movielist'


function App() {
  const[movies, setMovies] = useState([
    {
      title: "Miracle in Cell",
      description: "family love affair",
      posterURL: "//image.com",
      rating: 5
    },
    {
      title: "Prison Break",
      description: "Brothers making moves to escape from prison",
      posterURL: "//image.com",
      rating: 4
    }
  ])

const [filteredMovies, setFilteredMovies] = useState(movies)

const handlefilter = (filter) => {
  const {title, rating} = filter;
  const filtered = movies.filter(movie => 
    movie.title.toLowerCase().includes(title.toLowerCase()) && 
    movie.rating >= (rating || 0 )
  );


setFilteredMovies(filtered);
};




  const handleAddMovie = (newMovie) =>{
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie])
  }

  return (
    <div className='app container mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center mb-6'>My Favourite Movies</h1>
    <Filtered onFilter ={handlefilter}/>
     <Addmovie onAdd ={handleAddMovie}/>
     <Movielist movies = {filteredMovies} />
    
    </div>
  );
}

export default App
