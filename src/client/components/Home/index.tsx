import React from 'react';
import NameEditComponent from './nameEdit';
import SidebarComponent from './Sidebar';
import MemberTableComponent from './MemberTable';

const Home = () => {
  const [name, setName] = React.useState('defaultUserName');
  const [editingName, setEditingName] = React.useState('defaultUserName');

  const [isVisible, setVisible] = React.useState(false);

  const loadUsername = () => {
    setTimeout(() => {
      setName('name from async call');
      setEditingName('name from async call');
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  }, []);

  const setUsernameState = () => {
    setName(editingName);
  };

  return (
    <>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi movies</h1>
        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0062622/">
              2001: a space odyssey
            </a>
          </li>
        </ul>
      </SidebarComponent>
      <MemberTableComponent />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === '' || editingName === name}
      />
      <div style={{ float: 'right' }}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
    </>
  );
};

export default Home;
