import axios from "axios";
import store from '../store'
import {saveNavigationList, saveDashboardList} from "../store/AC/app"
const BASEURL = process.env.REACT_APP_BASE_URL;
const AppController = {

}

AppController.GetNavigation = async () =>{
    const response = await axios.get(`${BASEURL}navigationList`)
    store.dispatch(saveNavigationList(response.data))
}
AppController.GetDashboardsList = async () =>{
    const response = await axios.get(`${BASEURL}Dashboards-Widgets-List`)
    store.dispatch(saveDashboardList(response.data))
    
}


export default AppController