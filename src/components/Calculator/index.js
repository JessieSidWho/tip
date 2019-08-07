import React, { Component } from 'react';

class Calculator extends Component {

    state = {};

    render(){
        return(
            <div className='justify-content-md-center mt-3'>
                <form>
                    <label className='ml-2'> Total Bill Amount <br></br>
                        <input type='number' name='bill' required></input>
                    </label><br></br><br></br>

                    <label className='ml-2'> Party Size <br></br>
                        <input className='' type='number' name='party' required></input>
                    </label><br></br><br></br>

                    <label className='ml-2'> Tip Amount <br></br>
                        <button className='mt-1 btn btn-secondary' name='ten' value='10%'>10%</button>
                        <button className='ml-1 mt-1 btn btn-secondary' name='fifteen' value='15%'>15%</button>
                        <button className='ml-1 mt-1 btn btn-secondary' name='eighteen' value='18%'>18%</button>
                        <button className='ml-1 mt-1 btn btn-secondary' name='twenty' value='20%'>20%</button>
                    </label><br></br><br></br>
                </form>
            </div>
        )
    }
}

export default Calculator;