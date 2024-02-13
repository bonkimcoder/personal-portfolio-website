import React from "react";

const Skills = ({ skills }) => {
  return (
    <ul className="max-w-5xl list-none mx-auto my-12 flex flex-col sm:flex-row items-center sm:justify-between sm:flex-wrap gap-3">
      {skills.map((skill) => (
        <li
          key={skill.id + skill.h3Text}
          className="sm:max-w-[300px] w-full flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
        >
          <img
            src={skill.img}
            alt={skill.h3Text}
            className="sm:max-w-52 min-w-52 h-24 mb-6 object-contain"
            loading="lazy"
          />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            {skill.h3Text}
          </h3>
          <p className="hidden sm:block text-xl text-center mt-2 text-slate-500 dark:text-slate-400">
            Experience: {skill.experience}{" "}
            {skill.experience > 1 ? "years" : "year"}
          </p>
          <p className="sm:hidden text-xl text-center mt-2 text-slate-500 dark:text-slate-400">
            Rating: {skill.rating}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
