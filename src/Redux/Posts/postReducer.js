const initialState = [
  {
    id: 0,
    image: "blogpost-img-01.png",
    category: "Data Science",
    title: "How to Use Linear Models and Decision Trees in Julia",
    author: "Logan Kilpatrick",
    authorImage: "author-img-01.jpg",
    date: "30 Aug, 2022",
    readTime: "8 hours ago",
  },
  {
    id: 1,
    image: "blogpost-img-02.jpg",
    category: "Java",
    title: "Java scanner.nextLine() Method Call Gets Skipped Error [SOLVED]",
    author: "Farhan Hasin Chowdhury",
    authorImage: "author-img-02.jpeg",
    date: "27 Aug, 2022",
    readTime: "3 days ago",
  },
  {
    id: 2,
    image: "blogpost-img-03.png",
    category: "Python",
    title: "Python to Lowercase a String – str.lower() Example",
    author: "Dillion Megida",
    authorImage: "author-img-03.jpg",
    date: "20 Aug, 2022",
    readTime: "10 days ago",
  },
  {
    id: 3,
    image: "blogpost-img-04.png",
    category: "JavaScript",
    title: "JavaScript Date Format – How to Format a Date in JS",
    author: "Joel Olawanle",
    authorImage: "author-img-04.jpg",
    date: "12 Aug, 2022",
    readTime: "18 days ago",
  },
  {
    id: 4,
    image: "blogpost-img-05.jpg",
    category: "JavaScript",
    title: "... in JavaScript – the Three Dots Operator in JS",
    author: "Dillion Megida",
    authorImage: "author-img-03.jpg",
    date: "06 July, 2022",
    readTime: "1 month ago",
  },
  {
    id: 5,
    image: "blogpost-img-06.png",
    category: "Python",
    title: "How to Use Python in Power BI",
    author: "Joel Olawanle",
    authorImage: "author-img-04.jpg",
    date: "20 June, 2022",
    readTime: "2 months ago",
  },
];

const postReducer = (state = initialState, action) => {
  return state;
}

export default postReducer;