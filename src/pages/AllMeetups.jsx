import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardDescription, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useFavStore from '../store/FavStore';

function AllMeetups() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const addFav = useFavStore((state) => state.addFav);

    const handleAddToFavorites = (meetup) => {
        addFav(meetup);
    };

    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, []);

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <div>
            <p>AllMeetups</p>
            <div className='flex flex-row flex-wrap gap-5 justify-center items-center '>
                {data.map((meetup) => (
                    <Card className="my-3 w-full md:w-1/2 " key={meetup.id}>
                        <CardHeader className="flex flex-col space-x-5">
                            <img style={{ maxWidth: "100%" }} className='w-full' src={meetup.img_url} alt="Meetup Image" />
                        </CardHeader>
                        <CardContent>
                            <CardTitle> {meetup.title} </CardTitle>
                            <CardDescription> {meetup.description} </CardDescription>
                            <Button className="bg-red-800 float-right" onClick={() => handleAddToFavorites(meetup)}> Add To Favorites</Button>
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default AllMeetups;