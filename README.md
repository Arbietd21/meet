Features

{
    2. show/hide event details
    3. specify a number of events
    4. use the app when offline
    5. add an app shortcut to the home screen
    6. display charts visualizing event details
}

User Stories

{
    2. As a user, I should be able to show and hide event details, so that I can see the details of events I am interested, and not see the details of the events I am not interested in.
    3. As a user, I should be able to specify the number of events shown, so that I can see as many or as little as I want.
    4. As a user, I should be able to use my app offline, so that even if I don't have an internet connection, I am still able to see events.
    5. As a user, I should be able to add an app shortcut to my homescreen, so that I have quick access to the app.
    6. As a user, I should be able to display charts visualizing event details, so that the event details are easily readable.
}

Gherkin's Syntax

{
    2. { 
        Given: A list of events have been loaded.
        When: The user clicks the "show details" or "hide details" button
        Then: The event element will expand or hide the event details
    }
    3. {
        Given: A city has already been chosen
        When: When the user enters a number into the "number of events" field
        Then: A list of events equal to the number inputted will be shown
    }
    4. {
        Given: The user has an account
        When: The user uses the app with no internet connection
        Then: The app will still load events
    }
    5. {
        Given: The user knows the url
        When: The user adds a shortcut for app
        Then: The app will become easily accessable 
    }
    6. {
        Given: The user has populated a list of events
        When: The user clicks the "show details" button
        Then: A chart visualizing the event details will show up
    }
}

Serverless functions will be perfect for this project. I will be using serverless functions for many different things like authenticating users. Changing which city the user wants to search in, or how many events they want to see, will also utilize serverless functions. Also when clicking on an event to show the event details, serverless functions will be utilized for that as well.