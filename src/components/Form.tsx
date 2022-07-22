import { SubmitHandler, useForm } from "react-hook-form";
import { isRegularExpressionLiteral } from "typescript";
import { useAppDispatch } from "../app/hooks";
import { addPost } from "../features/postsSlice";
import FileBase from "react-file-base64";
import { useState } from "react";
import React from "react";

type FormData = {
  title: string;
  message: string;
  tags: string;
  image: string;
};

interface Props {
  makeFormInvisible: () => void;
}

const Form: React.FC<Props> = ({ makeFormInvisible }) => {
  const [src, setSrc] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    const post = {
      title: data.title,
      message: data.message,
      tags: data.tags.length > 0 ? data.tags.split(" ") : ["#introvert"],
      selectedFile: data.image,
      createdAt: new Date(),
    };
    dispatch(addPost(post));
    makeFormInvisible();
  });

  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      onClick={(e) => e.stopPropagation()}
      className="w-full relative border-8 border-white bg-purple-100 max-w-[400px] shadow-2xl rounded-3xl flex flex-col gap-4 p-3"
    >
      <div className="text-[36px] text-center text-purple-500">
        Create a Post
      </div>
      <button
        className="absolute right-3 top-3 rounded-full hover:bg-gray-200 p-1"
        onClick={makeFormInvisible}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-2">
        <input
          {...register("title", { required: true })}
          className="p-2 rounded-lg shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
          placeholder="Title"
          type="text"
        />
        {errors.title && (
          <span className="text-red-500">Title is requires</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          {...register("message", { required: true })}
          className="px-2 h-48 rounded-lg shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] resize-none"
          placeholder="Message"
        />
        {errors.title && (
          <span className="text-red-500">Message is requires</span>
        )}
      </div>
      <input
        {...register("tags")}
        className="p-2 rounded-lg shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
        placeholder="Tags"
        type="text"
      />
      <div className="flex">
        <FileBase
          {...register("image")}
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setSrc(base64);
            setValue("image", base64);
          }}
        />
        <img src={src} className=" w-24" alt="" />
      </div>
      <input
        className="cursor-pointer py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
        type="submit"
        value="SUBMIT"
      />
      <button
        className="cursor-pointer py-1 rounded-lg border border-purple-800 hover:bg-purple-200"
        onClick={(e) => clearForm(e)}
      >
        CLEAR
      </button>
    </form>
  );
};
export default Form;
