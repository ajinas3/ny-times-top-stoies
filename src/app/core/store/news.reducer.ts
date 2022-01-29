import { Action } from '@ngrx/store';
import { NewsResponse } from '../models';

class UpdateNewsAction implements Action {
  readonly type = 'Update';

  constructor(public payload: NewsResponse) { }
}

/**
 * The reducer function to update the news list
 * @param newsList The store data
 * @param action action received through dispatch
 * @returns {NewsResponse} to be updated in subscribed components
 */
export function newsReducer(newsList: NewsResponse, action: UpdateNewsAction) {
  switch (action.type) {
    case 'Update':
      newsList = action.payload;
      return newsList;
    default:
      return newsList;
  }
}