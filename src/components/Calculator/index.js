import React, { Component } from 'react';
import './module.css';

class Calculator extends Component {

    state = {
        bill: '',
        party: '',
        tip: '',
        formIsHidden: false,
        resetIsHidden: true
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(`Bill: ${this.state.bill}\nParty: ${this.state.party}\nTip: ${this.state.tip}`);
        this.setState({ bill: "", party: "", tip: "", formIsHidden: true });
    }

    render() {
        return (
            <div className=' row justify-content-md-center text-center mt-3'>
                <form className='col-sm-12'>
                    <label className=''> Total Bill Amount <br></br>
                        <input id='box1' className='rounded-lg text-center'
                            type='text'
                            name='bill'
                            placeholder='$0.00'
                            value={this.state.bill}
                            onChange={this.handleInputChange}
                            required />
                    </label><br></br><br></br>

                    <label className=''> Party Size <br></br>
                        <input id='box2' className='rounded-lg text-center'
                            type='number'
                            name='party'
                            placeholder='0'
                            value={this.state.party}
                            onChange={this.handleInputChange}
                            required></input>
                    </label><br></br><br></br>

                    <label className=''> Tip Amount <br></br>
                        <input id='box3' className='rounded-lg text-center'
                            type='text'
                            name='tip'
                            placeholder='15%'
                            value={this.state.tip}
                            onChange={this.handleInputChange}
                            required></input>
                    </label><br></br><br></br>

                    <label>
                        <button className='btn btn-info'
                            name='submit'
                            type='submit'
                            onClick={this.handleSubmit}
                        >Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Calculator;