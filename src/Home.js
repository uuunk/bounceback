import React from 'react';
import butter from './butter-client';
import tw from "twin.macro";
import Nav from "./Nav";
import './Home.scss';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import styled from "styled-components";
import qs from "query-string";

const Container = tw.div``;

const TitleSection = tw.div`mx-40 my-32 flex mb-10 items-end`;
const Section = tw.div`w-1/2`;
const Sub = tw.span`text-gray-300 tracking-wider font-extrabold`;
const Title = tw.div`text-5xl font-bold text-white mt-2`;
const Description = tw.div`text-white mb-3 mx-12`;

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
const Submit = tw.button`w-full bg-gray-200 border-transparent border-4 text-darkblue hover:text-white hover:bg-darkblue 
        text-xs tracking-widest font-bold py-1 px-2 h-16 rounded-lg shadow`;

const Card = tw.div`rounded-lg overflow-hidden shadow-lg mx-3 mb-6`;
const CardImage = tw.img`w-full h-40 object-cover`;
const CardText = tw.div`px-6 py-4`;
const CardTitle = tw.div`font-bold text-xl mb-2`;
const CardTitleSub = tw.div``;

const setQueryString = qsValue => {
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + qsValue;
    window.history.pushState({ path: newurl }, "", newurl);
};

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
        const resp = await butter.page.list('relief');
        this.setState({cms: resp.data,
            form: qs.parse(this.props.location.search)
        })
        window.onpopstate = this.onBackButtonEvent.bind(this);
    }

    onBackButtonEvent(event) {
        event.preventDefault();
        this.setState( {showResults: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        const query = "?" + qs.stringify(this.state.form);
        setQueryString(query);
        this.setState( {showResults: true})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState( prevState => ({
            form:{
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
                        <DropDownSelect value={this.state.form.typeOfRelief} name="typeOfRelief" onChange={this.handleInputChange}>
                            <option value="" disabled selected>Select Resource</option>
                            <option value="emergencyrelief">Emergency Relief</option>
                            <option value="technology">Technology</option>
                            <option value="grant">Grants</option>
                            <option value="loan">Loans</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Type Of Organization</DropDownLabel>
                        <DropDownSelect value={this.state.form.typeOfOrganization} name="typeOfOrganization" onChange={this.handleInputChange}>
                            <option value="" disabled selected>Select Company Type</option>
                            <option value="forprofit">For Profit</option>
                            <option value="nonprofit">Non-Profit</option>
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
                <Submit onClick={this.handleSubmit}>SEE WHAT YOU'RE ELIGIBLE FOR</Submit>
            </React.Fragment>
        )
    };

    clean = string => {
        return string.replace('-','').replace(' ','')
    };

    getReliefTypes = page => {
        return page.fields.relief_type.map(t => this.clean(t.type).toLowerCase())
    };

    getOrgType = page => {
        return this.clean(page.fields.organization_type || "").toLowerCase()
    };

    getLocation = page => {
        return this.clean(page.fields.location || "")
    };

    match(array, searchTerm){
        if (searchTerm === "" || searchTerm === null || searchTerm === undefined)
            return true;
        else
            return array.includes(searchTerm);
    }

    searchResults = () => {
        const {typeOfRelief, typeOfOrganization, location} = this.state.form
        const pageData = this.state.cms.data || [];
        const filteredPageData = pageData.filter( page => {
            return this.match(this.getReliefTypes(page),typeOfRelief) &&
                this.match([this.getOrgType(page)], typeOfOrganization) &&
                this.match([this.getLocation(page)], location)
        });
        const cards = filteredPageData.map(page => (
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
