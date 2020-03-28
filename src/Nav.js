import React from 'react'
import tw from 'tailwind.macro';
import {Link,Button} from "./styles";
const Nav = tw.nav`flex items-center justify-between flex-wrap p-6`;
const Logo = tw.span`font-bold text-white text-xl tracking-tight`;
const Links = tw.div`text-sm text-white lg:flex-grow`;


export default class extends React.Component {
    render() {
        return (
            <Nav>
                <Logo>The Bounce Back</Logo>
                <Button>Stay Updated</Button>
                <Links>
                    <Link>FAQS</Link>
                    <Link>CONTACT US</Link>
                </Links>
            </Nav>
        )
    }
}
