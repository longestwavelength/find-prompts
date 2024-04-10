import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find some great AI prompts
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Make AI work better for you with great prompts</span>
        </h1>
        <p className="desc text-center">
          PromptFinder is for finding great prompts for AI
        </p>

      <Feed />
    </section>
  )
}

export default Home