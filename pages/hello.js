import React from 'react';
import { Heading, HStack, VStack } from '@chakra-ui/react';

const Home = () => {

    const [data, setData] = React.useState('[{}]');
    var classData = [];

    React.useEffect(() => {
        const fetchData = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "dd1h55UQUb8x5nQIPW2iJ1ABaIDx9iv7");
        
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
        
            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number=1337&course_prefix=cs", requestOptions)
                .then(response => response.text())
                .then(data => setData(data))
                .catch(error => console.log('error', error));


            /*fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number=3390&course_prefix=ecs", requestOptions)
                .then(response => response.text())
                .then(data => classData.push(data))
                .catch(error => console.log('error', error));*/


        }
        const test = (data) => {
          console.log(data);
          //console.log(JSON.parse(data)[0].instructors)
        }

        /*const updateData = (data) => {
          classData.push(data)
          setData(data)
        }*/

        /*const chooseBestProf = (classData) => {
            //var json = JSON.parse(classData);
            //var bestProf = {};
            //bestProf.instructor = json[0].instructors
            console.log(classData[0]);
            console.log(classData[1]);
            setData(classData[0]);

        }*/
    
        fetchData();
  }, []);

  return (
    <VStack>
      <Heading>{JSON.parse(data)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data)[0].section_name}</Heading>
      <Heading>{JSON.parse(data)[0].days}</Heading>
      <Heading>{JSON.parse(data)[0].times}</Heading>
      <Heading>{JSON.parse(data)[0].location}</Heading>
    </VStack>
  );
};

export default Home;