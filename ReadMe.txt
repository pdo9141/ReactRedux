01) To install download latest node version (8.11.3): "npx create-react-app redux-tutorial"
02) Install yarn: "npm install -g yarn"
03) CD into redux-tutorial: "yarn add redux react-redux"
04) Start app: "yarn start"
05) Install Redux DevTools Chrome extension
06) Add line "window.devToolsExtension && window.devToolsExtension()" to createStore function to talk to Redux DevTools
07) To make API requests: "yarn add redux-thunk jquery"
08) For performance add Reselect: "yarn add reselect"
09) Consider Store > Component > Sub-component pattern (Smart vs dumb components). Keeps things cleaner with fewer components connected to store
    State flows down to dumb components. E.g., Store > productsPage > addProduct or productsList (dumb)

Shmarticle
01) Create bare bones API project: "rails new shmarticle-api --api"    
02) Update Gemfile: "gem 'rack-cors'" and "gem 'active_model_serializers', '~> 0.10.0'"
03) To support JSON ad active_model_serializer.rb in config/initializers
04) Tweak CORS settings in config/initializers/cors.rb
05) Create model for migration: "rails g model Article title:string"
06) Run migration: "rake db:migrate"
07) Modify routes for API in config/routes.rb
08) Modify folder structure controllers/api/v1
09) Add serializer class in app/serializers, kind of like DTO
10) Check out https://www.youtube.com/user/thenewboston for React-Redux-Boilerplate
    "git clone https://github.com/buckyroberts/React-Redux-Boilerplate.git shmarticle-front"
    Modify package.json, remove react-dom and react, use older versions
    Add react 0.14.3, react-dom 0.14.3, redux-form 4.1.3 axios 0.12.0
    Update node-sass version, I used ^4.6.0
    Run "npm install"
11) Start up API in port 5000: "rails server -p 5000"    
12) Go to https://github.com/MSOpenTech/redis/releases (Redis-x64-3.2.100.zip)
13) Add Redis install folder to PATH environment variable
14) Use commands: "redis-server", "redis-cli", "SHUTDOWN SAVE", ctrl + c, "exit"
15) Add Redis gems and type "bundle" to install
    gem 'redis'
    gem 'redis-namespace'
    gem 'redis-rails'
    gem 'redis-rack-cache'
16) Add redis.rb in config/initializers
    $redis = Redis::Namespace.new("", :redis => Redis.new, :timeout => 5.0)
17) Redis CLI: "get [key]", "set [key] [value]", "del [key]", "KEYS *"   
    Keys stored in Redis from Rails client is appended with colon, eg., ":properties"