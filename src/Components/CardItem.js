import { authorChanged, tagChanged } from "../Redux/Filters/actions";
import { useDispatch } from "react-redux";

export default function CardItem(props) {
  const dispatch = useDispatch();
  const { id, image, category, title, author, authorImage, date, readTime } =
    props.post;

  const handleAuthorClick = (author) => {
    dispatch(authorChanged(author));
    dispatch(tagChanged(""));
  };

  const handleTagClick = (tag) => {
    dispatch(authorChanged(""));
    dispatch(tagChanged(tag));
  };

  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={process.env.PUBLIC_URL + `${image}`}
            alt=""
          />
        </div>

        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <span
                onClick={() => handleTagClick(category)}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
              >
                {category}
              </span>
            </p>
            <p href="#" className="block mt-1">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                onClick={() => handleAuthorClick(author)}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={process.env.PUBLIC_URL + `${authorImage}`}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                onClick={() => handleAuthorClick(author)}
                className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              >
                {author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">{date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
