import React from 'react'

function Cards({item}) {
    return (
        <>
            <div className='mt-4 mb-4 p-3'>
                <div className="card  w-92 shadow-xl">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes"
                            className='w-full ' 
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-orange-500 text-white px-4 py-3">NEW</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline hover:bg-orange-500 hover:text-white px-4 py-3">${item.price}</div>
                            <div className="badge badge-outline hover:bg-orange-500 hover:text-white px-4 py-3">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
