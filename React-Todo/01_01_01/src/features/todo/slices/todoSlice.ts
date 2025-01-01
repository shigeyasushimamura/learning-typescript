import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { EditTask, Tag } from "../../../types/types";

export interface TaskState {
  editedTask: EditTask;
  editedTag: Tag;
}

const initialState: TaskState = {
  editedTask: {
    id: 0,
    title: "",
    tag: 0,
  },
  editedTag: {
    id: 0,
    name: "",
  },
};

// sliceはreduxのstoreでデータを管理する基本単位
// storeはsliceの集合単位
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload;
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    },
    setEditedTag: (state, action: PayloadAction<Tag>) => {
      state.editedTag = action.payload;
    },
    resetEditedTag: (state) => {
      state.editedTag = initialState.editedTag;
    },
  },
});

// actionを取得 <- componentでdispatchするときに利用
export const { setEditedTag, setEditedTask, resetEditedTag, resetEditedTask } =
  taskSlice.actions;

// reducerを取得<- storeが利用
export default taskSlice.reducer;

// storeからstateを取得 <- componentでstateを利用したいときに利用
export const selectTask = (state: RootState) => state.task.editedTask;
export const selectTag = (state: RootState) => state.task.editedTag;
