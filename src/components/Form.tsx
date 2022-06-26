import { SubmitHandler, useForm } from "react-hook-form";
import { isRegularExpressionLiteral } from "typescript";
import { useAppDispatch } from "../app/hooks";
import { addPost } from "../features/postsSlice";
import FileBase from "react-file-base64";
import { useState } from "react";

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
      className="bg-white w-[400px] h-[580px] shadow-2xl rounded-lg flex flex-col gap-4 p-3"
    >
      <div className="text-[36px] text-center ">Create a Post</div>
      <div className="flex flex-col gap-2">
        <input
          {...register("title", { required: true })}
          className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
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
          className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] resize-none"
          placeholder="Message"
        />
        {errors.title && (
          <span className="text-red-500">Message is requires</span>
        )}
      </div>
      <input
        {...register("tags")}
        className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
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
        className="cursor-pointer rounded-[5px] bg-green-400"
        type="submit"
        value="SUBMIT"
      />
      <button
        className="rounded-[5px] bg-red-600"
        onClick={(e) => clearForm(e)}
      >
        CLEAR
      </button>
    </form>
  );
};
export default Form;
