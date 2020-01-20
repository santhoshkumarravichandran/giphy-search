# GIPHY SEARCH

A Single Page Application to search your favourite GIPHY Image.

The app gets the results from GIPHY image search based on the user query.

The app must contain a filter on search input. The search should not allow swear words.

The app supports pagination, 25 giphy's are shown on each page, pagination allows you to move to next 25 giphy's. 

Total result of giphy's matching user query is also shown.


LIVE Demo of the application is available here in the below link
```https://santhoshkumarravichandran.github.io/giphysearch/```

## More about the application
The entire application can be build with single component, How ever to demonstration feature of angular such as component communication, the app has been split into two component.


`Search-box` Component:
 The search-box component has the input field and search button for the user to enter the keyword and begin search.
 The component gets the response from `giphy search` service and passes it to the ``search-result`` component.

 `Search-result` Component: 
 The search-result component shows user with the results from the `giphy search` service.The component loops through response and forms the image gallery. The component also has `paginator` which allows user to navigate through the results from service. User's `Search` query and `Total Giphy count` is also shown to the user.


```Bad word filter``` Service: filters the swear words from user query and cleans them before passing it to GIPHY Image Search API.

```Giphy Search ``` Service: This service makes http call to GIPHY Image Search API with user's query and offset.



## Prerequisites
Install the CLI using the npm package manager:
```
npm install -g @angular/cli
```

## Getting Started

Clone the application from github repository.
```
https://github.com/santhoshkumarravichandran/giphysearch.git
```

Run the below command in root folder of the application to install the required dependency

```
npm install
```
To start the development server
```
ng serve
```
This command will start the local serve and open your browser on http://localhost:4200/

To build a production copy
```
ng build --prod
```
This command will prepare a production copy of the application in `dist` folder.

## Usage Example

Giphy Search allows you to search for your favorite GIPHY, you can put your search query in the search bar.
![alt text](https://santhoshkumarravichandran.github.io/giphysearch/assets/landing_page.png)

Results
![alt text](https://santhoshkumarravichandran.github.io/giphysearch/assets/search_results.png)

## Dependencies
Swear words in search query are filtered. ```badword-list``` library is used to obtain the list of bad words.

 ```
 https://www.npmjs.com/package/badwords-list
 ```

 

