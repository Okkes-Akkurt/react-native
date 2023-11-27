import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const colorChangeEpic = (action$) =>
	action$.pipe(
		ofType('UPDATE_COLORS'),
		mergeMap((action) => {
			const selectedColor = action.payload;

			return of({ type: 'COLOR_CHANGED', payload: selectedColor });
		}),
	);
