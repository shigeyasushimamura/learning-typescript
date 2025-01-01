import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import taskReducer from "../features/todo/slices/todoSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

// typeof: store.dispatchの型を返却
export type AppDispatch = typeof store.dispatch;
// ReturnType: <>の型の戻り値を返却
export type RootState = ReturnType<typeof store.getState>;
// ReturnTypeはThunk関数が返す値の型を提供する。デフォルトはvoid
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
