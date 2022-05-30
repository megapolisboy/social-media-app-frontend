import Form from "../components/Form";
import Header from "../components/Header";
import Posts from "../components/Posts";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center mx-3 my-3">
      <Header />
      <div className="flex w-full">
        {/* TODO: get posts from REDUX */}
        <Posts
          posts={[
            {
              creator: "Oleg",
              title: "Life in the small town",
              message: "omg",
              tags: [],
              image: undefined,
            },
            {
              creator: "Oleg",
              title: "Life in the small town",
              message: "omg",
              tags: [],
              image: undefined,
            },
            {
              creator: "Oleg",
              title: "Life in the small town",
              message: "omg",
              tags: [],
              image: undefined,
            },
            {
              creator: "Oleg",
              title: "Life in the small town",
              message: "omg",
              tags: [],
              image: undefined,
            },
            {
              creator: "Oleg",
              title: "Life in the small town",
              message: "omg",
              tags: [],
              image: undefined,
            },
          ]}
        />
        <Form />
      </div>
    </div>
  );
};
export default MainPage;
