import React, { useEffect, useState } from "react";

type FoodItem = {
  id: number;
  name: string;
  price: string;
};

function Food() {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const FoodListData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/food");
        const data: FoodItem[] = await response.json();
        setFoodList(data);
      } catch (error) {
        setError("error fetching data from api/food");
      }
    };

    FoodListData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {foodList.length === 0 ? (
        <p>No foodlist availabel</p>
      ) : (
        <div className=" flex justify-center m-auto mt-14  w-[800px]">
          <div className=" grid grid-cols-3 justify-items-center gap-6 ">
            {foodList.map((food, index) => (
              <div
                key={index}
                className="h-[200px] w-[200px] bg-blue-400 p-4 text-white">
                <p>{food.name}</p>
                <p>{food.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Food;
