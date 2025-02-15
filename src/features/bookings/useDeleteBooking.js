import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking(){
    const queryClient = useQueryClient();

    const {isloading:isDeleting , mutate: deleteBooking} = useMutation({
  
      // mutationFn:(id) => deleteCabin(id),
      mutationFn: deleteBookingApi,
      onSuccess:() => {
           toast.success('booking successfully deleted')
  
           queryClient.invalidateQueries({
            queryKey:['bookings']
           })
      },
      onError: (err) => toast.error(err.message),
    })

    return {isDeleting , deleteBooking};
}