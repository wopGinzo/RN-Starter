import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import React from 'react';

export default function HomeScreen() {

  return (
    <View className='h-full w-full p-6 flex items-center justify-center'>
      <Text className='text-3xl'> Home </Text>
    </View>
  );
}
