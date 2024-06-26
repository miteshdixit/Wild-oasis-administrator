/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";


const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({children}) {
//1. load the authenticated user
const {isAuthenticated , isLoading} = useUser();
const navigate = useNavigate()

//2.if there is no authenticated user, redirect to the /login
useEffect(function(){
if(!isAuthenticated && !isLoading) navigate("/login");

},[isAuthenticated,isLoading,navigate])

//3. while loading, shoe a spinner
if(isLoading) return(<FullPage>
  <Spinner/>
</FullPage>
)


  return children;
}

export default ProtectedRoute;