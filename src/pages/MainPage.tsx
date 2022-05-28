import Form from "../components/Form";
import Posts from "../components/Posts";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center mx-36">
      <div className="w-100 flex-grow">Social Media App</div>
      <div className="flex w-full flex-row justify-between">
        <Posts />
        <Form />
      </div>
    </div>
  );
};
export default MainPage;
