import React, { useState }from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'

interface HeaderTypes {
    login: boolean;
    register: boolean;
}

const Layout: React.FC = () => {
    const [appWindow, setAppWindow] = useState<HeaderTypes>({
        login: false,
        register: false,
    });

    const { login, register } = appWindow;

    const [showEditor, setShowEditor] = useState<boolean>(false);
  return (
    <>
      <Header defineWindowHandler={setAppWindow} appWindow={appWindow} showEditorHandler={setShowEditor} />
      <section>
        {Object.values(appWindow).some((value) => value) && (
          <button onClick={() => setAppWindow({ login: false, register: false })}>
            exit
          </button>
        )}
        {login && <Login defineWindowHandler={setAppWindow} />}
        {register && <Register />}
      </section>
    </>
  )
}

export default Layout