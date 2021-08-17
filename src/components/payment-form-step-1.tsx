import {Component} from "react";

class PaymentFormStep1 extends Component<{formSubmit: (arg0: any) => void}, { formData: any }> {

    constructor(props: any) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    handleChange = (name: string, value: string) => {
        let formData = this.state.formData;
        formData[name] = value;
        this.setState({formData})
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.formSubmit(this.state.formData);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="mb-3">
                        <h2>Welcome to HyperCart</h2>
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input type="email" onChange={e => this.handleChange('email', e.target.value)} className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>First Name</label>
                            <input type="text" onChange={e => this.handleChange('firstName', e.target.value)}className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Last Name</label>
                            <input type="text" onChange={e => this.handleChange('lastName', e.target.value)}className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e => this.handleChange('password', e.target.value)}className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input type="password" onChange={e => this.handleChange('confirmPassword', e.target.value)}className="form-control"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            I Agree to HyperCart&nbsp;
                            <a href="#">Terms</a>&nbsp;
                            and&nbsp;
                            <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <div>
                        <button style={{width: '100%'}} type="submit" className="btn btn-block btn-primary">Get Started</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PaymentFormStep1