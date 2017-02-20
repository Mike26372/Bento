// Action creators are grouped in the App.js component
// Add new action creators to the 'bundledActionCreators' using
// Object.assign so new action creators will be bound and passed down


import ActionTypes from './actionTypes';
import database from '../base';

export function getClocks(db_key) {
  return dispatch => {

    dispatch(getClocksRequestedAction());

    return database.ref(`/testUser/modules/${db_key}`).once('value', snap => {
      const clocks = snap.val();
      dispatch(getClocksFulfilledAction(clocks))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getClocksRejectedAction());
    });
  }
}

function getClocksRequestedAction() {
  return {
    type: ActionTypes.GetClocksRequested
  };
}

function getClocksRejectedAction() {
  return {
    type: ActionTypes.GetClocksRejected
  }
}

function getClocksFulfilledAction(clocks) {
  return {
    type: ActionTypes.GetClocksFulfilled,
    clocks
  };
}