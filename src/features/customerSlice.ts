import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  id: string;
  foodToAdd: string;
}

interface CustomerState {
  value: Customer[];
};

const initialState: CustomerState = {
  value: []
}

export const customerSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addCustomer(state, action: PayloadAction<Customer>) {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      const customer = state.value.find(c => c.id === action.payload.id);
      if (customer) {
        customer.food.push(action.payload.foodToAdd);
      }
    }
  }
})

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;