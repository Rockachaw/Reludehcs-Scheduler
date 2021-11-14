import React from 'react';
import { Heading, HStack, VStack } from '@chakra-ui/react';

const Home = () => {

    const [data, setData] = React.useState('[{}]');
    const [data2, setData2] = React.useState('[{}]');
    const [data3, setData3] = React.useState('[{}]');
    const [data4, setData4] = React.useState('[{}]');
    const [data5, setData5] = React.useState('[{}]');
    const [data6, setData6] = React.useState('[{}]');
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
        
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            var class1 = urlParams.get("class1").split(" ");
            var class2 = urlParams.get("class2").split(" ");
            var class3 = urlParams.get("class3").split(" ");
            var class4 = urlParams.get("class4").split(" ");
            var class5 = urlParams.get("class5").split(" ");
            var class6 = urlParams.get("class6").split(" ");



            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class1[1]+"&course_prefix="+class1[0], requestOptions)
              .then(response => response.text())
              .then(data => setData(data))
              .catch(error => console.log('error', error));

            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class2[1]+"&course_prefix="+class2[0], requestOptions)
              .then(response => response.text())
              .then(data2 => setData2(data2))
              .catch(error => console.log('error', error));

            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class3[1]+"&course_prefix="+class3[0], requestOptions)
              .then(response => response.text())
              .then(data3 => setData3(data3))
              .catch(error => console.log('error', error));

            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class4[1]+"&course_prefix="+class4[0], requestOptions)
              .then(response => response.text())
              .then(data4 => setData4(data4))
              .catch(error => console.log('error', error));

            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class5[1]+"&course_prefix="+class5[0], requestOptions)
              .then(response => response.text())
              .then(data5 => setData5(data5))
              .catch(error => console.log('error', error));

            fetch("https://floating-sea-33671.herokuapp.com/https://api.utdnebula.com/v1/sections/search?course_number="+class6[1]+"&course_prefix="+class6[0], requestOptions)
              .then(response => response.text())
              .then(data6 => setData6(data6))
              .catch(error => console.log('error', error));


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
      <br></br>
      <Heading>{JSON.parse(data2)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data2)[0].section_name}</Heading>
      <Heading>{JSON.parse(data2)[0].days}</Heading>
      <Heading>{JSON.parse(data2)[0].times}</Heading>
      <Heading>{JSON.parse(data2)[0].location}</Heading>
      <br></br>
      <Heading>{JSON.parse(data3)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data3)[0].section_name}</Heading>
      <Heading>{JSON.parse(data3)[0].days}</Heading>
      <Heading>{JSON.parse(data3)[0].times}</Heading>
      <Heading>{JSON.parse(data3)[0].location}</Heading>
      <br></br>
      <Heading>{JSON.parse(data4)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data4)[0].section_name}</Heading>
      <Heading>{JSON.parse(data4)[0].days}</Heading>
      <Heading>{JSON.parse(data4)[0].times}</Heading>
      <Heading>{JSON.parse(data4)[0].location}</Heading>
      <br></br>
      <Heading>{JSON.parse(data5)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data5)[0].section_name}</Heading>
      <Heading>{JSON.parse(data5)[0].days}</Heading>
      <Heading>{JSON.parse(data5)[0].times}</Heading>
      <Heading>{JSON.parse(data5)[0].location}</Heading>
      <br></br>
      <Heading>{JSON.parse(data6)[0].instructors}</Heading>
      <Heading>Rate My Professor Score: 5</Heading>
      <Heading>{JSON.parse(data6)[0].section_name}</Heading>
      <Heading>{JSON.parse(data6)[0].days}</Heading>
      <Heading>{JSON.parse(data6)[0].times}</Heading>
      <Heading>{JSON.parse(data6)[0].location}</Heading>
    </VStack>
  );
};

export default Home;