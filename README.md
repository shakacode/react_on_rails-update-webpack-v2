# React on Rails on Rails 5.1 with migration to Webpack v2

## Links
* [React on Rails](https://github.com/shakacode/react_on_rails)
* [Webpack V2 docs](https://webpack.js.org/guides/migrating/) for migrating from v1.
* [Rails 5.1.0.beta1 Announcement](http://weblog.rubyonrails.org/2017/2/23/Rails-5-1-beta1/)

## Objectives
* [PR #1](https://github.com/shakacode/react_on_rails-update-webpack-v2/pull/1): See React on Rails 6.6.0 (my developer copy) running on top of Rails 5.1. This PR is from running `rails generate react_on_rails:install --redux`.
* [PR #2](https://github.com/shakacode/react_on_rails-update-webpack-v2/pull/2): Upgrade the default installer to user Webpack v2. 
* [PR #3](https://github.com/shakacode/react_on_rails-update-webpack-v2/pull/3): Add current eslint-config-shakacode. 
* Check if we needed [React on Rails PR 730: Default to using `--bail` with webpack scripts](https://github.com/shakacode/react_on_rails/pull/730). It turns out that the issue with needing `--bail` is limited to Webpack v1.

## Running the code
* Be sure to change the Gemfile to the version of React on Rails that wish to use.
* Even better, create a clone or fork of React on Rails and check the relative path in the Gemfile.
* Switch to the branch corresponding to the [PR](https://github.com/shakacode/react_on_rails-update-webpack-v2/pulls) that interests you.
* Run `bundle && yarn`

Aloha from Justin and the team at [ShakaCode](http://www.shakacode.com)! Feel free to post comments in the PRs and to create issues here! If you have questions or comments, feel free to [email me at justin@shakacode.com](mailto:justin@shakacode.com). We've got a great Slack community that loves React, Redux, Webpack, and React on Rails! Ask me for an invite.
