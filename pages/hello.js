import React from 'react';
import { Heading, HStack, VStack } from '@chakra-ui/react';

const Home = () => {
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();
      setName(data.name);
    };

    fetchData();
  }, []);

  return (
    <VStack>
      <Heading>{name}</Heading>
      <Heading>After the name</Heading>
    </VStack>
  );
};

export default Home;