require("dotenv").config();
const mongoose = require("mongoose");
const USER = "amitnarayan";
const DB = "profrolio";

mongoose
  .connect(
    `mongodb+srv://${USER}:${process.env.PASSWORD}@${process.env.HOSTNAME}.mongodb.net/${DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

//Schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  last_login: {
    type: String,
    required: true,
  },
});

const profileSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required:true
    },
    bio: {
        type: String,
        required:true
    }
})

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  date: {
      type: Date,
      default: Date.now()
  },
});

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    img: {
        type: Array,
        required:true
    },
    url: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
        default:Date.now()
    }
})

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    level: {
        type: Number,
        required:true
    },
    percentage: {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    certificate_by: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now()
    }
})

//model
const ADMIN = mongoose.model("admin", adminSchema);
const PROFILE = mongoose.model("profile", profileSchema);
const IMAGE = mongoose.model("image", imageSchema);
const PROJECT = mongoose.model("project", projectSchema);
const SKILL = mongoose.model("skill", skillSchema);

module.exports = {ADMIN,PROFILE,IMAGE,PROJECT,SKILL};
