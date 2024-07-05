import React from 'react';



function NewsItem(Props){

  
    let { id, name, author, Title, Imgurl, Description, Url , Company} = Props
    return (
      <>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-96 h-64" src={Imgurl?Imgurl:"https://tse1.mm.bing.net/th?id=OIP.yYBFzWZ0R970KK2bJhwO9AHaEi&pid=Api&P=0&h=180"} />
      <div className='font-semibold text-right text-gray-300 pr-3'>{Company}</div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Title}...
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Description}...
            </p>
            <div className='flex justify-center overflow-hidden'>
            
            <a
              href={Url}
              target="_blank"
              className="inline-block px-8 py-2 font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in rounded-lg shadow-xs cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 text-xs tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-2xl hover:underline"
            >
              Read more
            </a>
            </div>
          </div>
        </div>



      </>
    )
  }


export default NewsItem
