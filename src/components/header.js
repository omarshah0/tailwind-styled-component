import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const Header = () => (
  <HeaderContainer>
    <H1>Ali</H1>
    <H1>Hussain</H1>
  </HeaderContainer>
)

export default Header

export const HeaderContainer = styled.header`
  ${tw`flex justify-between p-4 lg:px-10 lg:py-5 bg-blue-500 text-blue-100 md:sticky top-0 left-0`}
`

export const H1 = styled.h1`
  ${tw`text-xl hover:text-blue-200`}
`
