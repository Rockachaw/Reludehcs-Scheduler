import Head from 'next/head'
import Link from 'next/link'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
{var name }

class SimpleForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            form_name: "",
            price: ""
        }
    }


    render()
    {
        return (
            <form>
                <div className="form-group">
                    <input value={this.state.form_name} onChange={(e) => { this.setState({form_name: e.target.value}) }}/>
                </div>
            </form>
        );
    }
}

class ParentOfForm extends React.Component
{
    render()
    {
        return (
            <SimpleForm howDoIsendToInputField="garbage" />


        )

    }

}
function HomePage() {
		SimpleForm
	return(
		<>
		<Head>
  			<title>Sample</title>
  			<link rel="icon" href="/favicon.ico" />
		</Head>
		
		<h1>First post</h1>
		<h2>
        		<Link href="https://www.google.com/">
          		<a>Google the answer</a>
        		</Link>
      		</h2>
		<div>Sample text</div>

		<VStack spacing="24px">
  			<Box w="40px" h="40px" bg="yellow.200">
    			1
  			</Box>
  			<Box w="40px" h="40px" bg="tomato">
    			2
  			</Box>
  			<Box w="40px" h="40px" bg="pink.100">
    			3
  			</Box>
		</VStack>
		
		</>
	)
}

export default HomePage