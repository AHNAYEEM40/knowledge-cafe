import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Proptypes from 'prop-types'

const Blogs = ({handleAddToBookMark}) => {
    const [blogs ,setBlogs] =useState([]);
    useEffect(() =>{
       fetch('FakeData.json')
       .then(res => res.json())
       .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">
                Blogs {blogs.length}
            </h2>
            {
                blogs.map(blog =>  
                <Blog key={blog.id} blog={blog}
                handleAddToBookMark={handleAddToBookMark}
                >

                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookMark:Proptypes.func
}
export default Blogs;