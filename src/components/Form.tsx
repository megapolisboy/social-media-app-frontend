import { useForm } from "react-hook-form";
import { isRegularExpressionLiteral } from "typescript";


const Form  = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return(
    <form onSubmit={()=>handleSubmit} className="min-w-[400px] max-h-[580px] shadow-2xl rounded-lg grid grid-cols-1 gap-4 p-3 grid-rows-form">
      <div className="text-[36px] text-center ">Creating a Memory</div>
      <input {...register("Title")} className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]" placeholder="Title" type="text" />
      <input {...register("Title")} className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]" placeholder="Message" type="text" />
      <input {...register("Title")} className="pl-2 rounded-[5px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)]" placeholder="Tags" type="text" />
      <button className="rounded-[5px] bg-green-400">SUBMITE</button>
      <button className="rounded-[5px] bg-red-600">CLEARE</button>
    </form>
  );
};
export default Form;
