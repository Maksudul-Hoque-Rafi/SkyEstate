import Slider from "../components/Slider";
import { CiLocationOn } from "react-icons/ci";
import Features from "../components/Features";
import { useLoaderData } from "react-router";
import DOMPurify from "dompurify";

const SinglePage = () => {
  // const { id } = useParams();
  // console.log(id);
  const post = useLoaderData();
  return (
    <div className="flex gap-5 py-5">
      {/* Details */}
      <div className="flex-3 pr-5">
        <Slider images={post.images} />
        <div className="mt-14 flex justify-between">
          <div className="flex flex-col items-start gap-5 ">
            <h1 className="text-3xl">{post.title}</h1>
            <div className="flex justify-center items-center gap-1 text-gray-500">
              <CiLocationOn />
              <p>{post.address}</p>
            </div>
            <h1 className="px-3 py-1 bg-yellow-300/40 rounded-lg text-lg text-gray-500 font-light">
              ${post.price}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3.5 w-40 rounded-xl bg-yellow-300/30">
            <img
              src={post.user.avatar || "/noavatar.jpg"}
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <h1 className="font-semibold">{post.user.username}</h1>
          </div>
        </div>
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.postDetail.desc),
          }}
        ></div>
      </div>
      {/* Features */}
      <div className="flex-2 ">
        <Features post={post} />
      </div>
    </div>
  );
};

export default SinglePage;
