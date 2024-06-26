/* eslint-disable no-unused-vars */
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSetting } from './useEditSettings';
import { useSettings } from './usesettings';

function UpdateSettingsForm() {
  const {isLoading ,  settings:
     {
    minBookingLength,
    maxBookingLength,maxGuestperBooking,breakFastPrice
     } = {},
          } = useSettings();
    
          const {updateSetting , isUpdating} = useEditSetting();
          if(isLoading) return <Spinner/>

          function handleUpdate(e , field) {
            const {value} = e.target;
            if(!value) return;
            updateSetting({[field] : value});
          }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e) => handleUpdate(e , "minBookingLength")} disabled = {isUpdating}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={(e) => handleUpdate(e , "maxBookingLength")} disabled = {isUpdating}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestperBooking} onBlur={(e) => handleUpdate(e , "maxGuestperBooking")} disabled = {isUpdating} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakFastPrice}onBlur={(e) => handleUpdate(e , "breakFastPrice")} disabled = {isUpdating} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
