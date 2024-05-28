import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

interface CabinData {
  name: string;
  maxCapacity: number | null;
  regularPrice: number | null;
  discount: number | null;
  image: File | string | null;
  description: string | null;
}

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: CabinData; id?: any }) =>
      createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err: {
      message: Renderable | ValueFunction<Renderable, Toast>;
    }) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";
// import { createEditCabin } from "../../services/apiCabins";

// export function useCreateCabin() {
//   const queryClient = useQueryClient();

//   const { mutate: createCabin, isLoading: isCreating } = useMutation({
//     mutationFn: ({
//       newCabinData,
//       id,
//     }: {
//       newCabinData: {
//         name: string;
//         maxCapacity: number | null;
//         regularPrice: number | null;
//         discount: number | null;
//         image: string | null;
//         description: string | null;
//       };
//       id?: any;
//     }) => createEditCabin(newCabinData, id),
//     // mutationFn: createEditCabin,
//     onSuccess: () => {
//       toast.success("New cabin successfully created");
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//     onError: (err: {
//       message: Renderable | ValueFunction<Renderable, Toast>;
//     }) => toast.error(err.message),
//   });

//   return { isCreating, createCabin };
// }
// (alias) useMutation<any, {
//     message: Renderable | ValueFunction<Renderable, Toast>;
// }, {
//     newCabinData: {
//         name: string;
//         maxCapacity: number | null;
//         regularPrice: number | null;
//         discount: number | null;
//         image: string | null;
//         description: string | null;
//     };
//     id?: any;
// }, unknown>(options: UseMutationOptions<any, {
//     message: Renderable | ValueFunction<Renderable, Toast>;
// }, {
//     newCabinData: {
//         name: string;
//         maxCapacity: number | null;
//         regularPrice: number | null;
//         discount: number | null;
//         image: string | null;
//         description: string | null;
//     };
//     id?: any;
// }, unknown>): UseMutationResult<any, {
//     message: Renderable | ValueFunction<Renderable, Toast>;
// }, {
//     newCabinData: {
//         name: string;
//         maxCapacity: number | null;
//         regularPrice: number | null;
//         discount: number | null;
//         image: string | null;
//         description: string | null;
//     };
//     id?: any;
// }, unknown> (+3 overloads)
// import useMutation
