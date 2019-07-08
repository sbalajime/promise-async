import React, {Component} from 'react';

class AsyncComp extends Component {
    async componentDidMount() {
        const users = await fetch('http://localhost:8081/users');
        const userJSON = await users.json();
        const course = await fetch(`http://localhost:8081/courses/${userJSON[0].course}`);
        const courseJSON = await course.json();     
        const site = await fetch(`http://localhost:8081/sites/${courseJSON[0].site}`);
        const siteJSON = await site.json();
        console.log('site', siteJSON)
    }
    render() {
        return(
            <div><h1>async</h1></div>
        )
    }
}

export default AsyncComp;