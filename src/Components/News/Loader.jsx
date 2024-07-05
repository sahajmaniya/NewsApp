import React from 'react'
// import loading from './loading.gif'

function Loader() {

    return (
        <>
            <div className='flex justify-center mt-12 w-full fixed' height={"60px"}>
                <img src={`https://i.gifer.com/ZZ5H.gif`} alt="loading" height={"30px"} width={"30px"} />
            </div>
        </>
    )
}


export default Loader