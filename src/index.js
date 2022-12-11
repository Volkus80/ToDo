import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {DndProvider} from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import  store  from './data/store';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
const backend = 'ontouchstart' in window ? TouchBackend : HTML5Backend;
const opts = 'ontouchstart' in window ? {
  enableMouseEvents: true,
  enableHoverOutsideTarget: false,
} : null;

root.render(
  <React.StrictMode>
    <DndProvider backend={backend} options={opts}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </DndProvider>
  </React.StrictMode>
);

