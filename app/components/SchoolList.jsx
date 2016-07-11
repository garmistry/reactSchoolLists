var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx");
var addSchool = require("./AddSchool.jsx");

module.exports = React.createClass({
	render:function(){
		return(
			<div className = "row">
				<div className = "col-md-6">
					<addSchool />
				</div>
				<div className = "col-md-6">
					{
						this.props.schools.map(function(s,index){
							return(
								<SchoolInfo info = {s} key={"school"+index} />
							)
						})
					}
				</div>
			</div>
		)
	}
});