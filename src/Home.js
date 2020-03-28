import React from 'react'
import butter from './butter-client'
import {Helmet} from 'react-helmet'
import tw from "tailwind.macro";

const Container = tw.div``

const TitleSection = tw.div`mx-40 my-32 flex mb-4 items-end`;
const Section = tw.div`w-1/2`;
const Sub = tw.span`text-gray-700`;
const Title = tw.div`text-5xl font-bold text-white`;
const Description = tw.div`text-white mb-3`;

const DisplayContainer = tw.div`mx-40 my-5`
const Display = tw.form`bg-white rounded p-12 shadow`
const DisplayTitle = tw.div`text-xl font-bold mb-1`
const DisplayTitleSub = tw.div`text-gray-700`
const DisplayRow = tw.div`flex flex-wrap -mx-3 mt-12 mb-6 w-full`

const DropDown = tw.div`w-1/3 px-3 mb-6 md:mb-0`
const DropDownLabel = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`
const DropDownSelect = tw.select`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 
                            px-4 pr-8 h-12 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
const Submit = tw.button`w-full bg-gray-200 border-transparent border-4 text-blue-500 hover:text-white hover:bg-blue-500 text-sm py-1 px-2 h-16 rounded shadow`

const Card = tw.div`w-1/3 rounded overflow-hidden shadow-lg mx-3 mb-6`
const CardImage = tw.img`w-full`
const CardText = tw.div`px-6 py-4`
const CardTitle = tw.div`font-bold text-xl mb-2`
const CardTitleSub = tw.div``

export default class extends React.Component {
    state = {
        data: {
            fields: {
                customer_logos: []
            }
        }
    }

    async componentDidMount() {
        const {match} = this.props
        const resp = await butter.page.retrieve('*', 'homepage')
        this.setState(resp.data)
    }

    searchForm = () => {
        return (
            <React.Fragment>
                <DisplayRow>
                    <DropDown>
                        <DropDownLabel>Type Of Resource</DropDownLabel>
                        <DropDownSelect>
                            <option>Emergency Relief</option>
                            <option>Technology</option>
                            <option>Grants</option>
                            <option>Loans</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Type Of Organization</DropDownLabel>
                        <DropDownSelect>
                            <option>For Profit</option>
                            <option>Non-Profit</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Organization Size</DropDownLabel>
                        <DropDownSelect>
                            <option>$0-$100k</option>
                            <option>$100k-$1M</option>
                            <option>$1M-$10M</option>
                            <option>$10M+</option>
                        </DropDownSelect>
                    </DropDown>
                    <DropDown>
                        <DropDownLabel>Location</DropDownLabel>
                        <DropDownSelect>
                            <option>IL</option>
                            <option>AZ</option>
                            <option>NY</option>
                        </DropDownSelect>
                    </DropDown>
                </DisplayRow>
                <Submit>See What You're Eligible For</Submit>
            </React.Fragment>
        )
    };

    searchResults = () => {
        return (
            <React.Fragment>
                <DisplayRow>
                    <Card>
                        <CardImage src="http://via.placeholder.com/640x360"/>
                        <CardText>
                            <CardTitleSub>Optional Subhead</CardTitleSub>
                            <CardTitle>Resource Title Here</CardTitle>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage src="http://via.placeholder.com/640x360"/>
                        <CardText>
                            <CardTitleSub>Optional Subhead</CardTitleSub>
                            <CardTitle>Resource Title Here</CardTitle>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage src="http://via.placeholder.com/640x360"/>
                        <CardText>
                            <CardTitleSub>Optional Subhead</CardTitleSub>
                            <CardTitle>Resource Title Here</CardTitle>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage src="http://via.placeholder.com/640x360"/>
                        <CardText>
                            <CardTitleSub>Optional Subhead</CardTitleSub>
                            <CardTitle>Resource Title Here</CardTitle>
                        </CardText>
                    </Card>
                </DisplayRow>
            </React.Fragment>
        )
    }

    render() {
        const {fields} = this.state.data

        return (
            <Container>
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
                        {/*{this.searchForm()}*/}
                        {this.searchResults()}
                    </Display>
                </DisplayContainer>
            </Container>
        )
    }
}
