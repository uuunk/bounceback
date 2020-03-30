import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components/macro';

const Nav = tw.nav`flex items-center justify-between p-1 h-20`;
const Logo = styled.span(({invert})=> [
    tw`font-bold text-xl tracking-tight mx-4`,
    invert ? tw`text-white` : tw`text-gray-900`
]);
const Links = styled.div(({invert})=> [
  tw`text-sm lg:flex-grow`,
    invert ? tw`text-white` : tw`text-gray-900`
]);
const Button = styled.button(({invert}) => [
    tw`px-8 py-2 border rounded-lg bg-transparent hover:border-transparent`,
    invert ? tw`border-white text-white hover:bg-white hover:text-blue-500 `
        : tw`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`
]);
const Link = tw.a`px-2`;


export default class extends React.Component {

    render() {
        const invert = this.props.invert || false;
        return (
            <Nav>
                <div>
                    <Logo invert={invert}>The Bounce Back</Logo>
                </div>
                <div>
                    <Button invert={invert}>DONATE NOW</Button>
                </div>
                <div>
                    <Links invert={invert}>
                        <Link>FAQS</Link>
                        <Link>CONTACT US</Link>
                    </Links>
                </div>
            </Nav>
        )
    }
}
