import { useState } from "react";
import { Button, Input, InputGroup } from '@chakra-ui/react'


const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


  return (
    <div>
        <InputGroup className='input-group' size='md'>
            <Input 
                type='email'
                h='3.5rem'
                w='20rem'
                borderRadius='0.8rem'
                boxShadow='inset 0px 0px 19px -7px rgba(81, 81, 81, 0.68)'
                margin='30px auto'
                textAlign='center'
                fontSize='20px'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Login'
                _placeholder={{ opacity: 1, color: 'gray.500'}}
            />
            <Input 
                type='password'
                h='3.5rem'
                w='20rem'
                borderRadius='0.8rem'
                boxShadow='inset 0px 0px 19px -7px rgba(81, 81, 81, 0.68)'
                textAlign='center'
                margin='0 auto'
                fontSize='20px'
                value={pass}
                onChange={(e) => setPass(e.target.value)} 
                placeholder='Password'
                _placeholder={{ opacity: 1, color: 'gray.500'}}
            />
            <Button
                margin='30px auto'
                width='200px'
                height='50px'
                bg='#002c57'
                color='white'
                size='lg'
                _hover={{ bg: '#f18500' }}
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </InputGroup>
    </div>
  )
}

export default Form