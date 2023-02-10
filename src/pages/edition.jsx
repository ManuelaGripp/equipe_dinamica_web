import { Heading, Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Member } from "../components/member";

export const Edition = () => {

  return (
    <>
      <Box pl={4}>
        <Heading as={"h3"}>Editar Membros</Heading>

        <Flex justify="space-evenly" >
          <Member/>

      	

        </Flex>
      </Box>
    </>
  );
};
