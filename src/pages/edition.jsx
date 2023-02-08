import { Heading, Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const Members = [
  { name: "Manuela Gripp Silva", position: "Assessora", picture: "manuela" },
  { name: "Yves Antônio Guimarãres", position: "Diretor", picture: "yves" },
  { name: "Joana Sarmet Smiderle", position: "Presidente", picture: "manuela" },
];

export const Edition = () => {


  const [isEditingMember, setIsEditingMember] = useState(true);


  return (
    <>
      <Box pl={4}>
        <Heading as={"h3"}>Editar Membros</Heading>

        <Flex justify="space-evenly" >
          {Members.map((member) => {
            return (
              <Flex direction="column" sx={{gap:2}} >
                <Box
                  h={100}
                  w={100}
                  bgGradient="linear-gradient(150deg, #2d5683 0%, #ffa624 100%);"
                  sx={{alignSelf: "center"}}
                ></Box>
                {isEditingMember ? (
                  <>
                    <Input placeholder="Basic usage" value={member.name} />
                    <Input placeholder="Basic usage" value={member.position} />
                  </>
                ) : (
                  <>
                    <Heading as="h4" size="md"  >
                      {member.name}
                    </Heading>
                    <Heading as="h5" size=" md"  >
                      {member.position}
                    </Heading>
                  </>
                )}
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};
