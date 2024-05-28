import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: any; id: any }) =>
      createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err: {
      message: Renderable | ValueFunction<Renderable, Toast>;
    }) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
