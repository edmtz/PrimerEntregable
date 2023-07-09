import { TouchableHighlight, ImageBackground, Text } from "react-native";
import {styles} from './styles'
import {COLORS} from '../../../themes/colors/index'

const categoryItem = ({id, title, images, onSelectCategory}) => {
    return (
        <TouchableHighlight onPress={() => onSelectCategory(id)} style={styles.container} underlayColor={COLORS.primary}>
            <ImageBackground source={{uri: images[0]}} style={styles.ImageBackground} resize="cover">
                <Text style={styles.categoryName}>{title}</Text>
            </ImageBackground>
        </TouchableHighlight>    
    )
}

export default categoryItem