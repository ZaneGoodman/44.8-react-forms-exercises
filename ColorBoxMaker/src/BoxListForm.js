import React, { useState } from "react";


const BoxListForm = ({ createNewBox }) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: '',
        height: '',
      }
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewBox({...formData, width: +formData.width, height: +formData.height})
    setFormData(INITIAL_STATE)

  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Background Color</label>
      <input
        id="color"
        type="text"
        placeholder="Background Color"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        placeholder="Box Height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        placeholder="Box Width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <button>Add Box!</button>
    </form>
  );
};

export default BoxListForm;
