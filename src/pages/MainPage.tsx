import Form from "../components/Form";
import Posts from "../components/Posts";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center mx-6 my-12">
      <div className="bg-cyan-500 w-full text-center py-10 text-3xl">
        Social Media App
      </div>
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
