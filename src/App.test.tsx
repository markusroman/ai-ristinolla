import { render } from '@testing-library/react';
import React from 'react';
import { snapshot_UNSTABLE, RecoilRoot } from 'recoil';
import App from './App';
import { board } from './store';

const EMPTY_BOARD = [null, null, null, null, null, null, null, null, null];

beforeEach(() => {
  render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
});

it('renders the app correctly', () => {
  const app = document.getElementById('app');
  expect(app).not.toBeNull();
  const turn_label = document.getElementById('turn-label');
  expect(turn_label).not.toBeNull();
  const board = document.getElementById('board');
  expect(board).not.toBeNull();
});

it('rendered board is empty', () => {
  const initialSnapshot = snapshot_UNSTABLE();
  expect(initialSnapshot.getLoadable(board).valueOrThrow()).toEqual(
    EMPTY_BOARD
  );
});
