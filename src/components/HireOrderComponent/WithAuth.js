import { Text } from "react-native";

const WithAuth = (Component) => {
    const isAuthenticated = true;
    return function(props) {
        if(isAuthenticated){
            return <Component {...props}/>
        }else {
            return <Text>Please Login .....</Text>
        }
        
    }

}

export default WithAuth;