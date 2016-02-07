export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);
   
    const SUCCESS = type;
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';
    next({ ...rest, type: REQUEST });
    
    return promise
      .then(function(response) {
        if (response.status >= 400) {
          next({ ...rest, error: response.status, type: FAILURE });
          console.log(response.status);
          return false;
        }
        return response.json();
      })
      .then(res => {
        next({ ...rest, res, type: SUCCESS });
        return true;
      });
   };
}