# Flavoy's Book Store

Flavoy's Book Store is a React-based web application for browsing and purchasing books. The application uses Redux for state management and React Router for navigation.  
This is is an exercise from the ongoing "React.js"-course @Folkuniversitetet.

## Features

- Browse a collection of books
- View detailed information about each book
- Add books to the cart
- View and manage the cart
- Checkout functionality

### Video demonstration

- [Click to see a 30 seconds video demo of the application](/book_store_video_demo.mp4)

## Folder Structure

```
book-store/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCover/
│   │   │   ├── BookCover.jsx
│   │   │   └── BookCover.css
│   │   ├── BookInfo/
│   │   │   ├── BookInfo.jsx
│   │   │   └── BookInfo.css
│   │   ├── Books/
│   │   │   ├── Books.jsx
│   │   │   └── Books.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── Cart.css
│   │   │   ├── CartIcon.jsx
│   │   │   └── CartIcon.css
│   │   ├── RootLayout.jsx
│   │   └── RootLayout.css
│   ├── reducers/
│   │   ├── booksReducer.js
│   │   └── cartReducer.js
│   ├── store/
│   │   └── store.js
│   ├── router/
│   │   └── router.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```
