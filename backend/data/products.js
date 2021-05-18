const products = [
  {
    name: 'CSS & HTML Web Designing',
    image: 'https://rukminim1.flixcart.com/image/416/416/book/0/7/5/the-essential-guide-to-css-and-html-web-design-original-imaeb7qbusjtwcph.jpeg?q=70',
    description:
      'There are a lot of books out there covering CSS and HTML, but this one stands out from the crowd by combining all the best aspects of reference and tutorial books - it teaches everything you need to know to design great web sites, and moves at a fast pace, eschewing unnecessary theory and obscure details. It is designed so that any level of web designer or developer will find this to be an essential guide. It teaches the basics of CSS and HTML before quickly moving on to cover in depth all of the essential areas of web design, including forms, tables, typography, layout, browser quirks and more.',
    brand: 'Grannell Craig',
    category: 'Books',
    price: 699,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Bootstrap 5 Foundations',
    image: 'https://kbimages1-a.akamaihd.net/48fa83e7-c74c-4cca-85f4-ef499fe8dcd4/166/300/False/bootstrap-5-foundations.jpg',
    description:
      'Bootstrap is a HTML5, CSS and JavaScript framework that enjoys 72% of the market share. It is used to create mobile-first responsive websites quickly and easily. Bootstrap 5 is the newest version of this framework. Leaving behind jQuery for a more integrated web languages model Bootstrap 5 will drive a new generation of websites.',
    brand: 'ORIELLY',
    category: 'Books',
    price: 299,
    countInStock: 10,
    rating: 3,
    numReviews: 11,
  },
  {
    name: 'Express Web Applications',
    image: 'https://m.media-amazon.com/images/I/51k1eX4VDKL.jpg',
    description:
      'Node.js Framework for Web Application Development. Express js is closely related to Node.js, and it is solely based on the latter. Most of the codes used in the two platforms are almost the same. Those who are familiar with the Node.js framework will find it easy for them to read and understand this book.',
    brand: 'ORIELLY',
    category: 'Books',
    price: 929,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Node JS',
    image: 'https://m.media-amazon.com/images/I/41lDk1HZLqL.jpg',
    description:
      'Node.js is a packaged compilation of Google’s V8 JavaScript engine, the libuv platform abstraction layer, and a core library, which is itself primarily written in JavaScript',
    brand: 'ORIELLY',
    category: 'Books',
    price: 389,
    countInStock: 10,
    rating: 4,
    numReviews: 9,
  },
  {
    name: 'React JS',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31UhIYSIYqL._SX331_BO1,204,203,200_.jpg',
    description:
      'React jsThe Complete Beginner’s Guide to React - 2nd Edition (2020)Facebooks React has changed the way we think about web applications and user interface development. Due to its design, you can use it beyond web. A feature known as the Virtual DOM enables this.In this chapter we will go through some of the basic ideas behind the library so you understand React a little better before moving on.',
    brand: 'ORIELLY',
    category: 'Books',
    price: 499,
    countInStock: 7,
    rating: 4,
    numReviews: 10,
  },
  {
    name: 'Practical Node.js',
    image: 'https://images.springer.com/sgw/books/medium/9781484230381.jpg',
    description:
      'Practical Node.js takes you from installing all the necessary modules to writing full-stack web applications. You will harness the power of the Express.js and Hapi frameworks, the MongoDB database with Mongoskin and Mongoose. You will also work with Pug and Handlebars template engines, Stylus and LESS CSS lanaguages, OAuth and Everyauth libraries, and the Socket.IO and Derby libraries, and everything in between. ',
    brand: 'ORIELLY',
    category: 'Books',
    price: 449,
    countInStock: 7,
    rating: 3,
    numReviews: 4,
  },
  {
    name: 'React And React Native',
    image: 'https://m.media-amazon.com/images/I/51JJjOHi2sL.jpg',
    description:
      'Master React Native with Fullstack React NativeThe up-to-date, in-depth, complete guide to React Native.Create beautiful mobile apps with JavaScript and ReactDeliver high quality mobile apps, at light speed.Building the same app in both Swift and Java is time-consuming. ',
    brand: 'ORIELLY',
    category: 'Books',
    price: 529,
    countInStock: 0,
    rating: 3.5,
    numReviews: 9,
  },
  {
    name: 'complete Node JS',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541489138l/42643290._SY475_.jpg',
    description:
      'Node.js supports both client and server side applications. It is based on JavaScript and is very fast in operation. These distinctive features made node.js as one of the most powerful framework in the Java Ecosystem. JavaScript alone allows you to build real-time and scalable mobile and web applications. With this e-book, you will explore more on the node.js framework',
    brand: 'ORIELLY',
    category: 'Books',
    price: 399,
    countInStock: 10,
    rating: 4,
    numReviews: 14,
  },
  
  {
    name: 'Html Css',
    image: 'https://images-na.ssl-images-amazon.com/images/I/510+qf4fG4L._SX258_BO1,204,203,200_.jpg',
    description:
      'Written by a Web development expert, the fifth edition of this trusted resource has been thoroughly revised and reorganized to address HTML5, the revolutionary new Web standard. The book covers all the elements supported in todays Web browsers--from the standard (X)HTML tags to the archaic and proprietary tags that may be encountered',
    brand: 'Thomas Powell',
    category: 'Books',
    price: 499,
    countInStock: 3,
    rating: 4,
    numReviews: 8,
  },
  {
    name: 'JavaScript and JQuery',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX258_BO1,204,203,200_.jpg',
    description:
      'Learn JavaScript and jQuery a nicer way This full-color book adopts a visual approach to teaching JavaScript & jQuery, showing you how to make web pages more interactive',
    brand: 'ORIELLY',
    category: 'Books',
    price: 350,
    countInStock: 4,
    rating: 3.5,
    numReviews: 6
  },
  {
    name: 'React and Libraries',
    image: 'https://m.media-amazon.com/images/I/412dCIfg8UL.jpg',
    description:
      'Start by learning how to create and style your own components, add state management, and manage routing. You’ll also learn how to work with the backend using the MERN stack (MongoDB, Express, React, and Node.js).  ',
    brand: 'ORIELLY',
    category: 'Books',
    price: 394,
    countInStock: 7,
    rating: 3.5,
    numReviews: 4,
  },

]

export default products
