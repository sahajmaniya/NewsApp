import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Loader from './Loader';




function News(Props) {

    
    let {PageSize,Category,Country,Pageid} = Props;

    let [Articles, setArticles] = useState([]);
    let [Loading, setLoading] = useState(false);
    let [Page, setPage] = useState(Pageid);
    let [Totalresults, setTotalresults] = useState()
    let key = "ed6f71ec39e945ea8f3356870789170d"

    async function Update() {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${key}&page=${Page}&pageSize=${PageSize}`;
        let Data = await fetch(url);
        let ParseData = await Data.json();
        setArticles(ParseData.articles);
        setTotalresults(ParseData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        Update()
    },[Category])

    useEffect(()=>{
        setPage(1);
    },[Pageid,Category])

    function Prevfun() {
        setPage(--Page);
        Update();
    }

    function Nextfun() {
        setPage(++Page);
        Update();
    }




    return (
        <>


            <div className='flex justify-center mt-14'>
                <div className='container'>
                    {Loading && <Loader></Loader>}
                    <div className='my-10 grid lg:grid-cols-3 gap-4 lg:mx-24 md:grid-cols-2 sm:grid-cols-1 justify-center'>
                        {Articles && Articles.map((el) => {
                            return (
                                <div key={el.url} className='m-2'>
                                    <NewsItem id={el.source.id} Imgurl={el.urlToImage} Title={el.title.slice(0, 40)} Description={el.description ? el.description.slice(0, 50) : "No data..."} Url={el.url} Company={el.source.name}/>
                                </div>


                            )
                        })
                        }

                    </div>
                    <div className='flex justify-between mx-44 my-10'>
                        <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-3 rounded disabled:bg-blue-200" onClick={Prevfun} disabled={Page <= 1} >&larr; Previous</button>
                        <button className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded disabled:bg-blue-200" onClick={Nextfun} disabled={Page + 1 > Math.ceil(Totalresults / PageSize)}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        </>
    )
}


News.defaultProps = {
    Country: "in",
    PageSize: 9,
    Category: "general"
}

News.propTypes = {
    Country: PropTypes.string,
    PpageSize: PropTypes.number,
    Category: PropTypes.string
}


// ArtiData = [
//     {
//         "source": {
//             "id": "news24",
//             "name": "News24"
//         },
//         "author": "sport",
//         "title": "Cricket World Cup qualifier: Six talking points",
//         "description": "Two-time champions West Indies and 1996 winners Sri Lanka are among 10 teams competing for the final two spots at this year's Cricket World Cup in India.",
//         "url": "https://www.news24.com/sport/cricket/cricket-world-cup-qualifier-six-talking-points-20230616",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/8329/e51ba577fab34746b65ec9f35f32aecb.jpg",
//         "publishedAt": "2023-06-17T13:28:11+00:00",
//         "content": "Two-time champions West Indies and 1996 winners Sri Lanka are among 10 teams competing for the final two spots at this year's Cricket World Cup in India.\r\nAFP Sport picks out six talking points at th… [+4017 chars]"
//     }
// ]


export default News
