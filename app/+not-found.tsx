import { Link, router, Stack } from 'expo-router';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn't exist.</Text>

        <Button variant={'link'} onPress={() => router.push('/')} >
          <Text>Go to home screen!</Text>
        </Button>
      </View>
    </>
  );
}
