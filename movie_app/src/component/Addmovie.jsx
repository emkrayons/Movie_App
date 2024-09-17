import React, { useState, useRef } from "react"

function Addmovie({onAdd}) {
    const[newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: ""
});

const fileInputRef = useRef(null);


const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if(file){
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewMovie({...newMovie, posterURL: reader.result});
        };
        reader.readAsDataURL(file)
    }

};


const handleSubmit = () =>{
    onAdd(newMovie);
    setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating:''
    });

    // clear the file input after submission
    if(fileInputRef.current){
        fileInputRef.current.value =""
    }


}



const handleTextChange = (e) => {
    const {name, value} = e.target;
    setNewMovie({...newMovie, [name]: value});
}




  return (
    <div className='flex flex-col mb-5 gap-5'>
        <input name='title' value={newMovie.title} type='text' placeholder='Movie Title..' className='border-p-2 rounded h-10' onChange={handleTextChange}  />
        <input name='description' value={newMovie.description} type='text' placeholder='Movie Description' className='border-p-2 rounded h-10' onChange={handleTextChange}/>
        <input name='posterURL' type='file' accept="image/*" ref={fileInputRef} placeholder='Postal Image Url' className='border-p-2 rounded h-10' onChange={handleFileChange} />
        <input name='rating' value={newMovie.rating} type='text' min={1} max={5} placeholder='Rating' className='border-p-2 rounded h-10' onChange={handleTextChange}/>

        <button onClick={handleSubmit} className='bg-green-500 text-white p-2 rounded w-[150px] m-auto'>Add Movie</button>
    </div>

   
  );
}

export default Addmovie