import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CommentDetail() {
  const { id } = useParams(); 
  const navigate=useNavigate();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.error('Error fetching comment:', error));
  }, [id]);

  if (!comment) {
    return (

<div role="status" className="max-w-2xl p-10 mt-14 animate-pulse mx-auto ">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>


    )
  }

  return (
    <div className="h-screen">
    <div className="p-10 mt-14 max-w-2xl h-96 mx-auto bg-white border mix-blend-darken border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold">{comment.name}</h2>
      <p className="mb-3 text-gray-700 dark:text-gray-400">{comment.body}</p>
      <p className="text-gray-500">Email: {comment.email}</p>
      <button 
        onClick={() => navigate('/comments')} // Navigate back to comments
        className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Back to Comments
      </button>
    </div>

    </div>
  );
}
