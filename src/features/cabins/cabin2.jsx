/* eslint-disable no-unused-vars */

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {

  const {register , handleSubmit , reset, formState , getValues} = useForm();

  const {errors} = formState;

  const queryClient = useQueryClient();
  const {mutate , isLoading:isCreating} = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("new cabin successfully created");
      queryClient.invalidateQueries({queryKey:['cabin']});
      reset();
    },
    onError: (err) => 
      toast.error(err.message),
  });



function onSubmit(data){
  mutate({...data, image:data.image[0] });
  console.log(data);
  const fileObject = data.image[0].lastModifiedDate;
// // const lastModifiedDate = fileObject.lastModifiedDate;
}

function onError(error){
console.log(error);
}
  return (
      <Form onSubmit={handleSubmit(onSubmit , onError)}>
  
  <FormRow label="Cabin name" error={errors?.name?.message}> 
  <Input type="text" id="name" 
      disabled ={isCreating}
  {...register('name' ,{
            required: "this field is required",
          })}/>
  </FormRow>
        <FormRow label ="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" 
            disabled ={isCreating}

        {...register('maxCapacity' ,{
            required: "this field is required",
            min: {
              value:1,
              message:"Capacity should be at least 1"
            }
          }) 
        }/>
        </FormRow>
        <FormRow label ="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number"
            disabled ={isCreating}
        id="regularPrice" {...register('regularPrice' ,{
            required: "this field is required"
          })} />
         </FormRow>
  
         <FormRow label="discount" error={errors?.discount?.message}>
  <Input
    type="number"
    id="discount"
    disabled ={isCreating}
    defaultValue={0}
    {...register('discount', {
      required: "this field is required",
      validate: (value) =>
        value <= getValues().regularPrice ||
        "discount should be less than regular price",
    })}
  />
</FormRow>

  
        <FormRow  label ="description for website" error={errors?.description?.message}>
          <Textarea type="number" id="description" defaultValue="" 
                      disabled ={isCreating}
          {...register('description' ,{
            required: "this field is required",
          })}
           />
        </FormRow>
  
        <FormRow label ="Cabin photo" error={errors?.image?.message}>
          <FileInput id="image" accept="image/*"
          type="file"
          {...register('image' ,{
            required: "this field is required",
          })} />
        </FormRow>
  
        <FormRow>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button variation = 'primary'
              size = 'small' disabled={isCreating}>Add cabin</Button>
        </FormRow>
      </Form>
  
  );
}

export default CreateCabinForm;
