import React from 'react';
import { useEffect, useState } from 'react';
import axios, { Axios } from "axios";
// import '../../components/SingleContent';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';

function Trending() {
    const Trending_css = {
        padding: "10px",
        fontSize: "30px",
        color: " white ",
        textAlign: "center",
        justifyContent: " center ",
        alignItems: " center ",
    };

    const [content, setContent] = useState([]);
    const [page , setPage] = useState(1);

    // USING axios form axios

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page} `
        );
        console.log(data);
        setContent(data.results);
        console.log(data.results);
    };

    useEffect(() => {
        window.scroll(0,0);

        fetchTrending();

    }, [page]);





    return (
        <div>
            <span style={Trending_css} className="pageTitle">Trending</span>

            <div className='trending'>
                {
                    content && content.map((c) =>
                        <SingleContent
                            key={c.id} id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />)
                }
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending;