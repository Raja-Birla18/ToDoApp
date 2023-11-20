"use client";
import React, { useState } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(MainTask);
  };

  const deleteHandle = (i) => {
    const copyTask = [...MainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h className="text-2xl font-bold"> No task available</h>;

  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-5 w-2/4">
            <h3 className="text-3xl font-bold">{t.title}</h3>
            <h3 className="text-2xl font-bold">{t.desc}</h3>
          </div>
          <button
            onClick={() => {
              deleteHandle(i);
            }}
            className=" bg-red-500 text-white py-1 m-2 px-2 font-bold rounded"
          >
            {" "}
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 m-5 text-5xl font-bold text-center">
        Raja's To-do App
      </h1>

      <form onSubmit={submitHandle}>
        
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-5 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-5 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white py-3 m-5 px-4 font-bold rounded text-2xl">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
