var destination = document.querySelector("#container");
var { Router,
    Route,
    IndexRoute,
    IndexLink,
    Link } = ReactRouter;

var Home = React.createClass({
    render: function(){
        return(
            <div>
                <h2>Home Page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo ipsa sequi! Consequuntur deleniti deserunt dicta illo laborum quod tempore veritatis. Aspernatur consequatur dolore eos expedita ipsum repudiandae voluptas, voluptatem.</p>
            </div>
        )
    }
});
var AboutUs = React.createClass({
    render: function () {
        return(
            <div>
                <h2>About us page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo ipsa sequi! Consequuntur deleniti deserunt dicta illo laborum quod tempore veritatis. Aspernatur consequatur dolore eos expedita ipsum repudiandae voluptas, voluptatem.</p>
            </div>
        )
    }
});
var Contacts = React.createClass({
    render: function(){
        return(
            <div>
                <h2>Contacts page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur, dolor enim esse illum ipsum iusto, labore laudantium nemo obcaecati odio possimus qui quia sequi sit. Ipsum minus obcaecati voluptate?</p>
            </div>
        )
    }
});
var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="about" activeClassName="active">About us</Link></li>
                    <li><Link to="contacts" activeClassName="active">Contacts</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={AboutUs}/>
            <Route path="contacts" component={Contacts}/>
        </Route>

    </Router>,
    destination
);