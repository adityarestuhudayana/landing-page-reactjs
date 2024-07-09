import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center mb-2 justify-between">
      <div className="w-[40%]">
        <p className="font-bold text-3xl">
          <ion-icon name="fast-food-outline"></ion-icon>Foo
        </p>
      </div>
      <div className="w-[60%] flex justify-between items-center">
        <div className="flex list-none gap-10 text-lg">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Shop</li>
        </div>
        <div className="sub-menu">
          <form action="">
            <div className="bg-red-50 shadow-md rounded-full px-3 flex items-center">
              <p className="text-xl mt-1 text-slate-500 px-2">
                <ion-icon name="search-outline"></ion-icon>
              </p>
              <input
                type="text"
                placeholder="Search"
                className="outline-none p-3 bg-transparent border-r-[1px] border-slate-300"
              />
              <p className="text-slate-500 text-2xl px-2">
                <ion-icon name="cart"></ion-icon>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
