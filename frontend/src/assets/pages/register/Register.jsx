import React, { useState } from "react";
import { Button, useDisclosure, Input } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const Register = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [name, setName] = useState('');
  const [candidateMobile, setCandidateMobile] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [highestLevelOfEducation, setHighestLevelOfEducation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [religion, setReligion] = useState('');
  const [groups, setGroups] = useState([]);
  const [groupRequest, setGroupRequest] = useState([]);
  const [caste, setCaste] = useState('');
  const [address, setAddress] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [biodata, setBiodata] = useState('');
  const [groupsExpiry, setGroupsExpiry] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  }

  const backStep = () => {
    setActiveStep(activeStep - 1);
  }

  const steps = [
    {
      label1: 'Name',
      value1: name,
      onChange1: (e) => setName(e.target.value),
      label2: 'Mobile Number',
      value2: candidateMobile,
      onChange2: (e) => setCandidateMobile(e.target.value),
    },
    {
      label1: 'WhatsApp Number',
      value1: whatsappNumber,
      onChange1: (e) => setWhatsappNumber(e.target.value),
      label2: 'Email',
      value2: email,
      onChange2: (e) => setEmail(e.target.value),
    },
    {
      label1: 'Birthdate',
      value1: birthdate,
      onChange1: (e) => setBirthdate(e.target.value),
      label2: 'Gender',
      value2: gender,
      onChange2: (e) => setGender(e.target.value),
    },
    {
      label1: 'Father Name',
      value1: fatherName,
      onChange1: (e) => setFatherName(e.target.value),
      label2: 'Mother Name',
      value2: motherName,
      onChange2: (e) => setMotherName(e.target.value),
    },
    {
      label1: 'Highest Level Of Education',
      value1: highestLevelOfEducation,
      onChange1: (e) => setHighestLevelOfEducation(e.target.value),
      label2: 'Occupation',
      value2: occupation,
      onChange2: (e) => setOccupation(e.target.value),
    },
    {
      label1: 'Religion',
      value1: religion,
      onChange1: (e) => setReligion(e.target.value),
      label2: 'Caste',
      value2: caste,
      onChange2: (e) => setCaste(e.target.value),
    },
    {
      label1: 'Address',
      value1: address,
      onChange1: (e) => setAddress(e.target.value),
      label2: 'Biodata',
      value2: biodata,
      onChange2: (e) => setBiodata(e.target.value),
    },
  ];

  return (
    <div>
      <Button colorScheme='orange' onClick={onOpen}>Register</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'4xl'}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={3}>
            {steps[activeStep] && (
              <>
                <FormControl mt={2}>
                  <FormLabel>{steps[activeStep].label1}</FormLabel>
                  <Input value={steps[activeStep].value1} onChange={steps[activeStep].onChange1} placeholder={steps[activeStep].label1} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>{steps[activeStep].label2}</FormLabel>
                  <Input value={steps[activeStep].value2} onChange={steps[activeStep].onChange2} placeholder={steps[activeStep].label2} />
                </FormControl>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            {activeStep > 0 && <Button variant='ghost' onClick={backStep}>Back</Button>}
            {activeStep < steps.length - 1 ? (
              <Button colorScheme='blue' onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button colorScheme='blue' onClick={onClose}>
                Finish
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Register;
