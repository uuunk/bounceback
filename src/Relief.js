import React from 'react'
import butter from './butter-client'
import Nav from "./Nav";
import tw from "twin.macro";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const BodyContainer = tw.div`flex flex-col min-h-screen`
const PageContainer = tw.div`bg-gray-200 w-full h-full flex-1`
const HeroImage = tw.div`bg-cover bg-center`;
const DetailsContainer = tw.div`mx-12 -mt-64`
const Details = tw.div` flex flex-col w-auto mx-12 bg-white rounded-xl p-12`
const DetailsTitle = tw.div`leading-none text-5xl font-bold text-gray-900 mb-2`
const DetailsSub = tw.div`text-3xl text-gray-700 mb-3 -mt-2`
const DetailsDescription = tw.div`text-gray-500`
const Divider = tw.div`border border-solid border-gray-400 h-px my-6`
const RelatedLinks = tw.div`w-1/3 mt-4`
const RelatedLinksTitle = tw.div``
const AppLink = tw.a`text-gray-500`
const RelatedLinksLink = tw.li``

const DetailsSection = tw.div``
const DetailsSectionTitle = tw.div`text-3xl font-bold mb-1 text-gray-900`
const DetailsSectionDescription = tw.div`text-gray-500`

const DisplayRow = tw.div`flex flex-wrap mt-10 mb-6 -mx-3`;
const InfoSet = tw.div`flex-1 px-3 mb-6 md:mb-0`;
const InfoSetTitle = tw.div`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const InfoSetText = tw.div`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const DataNeeded = tw.ol`grid grid-rows-3 grid-flow-col px-5 py-1 text-gray-700 list-decimal h-20`

const Flex = tw.div`flex`
const OneThird = tw.div`w-1/3`
const TwoThird = tw.div`w-2/3 mr-4`
const Half = tw.div`w-1/2`

const CTACard = tw.div`w-1/2 m-12 p-12 rounded-xl bg-white`
const CTAButton = tw.a`cursor-pointer text-center inline-block bg-darkblue text-white text-sm p-4 rounded mt-10 w-1/2 shadow-xl`

const formatMoney = (number, decPlaces, decSep, thouSep) => {
    const _decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        _decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    const sign = number < 0 ? "-" : "";
    const i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    const j = i.length > 3 ? i.length % 3 : 0;

    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (_decPlaces ? _decSep + Math.abs(number - i).toFixed(_decPlaces).slice(2) : "");
};

export default class Relief extends React.Component {
    state = {
        data: {
            fields: {}
        }
    };

    async componentDidMount() {
        const {match} = this.props;
        const resp = await butter.page.retrieve('relief', match.params.slug);
        this.setState(resp.data);
    }

    render() {

        const pageData = this.state.data;
        const dataNeeded = pageData
            && pageData.fields
            && pageData.fields.data_needed
            && pageData.fields.data_needed.map(data => (
            <li key={data.name}>{data.name}</li>
        ));

        const relief = this.state.data;

        if (relief) {
            return (
                <BodyContainer>
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
                                        <RelatedLinksTitle>Application Site</RelatedLinksTitle>
                                        <AppLink>{relief.fields.application_link &&
                                        relief.fields.application_link.split('/')[2]}</AppLink>
                                    </RelatedLinks>
                                </Flex>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>Profile Overview</DetailsSectionTitle>
                                    <DetailsSectionDescription>Find out the commitment required to access this relief.</DetailsSectionDescription>
                                    <DisplayRow>
                                        <InfoSet>
                                            <InfoSetTitle>Complexity</InfoSetTitle>
                                            <InfoSetText>{relief.fields.complexity}</InfoSetText>
                                        </InfoSet>
                                        <InfoSet>
                                            <InfoSetTitle>Completion Time</InfoSetTitle>
                                            <InfoSetText>{relief.fields.completion_time}</InfoSetText>
                                        </InfoSet>
                                        {relief.fields.customer_service_phone && (<InfoSet>
                                            <InfoSetTitle>Customer Service Phone</InfoSetTitle>
                                            <InfoSetText>{relief.fields.customer_service_phone}</InfoSetText>
                                        </InfoSet>)}
                                        {relief.fields.customer_service_email && (<InfoSet>
                                            <InfoSetTitle>Customer Service Email</InfoSetTitle>
                                            <InfoSetText>{relief.fields.customer_service_email}</InfoSetText>
                                        </InfoSet>)}
                                    </DisplayRow>
                                </DetailsSection>
                                <Divider/>
                                <DetailsSection>
                                    <DetailsSectionTitle>General Qualifications</DetailsSectionTitle>
                                    <DetailsSectionDescription>The basic criteria you need to know before applying.</DetailsSectionDescription>
                                    <DisplayRow>
                                        {relief.fields.max_loan && (<InfoSet>
                                            <InfoSetTitle>Max Loan</InfoSetTitle>
                                            <InfoSetText>${formatMoney(relief.fields.max_loan, 0,'.',',')}</InfoSetText>
                                        </InfoSet>)}
                                        {relief.fields.max_grant && (<InfoSet>
                                            <InfoSetTitle>Max Grant</InfoSetTitle>
                                            <InfoSetText>${formatMoney(relief.fields.max_grant, 0,'.',',')}</InfoSetText>
                                        </InfoSet>)}
                                        <InfoSet>
                                            <InfoSetTitle>Location</InfoSetTitle>
                                            <InfoSetText>{relief.fields.location}</InfoSetText>
                                        </InfoSet>
                                        {relief.fields.organization_type && (
                                        <InfoSet>
                                            <InfoSetTitle>Organization Type</InfoSetTitle>
                                            <InfoSetText>{relief.fields.organization_type[0].organization_type}</InfoSetText>
                                        </InfoSet>)}
                                        {relief.fields.availability && (<InfoSet>
                                            <InfoSetTitle>Availability</InfoSetTitle>
                                            <InfoSetText>{relief.fields.availability[0].availability}</InfoSetText>
                                        </InfoSet>)}
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
                                        <DetailsSectionDescription>Prepare by collecting essential information and documents.</DetailsSectionDescription>
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
                                    <DetailsSectionTitle>Apply For Relief</DetailsSectionTitle>
                                    <DetailsSectionDescription>We’re sending you to the application. Bounce Back if you need help.</DetailsSectionDescription>
                                    <CTAButton href={relief.fields.application_link}>APPLY NOW</CTAButton>
                                </CTACard>
                                <CTACard>
                                    <DetailsSectionTitle>Need Help?</DetailsSectionTitle>
                                    <DetailsSectionDescription>15 minute consultations to discuss your organizational needs.</DetailsSectionDescription>
                                   <CTAButton href="https://go.oncehub.com/Angelos">HELP ME APPLY</CTAButton>
                                </CTACard>
                            </Flex>
                        </DetailsContainer>
                    </PageContainer>
                    <Footer background/>
                </BodyContainer>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}
