import React from "react";
import formatDate from "@/lib/date-formatter";

import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

const PostHeader = ({ title, coverImage, date, excerpt }: Props) => {
  return (
    <>
      <div className="mb-4 text-lg">{formatDate(date)}</div>
      <h1 className="mb-4">{title}</h1>
      <p className="mb-8 text-xl">{excerpt}</p>
      <div className="mb-8">
        <CoverImage
          alt={title}
          title={title}
          src={coverImage}
          width={848}
          height={445}
          sizes="(min-width: 1000px) 848px, (min-width: 780px) 672px, (min-width: 580px) 492px, calc(100vw - 48px)"
        />
      </div>
    </>
  );
};

export default PostHeader;
