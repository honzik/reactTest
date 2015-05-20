var React = require('react');

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    }
  },
  updateNewFriend: function(e){
    e.preventDefault();
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (    
    	<div className="col-sm-9 form-container">
      		<input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
      		<button onClick={this.handleAddNew}> Add Friend </button>          	
    	</div>
        
    );
  }
});

module.exports = AddFriend;