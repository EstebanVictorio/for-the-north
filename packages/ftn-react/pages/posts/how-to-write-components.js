import { Layout } from '@ftn/patterns'
import { useEffect, useState } from 'react'
import ReactMD from 'react-markdown'
import Highlight from 'react-highlight'
import styled from 'styled-components'

const StyledImageBlock = styled.span`
  display: flex;
  justify-content: center;
`


const ImageBlock = ({src}) => {
  return (
    <StyledImageBlock>
      <img src={src}/>
    </StyledImageBlock>
  )
}

const CodeBlock = ({value}) => {
  return (
    <Highlight
      language="javascript"
      className="language-javascript"
    >
      { value }
    </Highlight>
  )
}

const HowToWriteComponents = () => {
  const [md, setMd] = useState('')

  useEffect(() => {
    fetch('/static/posts/how-to-write-components.md')
      .then(response => response.text())
      .then(mdResponse => setMd(mdResponse))
  },[md])
  const renderers = {
    image: ImageBlock,
    code: CodeBlock,
    codeBlock:CodeBlock,
  }
  return (
    <Layout>
      { md ? (
        <ReactMD
          source={md}
          renderers={renderers}
        />
      ) : 'Loading...' }
    </Layout>
  )
}


export default HowToWriteComponents