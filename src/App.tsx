import React, { useState } from 'react';
import Header from './components/Header';
import { Root } from './style/root';
import Login from './components/Login';
import Register from './components/Register';
import TextEditor from './components/textEditor/TextEditor';

interface AppTypes {
  login: boolean;
  register: boolean;
}

const App: React.FC = () => {
  const [appWindow, setAppWindow] = useState<AppTypes>({
    login: false,
    register: false,
  });
  const [showEditor, setShowEditor] = useState<boolean>(false);

  const { login, register } = appWindow;

  return (
    <Root>
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
      {showEditor && <TextEditor />}
    </Root>
  );
};

export default App;
