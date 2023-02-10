import {
  Heading,
  Box,
  Flex,
  Button,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMembers } from "../service/member";
import { EditionModal } from "./editionModal";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const Member = () => {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMember] = useState();
  const [isEditingMember, setIsEditingMember] = useState(false);

  const toggleIsEditingMember = (memberData) => {
    setIsEditingMember((prev) => !prev);
    console.log(memberData)
    setSelectedMember(memberData);
  };

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  return (
    <>
      {members?.map((member) => {
        return (
          <>
            <Flex direction="column" sx={{ gap: 2 }}>
              <Box
                h={100}
                w={100}
                bgGradient="linear-gradient(150deg, #2d5683 0%, #ffa624 100%);"
                sx={{ alignSelf: "center" }}
              ></Box>

              <Heading as="h4" size="md">
                {member.name}
              </Heading>
              <Heading as="h5" size=" md">
                {member.position}
              </Heading>
              <ButtonGroup>
                <IconButton
                  sx={{ width: "20%" }}
                  aria-label="editIcon"
                  icon={<EditIcon />}
                  onClick={()=>toggleIsEditingMember(member)}
                />
                <IconButton
                  sx={{ width: "20%" }}
                  aria-label="deleteIcon"
                  icon={<DeleteIcon />}
                />
              </ButtonGroup>
            </Flex>
            <EditionModal
              isEditingMember={isEditingMember}
              toggleIsEditingMember={toggleIsEditingMember}
              memberData={selectedMembers}
              setMembers={setMembers}
            />
          </>
        );
      })}
    </>
  );
};
