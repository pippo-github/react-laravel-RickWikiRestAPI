import ReactDOM from 'react-dom';
import TitleComp from './TitleComp/TitleComp'
import Footer from './FooterComp/FooterComp'

import AppBody from '../components/CoreAppComp/CoreAppComp'
const AppComponent = () =>{
    return(
        <div>            
            <TitleComp/>
            <AppBody/>
            <Footer/>
        </div>
    )
}


export default AppComponent;

if (document.getElementById('root')) {
    ReactDOM.render(<AppComponent />, document.getElementById('root'));
}
