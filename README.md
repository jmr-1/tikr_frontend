TIKR is a small stock trading platform with historical trading data. Due to API limitations, historical data is limited but app can scale with more companies. 

To run, please install Ruby and React.  
This is the backend of the app. Please also go to the front end at https://github.com/jmr-1/tikr_backend . Navigate to the installed directory on your terminal and run:
>rails db:migrate
>rails db:seed
>rails server

On the front end, navigate to the installed directory on your terminal and run:
>npm install
>npm start 

For the backend, you will need to use an API key from https://www.alphavantage.co/ . Place this key inside your Rails secret base and use this guide to assign the key as a variable from within your app: https://blog.engineyard.com/rails-encrypted-credentials-on-rails-5.2 .

Login uses a basic Username check. Use "John-Louis" as the username. Auth has not been implemented for this app. 
