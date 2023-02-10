import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMembers, updateMembers } from "../service/member";

export const EditionModal = ({
  isEditingMember,
  toggleIsEditingMember,
  memberData,
  setMembers,
}) => {
  const [memberDataEdited, setMemberDataEdited] = useState();

  useEffect(() => {
    setMemberDataEdited(memberData);
  }, [isEditingMember === true]);

  useEffect(() => {
    console.log(memberDataEdited);
  }, [memberDataEdited]);

  const handleEditMember = () => {
    console.log(memberDataEdited);
    updateMembers(memberDataEdited._id, {
      name: memberDataEdited.name,
      position: memberDataEdited.position,
    }).then((response) => {
      console.log(response);
      toggleIsEditingMember();
      getMembers().then((members) => {
        setMembers(members);
      });
    });
  };

  const handleInputChange = (e) => {
    setMemberDataEdited((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal isOpen={isEditingMember} onClose={toggleIsEditingMember}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar as informações do Membro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Nome do Membro</FormLabel>
            <Input
              value={memberDataEdited?.name}
              name="name"
              onChange={handleInputChange}
            />
            <FormLabel>Cargo do Membro</FormLabel>
            <Input
              value={memberDataEdited?.position}
              name="position"
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={toggleIsEditingMember}>
            Cancelar
          </Button>
          <Button colorScheme="blue" mr={3} onClick={handleEditMember}>
            Concluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
