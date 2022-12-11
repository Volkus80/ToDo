import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import  store  from './data/store';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DndProvider>
    </Provider>
  </React.StrictMode>
);

