import React from 'react';
import butter from './butter-client';
import {Helmet} from 'react-helmet'
import tw from "twin.macro";
import Nav from "./Nav";
import './Home.scss';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import styled, {css} from "styled-components";

const Container = tw.div``;

const TitleSection = tw.div`mx-40 my-32 flex mb-4 items-end`;
const Section = tw.div`w-1/2`;
const Sub = tw.span`text-gray-700`;
const Title = tw.div`text-5xl font-bold text-white`;
const Description = tw.div`text-white mb-3`;

const DisplayContainer = tw.div`mx-40 my-5`;
const Display = tw.form`bg-white rounded-xl p-12 shadow`;
const DisplayTitle = tw.div`text-xl font-bold mb-1`;
const DisplayTitleSub = tw.div`text-gray-700`;
const DisplayRow = tw.div`grid grid-cols-3 mt-12 mb-6 -mx-3`;

const DropDown = tw.div`px-3 mb-6 md:mb-0`;
const DropDownLabel = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const RawDDSelect = tw.select`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
        h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
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
const Submit = tw.button`w-full bg-gray-200 border-transparent border-4 text-blue-500 hover:text-white hover:bg-blue-500 text-sm py-1 px-2 h-16 rounded shadow`;

const Card = tw.div`rounded-lg overflow-hidden shadow-lg mx-3 mb-6`;
const CardImage = tw.img`w-full h-40 object-cover`;
const CardText = tw.div`px-6 py-4`;
const CardTitle = tw.div`font-bold text-xl mb-2`;
const CardTitleSub = tw.div``;

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {showResults: false,
                        form: {
                            // typeOfRelief: "",
                            // typeOfOrganization: "",
                            // location: ""
                        }};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const {match} = this.props;
        const resp = await butter.page.list('relief');
        this.setState({cms: resp.data})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState( {showResults: true})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({form:{
            [name]: value
        }});
    }

    searchForm = () => {
        return (
            <React.Fragment>
                <DisplayRow>
                    <DropDown>
                        <DropDownLabel>Type Of Relief</DropDownLabel>
                        <DropDownSelect value={this.state.form.typeOfRelief} name="typeOfRelief" onChange={this.handleInputChange}>
                            <option value="" disabled selected>Select Resource</option>
                            <option value="emergencyRelief">Emergency Relief</option>
                            <option value="technology">Technology</option>
                            <option value="grants">Grants</option>
                            <option value="loans">Loans</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Type Of Organization</DropDownLabel>
                        <DropDownSelect value={this.state.form.typeOfOrganization} name="typeOfOrganization" onChange={this.handleInputChange}>
                            <option value="" disabled selected>Select Company Type</option>
                            <option value="forProfit">For Profit</option>
                            <option value="nonProfit">Non-Profit</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Location</DropDownLabel>
                        <DropDownSelect value={this.state.form.location} name="location" onChange={this.handleInputChange}>
                            <option value="" disabled selected>Select Location</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </DropDownSelect>
                    </DropDown>
                </DisplayRow>
                <Submit onClick={this.handleSubmit}>See What You're Eligible For</Submit>
            </React.Fragment>
        )
    };

    searchResults = () => {
        const pageData = this.state.cms.data || []
        const cards = pageData.map(page => (
            <Link to={"/grants/"+page.slug}>
                <Card>
                    <CardImage src={page.fields.hero_image}/>
                    <CardText>
                        <CardTitleSub>Optional Subhead</CardTitleSub>
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
            <div className="background-gradient">
                <Nav invert={true}/>
                <Container className="container mx-auto">
                    <TitleSection>
                        <Section>
                            <Sub>THESE ARE HARD TIMES</Sub>
                            <Title>Let's Bounce Back</Title>
                        </Section>
                        <Section>
                            <Description>In hac habitasse platea dictumst vivamus
                                fermentum quam volutpat aliquam integer et.</Description>
                        </Section>
                    </TitleSection>
                    <DisplayContainer>
                        <Display>
                            <DisplayTitle>Find The Right Grant</DisplayTitle>
                            <DisplayTitleSub>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</DisplayTitleSub>
                            {searchDisplay()}
                        </Display>
                    </DisplayContainer>
                </Container>
                <Footer/>
            </div>
        )
    }
}
