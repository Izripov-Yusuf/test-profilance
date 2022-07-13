import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Echo from 'laravel-echo';

import LinkForm from './components/LinkForm/LinkForm';
import LinksList from './components/LinksList/LinksList';
import MyLinks from './components/MyLinks/MyLinks';

import { fetchShortURLs } from './redux/link/asyncActions';

import { selectLinksData } from './redux/link/selectors';

import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  const { list, pagination, myShortURLsList } = useSelector(selectLinksData);

  const onChangePage = (page) => {
    dispatch(fetchShortURLs(page));
  };

  window.io = require('socket.io-client');

  window.Pusher = require('pusher-js');

  const echo = React.useCallback(
    new Echo({
      broadcaster: 'pusher',
      key: 123,
      host: 'http://test-task.profilancegroup-tech.com:6002',
    }),
    []
  );

  React.useEffect(() => {
    dispatch(fetchShortURLs());
  }, []);

  echo.channel('btti_database_short_urls').listen('new_click', (event) => {
    console.log('event', event);
  });

  echo.connector.channels.btti_database_short_urls.listen(
    'new_click',
    (event) => {
      console.log('event', event);
    }
  );

  return (
    <div className="app">
      <h1 className="app__title">Сокращатель</h1>
      <div className="app__wrap">
        <div className="app__col">
          <div className="app__link-form">
            <LinkForm />
          </div>
          <MyLinks list={myShortURLsList} />
        </div>
        <div className="app__col">
          <LinksList
            list={list}
            pagination={pagination}
            onChangePage={onChangePage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
