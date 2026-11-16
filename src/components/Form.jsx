
import { useState } from 'react'

const emptyFormData = {
  studentName: '',
  studentEmail: '',
  topic: 'React',
  rating: 0,
  feedback: ''
}

function Form() {
  const [formData, setFormData] = useState(emptyFormData)
  const [feedbacks, setFeedbacks] = useState([])
  function submitHandler(e) {
    e.preventDefault()
  if (formData.rating === 0) {
      alert('Please choose a rating.')
      return
    }
  if (formData.feedback.trim().length < 5) {
      alert('Feedback must be at least 5 characters.')
      return
    }
    setFeedbacks([
      ...feedbacks,
      { ...formData, id: Date.now() }
    ])
   setFormData(emptyFormData)
    }
  function onChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    }
  return (
    <div className="w-full max-w-xl mx-auto space-y-8">
    <form onSubmit={submitHandler} className="bg-white rounded-xl p-6 shadow-xl space-y-5">
    <h1 className="text-2xl font-bold text-orange-800"> Feedback Form</h1>
    <input type="text" name="studentName" placeholder="Student Name" required value={formData.studentName} onChange={onChangeHandler}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
    <input type="email" name="studentEmail" placeholder="Student Email" requiredvalue={formData.studentEmail} onChange={onChangeHandler}
   className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
   <select name="topic" value={formData.topic} onChange={onChangeHandler}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option value="React">React</option>
          <option value="Javascript">Javascript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
    <textarea name="feedback" value={formData.feedback} onChange={onChangeHandler} required rows={4} placeholder="Share your feedback..."
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
     <div className="space-y-3">
      <p className="font-semibold text-gray-700">Rate your experience</p>
     <div className="flex gap-3">{[1, 2, 3, 4, 5].map((num) =>
      ( <button
            key={num}
            type="button"
            onClick={() =>
            setFormData({ ...formData, rating: num })
                }
            className={`w-11 h-11 rounded-lg border font-semibold transition ${
            num <= formData.rating
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-300 text-gray-700 hover:border-orange-500"
                }`}>
                {num}
               </button>
               ))}
           </div>
            </div>
      <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
          Submit Feedback
        </button>
      </form>
     <div className="space-y-4">
     <h2 className="text-xl font-bold text-orange-800">Submitted Feedback</h2>
        {feedbacks.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No feedback submitted yet.</p>
        ) : (
          feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow-md space-y-2">
              <h3 className="font-bold text-gray-800">{item.studentName}</h3>
             <p className="text-sm text-gray-500">
                {item.studentEmail}
              </p>
            <p className="text-sm text-orange-700 font-medium">Topic: {item.topic}</p>
            <p className="text-sm font-semibold text-orange-600">Rating: {item.rating}/5 </p>
            <p className="text-gray-700">{item.feedback}</p>
            </div>
          ))
          )}
      </div>
      </div>
      )
      }
           export default Form
