import React from 'react';

export default class Modal extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { price, france, elsewhere } = this.props;
    const { open } = this.state;

    return (
      <>
        <div>
          <span>{price} EUR </span>
          <a onClick={this.handleClick} className={open ? 'b0' : null}>
            Buy
          </a>
        </div>
        {open ? (
          <div className="w100">
            <div>
              <a href="#">Add to cart</a> Shipping to France +{france} EUR
            </div>
            <div>
              <a href="#">Add to cart</a> Shipping elsewhere +{elsewhere} EUR
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
