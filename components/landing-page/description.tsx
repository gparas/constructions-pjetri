import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { DescriptionProps } from "./types";

const Description = ({ title, content }: DescriptionProps) => {
  return (
    <section className="my-12 py-12 bg-gray-50">
      <div className="container">
        <h2 className="mb-6 md:text-center">{title}</h2>
        <div className="md:columns-2">
          <ReactMarkdown
            options={{
              wrapper: React.Fragment,
              overrides: {
                h2: {
                  component: "h2",
                  props: { className: "mb-4 text-xl" },
                },
                h3: {
                  component: "h2",
                  props: { className: "mb-4" },
                },
                p: {
                  component: "p",
                  props: { className: "mb-6" },
                },
                ul: {
                  component: "ul",
                  props: { className: "mb-6" },
                },
                blockquote: {
                  component: "blockquote",
                  props: {
                    className: "border-s-4 ps-4 text-xl font-semibold",
                  },
                },
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Description;
