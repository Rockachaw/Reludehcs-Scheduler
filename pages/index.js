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

	return(
		<>
		<Box style={{backgroundImage: "url(https://ospa.utdallas.edu/ospa/files/utdallas-15718735-1100.jpg)",backgroundColor: "darkorange",height: "380px"}}>
			<Image text="center" boxSize="100px" src="https://i1.wp.com/utdesports.com/wp-content/uploads/2018/12/cropped-UTDmono_OL_flame.png?fit=576%2C576&ssl=1"/>
		</Box>
		<div style={{backgroundColor: "DarkOrange",height: "700px"}}>
		<Head style>
  			<title>Reldehcs-Scheduler</title>
  			<link rel="icon" href="https://i1.wp.com/utdesports.com/wp-content/uploads/2018/12/cropped-UTDmono_OL_flame.png?fit=576%2C576&ssl=1" />
		</Head>
		
		<h1 style={{fontSize: "50px",textAlign: "center",color: "green",backgroundColor: "DarkOrange"}}>Reldehcs-Scheduler</h1>
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
		<FormControl id1="class1">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 1</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl id="class2">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 2</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl id="class3">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 3</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}} />
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl id="class4">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 4</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl id="class5">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 5</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<FormControl id="class6">
  		<FormLabel style={{color: "green", textAlign: "center"}}>Enter Class 6</FormLabel>
  		<Input type="class" style={{maxWidth: "800px", backgroundColor: "white", position: "absolute",right: "220px"}}/>
		</FormControl>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		</VStack>
		<a style={{color: "DarkOrange"}}>______________________________________________________________________________________</a>
		<Box style={{position: "absolute",right:"610px"}}w="60px" h="40px" bg="green" borderRadius="1g">
				<Link href="https://www.google.com/">
          		
				<a style= {{textAlign: "center"}}>Submit</a>
        		</Link>
		</Box>
		</div>
		
		</div>
		</>
	)
}

export default HomePage