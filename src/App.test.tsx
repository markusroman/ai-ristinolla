import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';

const EMPTY_BOARD = [null, null, null, null, null, null, null, null, null];

let board_state: (null | string)[] = [];

const getBoardState = () => {
  let tiles = screen.queryAllByTestId(/tile-/i);
  let state = tiles.map((item) => {
    let value = item.getAttribute('id')?.split('-')[3];
    return value === 'null' ? null : String(value);
  });
  return state;
};

beforeEach(() => {
  render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
  board_state = getBoardState();
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
  expect(board_state).toEqual(EMPTY_BOARD);
});

it('clicked tile changes value', () => {
  expect(board_state).toEqual(EMPTY_BOARD);
  let tiles = screen.queryAllByTestId(/tile-/i);
  fireEvent(tiles[4], new MouseEvent('click'));
  board_state = getBoardState();
  console.log(board_state, tiles[4]);
  expect(board_state[4]).toEqual('X');
});
