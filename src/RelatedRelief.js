import React, { Component } from "react";
import butter from "./butter-client";
import ReliefCard from "./ReliefCard";
import tw from "twin.macro";

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const RelatedContainer = tw.div`mt-12 w-auto mx-6 md:mx-12 bg-white rounded-xl p-6 md:p-12`;
const RelatedRow = tw.div`grid grid-cols-1 lg:grid-cols-3 mt-8 lg:mt-12 -mx-3`;
const Title = tw.div`text-xl md:text-3xl font-bold mb-1 text-gray-900`;

class RelatedRelief extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const keys = Object.keys(this.props.fields);
    const fields = keys
      .map(key => {
        const fieldKey = `field.${key}`;
        const value = this.props.fields[key];
        if (value) return { [fieldKey]: value };
      })
      .filter(x => x && x); //filter out null/undefined
    const params = { page_size: 50, ...fields };
    const resp = await butter.page.list("relief", params);

    this.setState({ data: getRandom(resp.data.data, 3) });
  }

  render() {
    return (
      <RelatedContainer>
        <Title>Related Relief Opportunities</Title>
        <RelatedRow>
          {this.state.data.map(page => (
            <ReliefCard key={page.slug} page={page} />
          ))}
        </RelatedRow>
      </RelatedContainer>
    );
  }
}

export default RelatedRelief;
