/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const CategoryPostCard = ({ post, index }: any) => {
  return (
    <div key={index} className="mb-6 rounded-lg border p-4 bg-gray-50">
      <h3 className="text-lg font-medium mb-2">{post.title}</h3>
      <div className="flex gap-2">
        <div className="w-20">
          <img src={post.img} alt="" />
        </div>
        <div>
          <ul className="list-disc list-inside pl-4">
            {post.description.map(
              (
                desc:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined,
                descIndex: Key | null | undefined
              ) => (
                <li
                  key={descIndex}
                  className="text-gray-700 list-none cursor-pointer flex hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                    />
                  </svg>
                  <span className="ms-2">{desc}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryPostCard;
