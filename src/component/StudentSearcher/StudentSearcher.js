import React, { Component } from 'react'
import { Input, Select } from 'antd'
import './StudentSearcher.css'
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;

class StudentSearcher extends Component {
  constructor(props) {
    super(props)
    const { options } = props
    this.state = {
      currentOptionValue: options[0].value
    }
  }
  
  onSearch = value => {
    const { onSearch } = this.props
    const { currentOptionValue } = this.state
    console.log(value)
    onSearch({
      keyName: currentOptionValue, 
      value
    })
  }
  handleChange = value => {
    this.setState({
      currentOptionValue: value
    })
  }
  render() {
    const { options } = this.props
    return (
      <div className="searcher-wrapper">
        <InputGroup className="Inputgroup" compact>
          <Select defaultValue={this.state.currentOptionValue} onChange={this.handleChange}>
            { options.map(item => <Option key={item.value} value={item.value}>{item.text}</Option>) }
          </Select>
          <Search
            style={{ width: 200 }}
            enterButton
            onSearch={this.onSearch}
          />
        </InputGroup>
      </div>
    )
  }
}

export default StudentSearcher