// Write your code here
import {useState} from 'react'

import {
  ReadMoreContainer,
  ContentContainer,
  Heading,
  SubHeading,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevState => !prevState)
  return (
    <ReadMoreContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to react</SubHeading>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button onClick={onClickButton}>{buttonText}</Button>
      </ContentContainer>
    </ReadMoreContainer>
  )
}

export default ReadMore
