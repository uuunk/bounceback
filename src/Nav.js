import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components/macro';

const Navbar = tw.nav`flex items-center justify-between p-1 h-20`;
const Logo = styled.span(({invert})=> [
    tw`font-bold md:text-xl tracking-tight mx-5 md:mx-10 `,
    invert ? tw`text-white` : tw`text-gray-900`
]);
const Links = styled.div(({invert})=> [
  tw`hidden md:block text-xs mr-10 lg:flex-grow `,
    invert ? tw`text-white` : tw`text-gray-900`
]);
const Button = styled.a(({invert}) => [
    tw`inline-block cursor-pointer text-center px-2 py-1 ml-16 md:ml-0 md:px-8 md:py-2 border rounded-lg bg-transparent hover:border-transparent 
    text-xs font-bold tracking-wider`,
    invert ? tw`border-white text-white hover:bg-white hover:text-blue-500 `
        : tw`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`
]);
const Link = tw.a`px-2`;


export default class Nav extends React.Component {

    render() {
        const invert = this.props.invert || false;
        return (
            <Navbar>
                <div>
                    <Logo as="a" href="/" invert={invert}>The Bounce Back</Logo>
                </div>
                <div>
                    <Button href="https://www.cognitoforms.com/TheBounceBack1/HelpUsBounceBackStronger" invert={invert}>DONATE NOW</Button>
                </div>
                <div>
                    <Links invert={invert}>
                        <Link href="https://docs.google.com/document/d/e/2PACX-1vTWwAqLXiOnnAJmmNb63LZk3RkhKm1jLtON7DgE4GysWmTyHrcQDrKxxyJLXKXbxM6dC-CGVfJrstQv/pub">FAQS</Link>
                        <Link href="https://www.cognitoforms.com/TheBounceBack1/ContactTheBounceBack">CONTACT US</Link>
                    </Links>
                </div>
            </Navbar>
        )
    }
}
