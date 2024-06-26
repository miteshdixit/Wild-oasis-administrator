import {useNavigate} from 'react-router-dom';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import {toast} from "react-hot-toast";


export function useLogin() {

  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const {mutate: login , isLoading} = useMutation({
    mutationFn:({email , password}) => loginApi({email , password}),
    onSuccess:(user) => {
      // console.log(user);

      queryClient.setQueriesData(['user'] , user.user)
      navigate("/dashboard");
    },
    onError:(err) => {
      console.log("ERROR" , err);
      toast.error("provided Email or Password are incorrect");
    },
  })
 
  return {login , isLoading}
}