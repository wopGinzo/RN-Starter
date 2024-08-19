import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Link, router } from 'expo-router';


export default function Root() {

  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Text className='text-6xl'> RN Starter </Text>
      <Button onPress={() => router.push('/(auth)/login')} >
        <Text>
         Login!
        </Text>
      </Button>
      <Button variant={'link'} onPress={() => router.push('/(tabs)/home')} >
        <Text>
         Home Page
        </Text>
      </Button>
    </View>
  );
}
