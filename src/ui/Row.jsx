import styled , {css} from "styled-components";
// import { CSS } from "styled-components/dist/types";

const Row = styled.div`
    display: flex;

    ${(props) => 
    props.type === "horizontal" && css`justify-content: space-between;
    align-items: center;
    `}

    ${(props) => 
    props.type === "vertical" && css`flex-direction: column;
   gap: 1.6rem;
    `}
`
export default Row;