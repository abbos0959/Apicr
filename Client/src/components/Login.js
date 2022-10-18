import {
   VStack,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   InputRightElement,
   Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";

import { useHistory } from "react-router-dom";
export const Login = () => {
   const toast = useToast();
   const history = useHistory();
   const [phone, setEmail] = useState(0);
   const [password, setPassword] = useState("");
   const [show, setShow] = useState(false);
   const [loading, setloading] = useState(false);

   const handeShow = () => {
      setShow(!show);
   };
   const submitHandler = async () => {
      setloading(true);
      if (!email || !password) {
         toast({
            title: "siz email yoki parolni kiritmadingiz",
            // description: "We've created your account for you.",
            status: "warning",
            duration: 5000,
            isClosable: true,
         });
         return;
      }
      try {
         const config = {
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json; charset=UTF-8",
            },
         };
         console.log(email, password);
         const data = await axios.post(
            "https://profitmodel-server.herokuapp.com/api/auth/login",
            { phone, password },
            // config
         );
         console.log(data, "bi dayayayyaaa");
         toast({
            title: "Siz Tizimga kirdingiz",

            status: "success",
            duration: 5000,
            isClosable: true,
         });
         console.log(data);
         localStorage.setItem("userInfo", JSON.stringify(data));
         setloading(false);
         history.push("/chats");
      } catch (error) {
         toast({
            title: `${error.response.data.message}`,

            status: "error",
            duration: 5000,
            isClosable: true,
         });
      }
   };

   return (
      <VStack spacing="5px">
         <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
               value={phone}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Phone Kiriting"
            />
         </FormControl>
         <FormControl id="password" isRequired>
            <FormLabel>Parol</FormLabel>
            <InputGroup>
               <Input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parolingizni Kiriting"
               />
               <InputRightElement>
                  <Button h="1.75rem" size="sm" onClick={handeShow}>
                     {show ? "hide" : "show"}
                  </Button>
               </InputRightElement>
            </InputGroup>
         </FormControl>

         <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
            Login
         </Button>
         <Button
            variant={"solid"}
            colorScheme="red"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={() => {
               setEmail("guest@example.com");
               setPassword("123456");
            }}
         >
            Get Guest
         </Button>
      </VStack>
   );
};
