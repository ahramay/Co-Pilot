import { createSlice } from "@reduxjs/toolkit";

interface Advisery {
  selectedAdvisery: string;
}

const initialState: Advisery = {
  selectedAdvisery: "General",
};

const selectedAdvisery = createSlice({
  name: "selectedAdvisery",
  initialState,
  reducers: {
    setAdvisery: (state, action) => {
      state.selectedAdvisery = action.payload;
    },
  },
});

export const { setAdvisery } = selectedAdvisery.actions;

export default selectedAdvisery.reducer;
