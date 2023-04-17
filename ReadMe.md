# Some rules foe regex 

## CHARACTER SETS 
1. [ng]injas, this means that n or g should start, we will have a match wether for n or g.
example - [abcde123]000, means a000, 1000 etc... not abc000.
2. [^pn]000 ==> match everything except p or n
regex should start with /^ $/  and you can add  (gmi => global, multi,  innsensitve); 
like /^$/gmi, global means if more than two words matches allow it. 

## RANGES

1. [a-j]000, This means that match all between a and j followed by 000.
2. [a-z]000, /^[a-z]nkaka$/gi, this means that any letter can be capital or the whole string
can be capital(case insensitive), to only allow the [a-z] to be case insensitive nkaka stays case senstitive we can do like /^[a-zA-Z]nkaka$/, or [a-zA-Z0-9]nkaka to includes numbers

## REPEATING 
[0-9],
with manual repeat you can do like
[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]
the above will only much ten numbers between 0 and 9, like 0782468006. 
