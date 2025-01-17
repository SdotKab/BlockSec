import React, { useEffect, useState } from 'react'
// import "react-quill-new/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from "react-toastify";

import Upload from '../components/Upload';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  console.log(isLoaded)


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
      img: cover.filePath || null,
      title: formData.get("title"),
      category: formData.get("category"),
      tags: formData.get("tags").split(",").map(tag => tag.trim()),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="bg-transparent hover:bg-gray-300 text-black text-sm font-semibold mt-4 p-2 w-36 border border-gray-600 rounded-full">
            Add a cover image
          </button>
        </Upload>
        <input
          className="text-2xl bg-white text-black font-semibold mt-4 p-4 border border-gray-600 rounded-lg w-4/5"
          type="text"
          placeholder="Title"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-md">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 bg-white text-black font-semibold mt-1 p-3 border border-gray-600 rounded-lg appearance-none"
          >
            <option value="Infrastructure" className="bg-white">Infrastructure</option>
            <option value="Application" className="bg-white">Application</option>
            <option value="Data" className="bg-white"> Data</option>
            <option value="IAM" className="bg-white">IAM</option>
            <option value="Governance" className="bg-white">Governance</option>
          </select>

        </div>
        <input
          className="text-sm bg-white text-black font-semibold mt-4 p-4 border border-gray-600 rounded-lg w-3/5"
          type="text"
          placeholder="Tags"
          name="tags"
        />
        <textarea
          className="bg-white text-black font-semibold mt-4 p-4 border border-gray-600 rounded-lg w-4/5"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex flex-row gap-4 ml-3">
          <Upload type="image" setProgress={setProgress} setData={setImg}>
            🌆
          </Upload>
          <Upload type="video" setProgress={setProgress} setData={setVideo}>
            ▶️
          </Upload>
        </div>
        <div className="flex flex-1 ">
          <ReactQuill
            theme="snow"
            className="flex-1 bg-white text-black font-semibold p-4 border border-gray-600 rounded-lg h-fit"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
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