import { Layout } from '@ftn/patterns'
import styled from 'styled-components'
import ReactMD from 'react-markdown'

const StyledHeading = styled.h1`
  font-size: 40px;
`

const Home = ({ theme }) => (
  <Layout theme={theme}>
    <StyledHeading>
      Welcome to FTN - React Edition!
    </StyledHeading>
    <h3>
    A place to check the bare bones on how to "React"
    </h3>
  </Layout>
)


export default Home