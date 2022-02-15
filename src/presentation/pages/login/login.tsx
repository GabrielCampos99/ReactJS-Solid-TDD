import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import Context from '@/presentation/components/context/form-context'

type props= {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<props>({ isLoading: false, errorMessage: '' })
  return (
    <div className={Styles.login}>
      <LoginHeader />
        <Context.Provider value={state}>
          <form className={Styles.form}>
            <h2>Login</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
            <button className={Styles.submit} type="submit" disabled>Entrar</button>
            <span className={Styles.link}>Criar conta</span>
            <FormStatus />
          </form>
        </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
