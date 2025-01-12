import React from 'react'
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useAuth, useUser } from "@clerk/clerk-react";

const Write = () => {
  // const { isLoaded, isSignedIn } = useUser();

  // if (!isLoaded) {
  //   return <div className="">Loading...</div>;
  // }

  // if (isLoaded && !isSignedIn) {
  //   return <div className="">You should login!</div>;
  // }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6"> */}
      <form onSubmit="" className="flex flex-col gap-6 flex-1 mb-6">
        {/* <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload> */}
          <button className="w-max p-2 shadow-md rounded-l text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        <input
          className="text-xl p-4 rounded-l bg-white shadow-md"
          type="text"
          placeholder="Title"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-l bg-white shadow-md"
          >
            <option value="infrastructure">Infrastructure</option>
            <option value="application">Application</option>
            <option value="data">Data</option>
            <option value="aim">AIM</option>
            <option value="governance">Governance</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-l bg-white shadow-md text-sm"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2">
            {/* <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload> */}
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-l bg-white shadow-md"
            // value={value}
            // onChange={setValue}
            // readOnly={0 < progress && progress < 100}
          />
        </div>
        {/* <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button> */}
        <button
          className="bg-transparent hover:bg-black text-black font-semibold hover:text-white mt-4 p-2 w-36 border border-gray-600 hover:border-transparent rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Publish
        </button>
        {/* {"Progress:" + progress} */}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  )
}

export default Write