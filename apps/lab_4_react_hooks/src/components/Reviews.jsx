import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/13/comments")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-6">Відгуки</h2>

      <div className="space-y-4">
        {reviews.map(comment => (
          <div
            key={comment.id}
            className="p-4 border border-black/20 dark:border-white/20 rounded-lg bg-gray-100 dark:bg-[#1e1e1e]"
          >
            <h4 className="font-medium text-sm mb-1">
              {comment.name}
            </h4>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {comment.email}
            </p>

            <p className="text-sm leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}