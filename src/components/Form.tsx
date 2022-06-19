import { SubmitHandler, useForm } from "react-hook-form";
import { isRegularExpressionLiteral } from "typescript";
import { useAppDispatch } from "../app/hooks";
import { addPost } from "../features/postsSlice";

type FormData = {
  title: string;
  message: string;
  tags: string;
};

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      onSubmit={onSubmit}
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-[400px] h-[580px] shadow-2xl rounded-lg grid grid-cols-1 gap-4 p-3 grid-rows-form"
    >
      <div className="text-[36px] text-center ">Creating a Memory</div>
      <input
        {...register("title")}
        className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
        placeholder="Title"
        type="text"
      />
      <textarea
        {...register("message")}
        className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
        placeholder="Message"
      />
      <input
        {...register("tags")}
        className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]"
        placeholder="Tags"
        type="text"
      />
      <input
        className="cursor-pointer rounded-[5px] bg-green-400"
        type="submit"
        value="SUBMIT"
      />
      <button className="rounded-[5px] bg-red-600">CLEAR</button>
    </form>
  );
};
export default Form;
