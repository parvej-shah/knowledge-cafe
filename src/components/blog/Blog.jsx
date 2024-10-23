import React from "react";
import PropTypes from 'prop-types';
export default function Blog({ blog,handleAddToBookmarks,handleReadingTime }) {
  const {
    title,
    author_img,
    banner,
    author_name,
    publish_date,
    reading_time,
    tags,
  } = blog;
  const readingTime = reading_time.split(" ");
  return (
    <div className="card bg-base-100 w-full">
      <figure>
        <img src={banner} className="w-full" />
      </figure>
      <div className="card-body space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={author_img} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-2xl text-[#111111]">
                {author_name}
              </h4>
              <p className="font-semibold text-[#111111]/60">{publish_date}</p>
            </div>
          </div>
          {/* time to read and book mark button */}
          <div className="flex items-center gap-1">
            <p className="font-medium  text-xl text-[#111111]/60">
              {reading_time}
            </p>
            <button onClick={()=>handleAddToBookmarks(blog)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <h2 className="card-title font-bold text-4xl text-[#111111]">{title}</h2>
        <div className="card-actions justify-start">
          {tags.map((tag,idx) => (
            <div className="badge badge-outline text-[#111111]/60 text-xl font-medium" key={idx}>#{tag}</div>
          ))}
        </div>
        <div>
        <button className="font-semibold text-xl text-[#6047EC] underline" onClick={()=>handleReadingTime(Number(readingTime[0]),blog.id)}>Mark as read</button>
        </div>
      </div>
      <hr />
    </div>
  );
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}