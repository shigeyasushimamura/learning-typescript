import { FC, memo } from "react";
import { useAppDispatch } from "../../../hooks";
import { setEditedTask } from "../slices/todoSlice";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useMutateTask } from "../hooks/useMutateTask";
import { Task } from "../../../types/types";

interface Props {
  task: Task;
}

const TaskItem: FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { deleteTaskMutation } = useMutateTask();
  console.log("rendered TaskItem");

  if (deleteTaskMutation.isLoading) {
    return <p>Deleteing...</p>;
  }

  return;
};

export default TaskItem;
