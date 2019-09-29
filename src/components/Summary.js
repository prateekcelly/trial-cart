import React, { Component } from "react";
import { connect } from "react-redux";
import { addShipping, subtractShipping } from "../actions/cartActions";

class Summary extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }
  handleChecked = e => {
    if (e.target.checked) {
      console.log("hello");
      this.props.addShipping();
    } else {
      this.props.subtractShipping();
    }
  };
  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}></input>
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: {this.props.total} $</b>
          </li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch(addShipping());
    },
    subtractShipping: () => {
      dispatch(subtractShipping());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
