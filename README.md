# CoffeeEnhancer

A gem to make coffeescript even more fun to use.


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'coffee_enhancer'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install coffee_enhancer

## Usage

Add this to your application.js file:

```ruby
//= coffee_enhancer
```

## Documentation

**Adds the following methods for coffee/js :**

```coffescript

# Checks if array or string element is present
Array::present()

# Checks if array element is empty
Array::empty()

# Checks if array element is empty
Array::any()

# Formats time to 12 hour clock time
Date::formatted_time_with_pm()

# Formats time to 24 hour clock time
Date::formatted_time()

# Formats date
Date::formatted_date()

# Gives an english string describing the time since datetime stamp
Date::time_ago_in_words()

# Method that checks if a certain variable is undefined or null
non_existent(variable)

# Method that checks if a certain variable is defined and not null
exists(variable)

# Method that checks if a certain variable is defined
defined(variable)

# Method that checks if a certain variable is undefined
not_defined(variable)

# Method that checks if a certain variable is loaded (used in ReactJs mostly)
loaded(variable)

# Checks if number is positive or equal to zero
Number::is_positive()

# Checks if number is equal to zero
Number::is_zero()

# Checks if number is smaller or equal to zero
Number::is_negative()

# Converts to currency
Number::to_currency()

# Converts to string
Number::to_s()

# Converts to integer
Number::to_i()

# Checks if string element is blank
String::blank()

# Checks if string element is empty
String::empty()

# Checks if string element is present
String::present()

# Converts string to integer
String::to_i()
  parseInt(@)

# Converts string to float
String::to_f()

# Converts the first character of string to uppercase and the rest to downcase
String::capitalize()

# Removes whitespaces before and after the content of the string
String::trim()

# Converts the first character of each word to uppercase and the rest to downcase
String::titleize()

```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake jasmine:ci` to run the tests.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/coffee_enhancer. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


