import React from "react";

export default class Footer extends React.Component {
	render() {
        let year = new Date().getFullYear();
        return (
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        Yes dude! Copyright {year} 
                    </div>
                </div>
            </div>
        );
    }
}