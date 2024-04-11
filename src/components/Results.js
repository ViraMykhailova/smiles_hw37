import React from 'react';

import '../styles/results.css'


class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {smiles} = this.props;
        const winner = smiles.reduce((prev,current) => (current.vote_counter > prev.vote_counter ? current : prev),
            smiles[0]);

        return (
            <div className='results_wrapper'>
                <div>Winner smile is:</div>
                <div className='winner'>{winner.image}</div>
            </div>
        );
    }
}

export default Results