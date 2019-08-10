import React, { Component } from 'react';
import './module.css';

class Calculator extends Component {

    state = {
        bill: '',
        party: '',
        tip: '',
        showResult: false,
        result: 0
    };

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    handleReset = event => {
        event.preventDefault()
        this.setState({ bill: "", party: "", tip: "", showResult: false });
    }

    percentageEach = (n, percent, party) => {
        let total = n * percent / 100;
        return (total / party).toFixed(2);
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(`Bill: ${this.state.bill}\nParty: ${this.state.party}\nTip: ${this.state.tip}`);
        let percentage = (n, percent) => {
            return n * percent / 100;
        }
        let tipTotal = percentage(this.state.bill, this.state.tip)
        this.setState({ result: (Number(this.state.bill) + Number(tipTotal)) / Number(this.state.party) })
        // console.log(`Tip Total: ${tipTotal}`);
        // console.log(`Each Person Owes: ${this.state.result}`)
        if (!isNaN(this.state.result)) {
            this.setState({ showResult: true })
        } else {
            this.setState({ showResult: false })
        }
    }

    render() {
        return (
            <>
                <div className=' row justify-content-md-center text-center mt-3'>
                    <form className='col-sm-12'>

                        {/* Hidden */}
                        {this.state.showResult ?
                            <div className='row justify-content-md-center text-center mt-3'>
                                <div className='col-sm-12 text-center'>
                                    {/* Each Person<br></br> Pays:<br></br> <span className='bg-primary text-white rounded-pill pl-2 pr-2'> ${this.state.result.toFixed(2)} </span> */}

                                    <div className='row justify-content-sm-center'>
                                        <div className='col-md-3 border border-secondary rounded-lg p-2'>

                                            <div className='row'>
                                                <div className='col-sm-8 text-left'>
                                                    <p className=''>Bill Amount:</p>
                                                    <p className=''>Party Size:</p>
                                                    <p className=''>Tip Amount:</p>
                                                    <p className='border-bottom border-dark pr-5'></p>
                                                    <p>&#40;Each Person Bill&#41;</p>
                                                    <p>&#40;Each Person Tip&#41;</p>
                                                    <p className='border-bottom border-dark pr-5'></p>
                                                    <p>&#40;Each Person Pays&#41;</p>
                                                </div>

                                                <div className='col-sm-4 text-right'>
                                                    <p className=''><span className='border-bottom border-success text-success'>${this.state.bill}</span></p>
                                                    <p className=''><span className='border-bottom border-info text-info'>{this.state.party} People</span></p>
                                                    <p className=''><span className='border-bottom border-primary text-primary'>{this.state.tip}%</span></p>
                                                    <p className='border-bottom border-dark'></p>
                                                    <p>{Number(this.state.bill) / Number(this.state.party)}</p>
                                                    <p>+ {this.percentageEach(this.state.bill, this.state.tip, this.state.party)}</p>
                                                    <p className='border-bottom border-dark'></p>
                                                    <p><span className='bg-primary text-white rounded-pill pl-2 pr-2'> ${this.state.result.toFixed(2)} </span></p>
                                                </div>

                                            </div>
                                        </div>

                                        <br></br>
                                    </div>

                                    <button className='btn btn-dark mt-3' onClick={this.handleReset}>Reset</button>
                                </div>
                            </div>
                            : null
                        }

                        {!this.state.showResult ?
                            <label className=''> Total Bill Amount <br></br>
                                <input id='box1' className='rounded-lg text-center'
                                    type="number" pattern="[0-9]*" inputMode="numeric"
                                    name='bill'
                                    placeholder='$0.00'
                                    value={this.state.bill}
                                    onChange={this.handleInputChange}
                                    required />
                            </label>
                            : null
                        }

                        <br></br><br></br>

                        {!this.state.showResult ?
                            <label className=''> Party Size <br></br>
                                <input id='box2' className='rounded-lg text-center'
                                    type="number" pattern="[0-9]*" inputMode="numeric"
                                    name='party'
                                    placeholder='0'
                                    value={this.state.party}
                                    onChange={this.handleInputChange}
                                    required></input>
                            </label>
                            : null
                        }

                        <br></br><br></br>

                        {!this.state.showResult ?
                            <label className=''> Tip Amount <br></br>
                                <input id='box3' className='rounded-lg text-center'
                                    type="number" pattern="[0-9]*" inputMode="numeric"
                                    name='tip'
                                    placeholder='15%'
                                    value={this.state.tip}
                                    onChange={this.handleInputChange}
                                    required></input>
                            </label>
                            : null
                        }

                        <br></br><br></br>

                        <label>
                            {!this.state.showResult ?
                                <button className='btn btn-info' onClick={this.handleSubmit}>Submit</button>
                                : null
                            }
                        </label>
                    </form>
                </div>
            </>
        )
    }
}

export default Calculator;