import React, {Component} from "react";
import {Layout} from "antd";


class Footer extends Component {
	render() {
		
		return (
			<Layout.Footer>
				<div className="layout-footer-content">
                © Digital Identity Application. 2021
				</div>
			</Layout.Footer>
		)
	}
}

export default Footer;
