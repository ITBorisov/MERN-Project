const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGO_URI
    },
    default:{
        SECRET: 'secret',
        DATABASE: 'mongodb://localhost:27017/moviesReview'
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 
