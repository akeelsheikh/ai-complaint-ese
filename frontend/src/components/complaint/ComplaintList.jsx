const ComplaintList = ({
  complaints,
  analyzeComplaint
}) => {

  return (

    <div className="mt-10 grid md:grid-cols-2 gap-5">

      {
        complaints.map((complaint) => (

          <div
            key={complaint._id}
            className="bg-white p-5 rounded-xl shadow-xl"
          >

            <h2 className="text-2xl font-bold">
              {complaint.title}
            </h2>

            <p className="mt-2">
              Name: {complaint.name}
            </p>

            <p>
              Category: {complaint.category}
            </p>

            <p>
              Location: {complaint.location}
            </p>

            <p>
              Status:
              <span className="text-blue-600 font-bold">
                {' '}
                {complaint.status}
              </span>
            </p>

            <button
              onClick={() =>
                analyzeComplaint(complaint)
              }
              className="bg-black text-white px-4 py-2 rounded-lg mt-5"
            >
              Analyze AI
            </button>

          </div>

        ))
      }

    </div>

  )
}

export default ComplaintList