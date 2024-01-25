import React from "react";

const MainHeadings = ({ text }) => {
  return (
    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
      {text}
    </h2>
  );
};

export default MainHeadings;
