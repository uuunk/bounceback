import React from 'react';
import butter from './butter-client';
import tw from "twin.macro";
import Nav from "./Nav";
import './Home.scss';
import {Link} from 'react-router-dom';
import Footer from "./Footer";
import styled from "styled-components";
import qs from "query-string";
import {Button} from "./styles";

const BodyContainer = tw.div`flex flex-col min-h-screen`
const PageContainer = tw.div`flex-1`;

const TitleSection = tw.div`mx-40 my-32 flex mb-10 items-end`;
const Section = tw.div`w-1/2`;
const Sub = tw.span`text-gray-300 tracking-wider font-extrabold`;
const Title = tw.div`text-5xl font-bold text-white mt-2`;
const Description = tw.div`text-gray-300 mb-3 mx-12`;

const DisplayContainer = tw.div`mx-40 mt-5 mb-20`;
const Display = tw.form`bg-white rounded-xl p-12 shadow`;
const DisplayTitle = tw.div`text-3xl font-bold mb-1`;
const DisplayTitleSub = tw.div`text-gray-500`;
const DisplayRow = tw.div`grid grid-cols-3 mt-12 mb-6 -mx-3`;

const DropDown = tw.div`px-3 mb-6 md:mb-0`;
const DropDownLabel = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const RawDDSelect = tw.select`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
        h-12 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
const DropDownSelect = styled(RawDDSelect)
    `&:after {
            font-family: FontAwesome;
            content: '\\f107';
            font-size: 28px;
            position: absolute;
            top: 12px;
            right: 20px;
            pointer-events: none;
     }`;

const DefaultButton = tw.button`bg-gray-200 border-transparent border-4 text-darkblue text-xs tracking-widest font-bold py-1 px-2 h-16 rounded-lg`
const Submit = styled(DefaultButton)`${tw`w-full hover:text-white hover:bg-darkblue shadow`}`;

const Card = tw.div`rounded-lg overflow-hidden shadow-lg mx-3 mb-6`;
const CardImage = tw.img`w-full h-40 object-cover`;
const CardText = tw.div`px-6 py-4`;
const CardTitle = tw.div`tracking-tight font-semibold text-xl`;
const CardTitleSub = tw.div`text-xs font-bold text-gray-600 tracking-widest mb-2`;

const Flex = tw.div`flex justify-between`;

const setQueryString = qsValue => {
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + qsValue;
    window.history.pushState({path: newurl}, "", newurl);
};

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            showResults: false,
            form: {
                // typeOfRelief: "",
                // typeOfOrganization: "",
                // location: ""
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const resp = await butter.page.list('relief');
        this.setState({
            cms: resp.data,
            form: qs.parse(this.props.location.search)
        })
        window.onpopstate = this.onBackButtonEvent.bind(this);
    }

    onBackButtonEvent(event) {
        event.preventDefault();
        this.setState({showResults: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        const query = "?" + qs.stringify(this.state.form);
        setQueryString(query);
        this.setState({showResults: true})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    searchForm = () => {
        return (
            <React.Fragment>
                <DisplayRow>
                    <DropDown>
                        <DropDownLabel>Type Of Relief</DropDownLabel>
                        <DropDownSelect value={this.state.form.typeOfRelief} name="typeOfRelief"
                                        onChange={this.handleInputChange}>
                            <option value="" disabled defaultValue>Select Resource</option>
                            <option value="emergencyrelief">Emergency Relief</option>
                            <option value="technology">Technology</option>
                            <option value="grant">Grants</option>
                            <option value="loan">Loans</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Type Of Organization</DropDownLabel>
                        <DropDownSelect value={this.state.form.typeOfOrganization} name="typeOfOrganization"
                                        onChange={this.handleInputChange}>
                            <option value="" disabled defaultValue>Select Company Type</option>
                            <option value="forprofit">For Profit</option>
                            <option value="nonprofit">Non-Profit</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Location</DropDownLabel>
                        <DropDownSelect value={this.state.form.location} name="location"
                                        onChange={this.handleInputChange}>
                            <option value="" disabled defaultValue>Select Location</option>
                            <option value="alabama">Alabama</option>
                            <option value="alaska">Alaska</option>
                            <option value="arizona">Arizona</option>
                            <option value="arkansas">Arkansas</option>
                            <option value="california">California</option>
                            <option value="colorado">Colorado</option>
                            <option value="connecticut">Connecticut</option>
                            <option value="delaware">Delaware</option>
                            <option value="dc">District Of Columbia</option>
                            <option value="florida">Florida</option>
                            <option value="georgia">Georgia</option>
                            <option value="hawaii">Hawaii</option>
                            <option value="idaho">Idaho</option>
                            <option value="illinois">Illinois</option>
                            <option value="indiana">Indiana</option>
                            <option value="iowa">Iowa</option>
                            <option value="kansas">Kansas</option>
                            <option value="kentucky">Kentucky</option>
                            <option value="louisiana">Louisiana</option>
                            <option value="maine">Maine</option>
                            <option value="maryland">Maryland</option>
                            <option value="massachusetts">Massachusetts</option>
                            <option value="michigan">Michigan</option>
                            <option value="minnesota">Minnesota</option>
                            <option value="mississippi">Mississippi</option>
                            <option value="missouri">Missouri</option>
                            <option value="montana">Montana</option>
                            <option value="nebraska">Nebraska</option>
                            <option value="nevada">Nevada</option>
                            <option value="newhampshire">New Hampshire</option>
                            <option value="newjersey">New Jersey</option>
                            <option value="newmexico">New Mexico</option>
                            <option value="newyork">New York</option>
                            <option value="northcarolina">North Carolina</option>
                            <option value="northdakota">North Dakota</option>
                            <option value="ohio">Ohio</option>
                            <option value="oklahoma">Oklahoma</option>
                            <option value="oregon">Oregon</option>
                            <option value="pennsylvania">Pennsylvania</option>
                            <option value="rhodeisland">Rhode Island</option>
                            <option value="southcarolina">South Carolina</option>
                            <option value="southdakota">South Dakota</option>
                            <option value="tennessee">Tennessee</option>
                            <option value="texas">Texas</option>
                            <option value="utah">Utah</option>
                            <option value="vermont">Vermont</option>
                            <option value="virginia">Virginia</option>
                            <option value="washington">Washington</option>
                            <option value="westvirginia">West Virginia</option>
                            <option value="wisconsin">Wisconsin</option>
                            <option value="wyoming">Wyoming</option>
                        </DropDownSelect>
                    </DropDown>
                </DisplayRow>
                <Submit onClick={this.handleSubmit}>SEE WHAT YOU'RE ELIGIBLE FOR</Submit>
            </React.Fragment>
        )
    };

    clean = string => {
        return string.replace('-', '').replace(' ', '')
    };

    getReliefTypes = page => {
        return page.fields.relief_type.map(t => this.clean(t.type).toLowerCase())
    };

    getOrgType = page => {
        return page.fields.organization_type.map(t => this.clean(t.organization_type).toLowerCase())
    };

    getLocation = page => {
        return this.clean(page.fields.location || "")
    };

    match(array, searchTerm) {
        if (searchTerm === "" || searchTerm === null || searchTerm === undefined || array.length === 0
            || (array.length === 1 && array[0] === "")) {
            return true;
        } else {
            return array.includes(searchTerm);
        }
    }

    searchResults = () => {
        const {typeOfRelief, typeOfOrganization, location} = this.state.form
        const pageData = this.state.cms.data || [];
        const filteredPageData = pageData.filter(page => {
            return this.match(this.getReliefTypes(page), typeOfRelief) &&
                this.match(this.getOrgType(page), typeOfOrganization) &&
                (this.match([this.getLocation(page)], location) || this.getLocation(page) === "unitedstates")
        });
        const cards = filteredPageData.map(page => (
            <Link to={"/relief/" + page.slug} key={page.slug}>
                <Card>
                    <CardImage src={page.fields.hero_image}/>
                    <CardText>
                        {page.fields.optional_subhead &&
                        <CardTitleSub>{page.fields.optional_subhead.toUpperCase()}</CardTitleSub>}
                        <CardTitle>{page.fields.seo_title}</CardTitle>
                    </CardText>
                </Card>
            </Link>
        ));

        return (
            <React.Fragment>
                <DisplayRow>
                    {cards || <p>No Resources Available. Try changing your search parameters.</p>}
                </DisplayRow>
            </React.Fragment>
        )
    };

    render() {
        //const {fields} = this.state.data;
        const searchDisplay = () => {
            return this.state.showResults ? this.searchResults() : this.searchForm()
        };

        return (
            <PageContainer className="background-gradient">
                <Nav invert={true}/>
                <BodyContainer className="container mx-auto">
                    <TitleSection>
                        <Section>
                            <Sub>DON'T BE DISCOURAGED IN CRISIS</Sub>
                            <Title>Let's Bounce Back</Title>
                        </Section>
                        <Section>
                            <Description>Find the latest relief available to your organization during the COVID-19
                                crisis. Access the grants, loans, and services to help you bounce back
                                stronger.</Description>
                        </Section>
                    </TitleSection>
                    <DisplayContainer>
                        <Display>
                            <Flex>
                                <div>
                                    <DisplayTitle>Find The Right Relief</DisplayTitle>
                                    <DisplayTitleSub>See what types of relief are available to your organization
                                        today.</DisplayTitleSub>
                                </div>
                                <div>{this.state.showResults && <DefaultButton>BACK TO SEARCH</DefaultButton>}</div>
                            </Flex>
                            {searchDisplay()}
                        </Display>
                    </DisplayContainer>
                </BodyContainer>
                <Footer/>
            </PageContainer>
        )
    }
}
