var AvailablePlayer = React.createClass({

	propTypes: {
	    player: React.PropTypes.object.isRequired,
	    // viewCallback: React.PropTypes.func,
	    onSelect: React.PropTypes.func,
	    draft: React.PropTypes.any
	},
	onSelect: function(event){
		event.preventDefault();
		this.props.onSelect(this.props.player);
	},
	render: function () {
		var href = "/drafts/" + this.props.draft.id + "/players/" + this.props.player.id;
		return <div className="white-text">
			{this.props.player.name}
			{" "}
			<button className="waves-effect waves-light btn"><a className="smaller-font white-text" href={href}>View Stats</a></button>
			{" "}
			<button className="smaller-font waves-effect waves-light btn" onClick={this.onSelect}>Select Player</button>
		</div>
	}


});
