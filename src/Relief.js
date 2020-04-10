import React from "react";
import butter from "./butter-client";
import Nav from "./Nav";
import tw from "twin.macro";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import RelatedRelief from "./RelatedRelief";

const BodyContainer = tw.div`flex flex-col min-h-screen`;
const PageContainer = tw.div`bg-gray-200 w-full h-full flex-1 pb-6 md:pb-12`;
const HeroImage = tw.div`bg-cover bg-center`;
const DetailsContainer = tw.div`relative md:mx-12 -mt-64`;
const Details = tw.div`flex flex-col w-auto mx-6 md:mx-12 bg-white rounded-xl p-6 md:p-12`;
const DetailsTitle = tw.div`leading-none text-3xl md:text-5xl font-bold text-gray-900 mb-2`;
const DetailsSub = tw.div`text-xl md:text-3xl text-gray-700 mb-3 md:-mt-2`;
const DetailsDescription = tw.div`text-gray-500`;
const Divider = tw.div`border border-solid border-gray-400 h-px my-6`;
const RelatedLinks = tw.div`md:w-1/3 mt-4`;
const RelatedLinksTitle = tw.div``;
const AppLink = tw.a`text-gray-500`;
// const RelatedLinksLink = tw.li``
const BackLink = tw.a`absolute ml-10 md:ml-20 text-gray-300 left-0 top-0 -mt-10 font-bold hover:underline tracking-wide cursor-pointer`;

const DetailsSection = tw.div``;
const DetailsSectionTitle = tw.div`text-xl md:text-3xl font-bold mb-1 text-gray-900 leading-none`;
const DetailsSectionDescription = tw.div`text-gray-500`;

const DisplayRow = tw.div`flex flex-wrap mt-6 lg:mt-10 lg:mb-6 -mx-3`;
const InfoSet = tw.div`flex-auto px-3 mb-6 xl:mb-0`;
const InfoSetTitle = tw.div`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const InfoSetText = tw.div`block appearance-none flex-auto w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const DataNeeded = tw.ol`grid grid-cols-1 xl:grid-rows-3 xl:grid-flow-col px-5 py-1 text-gray-700 list-decimal lg:h-20 mt-3 lg:mt-0`;

const Flex = tw.div`flex flex-col lg:flex-row`;
const TwoThird = tw.div`lg:w-2/3 md:mr-4`;
const Half = tw.div`lg:w-1/2`;

const CTACard = tw.div`lg:w-1/2 mt-6 mx-6 p-6 md:mt-12 md:mx-12 md:p-12 rounded-xl bg-white`;
const CTAButton = tw.a`cursor-pointer font-bold text-center inline-block bg-darkblue text-white text-sm p-4 rounded mt-4 md:mt-10 w-1/2 shadow-xl`;

const formatMoney = number => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(number);
};

export default class Relief extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.goBack = this.goBack.bind(this);
    this.loadPage = this.loadPage.bind(this);
    const { match } = this.props;
    this.loadPage(match.params.slug);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.slug !== prevProps.match.params.slug) {
      this.loadPage(match.params.slug);
      window.scrollTo(0, 0);
    }
  }

  async loadPage(slug) {
    const resp = await butter.page.retrieve("relief", slug);
    this.setState(resp.data);
  }

  goBack = e => {
    this.props.history.goBack();
  };

  render() {
    const pageData = this.state.data;
    const dataNeeded =
      pageData &&
      pageData.fields &&
      pageData.fields.data_needed &&
      pageData.fields.data_needed.map(data => (
        <li key={data.name}>{data.name}</li>
      ));

    const relief = this.state.data;

    if (relief.fields) {
      return (
        <BodyContainer>
          <Nav />
          <PageContainer>
            <HeroImage
              style={{
                backgroundImage: `url(${relief.fields.hero_image})`,
                height: "600px"
              }}
            />
            <DetailsContainer>
              <BackLink onClick={this.goBack}>
                <FontAwesomeIcon icon={faChevronLeft} /> BACK TO ALL
              </BackLink>
              <Details>
                <Flex>
                  <TwoThird>
                    <DetailsTitle>{relief.fields.seo_title}</DetailsTitle>
                    <DetailsSub>{relief.fields.organization_name}</DetailsSub>
                    <DetailsDescription>
                      {relief.fields.description}
                    </DetailsDescription>
                  </TwoThird>
                  <RelatedLinks>
                    <RelatedLinksTitle>Application Site</RelatedLinksTitle>
                    <AppLink href={relief.fields.application_link}>
                      {relief.fields.application_link &&
                        relief.fields.application_link.split("/")[2]}
                    </AppLink>
                  </RelatedLinks>
                </Flex>
                <Divider />
                <DetailsSection>
                  <DetailsSectionTitle>Profile Overview</DetailsSectionTitle>
                  <DetailsSectionDescription>
                    Find out the commitment required to access this relief.
                  </DetailsSectionDescription>
                  <DisplayRow>
                    <InfoSet>
                      <InfoSetTitle>Complexity</InfoSetTitle>
                      <InfoSetText>{relief.fields.complexity}</InfoSetText>
                    </InfoSet>
                    <InfoSet>
                      <InfoSetTitle>Completion Time</InfoSetTitle>
                      <InfoSetText>{relief.fields.completion_time}</InfoSetText>
                    </InfoSet>
                    {relief.fields.customer_service_phone && (
                      <InfoSet>
                        <InfoSetTitle>Customer Service Phone</InfoSetTitle>
                        <InfoSetText>
                          {relief.fields.customer_service_phone}
                        </InfoSetText>
                      </InfoSet>
                    )}
                    {relief.fields.customer_service_email && (
                      <InfoSet>
                        <InfoSetTitle>Customer Service Email</InfoSetTitle>
                        <InfoSetText>
                          {relief.fields.customer_service_email}
                        </InfoSetText>
                      </InfoSet>
                    )}
                  </DisplayRow>
                </DetailsSection>
                <Divider />
                <DetailsSection>
                  <DetailsSectionTitle>
                    General Qualifications
                  </DetailsSectionTitle>
                  <DetailsSectionDescription>
                    The basic criteria you need to know before applying.
                  </DetailsSectionDescription>
                  <DisplayRow>
                    {relief.fields.max_loan && (
                      <InfoSet>
                        <InfoSetTitle>Max Loan</InfoSetTitle>
                        <InfoSetText>
                          {formatMoney(relief.fields.max_loan)}
                        </InfoSetText>
                      </InfoSet>
                    )}
                    {relief.fields.max_grant && (
                      <InfoSet>
                        <InfoSetTitle>Max Grant</InfoSetTitle>
                        <InfoSetText>
                          {formatMoney(relief.fields.max_grant)}
                        </InfoSetText>
                      </InfoSet>
                    )}
                    <InfoSet>
                      <InfoSetTitle>Location</InfoSetTitle>
                      <InfoSetText>{relief.fields.location}</InfoSetText>
                    </InfoSet>
                    {relief.fields.organization_type && (
                      <InfoSet>
                        <InfoSetTitle>Organization Type</InfoSetTitle>
                        <InfoSetText>
                          {relief.fields.organization_type
                            .map(t => t.organization_type)
                            .toString()
                            .replace(",", ", ")}
                        </InfoSetText>
                      </InfoSet>
                    )}
                    {relief.fields.availability[0] && (
                      <InfoSet>
                        <InfoSetTitle>Availability</InfoSetTitle>
                        <InfoSetText>
                          {relief.fields.availability[0].availability}
                        </InfoSetText>
                      </InfoSet>
                    )}
                    <InfoSet>
                      <InfoSetTitle>End Date</InfoSetTitle>
                      <InfoSetText>{relief.fields.end_date}</InfoSetText>
                    </InfoSet>
                    {relief.fields.industry && (
                      <InfoSet>
                        <InfoSetTitle>Industry</InfoSetTitle>
                        <InfoSetText>{relief.fields.industry}</InfoSetText>
                      </InfoSet>
                    )}
                  </DisplayRow>
                </DetailsSection>
                <Divider />
                <Flex>
                  <Half>
                    <DetailsSectionTitle>Data Needed</DetailsSectionTitle>
                    <DetailsSectionDescription>
                      Prepare by collecting essential information and documents.
                    </DetailsSectionDescription>
                  </Half>
                  <Half>
                    <DataNeeded>{dataNeeded}</DataNeeded>
                  </Half>
                </Flex>
              </Details>
              <Flex>
                <CTACard>
                  <DetailsSectionTitle>Apply For Relief</DetailsSectionTitle>
                  <DetailsSectionDescription>
                    We’re sending you to the application. Bounce Back if you
                    need help.
                  </DetailsSectionDescription>
                  <CTAButton href={relief.fields.application_link}>
                    APPLY NOW
                  </CTAButton>
                </CTACard>
                <CTACard>
                  <DetailsSectionTitle>Need Help?</DetailsSectionTitle>
                  <DetailsSectionDescription>
                    15 minute consultations to discuss your organizational
                    needs.
                  </DetailsSectionDescription>
                  <CTAButton href="https://go.oncehub.com/TheBounceBack">
                    HELP ME APPLY
                  </CTAButton>
                </CTACard>
              </Flex>
              <RelatedRelief
                fields={{
                  location: relief.fields.location,
                  organization_type:
                    relief.fields.organization_type[0].organization_type
                }}
                currentPageKey={relief.fields.seo_title}
                numCards="3"
              />
            </DetailsContainer>
          </PageContainer>
          <Footer background />
        </BodyContainer>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
