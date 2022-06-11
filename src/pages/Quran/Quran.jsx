import React, { useEffect } from 'react';
import { Stack, Text, Button, Spinner } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import { useSurahData } from '../storage/useSurahData';
import { useNavigate } from 'react-router-dom';

export default function QuranPage() {
    const navigate = useNavigate ()
    const { fetchSurah, surah, isLoading, isError } = useSurahData()

    useEffect(() => {
        if (surah.length === 114) {
            return;
        } else if (!isError) {
            fetchSurah()
        }
    }, [])

    if (isLoading) {
        return (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        )
    }

    return (
        <div>
            {surah.map((item, index) => (
                <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                    <Stack direction="row" alignItems="center">
                        <Text fontWeight="semibold">{item.name} ({item.englishName})</Text>
                    </Stack>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent="space-between">
                        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                            Number of Ayahs: {item.numberOfAyahs} ayahs {item.englishNameTranslation}
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }}>
                            <Button colorScheme="green" onClick={()=> {navigate(String(item.number))}}>Read</Button>
                        </Stack>
                    </Stack>
                </Stack>
            ))}
        </div>
    );
}