Wave 0: Establish the Relationships

    Make a diagram with all of the components, illustrating which components are nested within each other, and making it clear which components are siblings to each other.

    For each component, list out what data needs to be referenced within it, and what data type each piece of data is. 
    App:  
    Renders a game component

    Game:  
    Renders submissions and final poem

    Recent Sub:  
    This should store the most recent player submission
    When it re-renders, it should take the props sent to it from Player Submission and render those props as a JSX element
    Its type could be an object (you could store every word or you could just store one prop as a String)

    Player Sub:  
    onChange (when the input fields change), this should store the changed fields
    When the person clicks the Submit Line button, it should useState the fields to original state
    This button should also have an onSubmit function that sends its current state to the App/Game to send down to Recent Submission
    
    Final Poem:  
    The Player Sub also should have a Callback function onSubmit (for submit line) to send that to Final Poem
    Final Poem should STORE those and only render them when the READY button is clicked
    
    Particularly, think about:
        If the PlayerSubmissionForm component handles a player's submission of poetry, what should that component do with that data?  onChange, it should store each word (or add it to the string in the object) 

        How should the FinalPoem component get all of the parts of the poem? onSubmit (submit line), it should STORE the object but not display it until the READY button is clicked 

        What kind of input elements should PlayerSubmissionForm use? (aka checkbox, text, button, submit, etc...) Text?

        What should the Game component represent and be responsible for?  The game component should be the controller and should keep track of the state of the game - what types of state do we need?  whose turn is it

    For each piece of data in each component, determine if it should be part of that component's state or passed in as a prop.
        Final Poem - actually I'm changing my answer from above, I think that Final Poem should only be rendered onSubmit; STATE in GAME should track what it will be rendered with.

        GAME should have state to track/store everything for each component
        -Final Poem (use an array of objects?)
        -Recent Submission (send an object as a prop)
        -Player Submission ()

The waves are organized in this order:

    Set up the PlayerSubmissionForm component with a hard-coded form and prove that the Game component can receive submission data from the form when the form is submitted

    Set up the FinalPoem component so that it shows all of the lines of poetry that the players have previously submitted

    Work on details that show, hide, or modify different components: showing the most recent submission or conditionally showing the final poem
    
    Refactor the hard-coded PlayerSubmissionForm so it dynamically generates the form
