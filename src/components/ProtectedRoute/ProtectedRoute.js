//HOC ProtectedRoute — этим компонентом защитите роут /, 
//чтобы на него не смогли перейти неавторизованные пользователи

import { Route, Redirect } from 'react-router-dom';
import routes from '../../config/routes';

const ProtectedRoute = ({component: Component, ...props}) => {
    return (
        <Route path={props.path}>
            {props.isLoggedIn ? <Component {...props} /> : <Redirect to={routes.LANDING} />}
        </Route>
    );
}

export default ProtectedRoute;