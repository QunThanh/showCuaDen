import Header from './Header';
import Nav from './Nav';

function defaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <Nav />
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default defaultLayout;
