import myProfile from "../assets/me.png";
import Divider from "../components/Divider";
import MainHeadings from "../components/MainHeadings";
import Counter from "../components/Counter";
import { skills, testimonials } from "../components/Data";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto ">
      <section
        id="hero"
        className="flex flex-col-reverse justify-center sm:flex-row sm:justify-between
        p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            I am a dedicated{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              web developer{" "}
            </span>
            focused on elegant solutions and user delight.
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Good in HTML5, CSS, Tailwind, Bootstrap, Vanilla Javascript, React
            Js, Git, Github etc.
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Bringing Creativity and Precision to Web Development
          </p>
        </article>
        <img
          className="w-1/2 h-90 object-contain"
          src={myProfile}
          alt="Rocket Dab"
        />
      </section>
      <Divider />

      <section id="numbers" className="p-6 my-12 scroll-mt-20">
        <MainHeadings text="My Statistics" />

        <Counter />
      </section>

      <Divider />

      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <MainHeadings text="My Skill Set" />

        <ul className="max-w-4xl list-none mx-auto my-12 flex flex-col sm:flex-row items-center justify-between sm:flex-wrap gap-8">
          {skills.map((rocket) => (
            <li
              key={rocket.id + rocket.h3Text}
              className="sm:min-w-32 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
            >
              <img
                src={rocket.img}
                alt={rocket.h3Text}
                className="sm:max-w-52 min-w-52 h-24 mb-6 object-contain"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                {rocket.h3Text}
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Rating: {rocket.firstParText}
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Rating: {rocket.secondParText}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      <section
        id="testimonials"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <MainHeadings text="Testmonials" />

        {testimonials.map((testmonial) => (
          <figure key={testmonial.id} className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                {testmonial.text}
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;{testmonial.author}
            </figcaption>
          </figure>
        ))}
      </section>

      <Divider />

      <section
        id="contact"
        className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
      >
        <MainHeadings text="Contact Me" />
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength="3"
            maxLength="60"
            placeholder="Your Subject"
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          ></textarea>
          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Main;
