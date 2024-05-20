import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="p-3 my-3 mt-4">
        <div className="text-black border shadow-xl duratblaion-200 card w-92 bg-base-100 hover:scale-105 dark:bg-white ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="text-white card-body dark:text-black">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="justify-between card-actions">
              <div className="badge badge-outline dark:text-slate-900">${item.Price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
