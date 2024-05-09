import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 p-2 m-2">
            <div className="p-4 my-2 rounded-xl bg-purple-50 border-2 border-purple-200">
        <h4 className="text-xl text-purple-700">Reading time: {readingTime}</h4>
      </div>
            <h4 className="text-2xl p-2 mt-4">Bookmarked blogs :  {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id} 
                    bookmark={bookmark}
                    readingTime={readingTime}
                     ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number
}


export default Bookmarks;