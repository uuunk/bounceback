import React from 'react';
import tw from 'twin.macro';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = tw.footer`flex items-center justify-between p-1 h-20`;
const Text = tw.span`text-xs tracking-tight text-gray-200 mx-1 md:mx-4`;
const RightText = styled(Text)`${tw`md:hidden`}`
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
                    <Text as="a" href="https://docs.google.com/document/d/e/2PACX-1vQZoukZxPxam7kQK7DsFWXwzGljq9n2ACVjXiirHIcVC5vcOUK8Yt51dviAhHG8RZXP6hsAzGF8n4gK/pub">Terms & Privacy</Text>
                </div>
                <div>
                    <RightText><Link to="/faq">FAQS</Link></RightText>
                    <RightText as="a" href="https://www.cognitoforms.com/TheBounceBack1/ContactTheBounceBack">CONTACT US</RightText>
                </div>
            </Nav>
        )
    }
}
