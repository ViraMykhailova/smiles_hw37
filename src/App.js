import React from 'react'
import Smiles from './components/Smiles';
import Results from './components/Results'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {image:'😀', vote_counter: 0, id: 1},
                {image:'😈', vote_counter: 0, id: 2},
                {image:'😊', vote_counter: 0, id: 3},
                {image:'😎', vote_counter: 0, id: 4},
                {image:'😜', vote_counter: 0, id: 5}
            ],
            showResult: false,
        };
        this.voteCountIncrease = this.handleVoteCount.bind(this);
    }
    handleVoteCount (smile_id) {
        const updatedSmiles = [...this.state.smiles];
        const tempIndex = updatedSmiles.findIndex(item => item.id === smile_id);
        updatedSmiles[tempIndex].vote_counter++;

        this.setState({
            ...this.state,
            smiles: updatedSmiles,
        });
    }
  render () {
        const {smiles, showResults} = this.state;

    return (
        <div className='container'>
            <div className='wrapper_main'>
            {this.state.smiles.map(smile => {
                    return (
                        <Smiles key={smile.id}
                                smile={smile}
                                voteCountIncrease={this.voteCountIncrease}
                        />
                    )
                })
            }
            </div>
            <div className='results_btn' onClick={()=> this.setState({showResults:true})}>
                Show Results
            </div>
            {showResults && <Results smiles={smiles} />}
        </div>
    );
  }
}

export default App;
