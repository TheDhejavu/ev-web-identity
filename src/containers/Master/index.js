import React, {Component} from "react";
import {Layout} from "antd";
import Routes from "../../routes";
import Footer from "../Footer";

class Master extends Component {
	render() {
		return (
			<Layout className="layout">
				<Layout>
					<Layout.Content className="layout-content">
						<Routes/>

						<Footer/>
					</Layout.Content>
				</Layout>
			</Layout>
		);
	}
}
export default Master;
