import React,{Component} from 'react';

class Promises extends Component {
    componentDidMount(){
        fetch('http://localhost:8081/users')
            .then(users => users.json())
            .then(users => {
                console.log('users', users[0].course)
                fetch(`http://localhost:8081/courses/${users[0].course}`)
                    .then(course => course.json())
                    .then(course => {
                        console.log('course', course);
                        fetch(`http://localhost:8081/sites/${course[0].site}`)
                            .then(site => site.json())
                            .then(site => console.log('site', site))

                    })
            })
    }
    render(){
        return(
            <div>
                <h1>Promise</h1>
            </div>
        )
    }
}

export default Promises;