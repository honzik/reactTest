var React = require('react');

var names = [
	{name: 'Moe', key: "1"},
	{name: 'Larry', key: "2"},
	{name: 'Curly', key: "3"},
];

var SimpleTest = React.createClass({

	render: function() {
		return (
			<div className="col-sm-4">
				<h3>Simple Test</h3>
				<div className="outer">
					{
			            names.map(function (name) {
			                return <div key={name.key} className="inner">Hello, {name.name}!</div>
			            })
			        }
				</div>
			</div>
		); 
	}

});

module.exports = SimpleTest;