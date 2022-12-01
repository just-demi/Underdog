// server/index.js

const express = require("express");
const JsonWebToken = require("jsonwebtoken");
const app = express();
const router = express.Router();
const {User, Book, Author} = require('./models/User');
const Bcrypt = require("bcryptjs");


const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//const usersRouter = require("./routes/users");

//var url = config.baseUrl + "verify?id=" + token_mail_verification;


let host;

const mongoose = require('mongoose');
const DB = require('./config').MONGODB;

const PORT = process.env.PORT || 3001;
const SECRET_JWT_CODE = "jbklbRTuiiIUG78dk";

const connecToDb = async () => {
    await mongoose.connect(
        DB,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log("Database connected");
        }
    )
}

connecToDb();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

app.post('/register',async (req,res) => {

    User.findOne({email: req.body.email}).then((user)=>{
        if(user){
            return res.status(400).json({msg:"A user has the username"})
        }else{
            User.findOne({email: req.body.email}).then(async (no)=>{
                if(no){
                    return res.status(400).json({msg:"The Company number exists"})
                }
                else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    userType: req.body.userType,
                });
                const salt = await Bcrypt.genSalt(10);
                newUser.password = await Bcrypt.hash(newUser.password, salt);
                newUser.save().then(async newUser => {
                    res.status(200).json({msg: 'todo added successfully'});
                })
                .catch(err => {
                    res.status(400).json({msg: err.message});
                });
                //return res.status(200).json({msg: newUser})
            }
            })
        }
    }
    )
})

app.post('/login', (req,res) => {   
    if(!req.body.email || !req.body.password){
        return res.status(400).json({sucess: false, error: "Send needed params"})
    }


    User.findOne({email: req.body.email}).then(async (user)=>{
        if(!user){
            res.status(400).json({msg:"User exists"})
        }else{  
            const isMatch = await Bcrypt.compare(req.body.password, user.password);
            if (!isMatch){
                res.status(400).json({success: false, error: "Wrong password"})
            } else{
                    const token = JsonWebToken.sign({id: user._id, email: user.email, name: user.name}, SECRET_JWT_CODE,
                        {
                            expiresIn: 3600
                          }
                          )
                    res.status(200).send({success: true, token: token, name:user.name,})
                }
            }
    })
    .catch((err)=>{
        res.status(400).json({success: false, error: err.message})
    })
})

app.post('/send_books', (req,res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity,
        ISBN: req.body.ISBN,
        supplier: req.body.supplier,
      });

      book.save().then(async book => {
        res.status(200).send({msg: 'books added successfully'});
    })
    .catch(err => {
        res.status(400).send({msg: err.message});
    });
})

app.get('/get_books', (req,res) => {
    Book.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send({results: result});
        }
      });
})

app.post('/send_author', (req,res) => {
    const author = new Author({
        name: req.body.name,
        website: req.body.website,
        bio: req.body.bio
      });

      author.save().then(async author => {
        res.status(200).send({msg: 'Author added successfully'});
    })
    .catch(err => {
        res.status(400).send({msg: err.message});
    });
})

app.get('/get_authors', (req,res) => {
    Author.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send({results: result});
        }
      });
})

app.get('/', (req,res) => {

    res.send('Hello World!');

})



app.get('/verify', function(req, res) {
    let token = req.query.id;
    if (token) {
        try {
            JsonWebToken.verify(token, SECRET_JWT_CODE, (e, decoded) => {
                if (e) {
                    console.log(e)
                    return res.sendStatus(403)
                } else {
                    id = decoded.id;
//Update your database here with whatever the verification flag you are using 
                }

            });
        } catch (err) {

            console.log(err)
            return res.sendStatus(403)
        }
    } else {
        return res.sendStatus(403)

    }

})

app.use("/", router);


/*const app = express();

async function main(){
const uri = "mongodb+srv://admin:admin12345@coefficiency.ta5qc.mongodb.net/Users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try{
        await client.connect();
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }    
}*/

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    ab = await client.db().listCollections().toArray();
 
    console.log("Databases:", ab);
    //ab.databases.forEach(db => console.log(` - ${db.name}`));
};
 

//main().catch(console.error);

