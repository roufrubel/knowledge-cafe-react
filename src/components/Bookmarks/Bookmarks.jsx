import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-2 m-2">
            <h4 className="text-3xl">Bookmarked blogs :  {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}


export default Bookmarks;