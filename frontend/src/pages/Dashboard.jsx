import { useEffect, useState }
from 'react'

import ComplaintForm
from '../components/complaint/ComplaintForm'

import ComplaintList
from '../components/complaint/ComplaintList'

import API from '../services/api'

const Dashboard = () => {

  const [complaints,setComplaints] =
  useState([])

  const [analysis,setAnalysis] =
  useState('')

  const fetchComplaints = async () => {

    try {

      const { data } =
      await API.get('/complaints')

      setComplaints(data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchComplaints()

  }, [])

  const analyzeComplaint =
  async (complaint) => {

    try {

      const { data } =
      await API.post(
        '/ai/analyze',
        {
          complaint
        }
      )

      setAnalysis(data.analysis)

    } catch (error) {

      console.log(error)

      setAnalysis('AI Failed')

    }

  }

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-black text-white p-5 text-2xl font-bold">
        Smart Complaint Management System
      </div>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-10">
          Complaint Dashboard
        </h1>

        <ComplaintForm
          fetchComplaints={fetchComplaints}
        />

        <div className="bg-white p-6 rounded-xl shadow-xl mt-10">

          <h2 className="text-2xl font-bold mb-4">
            AI Analysis
          </h2>

          <p className="whitespace-pre-wrap">
            {analysis}
          </p>

        </div>

        <ComplaintList
          complaints={complaints}
          analyzeComplaint={analyzeComplaint}
        />

      </div>

    </div>

  )
}

export default Dashboard