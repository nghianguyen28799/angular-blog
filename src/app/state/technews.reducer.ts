import { createReducer, on } from '@ngrx/store';
import { addArticle, addMutiArticles, delArticle } from './technews.action';
import { initalState } from './technews.state';

const _technewsReducer = createReducer(
  initalState,
  on(addMutiArticles, (state: any, action: any) => {
    return {
      ...state,
      articles: action.articles,
    };
  }),
  on(addArticle, (state: any, action: any) => {
    console.log(state);
    return {
      ...state,
      articles: state.articles.concat(action),
    };
  }),
  on(delArticle, (state: any, action: any) => {
    console.log(action);

    return {
      ...state,
      articles: state.articles.filter((item: any) => item.title !== action.title),
    };
  })
);

export const technewsReducer = (state: any, action: any) => {
  return _technewsReducer(state, action);
};
