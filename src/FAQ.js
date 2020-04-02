import React from "react";
import Nav from "./Nav";
import tw from "twin.macro";
import Footer from "./Footer";
import butter from "./butter-client";

const PageContainer = tw.div`flex-1`;
const BodyContainer = tw.div`flex flex-col min-h-screen bg-gray-200`;
const Hero = tw.div`h-96 flex flex-wrap flex-col justify-center`;
const Title = tw.h1`ml-10 md:ml-20 text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-none`;
const Sub = tw.h3`ml-10 md:ml-20 mt-2 text-gray-300`;
const DisplayContainer = tw.div`md:mx-12 -mt-32 mb-10`;
const Display = tw.div`flex flex-col w-auto mx-6 bg-white rounded-xl p-6`;

const Details = tw.div`flex flex-col w-auto mx-2 mt-1 md:mx-4 bg-white rounded-xl md:p-4 max-w-3xl`;
const DetailsTitle = tw.div`leading-none text-xl md:text-3xl font-bold text-gray-900 mb-2`;
const DetailsDescription = tw.div`text-gray-500`;
const Divider = tw.div`border border-solid border-gray-400 h-px mx-2 md:mx-8 my-3`;


export default class FAQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                fields: {}
            }
        };
    }

    async componentDidMount() {
        const resp = await butter.page.retrieve('*', 'faq');
        this.setState(resp.data);
    }

    render() {
        const faqData = this.state.data;

        const faqs = faqData.fields &&
            faqData.fields.faq &&
            faqData.fields.faq.map( (faq, i) => {
            return (
                <div key={i}>
                    <Details>
                        <DetailsTitle>{faq.question}</DetailsTitle>
                        <DetailsDescription>{faq.answer}</DetailsDescription>
                    </Details>
                    {i!==faqData.fields.faq.length-1 && <Divider/>}
                </div>
            )
        });

        return (
            <PageContainer>
                <Nav/>
                <BodyContainer>
                    <Hero className="background-gradient">
                        <div><Title>Frequently Asked Questions</Title></div>
                        <div><Sub>salkjsdf lsflkjsdf lksfj asflkj sfkj sflkjsf lkjasfklsafj lkasfj sfalkj sadflkjafsdlkj
                            fsadlkj</Sub></div>
                    </Hero>
                    <DisplayContainer>
                        {faqs && (<Display>
                            {faqs}
                        </Display>)}
                    </DisplayContainer>
                </BodyContainer>
                <Footer background/>
            </PageContainer>
        )
    }
}
