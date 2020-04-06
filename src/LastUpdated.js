import React from 'react';
import tw from "twin.macro";
import butter from './butter-client'
import moment from "moment";

const DateTime = tw.div`block italic text-gray-300 text-center`

class LastUpdated extends React.Component {
    state = {last_updated_date:""};

    async componentDidMount () {
        const resp = await butter.content.retrieve([ 'last_updated'])
        this.setState({last_updated_date: resp.data.data.last_updated[0].last_updated_date})
    }

    render() {
        return (
            <DateTime>Last Updated: {moment(this.state.last_updated_date).format('LLL')}</DateTime>
        );
    }
}

export default LastUpdated;
