const Complaint = require('../models/Complaint')

const addComplaint = async (req,res) => {

  try {

    const complaint =
    await Complaint.create(req.body)

    res.status(201).json(complaint)

  } catch (error) {

    res.status(400).json({
      message:error.message
    })

  }

}

const getComplaints = async (req,res) => {

  const complaints =
  await Complaint.find()

  res.json(complaints)

}

const updateComplaintStatus =
async (req,res) => {

  try {

    const complaint =
    await Complaint.findById(req.params.id)

    if(!complaint){

      return res.status(404).json({
        message:'Complaint not found'
      })

    }

    complaint.status = req.body.status

    await complaint.save()

    res.json(complaint)

  } catch (error) {

    res.status(500).json({
      message:error.message
    })

  }

}

const deleteComplaint =
async (req,res) => {

  try {

    const complaint =
    await Complaint.findById(req.params.id)

    if(!complaint){

      return res.status(404).json({
        message:'Complaint not found'
      })

    }

    await complaint.deleteOne()

    res.json({
      message:'Complaint Deleted'
    })

  } catch (error) {

    res.status(500).json({
      message:error.message
    })

  }

}

const searchComplaint =
async (req,res) => {

  try {

    const complaints =
    await Complaint.find({
      location:req.query.location
    })

    res.json(complaints)

  } catch (error) {

    res.status(500).json({
      message:error.message
    })

  }

}

module.exports = {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchComplaint
}