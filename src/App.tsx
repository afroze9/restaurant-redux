import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";


function App() {
  const [reservationName, setReservationName] = useState('');
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value);
  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => <ReservationCard key={index} name={name} index={index} />)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation} >Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => <CustomerCard key={index} id={customer.id} name={customer.name} food={customer.food} />)}
        </div>
      </div>
    </div>
  );
}

export default App;