import styled from "styled-components";
import tw from "tailwind.macro";

export const Button = styled.button`
       ${tw`px-8 py-4 text-xl font-semibold text-white bg-transparent border border-white rounded hover:bg-white hover:text-blue-500 hover:border-transparent`}`;

export const Link = tw.a`px-2`;
