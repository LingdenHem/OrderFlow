import React, { useEffect, useState } from "react";

type FoodItem = {
  id: number;
  name: string;
  price: string;
};

function Food() {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const FoodListData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/food");
        const result = await response.json();
        setFoodList(result.data);
      } catch (error) {
        setError("error fetching data from api/food");
      }
    };

    FoodListData();
  }, []);

  const cartCount = cartItems.length;

  return (
    <div>
      {error && <p>{error}</p>}
      {foodList.length === 0 ? (
        <p>No foodlist available</p>
      ) : (
        <div className="flex justify-center m-auto mt-14 w-[800px]">
          <div className="grid grid-cols-3 justify-items-center gap-6">
            {foodList.map((food, index) => {
              const count = cartItems.filter((i) => i === index).length;

              return (
                <div
                  key={index}
                  onClick={() => {
                    setCartItems((prev) => [...prev, index]);
                  }}
                  className={`relative h-[200px] w-[200px] p-4 text-white cursor-pointer rounded-lg transition bg-blue-400 hover:bg-blue-500`}>
                  <p>{food.name}</p>
                  <p>{food.price}</p>
                  {count > 0 && (
                    <span className="absolute bottom-2 right-2 text-xs bg-white text-black px-2 py-0.5 rounded">
                      {count}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <p className="text-lg font-semibold">Varukorg: {cartCount}</p>
      </div>
    </div>
  );
}

export default Food;
