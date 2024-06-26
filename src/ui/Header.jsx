import styled from "styled-components";
// import Logout from "../features/authentication/Logut";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar"

const StyledHeading = styled.header`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-bottom: 1px solid var(--color-grey-100);

    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;

`;

function Header(){
    return(
        <StyledHeading>
            <UserAvatar/>
   <HeaderMenu/>

             </StyledHeading>
    )
}

export default Header;