import Form from "../components/Form";
import Header from "../components/Header";
import Posts from "../components/Posts";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center mx-3 my-3">
      <Header />
      <div className="grid grid-cols-main-content w-full">
        {/* TODO: get posts from REDUX */}
        <Posts
          posts={[
            {
              creator: "Test User",
              time : "35",
              title: "New Year",
              message: "omg",
              tags: ["#happy"],
              image: undefined,
              likes:3,
            },
          ]}
        />
        <Form />
      </div>
    </div>
  );
};
export default MainPage;
