import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardProps) => {
  const [foodToAdd, setFoodToAdd] = useState('');
  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFoodToCustomer({ id, foodToAdd }));
    setFoodToAdd('');
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((f, index) => <p key={index}>{f}</p>)}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodToAdd}
            onChange={(e) => setFoodToAdd(e.target.value)}
          />
          <button onClick={() => handleAddFood()}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard;