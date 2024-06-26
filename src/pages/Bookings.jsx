import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Empty from "../ui/Empty";
import BookingTableOperations from "../features/bookings/BookingTableOperations"
function Bookings() {
const bookings = [];
  if(!bookings) return <Empty resourceName = "bookings"/>

  return (
<>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
    <BookingTableOperations/>
    </Row>
    <BookingTable/>

</>    
  );
}

export default Bookings;
