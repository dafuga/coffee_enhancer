## Checks if string element is blank, empty or present
String::blank = ->
  not @.replace(/^\s+|\s+|\n+$/g, '')?.length

String::empty = ->
  not @.replace(/^\s+|\s+|\n+$/g, '')?.length

String::present = ->
  not not @.replace(/^\s+|\s+|\n+$/g, '')?.length

## Converts to integer
String::to_i = ->
  parseInt(@)

## Converts to float
String::to_f = ->
  parseFloat(@)

## Converts the first character of string to uppercase and the rest to lowercase
String::capitalize = ->
  "#{@.charAt(0).toUpperCase()}#{@.substr(1).toLowerCase()}"

## Removes the whitespace before and after the content of the string
String::trim = ->
	@.replace /^\s+|\s+$/g, ''

## Converts the first character of each word to uppercase and the rest to lowercase
String::titleize = ->
	title = ''
	for word in @.toLowerCase().split(' ')
  	title += "#{word.capitalize()} "
  title.trim()