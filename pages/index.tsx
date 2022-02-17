import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from "components/Button";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Home: NextPage = () => {
  return <><Title>My page</Title>
    <Button> test button</Button>
  </>
}

export default Home;