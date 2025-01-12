import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-800">Comments</h1>
      <form
        // onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl border border-gray-500"
        />
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-3 border border-gray-600 hover:border-transparent rounded-full">
          Send
        </button>
      </form>
      {/* {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}

          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )} */}
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments