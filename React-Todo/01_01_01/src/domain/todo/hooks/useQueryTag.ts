import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "../../../types/types";

export const useQueryTags = () => {
  const getTags = async () => {
    const { data } = await axios.get<Tag[]>(
      `${process.env.REACT_APP_REST_URL}/Tags`
    );
    return data;
  };
  return useQuery<Tag[], Error>({
    queryKey: ["Tags"],
    queryFn: getTags,
    staleTime: 60000,
  });
};
