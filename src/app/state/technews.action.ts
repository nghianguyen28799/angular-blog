import { createAction, props } from '@ngrx/store';

export const addMutiArticles = createAction('addMutiArticles', props<{articles: any}>());
export const addArticle = createAction('addArticles', props<{article: any}>());
export const delArticle = createAction('delArticle', props<{title: string}>());
