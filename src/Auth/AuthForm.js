import React, { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../store/auth-context';

import Spinner from '../components/UI/Spinner'
import Button from '../components/UI/Button';

import classes from './AuthForm.module.css';


function AuthForm() {

  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');
  const confirmPasswordInputRef = useRef('');

  const history = useHistory();

  const authCtx = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const submiHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    if (!isLogin && enteredPassword) {
      if (enteredPassword !== enteredConfirmPassword) {
      alert('As senhas estão diferentes')
      }
    } else {

      // TODO: Criar o endpoint correto no Django
      setIsLoading(true);
      const api_token = 'AIzaSyBTzSpcEce9IVxBVT35413wdAWS3IELY64'
      let url;
      if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + api_token
      } else if (!isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + api_token
      }
      fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify({
            'email': enteredEmail,
            'password': enteredPassword,
            'returnSecureToken': true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp=> {
      setIsLoading(false)
      if (resp.ok) {
        return resp.json();
      } else {
        return resp.json().then((data) => {
          let errorMessage = "Autenticação Falhou"
          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      authCtx.login(data.idToken);
      console.log('redirecting to /pacientes from Login')
      history.replace('/pacientes');
    }).catch((error) => {
      alert(error.message);
    });
    }};

  return (
    <section className={classes.loginCard}>
      {/* <div>
        <img src={LOGO} />
      </div> */}
      <div>
        <h1>{isLogin ? 'LOGIN' : 'CADASTRO'}</h1>
        <form onSubmit={submiHandler}>
          <div className={classes.input}>
            <label>Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" id="password" required ref={passwordInputRef} />
          </div>
          {!isLogin && 
          <div>
            <label>Confirmar Senha</label>
            <input type="password" id="confirm-password" required ref={confirmPasswordInputRef} />
          </div>}
          <div className={classes.actions}>
            {!isLoading && <Button type="submit">{isLogin ? 'LOGIN' : 'CADASTRE-SE'}</Button>}
            {isLoading && <Spinner/>}
            <button
              type="button" 
              onClick={switchAuthModeHandler}>
                {isLogin ? 'REGISTRE-SE' : 'IR PARA LOGIN'}
            </button>
            {isLogin && <button type="button">ESQUECI A SENHA</button>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default AuthForm;
