import React, { useEffect, useState } from "react";

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   Container,
   Stack,
   Text,
} from "@chakra-ui/react";
// import { SideDrawer } from "../components/SideDrawer";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ChatState } from "../context/Chatprovider";
import { Link, useHistory } from "react-router-dom";
// import * as React from "react";

import axios from "axios";

// import { Mychats } from "../components/Mychats";
// import { ChatsBox } from "../components/chatsBox";
export const ChatPage = () => {
   const [datas, setData] = useState([]);
   const history = useHistory();

   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   console.log("userrrrrrrrrrrrrr", userInfo);
   const { user } = ChatState();

   console.log("user", user);

   useEffect(() => {
      try {
         const getData = async () => {
            const config = {
               headers: {
                  Authorization: `Bearer ${userInfo.data.data}`,
               },
            };
            await axios
               .get(" https://profitmodel-server.herokuapp.com/api/product", config)
               .then((dat) => setData([dat]))
               .catch((err) => console.log(err));
         };
         getData();
      } catch (error) {
         console.log(error.message);
      }
   }, []);
   console.log(
      "datas",
      datas.map((val) => val.data.data.map((c) => c))
   );

   const handleupdate = (id) => {};

   const handle = async (id) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.data.data}`,
            },
         };
         await axios.delete(` https://profitmodel-server.herokuapp.com/api/product/${id}`, config);
         console.log("ma'lumot o'chirildi");
         window.location.reload("/");
      } catch (error) {
         console.log(error.message);
      }
      console.log(id, "idddddddddddddddd");
   };

   return (
      <div style={{ width: "100%" }}>
         <nav
            style={{
               background: ["#F8F9FB"],
               height: "60px",

               justifyContent: "space-around",
               alignItems: "center",
               display: "flex",
               color: "gray",
            }}
         >
            <h1 style={{ fontSize: "20px", cursor: "pointer" }}>
               <Link to="create">+Create</Link>
            </h1>
         </nav>

         <div style={{ display: "inline-grid", gridTemplateColumns: "auto auto auto auto" }}>
            {datas.length > 0 ? (
               datas.map((val) =>
                  val.data.data.map((c) => (
                     <Card style={{ width: "18rem", marginTop: "50px", marginLeft: "30px" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title>{c.name}</Card.Title>
                           <Card.Text>{c.description}</Card.Text>
                           <Card.Text>{c.price}</Card.Text>
                           <Button onClick={() => handle(c.id)} variant="danger">
                              Delete
                           </Button>
                           <Button onClick={() => handleupdate(c.id)} variant="primary">
                              <Link to="create"> Update</Link>
                           </Button>
                        </Card.Body>
                     </Card>
                  ))
               )
            ) : (
               <h1 style={{ color: "red", fontSize: "70px" }}>Ma'lumot topilmadi</h1>
            )}
         </div>
      </div>
   );
};
