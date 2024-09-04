import React from "react";

function Cards({item}) {
  // using item as a prop to get the data here in cards component
  console.log(item)
  return (
    <>
      <div className="mt-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={item.img} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
