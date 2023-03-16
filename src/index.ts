import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { timeout, delay } from 'rxjs/operators';
import { XMLHttpRequest } from 'xmlhttprequest'

const ajaxResp1: AjaxRequest = {
    createXHR,
    url: 'https://api.github.com/search/repositories?q=rxjs',
}
const ajaxResp2: AjaxRequest = {
    createXHR,
    url: 'https://gitlab.com/api/v4/projects?search=nodejs',
}
const delayDuration = 2000; 

function createXHR() {
    return new XMLHttpRequest();
}

const request1$ = ajax(ajaxResp1).pipe(
    delay(delayDuration)
);
const request2$ = ajax(ajaxResp2).pipe(
    delay(delayDuration)
);

request1$.subscribe({
  next: response => console.log(response.response),
  error: error => console.error(error)
});
request2$.subscribe({
  next: response => console.log(response.response),
  error: error => console.error(error)
});
