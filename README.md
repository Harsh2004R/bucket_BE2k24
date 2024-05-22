# Bucket List App Backend

This is the backend for my Bucket List App, built using Node.js, Express.js, and MongoDB. The backend handles user authentication, bucket list management, and data persistence.

## Deployed Server

You can access the deployed server at: [https://bucket-be2k24.onrender.com/](https://bucket-be2k24.onrender.com/)

## API Endpoints

### User Authentication

- **Register a new user:**
  - Endpoint: `/users/register`
  - Method: `POST`
  - Body:
    ```json
    {
      "fullName": "your_username",
      "email":"your_email",
      "password": "your_password"
    }
    ```

- **Login a user:**
  - Endpoint: `/users/login`
  - Method: `POST`
  - Body:
    ```json
    {
      "fullName": "your_username",
      "password": "your_password"
    }
    ```

### Bucket List Management

- **Get user bucket list:**
  - Endpoint: `/users/:id`
  - Method: `GET`
  - Description: Fetch the bucket list for a specific user by their ID.

- **Add item to bucket list:**
  - Endpoint: `/users/:id/add`
  - Method: `POST`
  - Body:
    ```json
    {
      "text": "new bucket list item",
      "dateAdded": "2024-05-22",
      "timeAdded": "14:00",
      "targetDate": "2024-06-30"
    }
    ```
  - Description: Add a new item to the user's bucket list.

- **Remove item from bucket list:**
  - Endpoint: `/users/:id/remove`
  - Method: `DELETE`
  - Body:
    ```json
    {
      "text": "bucket list item to remove"
    }
    ```
  - Description: Remove an item from the user's bucket list.

- **Update bucket list:**
  - Endpoint: `/users/:id/update`
  - Method: `PUT`
  - Body:
    ```json
    {
      "bucket": [
        {
          "text": "updated bucket list item",
          "dateAdded": "2024-05-22",
          "timeAdded": "14:00",
          "targetDate": "2024-06-30"
        }
      ]
    }
    ```
  - Description: Update the user's entire bucket list.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh2004R/bucket_BE2k24.git
   cd bucket_BE2k24

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harsh2004R/bucket_BE2k24.git
   cd bucketlist-app


2. Install dependencies:
    ```bash
    npm install

## Usage
3. Start the development server:

    ```bash
   npm run start

4. Open your browser and go to http://localhost:4000 to view the app.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **Bcrypt**
- **Cors**
- **Dotenv**


## Backend
For backend details, check out the backend repository.
##### https://github.com/Harsh2004R/bucket_BE2k24

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Author: Harsh Sharma
- GitHub: Harsh2004R


### Additional Details

**package.json**:
```json
{
  "name": "bucket_be2k24",
  "version": "1.0.0",
  "description": "This is my bucket list app backend",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Harsh2004R/bucket_BE2k24.git"
  },
  "author": "Harsh Sharma",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Harsh2004R/bucket_BE2k24/issues"
  },
  "homepage": "https://github.com/Harsh2004R/bucket_BE2k24#readme",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.5",
    "nodemon": "^3.1.0"
  }
}


