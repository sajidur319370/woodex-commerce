import React from "react";
import Copyright from "../Copyright/Copyright";

const Blogs = () => {
  return (
    <div className="mx-24">
      <div className="question-answer">
        <article className="text-left">
          <h2 className="question font-medium text-2xl text-blue-700 mt-10">
            1. What Is Context Api ?
          </h2>
          <p className="answer font-medium  text-lg text-slate-700 my-10">
            Context API is a React API that can solve a lot of problems that
            modern applications face related to state management and how they're
            passing state to their components. Instead of installing a state
            management library in Our project that will eventually cost Our
            project performance and increase Our bundle size, we can easily go
            with Context API and be fine with it.
          </p>
        </article>
        <article className="text-left">
          <h2 className="question font-medium text-2xl text-blue-700 mt-10">
            2. What Is Semantic Tag ?
          </h2>
          <p className="answer font-medium  text-lg text-slate-700 my-10">
            Semantic HTML5 tags are used to indicate clearly what role is played
            by the content those tags contain. That explicit information helps
            robots/crawlers like Google and Bing to better understand which
            content is important, which is a subsidiary, which is for
            navigation, and so on. By adding semantic HTML tags to Our pages, We
            provide additional information that helps Google and Bing understand
            the roles and relative importance of the different parts of Our
            page.
            <br />
            <small className="text-blue-700">list of semantic tag: </small>
            <li>header</li>
            <li>nav</li>
            <li>main</li>
            <li>article</li>
            <li>figcaption</li>
            <li>footer</li>
          </p>
        </article>
      </div>
      <Copyright></Copyright>
    </div>
  );
};

export default Blogs;
