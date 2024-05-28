import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";

import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err: {
      message: Renderable | ValueFunction<Renderable, Toast>;
    }) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
