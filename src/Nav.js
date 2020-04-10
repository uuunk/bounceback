import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Navbar = tw.nav`flex items-center justify-between h-20`;
const Logo = styled.span(({ invert }) => [
  tw`font-bold md:text-xl tracking-tight ml-6 md:ml-10 `,
  invert ? tw`text-white` : tw`text-gray-900`
]);
const Links = styled.div(({ invert }) => [
  tw`hidden md:block text-xs mr-10 lg:flex-grow font-bold`,
  invert ? tw`text-white` : tw`text-gray-900`
]);
const Button = styled.a(({ invert }) => [
  tw`inline-block cursor-pointer text-center order-last mr-6 px-2 py-1 md:mx-0 md:px-8 md:py-2 md:order-none border rounded-lg bg-transparent hover:border-transparent 
    text-xs font-bold tracking-wider`,
  invert
    ? tw`border-white text-white hover:bg-white hover:text-blue-500 `
    : tw`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`
]);
const RightText = tw.span`px-2`;

export default class Nav extends React.Component {
  render() {
    const invert = this.props.invert || false;
    return (
      <Navbar>
        <div>
          <Logo as="a" href="/" invert={invert}>
            The Bounce Back
          </Logo>
        </div>
        <Button
          href="https://www.cognitoforms.com/TheBounceBack1/HelpUsBounceBackStronger"
          invert={invert}
        >
          DONATE NOW
        </Button>
        <div>
          <Links invert={invert}>
            <RightText>
              <Link to="/faq">FAQS</Link>
            </RightText>
            <RightText
              as="a"
              href="https://www.cognitoforms.com/TheBounceBack1/ContactTheBounceBack"
            >
              CONTACT US
            </RightText>
          </Links>
        </div>
      </Navbar>
    );
  }
}
