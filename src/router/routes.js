import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";


export const privateRoutes = [
  {path: 'about', component: <About/>},
  {path: 'posts', component: <Posts/>},
  {path: 'posts/:id', component: <PostIdPage/>},
  {path: '', component: <Posts/>},
  {path: 'login', component: <Posts/>},
  {path: '*', component: <Error/>}
]

export const publicRoutes = [
  {path: 'login', component: <Login/>},
  {path: '', component: <Login/>},
  {path: '*', component: <Login/>}
]