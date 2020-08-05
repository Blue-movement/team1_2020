![BLMLogo](https://i.imgur.com/0W05r6c.png)

# BLM Social Media
Project for team 1's 2020 IBM Blue Movement Bootcamp
## Description
This website seeks to complement the existing BLM website by providing an extended set of features not currently meet by the solution including:
- Social Media Linkages
- Information for Political Reperesentatives & State Bills Up for debate
### Technologies
* [React](https://reactjs.org/) - Frontend: JavaScript library for creating web apps!
* [node.js](http://nodejs.org) - Evented I/O for the backend
* [Material UI](https://material-ui.com/) - Frontend framework for UI design

### API's
* [snoowrap (Reddit JS API)](https://github.com/not-an-aardvark/snoowrap)
* [Twitter](https://developer.twitter.com/en/docs)
* [News API](https://newsapi.org/)
* [Instagram API](https://www.instagram.com/developer/)

#### References
* [Material Studies](https://material.io/design/material-studies/about-our-material-studies.html)
* [SPA-github-pages](https://github.com/rafgraph/spa-github-pages)


### Installation / Usage
Two methods: Online and Local

**Online Method** (gh-pages branch)\
Access via website: https://blue-movement.github.io/team1_2020/

**Local Method** (master branch)\
Requires [node.js](https://nodejs.org/).

In order to run locally, you need to create an .env file in the root folder and define the following variables inside:
* REACT_APP_TWITTER_BEARER_TOKEN
* REACT_APP_NEWS_API_KEY
* REACT_APP_REDDIT_CLIENT_ID
* REACT_APP_REDDIT_CLIENT_SECRET
* REACT_APP_REDDIT_REFRESH_TOKEN

Environmental variable REACT_APP_TWITTER_BEARER_TOKEN can be obtained from [Twitter API](https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens)\
Environmental variable REACT_APP_NEWS_API_KEY can be obtained from [News API](https://www.newsapi.org/)\
Environmental variables REACT_APP_REDDIT_CLIENT_ID and REACT_APP_REDDIT_CLIENT_SECRET can be obtained from [Reddit Developer Page](https://www.reddit.com/prefs/apps)\
Environmental variable REACT_APP_REDDIT_REFRESH_TOKEN can be obtained from [reddit-oauth-helper](https://github.com/not-an-aardvark/reddit-oauth-helper)\

See [sample.env](https://github.com/Blue-movement/team1_2020/blob/master/.sample_env) for an example.

```sh
$ git clone https://github.com/Blue-movement/team1_2020
$ cd team1_2020
$ ./run.sh
```


### Team
* Adedapo Adetayo
* Daijon Bereola-Carson
* Myles Cherebin
* Anthonia Duru
* Caitlynn Journey
* Prabhjot Singh
* Ekene Uzoegwu
* Armani Weise
* Perren Wright


### Directory Structure
    team1_2020
    ├── ...
    ├── public              # Files to display web page
    │   └── ...
    ├── src
    │   ├── components      # All frontend components used to display web pages 
    |   |   ├── feed                # Social Media Feed component
    |   |   |   ├── cardGridInstagram.js    # Generates cards from Instagram
    |   |   |   ├── cardGridNews.js         # Generates cards from News
    |   |   |   ├── cardGridReddit.js       # Generates cards from Reddit
    |   |   |   ├── cardGridTwitter.js      # Generates cards from Twitter
    |   |   |   └── feed.js                 # Calls APIs and shows result
    |   |   ├── uplift               # Uplift component
    |   |   |   ├── cardGridBlackBusiness.js    # Generates Business cards
    |   |   |   └── uplift.js                   # Calls Yelp API and shows result
    |   |   ├── 404.js              # 404 component
    |   |   ├── about.js            # About component
    |   |   ├── action.js           # Action component
    |   |   ├── navbar.js           # Navbar component
    |   |   └── protest.js          # Protest component
    │   ├── App.js      # Main Component responsible for routing
    │   ├── index.css   # Main CSS File
    │   ├── theme.js    # Takes a component and applies a theme to it
    │   └── ...
    ├── README.md       # The file you are currently reading
    ├── run.sh          # Bash script to run the web application
    ├── .sample_env     # An example of what .env should look like
    ├── .env            # Environmental variables containing keys for API's
    └── ...
