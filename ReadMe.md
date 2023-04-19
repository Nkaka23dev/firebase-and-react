# Some rules for regex 

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
[0-9]+ means any number between 0 and 9, and write from 1 number up to infinity
example 0936377463633784945...........
to specify you can say [0-9]{10} which means only 10 numbers, example 0782469006 
you can even specify a range example [a-z]{5,10}, a string should be 5 chars long or 10.
[a-z]{5, } this match everything from  atleast five to infinity.

## MeterCharacters

\d => match any digit character, just like [0-9]
\w => match any word character and numbers, just a-z A-Z [0-9] and _
\s => match white space character space or tab.
\t match tab character only. 

examples \d{3}\s{2}\w\d 

## MeterCharacters 

'+' one or more 
'\' escape 
'[]' character set
'^' negation symbol 

### Special characters 

'?' If you place it after any character or range it become optional 
'.' any character is allowed except new line  character
'*' 0 or more a bit like + 

to escape special character or metercharacter we use \ 
example ===> abc\? 

### | pipes (m|n|j)kaka 
we are syaing either mkaka, nkaka or jkaka. 

### Methods 
{exec, test} ==> 'with this methods we always start with regex.test() or exec'
match,replace, search, split, matchAll,toString ==> 'with this we start with text.replace()'