import React, {Component} from 'react';
import './payment-form.scss';
import PaymentFormStep1 from "../components/payment-form-step-1";
import PaymentFormStep2 from "../components/payment-form-step-2";
import axios from 'axios';

interface State {
    stepper: number,
    formData: {}
}

class PaymentForm extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            stepper: 1,
            formData: {}
        };
    }

    formSubmitStepOne = (e: any) => {
        console.log(e);
        let formData = Object.assign({}, this.state.formData, e)
        this.setState({stepper: 2, formData: formData})
    }

    formSubmitStepTwo = async (e: any) => {
        console.log(e);
        let formData = Object.assign({}, this.state.formData, e)
        this.setState({formData});
        console.log(formData)
        await this.hitPostApi();
    }

    private async hitPostApi() {
        try {
            let request = {
                formData: this.state.formData
            }
            let response = await axios.post('endPoint', request);
            if (response.status === 200) {
                // TODO ON success Response
            } else {
                // TODO ON Error Response
            }
        } catch (e) {
            console.log(e);
            // TODO ON Catch block
        }
    }

    render() {
        return (
            <div className='payment-form-main pt-5'>
                <div className="stepper mx-5">
                    <div>
                        <span className='count'>1</span>
                        <div>Sign Up/Login</div>
                    </div>
                    <div>
                        <span className='count'>2</span>
                        <div>Company Information</div>
                    </div>
                    <div>
                        <span className='count'>3</span>
                        <div>Payment</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-5">
                        {this.state.stepper === 1 ? <PaymentFormStep1 formSubmit={this.formSubmitStepOne}/> : null}
                        {this.state.stepper === 2 ? <PaymentFormStep2 formSubmit={this.formSubmitStepTwo}/> : null}
                    </div>
                    <div className="col-md-6 pt-5">
                        <div className="card" style={{width: '100%'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PaymentForm;
