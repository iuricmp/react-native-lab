import { ThemedText } from "@/components/ThemedText";
import * as Linking from 'expo-linking';
import { Link } from 'expo-router';
import { View } from "react-native";


const Page = () => {
    const url = Linking.useURL();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 100, height: 100}} />
            <ThemedText>DeepLink received</ThemedText>
            <ThemedText>URL: {url}</ThemedText>

            <Link
                href={{
                    pathname: "/(tabs)",
                    params: { id: 'bacon' }
                }}>Press here to Go Home</Link>
        </View>
    )
}

export default Page;
