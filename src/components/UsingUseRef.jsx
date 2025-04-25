import React, { useEffect, useRef, useState } from 'react'

const UsingUseRef = () => {

    const [dominio] = useState('https://playground.4geeks.com')

    const [images] = useState([
        'https://picsum.photos/id/345/900/400',
        'https://picsum.photos/id/454/900/400',
        'https://picsum.photos/id/666/900/400',
        'https://picsum.photos/id/290/900/400',
        'https://picsum.photos/id/670/900/400',
        'https://picsum.photos/id/846/900/400',
    ])

    const [songs] = useState([
        {
            id: 1,
            name: "Mario Castle",
            url: "/sound/files/mario/songs/castle.mp3",
            category: "category"
        },
        {
            id: 2,
            name: "Mario Star",
            url: "/sound/files/mario/songs/hurry-starman.mp3",
            category: "category"
        },
        {
            id: 3,
            name: "Mario Overworld",
            url: "/sound/files/mario/songs/overworld.mp3",
            category: "category"
        },
        {
            id: 4,
            name: "Mario Stage 1",
            url: "/sound/files/mario/songs/stage1.mp3",
            category: "category"
        },
        {
            id: 5,
            name: "Mario Stage 2",
            url: "/sound/files/mario/songs/stage2.mp3",
            category: "category"
        }
    ])

    const search = useRef(null)

    const viewer = useRef(null)

    useEffect(() => {
        search.current.focus()
    }, [])

    const searchData = () => {
        console.log(search.current.value)
    }

    const showImage = url => {
        //console.log(url)
        viewer.current.src = url
    }

    return (
        <>
            <div>UsingUseRef</div>

            <div className='w-75 mx-auto my-5 input-group'>
                <input ref={search} type="search" name="" id="" className="form-control" placeholder='Search...' />
                <button className="btn btn-primary btn-sm" onClick={searchData}>Search</button>
            </div>



            <div className="w-50 mx-auto my-5">
                <img ref={viewer} alt="" width={648} height={648} style={{
                    width: '648px',
                    height: '648px',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                }} />
            </div>

            <div className='w-50 mx-auto my-3 d-flex gap-2 overflow-x-scroll'>
                {
                    images.map((url, index) => (
                        <img key={index} src={url} width={100} height={100} onClick={() => showImage(url)} />
                    ))
                }
            </div>

            <div className="mx-auto w-50">
                <audio src="https://playground.4geeks.com/sound/files/mario/songs/castle.mp3" controls />
            </div>

        </>
    )
}

export default UsingUseRef