import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookMark}) => {
    const {title ,author_image ,reading_time,author,posted_date,hashtags} =blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={author_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
             <div className='flex'>
            <img className='w-14 rounded-2xl' src={author_image} alt="" />
            <div>
                <h3 className='text-3xl'>{author}</h3>
                <p>{posted_date}</p>
             </div>
             </div>
             
         <div>
           <span>{reading_time} Min Read</span>
           <button onClick={() =>handleAddToBookMark(blog)} className='ml-2'><CiBookmark></CiBookmark></button>
         </div>



            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            {
                hashtags.map(( hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                
            }
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func
}
export default Blog;