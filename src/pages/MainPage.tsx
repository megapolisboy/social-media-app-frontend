import Form from "../components/Form";
import Posts from "../components/Posts";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center mx-36 my-12">
      <div className="bg-cyan-500 w-full text-center">Social Media App</div>
      <div className="flex-1 flex w-full flex-row justify-between">
        <Posts />
        <Form />
      </div>
    </div>
  );
};
export default MainPage;
