import myProfile from "../assets/me.png";

const Hero = () => {
  return (
    <>
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-3xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          I am a dedicated{" "}
          <span className="text-indigo-700 dark:text-indigo-300">
            web developer{" "}
          </span>
          offering elegant solutions.
        </h2>
        <p className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Good in HTML5, CSS, Tailwind, Bootstrap, Vanilla Javascript, React Js,
          Git, Github etc.
        </p>
        <p className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Bringing Creativity and Precision to Web Development
        </p>
      </article>
      <img
        className="w-1/2 h-90 object-contain"
        src={myProfile}
        alt="My Profile Pic"
      />
    </>
  );
};

export default Hero;
