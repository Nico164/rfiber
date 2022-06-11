import React, { useEffect } from 'react';
import { Stack, Text, Button, Spinner } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import { useSurahData } from '../storage/useSurahData';
import { useParams } from 'react-router-dom';
import { useSurahDetail } from '../storage/useSurahDataDetail';
import axios from 'axios';

export default function CardAlQuranDetail() {
    const audio = new Audio();
    const {ayah} = useParams()
    const { fetchSurahDetail, ayahs, isLoading, isError } = useSurahDetail()

    useEffect(() => {
        fetchSurahDetail(ayah)
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

    async function playAudio(surah, ayah) {
        audio.remove()
        const {data} = await axios.get(`http://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`);
        audio.src =data.data.audio
        audio.play();
    }

    return (
        <div>
            {ayahs.ayahs?.map((item, index) => (
                <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                    <Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
                        <Text fontSize={"5xl"} fontWeight="semibold" textAlign={"right"}>({item.numberInSurah}) {item.text}</Text>
                    </Stack>
                    <Stack>
                        <Button onClick={()=> playAudio(ayah, item.numberInSurah)}>Play</Button>
                    </Stack>
                </Stack>
            ))}
        </div>
    );
}