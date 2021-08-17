import {Component} from "react";

class PaymentFormStep1 extends Component<{ formSubmit: (arg0: any) => void }, { formData: any }> {

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
                        <h2>Payment Method</h2>
                    </div>
                    <div className="mb-3">
                        <label>Card Holder Name</label>
                        <input type="text" onChange={e => this.handleChange('cardHolderName', e.target.value)}
                               className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label>Card Number</label>
                        <input type="text" onChange={e => this.handleChange('cardNumber', e.target.value)}
                               className="form-control"/>
                    </div>
                    <div>
                        <button style={{width: '100%'}} type="submit" className="btn btn-block btn-primary">Proceed
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PaymentFormStep1