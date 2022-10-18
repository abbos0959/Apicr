import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
export const FormControll = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "600px",
            marginTop: "40px",
         }}
      >
         <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="First name" />
            <FormLabel>Name</FormLabel>
            <Input placeholder="First name" /> <FormLabel>Name</FormLabel>
            <Input placeholder="First name" /> <FormLabel>Name</FormLabel>
            <Input placeholder="First name" /> <FormLabel>Name</FormLabel>
            <Input placeholder="First name" /> <FormLabel>Name</FormLabel>
            <Input placeholder="First name" />
            <Button style={{ width: "100%",marginTop:"20px" }}>Create</Button>
         </FormControl>
      </div>
   );
};
