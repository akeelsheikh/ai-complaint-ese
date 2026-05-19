const express = require('express')

const {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchComplaint
} = require('../controllers/complaintController')

const router = express.Router()

router.post('/', addComplaint)

router.get('/', getComplaints)

router.put('/:id', updateComplaintStatus)

router.delete('/:id', deleteComplaint)

router.get('/search/location', searchComplaint)

module.exports = router