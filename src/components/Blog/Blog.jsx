import PropTypes from 'prop-types';
import { FaBookmark   } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {title, cover_img, profile, reading_time, posted_date, author, hashtags} = blog;
    return (
        <div className=" mb-20">
            <img src={cover_img} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between mt-4">
                <div className="flex">
                    <img className='w-14' src={profile} alt="" />
                    <div className="ml-6">
                        <h4 className='font-bold text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read <button
                    onClick={() => handleBookmarks(blog)}
                     className="ml-2 text-2xl text-red-500"
                     ><FaBookmark  /></button></span>
                </div>

            </div>
            <h2 className="text-2xl mt-2 mb-2">{title}</h2>
           <p>
           {
                hashtags.map((hash, idx) => <span key={idx}><a className="mr-2" href="">#{hash}</a></span>)
            }
           </p>
           <button onClick={() => handleMarkAsRead(reading_time)} className="mt-3 text-purple-700 underline text-lg">Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;