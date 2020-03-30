import React from 'react'
import butter from './butter-client'
import Nav from "./Nav";
import tw from "twin.macro";

const PageContainer = tw.div`bg-gray-200 w-full h-full`
const HeroImage = tw.div`bg-cover bg-center`;
const DetailsContainer = tw.div`m-12 -mt-64`
const Details = tw.div` flex flex-col w-auto mx-12 bg-white rounded-xl p-12`
const DetailsTitle = tw.div`text-5xl font-bold mb-1 text-gray-900`
const DetailsDescription = tw.div`text-gray-500`
const Divider = tw.div`border border-solid border-gray-400 h-px my-6`
const RelatedLinks = tw.div`w-1/3`
const RelatedLinksTitle = tw.div``
const RelatedLinksLink = tw.li``

const DetailsSection = tw.div``
const DetailsSectionTitle = tw.div`text-3xl font-bold mb-1 text-gray-900`
const DetailsSectionDescription = tw.div`text-gray-500`

const DisplayRow = tw.div`flex flex-wrap mt-12 mb-6 -mx-3`;
const InfoSet = tw.div`flex-1 px-3 mb-6 md:mb-0`;
const InfoSetTitle = tw.div`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const InfoSetText = tw.div`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 
                            px-4 pr-8 h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const DataNeeded = tw.div`w-2/3 px-5 py-1`

const Flex = tw.div`flex`
const OneThird = tw.div`w-1/3`
const TwoThird = tw.div`w-2/3`
const Half = tw.div`w-1/2`

const CTACard = tw.div`w-1/2 m-12 p-12 rounded-xl bg-white`
const CTAButton = tw.button`bg-blue-500 text-white text-sm p-4 rounded mt-10 w-1/2 shadow-xl`


export default class Grant extends React.Component {
    state = {
        data: {
            fields: {}
        }
    };

    async componentDidMount() {
        const {match} = this.props;
        const resp = await butter.page.retrieve('relief', match.params.grant);
        this.setState(resp.data)
    }

    render() {
        const relief = this.state.data;

        if (relief) {
            return (
                <>
                    <Nav/>
                    <PageContainer>
                        <HeroImage style={{backgroundImage: `url(${relief.fields.hero_image})`, height: "600px"}}/>
                        <DetailsContainer>
                            <Details>
                                <Flex>
                                    <TwoThird>
                                        <DetailsTitle>{relief.fields.seo_title}</DetailsTitle>
                                        <DetailsDescription>{relief.fields.description}</DetailsDescription>
                                    </TwoThird>
                                    <RelatedLinks>
                                        <RelatedLinksTitle>Related Links</RelatedLinksTitle>
                                    </RelatedLinks>
                                </Flex>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>Profile Overview</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <DisplayRow>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                    </DisplayRow>
                                </DetailsSection>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>General Qualifications</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <DisplayRow>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Use Difficulty</InfoSetTitle>
                                            <InfoSetText>Confusing Form</InfoSetText>
                                        </InfoSet>
                                    </DisplayRow>
                                </DetailsSection>
                                <Divider/>
                                <Flex>
                                    <Half>
                                        <DetailsSectionTitle>Data Needed</DetailsSectionTitle>
                                        <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit.</DetailsSectionDescription>
                                    </Half>
                                    <Half>
                                        <DataNeeded>
                                            <div>asdfa asfd adfs adsf sadf</div>
                                            <div>asdfa asfd adfs adsf sadf</div>
                                            <div>asdfa asfd adfs adsf sadf</div>
                                        </DataNeeded>
                                    </Half>
                                </Flex>
                            </Details>
                            <Flex>
                                <CTACard>
                                    <DetailsSectionTitle>Apply For Grant</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <CTAButton>APPLY NOW</CTAButton>
                                </CTACard>
                                <CTACard>
                                    <DetailsSectionTitle>Need Help?</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <CTAButton>HELP ME APPLY</CTAButton>
                                </CTACard>
                            </Flex>
                        </DetailsContainer>
                    </PageContainer>
                </>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}
