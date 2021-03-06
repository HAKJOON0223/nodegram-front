import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Profile from "../Routes/Profile/index";
import Explore from "../Routes/Explore";
import notification from "../Routes/notification";
import Search from "../Routes/Search/index";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/search" component={Search}/>
        <Route path="/explore" component={Explore}/>
        <Route path="/notifications" component={notification}/>
        <Route path="/:username" component={Profile}/>
        <Redirect from ="*" to="/"/>
    </Switch>
);

const LoggedOutRoutes = () => (<>
    <Route exact path="/" component={Auth}/>
    <Redirect from ="*" to="/"/>
</>);

const AppRouter = ({isLoggedIn}) => (<Switch>{isLoggedIn? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
