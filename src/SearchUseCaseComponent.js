import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import tw from "twin.macro";
import butter from "./butter-client";

const SearchUseCaseContainer = tw.div`md:mx-40 mt-5 mb-10`;
const SearchUseCaseDisplay = tw.div`bg-white rounded-xl p-6 md:p-12 shadow`;
const SearchUseCase = tw.div`flex flex-col lg:flex-row mb-12 last:mb-0`;
const SearchUseCaseTitle = tw.h2`text-2xl md:text-3xl font-bold`;
const SearchUseCaseTitleSub = tw.div`text-gray-500 mb-6`;
const UseCaseContent = tw.div`lg:w-1/2`;
const Image = tw.img`w-full mb-2 lg:mb-0 lg:w-1/2 lg:mr-10 object-cover h-40 lg:h-64 rounded-t-lg lg:rounded-lg`;
const Heading = tw.div`text-lg mb-4 font-bold lg:text-2xl text-gray-900`;
const Paragraph = tw.p`text-gray-500 mb-2`;
const SearchLink = tw.a`block font-bold tracking-widest text-right p-2 text-gray-900 hover:text-darkblue cursor-pointer`;

export default class SearchUseCaseComponent extends React.Component {
  state = {
    search_use_cases: [
      {
        search_params_href: "",
        header: "",
        body: "",
        image: ""
      }
    ]
  };

  async componentDidMount() {
    const resp = await butter.content.retrieve(["search_use_cases"]);
    this.setState(resp.data.data);
  }

  render() {
    return (
      <SearchUseCaseContainer>
        <SearchUseCaseDisplay>
          <SearchUseCaseTitle>
            How can I use The Bounce Back?
          </SearchUseCaseTitle>
          <SearchUseCaseTitleSub>
            You can start the bounce back today. Relief is here.
          </SearchUseCaseTitleSub>
          {this.state.search_use_cases.map(use_case => {
            return (
              <SearchUseCase>
                <Image src={use_case.image} />
                <UseCaseContent>
                  <Heading>{use_case.header}</Heading>
                  <Paragraph>{use_case.body}</Paragraph>
                  <SearchLink href={use_case.search_params_href}>
                    FIND RELIEF HERE <FontAwesomeIcon icon={faChevronRight} />
                  </SearchLink>
                </UseCaseContent>
              </SearchUseCase>
            );
          })}
        </SearchUseCaseDisplay>
      </SearchUseCaseContainer>
    );
  }
}
