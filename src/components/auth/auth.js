import { useState } from 'react';
import { Link, useParams, Switch, Route } from 'react-router-dom';
import login from '../../api/auth/login';
import SmartSplit from '../../icons/smartsplit';
import Login from './login/login';
import Signup from './signup/signup';

const Auth = (props) => {
  const { type } = useParams();
  console.log('Loggin form', type);

  return (
    <div className="auth">
      <div className="topBar">
        <SmartSplit />
        {type !== 'signup' && (
          <div className="right">
            <span>Pas encore membre ?</span>
            <Link to="/auth/signup">Créer mon compte</Link>
            <button>English</button>
          </div>
        )}
        {type === 'signup' && (
          <div className="right">
            <span>Déjà membre ?</span>
            <Link to="/auth/login">Ouvrir une session</Link>
            <button>English</button>
          </div>
        )}
      </div>
      <Switch>
        <Route path={['/', '/auth/login']} exact>
          <Login resetLogginCheck={props.resetLogginCheck} />
        </Route>
        <Route path="/auth/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
