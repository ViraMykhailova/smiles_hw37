import React from 'react';

import '../styles/smiles.css'

class Smiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {smile, voteCountIncrease} = this.props;

        return (
            <div className='smile_wrapper'>
                <div onClick={() => voteCountIncrease(smile.id)} className='smile_img'>{smile.image}</div>
                <div>{smile.vote_counter}</div>
            </div>
        );
    }
}
export default Smiles