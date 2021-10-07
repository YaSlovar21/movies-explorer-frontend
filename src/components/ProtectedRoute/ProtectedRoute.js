//HOC ProtectedRoute — этим компонентом защитите роут /, 
//чтобы на него не смогли перейти неавторизованные пользователи

import { Route, Redirect } from 'react-router-dom';
import routes from '../../config/routes';

const ProtectedRoute = ({component: Component, ...props}) => {
    return (
        <Route>
            {props.loggedIn ? <Component {...props} /> : <Redirect to={routes.SIGN_IN} />}
        </Route>
    );
}

export default ProtectedRoute;