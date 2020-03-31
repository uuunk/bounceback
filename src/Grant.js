import React from 'react'
import butter from './butter-client'
import Nav from "./Nav";
import tw from "twin.macro";
import {Link} from "react-router-dom";

const PageContainer = tw.div`bg-gray-200 w-full h-full`
const HeroImage = tw.div`bg-cover bg-center`;
const DetailsContainer = tw.div`m-12 -mt-64`
const Details = tw.div` flex flex-col w-auto mx-12 bg-white rounded-xl p-12`
const DetailsTitle = tw.div`text-5xl font-bold text-gray-900`
const DetailsSub = tw.div`text-3xl text-gray-700 mb-1 -mt-2`
const DetailsDescription = tw.div`text-gray-500`
const Divider = tw.div`border border-solid border-gray-400 h-px my-6`
const RelatedLinks = tw.div`w-1/3`
const RelatedLinksTitle = tw.div``
const AppLink = tw.a`text-gray-500`
const RelatedLinksLink = tw.li``

const DetailsSection = tw.div``
const DetailsSectionTitle = tw.div`text-3xl font-bold mb-1 text-gray-900`
const DetailsSectionDescription = tw.div`text-gray-500`

const DisplayRow = tw.div`flex flex-wrap mt-12 mb-6 -mx-3`;
const InfoSet = tw.div`flex-1 px-3 mb-6 md:mb-0`;
const InfoSetTitle = tw.div`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const InfoSetText = tw.div`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 
                            px-4 pr-8 h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const DataNeeded = tw.div`w-2/3 px-5 py-1 text-gray-700`

const Flex = tw.div`flex`
const OneThird = tw.div`w-1/3`
const TwoThird = tw.div`w-2/3 mr-4`
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
        this.setState(resp.data);
    }

    render() {

        const pageData = this.state.data;
        const dataNeeded = pageData
            && pageData.fields
            && pageData.fields.data_needed
            && pageData.fields.data_needed.map(data => (
            <li>{data.name}</li>
        ));

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
                                        <DetailsSub>{relief.fields.organization_name}</DetailsSub>
                                        <DetailsDescription>{relief.fields.description}</DetailsDescription>
                                    </TwoThird>
                                    <RelatedLinks>
                                        <RelatedLinksTitle>Application Link</RelatedLinksTitle>
                                        <AppLink>{relief.fields.application_link}</AppLink>
                                    </RelatedLinks>
                                </Flex>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>Profile Overview</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <DisplayRow>
                                        <InfoSet>
                                            <InfoSetTitle>Complexity</InfoSetTitle>
                                            <InfoSetText>{relief.fields.complexity}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Completion Time</InfoSetTitle>
                                            <InfoSetText>{relief.fields.completion_time}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Customer Service Phone</InfoSetTitle>
                                            <InfoSetText>{relief.fields.customer_service_phone}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Customer Service Email</InfoSetTitle>
                                            <InfoSetText>{relief.fields.customer_service_phone}</InfoSetText>
                                        </InfoSet>
                                    </DisplayRow>
                                </DetailsSection>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>General Qualifications</DetailsSectionTitle>
                                    <DetailsSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.</DetailsSectionDescription>
                                    <DisplayRow>
                                        {relief.fields.max_loan && (<InfoSet>
                                            <InfoSetTitle>Max Loan</InfoSetTitle>
                                            <InfoSetText>{relief.fields.max_loan}</InfoSetText>
                                        </InfoSet>)}
                                        {relief.fields.max_grant && (<InfoSet>
                                            <InfoSetTitle>Max Grant</InfoSetTitle>
                                            <InfoSetText>{relief.fields.max_grant}</InfoSetText>
                                        </InfoSet>)}
                                        <InfoSet>
                                            <InfoSetTitle>Location</InfoSetTitle>
                                            <InfoSetText>{relief.fields.location}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Organization Type</InfoSetTitle>
                                            <InfoSetText>{relief.fields.organization_type}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Availability</InfoSetTitle>
                                            <InfoSetText>{relief.fields.availability}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>End Date</InfoSetTitle>
                                            <InfoSetText>{relief.fields.end_date}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Industry</InfoSetTitle>
                                            <InfoSetText>{relief.fields.industry}</InfoSetText>
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
                                            {dataNeeded}
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
