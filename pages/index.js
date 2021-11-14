import Head from 'next/head'
import Link from 'next/link'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { StyleSheet, Text, View } from "react"
import { Input } from "@chakra-ui/react"
//import React, { Component } from 'react';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
  } from "@chakra-ui/react"
  import React from "react";
  //import { Input } from "reactstrap";
  import { Image } from '@chakra-ui/image'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'



function HomePage() {			

	var url = new URL("http://localhost:3000/results");

	const submit = () => {
		url.searchParams.append('class1', document.getElementById('class1').value);
		url.searchParams.append('class2', document.getElementById('class2').value);
		url.searchParams.append('class3', document.getElementById('class3').value);
		url.searchParams.append('class4', document.getElementById('class4').value);
		url.searchParams.append('class5', document.getElementById('class5').value);
		url.searchParams.append('class6', document.getElementById('class6').value);
		window.location.href = url;
	}

	return(
		<>
		<Box style={{backgroundImage: "url(https://ospa.utdallas.edu/ospa/files/utdallas-15718735-1100.jpg)",backgroundColor: "darkorange",height: "380px"}}>
			<Image text="center" boxSize="100px" src="https://i1.wp.com/utdesports.com/wp-content/uploads/2018/12/cropped-UTDmono_OL_flame.png?fit=576%2C576&ssl=1"/>
		</Box>
		<div style={{backgroundColor: "DarkOrange",height: "700px"}}>
		<Head style>
  			<title>Reludehcs-Scheduler</title>
  			<link rel="icon" href="https://i1.wp.com/utdesports.com/wp-content/uploads/2018/12/cropped-UTDmono_OL_flame.png?fit=576%2C576&ssl=1" />
		</Head>
		
		<h1 style={{fontSize: "50px",textAlign: "center",color: "green",backgroundColor: "DarkOrange"}}>Reludehcs-Scheduler</h1>
		{/*
		<FormControl id="amount">
  			<FormLabel>Number of Classes</FormLabel>
  			<NumberInput max={10} min={1}>
    		<NumberInputField />
			<NumberInputStepper>
      		<NumberIncrementStepper />
      		<NumberDecrementStepper />
    		</NumberInputStepper>
  		</NumberInput>
		</FormControl>


		
		{/*
		<VStack spacing="24px">
  			<Box w="800px" h="60px" bg="yellow.200">
			  <Input placeholder="Input Class" />
  			</Box>
  			<Box w="800px" h="60px" bg="yellow.200">
			  <Input placeholder2="Input Class" />
  			</Box>
  			<Box w="800px" h="60px" bg="yellow.200">
			  <Input placeholder3="Input Class" />
  			</Box>
		</VStack>
		*/}
		<div >
		<VStack>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 1</FormLabel>
  		<Input id="class1" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 2</FormLabel>
  		<Input id="class2" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 3</FormLabel>
  		<Input id="class3" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}} />
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 4</FormLabel>
  		<Input id="class4" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 5</FormLabel>
  		<Input id="class5" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl>
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 6</FormLabel>
  		<Input id="class6" type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "330px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		</VStack>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<Box onClick={() => submit()} style={{position: "absolute",right:"730px",borderRadius: 10}}w="60px" h="40px" bg="green" borderRadius="1g">
				<a style= {{textAlign: "center",color: "white"}}>Submit</a>
		</Box>
		</div>
		
		</div>
		</>
	)
}

export default HomePage