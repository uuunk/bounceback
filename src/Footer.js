import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components/macro';

const Nav = tw.footer`flex items-center justify-between p-1 h-20`;
const Text = tw.span`text-xs tracking-tight text-gray-200 mx-4`
// const Links = styled.div(({invert})=> [
//   tw`text-sm lg:flex-grow`,
//     invert ? tw`text-white` : tw`text-gray-900`
// ]);
// const Button = styled.button(({invert}) => [
//     tw`px-8 py-2 border rounded-lg bg-transparent hover:border-transparent`,
//     invert ? tw`border-white text-white hover:bg-white hover:text-blue-500 `
//         : tw`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`
// ]);
// const Link = tw.a`px-2`;


export default class Footer extends React.Component {

    render() {
        const background = this.props.background || false;
        return (
            <Nav className={background ? "background-gradient":""}>
                <div>
                    <Text>© The Bounce Back 2020</Text>
                    <Text>Terms & Privacy</Text>
                </div>
                <div>
                </div>
            </Nav>
        )
    }
}
