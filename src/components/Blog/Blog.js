import React, { useEffect, useState } from 'react';
import Singleblog from '../Singleblog/Singleblog';
import './Blog.css';

const Blog = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceall.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (<div className="">
        <div className="">
            <h1>Learn Your way---read our Blog</h1>
            {
                services.map(service => <Singleblog
                    service={service} key={service.key}
                ></Singleblog>)

            }
        </div>
    </div>
    );
};
export default Blog;