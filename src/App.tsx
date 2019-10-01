import React from 'react';
import './App.scss';
import { CommingSoonPage } from './pages';

const App: React.FC = () => {
  const applicationName: string = 'skrzypmajster.github.io';
  const applicationAuthorLink: string = 'https://skrzypmajster.github.io';
  const applicationAuthorName: string = 'Dawid \'SkrzypMajster\' Skrzypczyk';
  const messageHeader: string = 'Comming Soon';
  const messageText: string = '... maybe in some day';

  return (
    <div className="App">
      <CommingSoonPage
        appName={applicationName}
        authorLink={applicationAuthorLink}
        authorName={applicationAuthorName}
        messageHeader={messageHeader}
        messageText={messageText} />
    </div>
  );
}

export default App;
