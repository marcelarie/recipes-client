# RECIPES CLIENT

This project is a fictional recipes app that users can see different recipes 
with comments and votes.

## REQUIREMENTS

- [ ] LOGIN PAGE 
    - Request to a endpoint like -> http://localhost:4000/user/login
    - This endpoint will return a json with the user details and the JWT

- [ ] ERROR HANDLING
    - Handle errors returned from the API so that the users can know if anything
      went wrong

- [ ] SING UP PAGE
    - In this page users can create an account with their credentials and sign up
    - endpoint like -> http://localhost:4000/user/sign-up
    - One the users have logged in or signed up save the user info on the Store

- [ ] HOME PAGE
    - In this page users can see the listing of the recipes from the app
    - Each recipes should be rendered in a Card and have a link to the recipes 
      details page

- [ ] RECIPE DETAILS PAGE
    - In this page users can see the individual details of the recipes
    - http://localhost:4000/recipes/:recipeID 

- [ ] UPVOTES COMPONENTS
    - If the users are authenticated they should also be able to up vote a recipe 
      in the recipe details page
    - This endpoint requires authentication and you need to send the JWT with 
      each request
    - Up vote endpoint like -> http://localhost:4000/recipes/:recipeID/up-vote
    - Down vote endpoint like -> http://localhost:4000/recipes/:recipeID/down-vote

- [ ] COMMENT COMPONENTS
    - If there are no comments you should render a message
    - If the users are logged in you should render a New comment button that 
      opens a form
    - This endpoint requires authentication and you need to send the JWT with 
      each request

## TODOS

- [ ] Setup Redux
- [ ] Setup React Router 
- [ ] Create Navbar Component
- [ ] Create Login Component
- [ ] Create Sing Up Component
- [ ] Create Home Page Component
- [ ] Create Recipes Details Component
- [ ] Create Comments Component
- [ ] Create Votes Component
- [ ] Make Async Calls Inside Actions
- [ ] Handle Errors on All components.


## DONE 

## ERRORS


