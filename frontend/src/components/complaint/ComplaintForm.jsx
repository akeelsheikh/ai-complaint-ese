import { useState } from 'react'
import API from '../../services/api'

const ComplaintForm = ({
  fetchComplaints
}) => {

  const [formData, setFormData] =
  useState({
    name:'',
    email:'',
    title:'',
    description:'',
    category:'',
    location:''
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        '/complaints',
        formData
      )

      fetchComplaints()

      alert('Complaint Submitted')

      setFormData({
        name:'',
        email:'',
        title:'',
        description:'',
        category:'',
        location:''
      })

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-xl grid gap-4"
    >

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="text"
        name="title"
        placeholder="Complaint Title"
        value={formData.title}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <textarea
        name="description"
        placeholder="Complaint Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-3 rounded-lg h-32"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <button
        className="bg-blue-600 text-white p-3 rounded-lg"
      >
        Submit Complaint
      </button>

    </form>

  )
}

export default ComplaintForm