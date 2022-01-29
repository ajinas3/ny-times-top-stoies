import { Action } from '@ngrx/store';
import { NewsResponse } from '../models';

class UpdateNewsAction implements Action {
  readonly type = 'Update';

  constructor(public payload: NewsResponse) { }
}

export function newsReducer(newsList: NewsResponse, action: UpdateNewsAction) {
  switch (action.type) {
    case 'Update':
      newsList = action.payload;
      return newsList;
    default:
      return newsList;
  }
}