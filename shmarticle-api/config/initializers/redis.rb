$redis = Redis::Namespace.new("", :redis => Redis.new, :timeout => 5.0)