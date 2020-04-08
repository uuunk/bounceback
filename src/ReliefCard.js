import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import tw from "twin.macro";

const Card = tw.div`rounded-lg overflow-hidden shadow-lg mx-3 mb-6`;
const CardImage = tw.img`w-full h-40 object-cover`;
const CardText = tw.div`px-6 py-4`;
const CardTitle = tw.div`tracking-tight font-semibold text-xl`;
const CardTitleSub = tw.div`text-xs font-bold text-gray-600 tracking-widest mb-2`;

class ReliefCard extends React.Component {
  render() {
    return (
      <Link to={"/relief/" + this.props.page.slug}>
        <Card style={{ height: "305px" }}>
          <CardImage src={this.props.page.fields.hero_image} />
          <CardText>
            {this.props.page.fields.optional_subhead && (
              <CardTitleSub>
                {this.props.page.fields.optional_subhead.toUpperCase()}
              </CardTitleSub>
            )}
            <CardTitle>{this.props.page.fields.seo_title}</CardTitle>
          </CardText>
        </Card>
      </Link>
    );
  }
}

ReliefCard.propTypes = { page: PropTypes.any };

export default ReliefCard;
