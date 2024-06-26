
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinsTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CreateTableOperation"

function Cabins(){
    return (
        <>
        <Row type = "horizontal">
            <Heading as="h1">
                All cabins
            </Heading>
            <CabinTableOperations/>
        </Row>

        <Row type = "vertical">
            <CabinsTable/>
           <AddCabin/>
        </Row>
        </>
    )
}

export default Cabins;

