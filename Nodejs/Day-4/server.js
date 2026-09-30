import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    number: Number,
    course: String
})

const Student = mongoose.model("Student", StudentSchema)

mongoose.connect("mongodb+srv://pyug31196_db_user:yugp122716@cluster0.opnmock.mongodb.net/?appName=Cluster0").then(() => {

    console.log("MongoDB Connected Successfully....");

    const student = new Student({
        name: "Yug",
        age: 18,
        email: "yug312@gmail.com",
        number: 1234567890,
        course: "Reactjs"
    })

    return student.save()

}).then(() => {
    console.log("Student Added Successfully....");

}).catch((err) => {
    console.log("MongoDB connection failed!!!");
    console.log(err);

})

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <title>Student Registration</title>

                <style>
                    
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    
                    body {
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        padding: 20px;
                    }
                    
                    .form-container {
                        width: 100%;
                        max-width: 450px;
                        background: rgba(255, 255, 255, 0.95);
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    }
                    
                    .form-container h1 {
                        text-align: center;
                        color: #333;
                        margin-bottom: 30px;
                        font-size: 28px;
                        font-weight: 600;
                    }
                    
                    .input-group {
                        margin-bottom: 20px;
                    }
                    
                    .input-group label {
                        display: block;
                        margin-bottom: 8px;
                        color: #555;
                        font-weight: 500;
                        font-size: 14px;
                    }
                    
                    .input-group input {
                        width: 100%;
                        padding: 12px 15px;
                        border: 2px solid #e1e5ee;
                        border-radius: 10px;
                        font-size: 15px;
                        transition: all 0.3s ease;
                        outline: none;
                    }
                    
                    .submit-btn {
                        width: 100%;
                        padding: 14px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                        margin-top: 10px;
                    }
                    
                    .submit-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px rgba(114, 55, 172, 0.49);
                    }
                    
                </style>
            </head>

            <body>

                <div class="form-container">
                    <h1>Student Registration</h1>

                    <form onsubmit="event.preventDefault();">
                        <div class="input-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your name">
                        </div>

                        <div class="input-group">
                            <label for="age">Age</label>
                            <input type="number" id="age" placeholder="Enter your age">
                        </div>

                        <div class="input-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email">
                        </div>

                        <div class="input-group">
                            <label for="number">Phone Number</label>
                            <input type="tel" id="number" placeholder="Enter your phone number">
                        </div>

                        <div class="input-group">
                            <label for="course">Course</label>
                            <input type="text" id="course" placeholder="Enter course name">
                        </div>
                        
                        <button type="submit" class="submit-btn">Register</button>
                    </form>

                </div>

            </body>

        </html>
        `)
})

app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})