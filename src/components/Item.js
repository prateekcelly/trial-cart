import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";

class Item extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const id = this.props.match.params.id;
    var item = this.props.items.find(item => item.id == id);
    return (
      <div className="details">
        <div className="item-image">
          <img src={item.img} alt={item.title}></img>
        </div>
        <div className="item-info">
          <div className="item-header">
            <h3>{item.title}</h3>
            <h5
              style={{
                color: "grey",
                fontStyle: "italic"
              }}>
              {item.desc}
            </h5>
          </div>
          <h4>${item.price}</h4>
          <h6 style={{ color: "grey" }}>
            Additional tax shall apply, charged at checkout
          </h6>
          <div>
            <button
              className="buynow btn-color"
              onClick={() => {
                this.handleClick(item.id);
              }}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
