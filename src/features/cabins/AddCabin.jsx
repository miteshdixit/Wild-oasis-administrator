// import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
// import CabinTabel from "./CabinTable"

function AddCabin(){
    // const [isOpenModal , setisOpenModal] = useState(false);

    return(
        <div>
<Modal>
    <Modal.Open opens = "cabin-form">
    <Button size="medium" variation="primary">Add new cabin</Button>
    </Modal.Open>
    <Modal.Window name = "cabin-form">
        <CreateCabinForm/>
    </Modal.Window>

    {/* <Modal.Open opens = "table">
    <Button size="medium" variation="primary">Show table</Button>
    </Modal.Open>
    <Modal.Window name = "table">
        <CabinTabel/>
    </Modal.Window> */}
</Modal>
        </div>



        //      <Button variation = 'primary'
        //     size = 'medium' onClick={() => setisOpenModal(!isOpenModal)}>Add new Cabin
        //     </Button>
        //     {isOpenModal && <Modal onClose={() =>setisOpenModal(false)}>
        //         <CreateCabinForm onCloseModal = {() => setisOpenModal(false)}/>
        //         </Modal>}
        // </div>
    )
}
export default AddCabin;