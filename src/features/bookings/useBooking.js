import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings(){

  const [searcParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searcParams.get("status");

// filteration
  const filter = !filterValue || filterValue === 'all' 
  ? null : {field: "status" , value: filterValue};

// Pagination
  const page = !searcParams.get("page") ? 1 : Number(searcParams.get("page"));


        const {
          isLoading ,
          data: {data:bookings, count} = {},
            error,
        } = useQuery({
          queryKey: ['bookings', filter,page],
          queryFn: () => getBookings({filter, page})

        });

        const pageCount = Math.ceil(count/PAGE_SIZE);

if(page < pageCount){
queryClient.prefetchQuery({
  queryKey: ['bookings' , filter,page+1],
  queryFn: () => getBookings({filter, page:page+1}),
})
}

if(page > 1){
queryClient.prefetchQuery({
  queryKey: ['bookings' , filter,page-1],
  queryFn: () => getBookings({filter, page:page-1}),
})
}
        return {isLoading , error , bookings ,count}
}