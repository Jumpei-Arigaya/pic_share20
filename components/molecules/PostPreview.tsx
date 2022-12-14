import { render } from "react-dom";
import { Post } from "../../types/api/Post";
import { PostPreview } from "../../types/PostPreview";
import GoodIcon from "../atoms/icon/GoodIcon";

const PostPreview = ({ profile_image, user_name, content, postImage }: PostPreview) => {
    let image;
    if (postImage) {
        image = window.URL.createObjectURL(postImage!);
    }


    return (
        <div className="h-[450px] w-[350px] lg:h-[550px] shadow-2xl bg-white">
            <div className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 m-4">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden hidden lg:inline-block">
                        <img src={profile_image} loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="hidden lg:inline-block">
                        <span className="block text-indigo-500">{user_name}</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a className="group w-[300px] h-[350px] lg:h-[370px] block bg-gray-100 overflow-hidden relative mt-1">
                        <img src={image} loading="lazy" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                    </a>
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <p className="text-gray-500 mb-4 overflow-hidden">{content}</p>
                    {/* <div className="flex justify-end items-end mt-auto">
                        <GoodIcon />
                    </div> */}
                </div>
            </div>
        </div >
    );
}

export default PostPreview;