import React from "react";
import { useDispatch } from "react-redux";
import { toggleAnmount } from "../redux/reducer/product-reducer";
import { remove } from "../redux/reducer/product-reducer";

export const StoreCard = ({ id, img, name, userCount, userPrice, count }) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = React.useState(false);

  const addCount = () => {
    if (userCount < count) {
      dispatch(toggleAnmount({ type: "add", id }));
    } else {
      setShowBtn(true);
    }
  };

  const removeProduct = ()=>{
    dispatch(toggleAnmount({type:"remove",id}))
  }

  const deleteProduct = ()=>{
    dispatch(remove({id}))
  }

  return (
    <div className="flex items-center gap-[40px] border rounded-md mt-1 relative">
      <div className="w-[100px]">
        <img src={img} alt="img" />
      </div>
      <div>
        <h2 className="text-lg">{name}</h2>
        <p>{count} total count</p>
        <strong>{userPrice}$</strong>
        <div>

          <button
            disabled={showBtn || userCount === count}
            onClick={addCount}
            className=" disabled:bg-red-400   bg-slate-400 py-1 px-2 rounded-md"
          >
            +
          </button>



          
          <span className="">{userCount}</span>

          {userCount >1 ? (
                      <button  disabled={userCount < 2} onClick={removeProduct} className="bg-slate-400 py-1 px-2 rounded-md">-</button>
          ):(
            <button onClick={deleteProduct} className="bg-red-400 py-1 px-2 rounded-md">delete</button>
          )}

        </div>
        <button className="absolute top-8 right-5 bg-red-400 py-1 px-2 rounded-md">
          X
        </button>
      </div>
    </div>
  );
};
