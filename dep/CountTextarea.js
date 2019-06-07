import React, { Component } from 'react';


class CountTextarea extends Component {

  state = { message: '' }

  setValue = ({ target: { value } })=> this.setState({ message: value })
  
  render() {
    const { max=200 } = this.props;
    
    return (
      <div className="textarea-wrapper">
        <textarea onChange={this.setValue} value={this.state.message}
                  placeholder='MESSAGE' maxLength={max} style={{ resize:'none' }}/>
        <span className="textarea-counter"
              style={{ color: this.state.message.length < max ? '' : '#a93f55'}}>
          {this.state.message.length}/200
        </span>
      </div>
    );
  }
}

export default CountTextarea;
