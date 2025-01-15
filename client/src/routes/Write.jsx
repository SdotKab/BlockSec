import React, { useEffect, useState } from 'react'
// import "react-quill-new/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from "react-toastify";

import DropDownCategories from '../components/DropDownCategories';
import DropDownCat from '../components/DropDownCat';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      tags: formData.get("tags"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-semibold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
      {/* <form onSubmit="" className="flex flex-col gap-6 flex-1 mb-6"> */}
        {/* <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload> */}
          <button className="w-max p-2 rounded-md border-2 border-solid text-sm bg-white hover:bg-gray-50">
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
            className="p-2 rounded-l bg-white shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
          >
            <option value="infrastructure" className="bg-white">Infrastructure</option>
            <option value="application" className="bg-white">Application</option>
            <option value="data" className="bg-white"> Data</option>
            <option value="aim" className="bg-white">AIM</option>
            <option value="governance" className="bg-white">Governance</option>
          </select>
          {/* <DropDownCategories /> */}
          {/* <DropDownCat name="category" onCategoryChange={handleCategoryChange} /> */}

        </div>
        <input
          className="text-sm p-4 rounded-l bg-white shadow-md"
          type="text"
          placeholder="Tags"
          name="tags"
        />
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
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        {/* <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button> */}
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-transparent hover:bg-black text-black font-semibold hover:text-white mt-4 p-2 w-36 border border-gray-600 hover:border-transparent rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  )
}

export default Write