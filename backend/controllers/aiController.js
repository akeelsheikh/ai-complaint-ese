const axios = require('axios')

const analyzeComplaint =
async (req,res) => {

  try {

    const { complaint } = req.body

    const prompt = `
Analyze this complaint and provide:

1. Complaint Priority
2. Responsible Department
3. Complaint Summary
4. Auto-generated Response

Complaint Data:
${JSON.stringify(complaint)}
`

    const response = await axios.post(

      'https://openrouter.ai/api/v1/chat/completions',

      {
        model:'deepseek/deepseek-chat',

        messages:[
          {
            role:'user',
            content:prompt
          }
        ]
      },

      {
        headers:{

          Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

          'HTTP-Referer':
          'http://localhost:5173',

          'X-Title':
          'Smart Complaint System',

          'Content-Type':
          'application/json'
        }

      }

    )

    console.log(response.data)

    res.json({
      analysis:
      response.data.choices[0].message.content
    })

  } catch (error) {

    console.log(
      error.response?.data ||
      error.message
    )

    res.status(500).json({
      message:'AI Failed'
    })

  }

}

module.exports = {
  analyzeComplaint
}