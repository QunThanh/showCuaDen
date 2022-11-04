import { Header } from '~/components/Layouts/component/';

function HeaderOnlyLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="container">
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnlyLayout;
