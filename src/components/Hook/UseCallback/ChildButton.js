import React from "react"
import { TouchableOpacity,Text } from "react-native"



const ChildButton = ({onPress}) => {
    console.log("Chield Re Renderd")
    return <TouchableOpacity onPress={onPress}>
        <Text>Click Me</Text>
    </TouchableOpacity>
}

export default React.memo(ChildButton)