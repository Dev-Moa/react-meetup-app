import React from 'react'
import useFavStore from '../store/FavStore'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardDescription, CardContent, CardFooter, CardTitle } from '@/components/ui/card';



function Favorites() {
    const meetup = useFavStore((state) => state.Favs)
    return (
        <div>
            <p>Favorite Meetups</p>
            <div className='flex flex-row flex-wrap gap-5 justify-center items-center '>
                {meetup.map((meetup) => (
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
    )
}

export default Favorites