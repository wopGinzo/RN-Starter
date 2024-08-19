import * as React from 'react';
import { Alert, View } from 'react-native';
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
import { Input } from '~/components/ui/input';
import { Controller, useForm } from 'react-hook-form';


export default function Signup() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
        email: '',
        full_name: '',
        password: '',
        }
        });
      
      const onSubmit = (data: any)=>{
      
      Alert.alert("Successful", JSON.stringify(data))
      }
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>

        <Card 
        className='h-[60vh] flex'
        >
            <CardHeader className='gap-y-2'>
                <CardTitle className=''>Signup</CardTitle>
                <CardDescription>Enter your Signup informations!</CardDescription>
            </CardHeader>
            <CardContent className='gap-y-8 flex-1 flex items-center justify-around'>
                <Controller
                    control={control}
                    name={'email'}
                    render={({ field: { value, onChange, onBlur }})=>(
                    <Input
                    placeholder='Enter your email.'
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className='w-full'
                    />
                    )}
                />
                <Controller
                    control={control}
                    name={'full_name'}
                    render={({ field: { value, onChange, onBlur }})=>(
                    <Input
                    placeholder='Enter your full name.'
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className='w-full'
                    />
                    )}
                />
                <Controller
                    control={control}
                    name={'password'}
                    render={({ field: { value, onChange, onBlur }})=>(
                    <Input
                    placeholder='Enter your password.'
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className='w-full'
                    />
                    )}
                />
                <Button onPress={handleSubmit(onSubmit)} className='justify-self-end'>
                    <Text>
                        Submit
                    </Text>
                </Button>

            </CardContent>
        </Card>
        <Button variant={'link'} onPress={() => router.replace('/(tabs)/home')} >
                <Text>
                Proceed as a guest!
                </Text>
        </Button>
    </View>
  );
}
