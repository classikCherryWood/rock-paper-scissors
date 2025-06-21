# step 2
- GET computer's choice with a function
- Categorise choices into 3 bins, with even probabilities.
- RETURN choices, log them in console. 

# step 3
- GET human's choice with another function
- RETURN choices, log them in console. 
- IGNORE input validation

# step 4
- INIT two scores: `humanScore` and `computerScore` to zero

# step 5
- INVOKE a single-round playing function
- the function operates on `humanChoice` and `computerChoice` as params
- MAKE params case-insensitive (toLowerCase())\
- PRINT the result message
- INCREMENT the score according to the result

# step 6
- SET `humanScore`, `computerScore` to zero
- INVOKE another function to run `playRound` for 5 times.
- SHOW scores at the end of each round

# step 7
- CREATE three buttons for human players to choose from
