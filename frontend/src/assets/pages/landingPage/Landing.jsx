import React, { useEffect, useState } from "react";
import { getCurrentUserDetails, logOut } from "../../../utils/userDetails";
import { Card, CardBody, Flex, Box, Stack, Heading, Button, Image } from '@chakra-ui/react';
import Image1 from '../../Image1.png';

const Landing = () => {
  const [userInfo, setUserInfo] = useState(false);

  // const getDetails = async () => {
  //   try {
  //     const user = await getCurrentUserDetails();
  //     if (!user) {
  //       window.location.href = "/login";
  //     } else {
  //       setUserInfo(user.data.user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     logOut();
  //     window.location.href = "/login";
  //   }
  // };

  // useEffect(() => {
  //   getDetails();
  // }, []);

  return (
    <div className="p-10">
      {/* {JSON.stringify(userInfo)} */}
      <Card h='full'>
        <CardBody p={10}>
          <Flex>
            <Box w='100%' bg=''>
              <Stack mt='6' spacing='3'>
                <Heading size='2xl' textAlign='center'>Your Perfect Partner Few <br/>Clicks Away!!</Heading>
                <Box textAlign="left">
                  <Button variant='solid' colorScheme='orange' w='20%' marginLeft='60%' marginTop='10%'>
                    Register Now
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box w="100%">
              <Image
                src={Image1}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Landing;
