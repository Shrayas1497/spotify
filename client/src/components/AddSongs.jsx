import React from 'react'

const AddSongs   = () => {
  return (
   <form>
       <label > Song name </label>
       <input type='text'></input> <br></br>
       <label >Date Released </label>
       <input type='text'></input><br></br>
       <label >Artist </label>
       <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        
   </form> 
  )
}

export default AddSongs 