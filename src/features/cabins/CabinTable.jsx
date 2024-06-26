/* eslint-disable no-unused-vars */

import Spinner from '../../ui/Spinner'
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from '../../ui/Empty';


function CabinsTable(){

  const {isLoading , cabins} = useCabin();
  const [searchParams] = useSearchParams();
 
  if(isLoading) return <Spinner/>
 if(!cabins.length) return <Empty resourceName='cabins'/>


  const filterValue = searchParams.get("discount") || "all";

  let filterCabins;
  if(filterValue === 'all') filterCabins = cabins;
  if(filterValue === 'no-discount') filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if(filterValue === 'with-discount') filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  
  return(
    <Menus>
    <Table columns = '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr' > 
      <Table.Header> 
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        {/* <div>Description</div> */}
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body 
      data={filterCabins} 
      render={(cabin) => <CabinRow cabin = {cabin}
       key={cabin.id}/>}
       />
    </Table>
    </Menus>
  )
}

export default CabinsTable;