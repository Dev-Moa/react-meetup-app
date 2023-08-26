# React docs





# useRef is used to get input value directly

```js
import React, { useRef } from 'react'

function Component(){

    const inputRef = useRef()
    const inputRefValue = inputRef.current.value
    return (
        <div>
            <form>
                <input ref={inputRef}>
            </form>
        </div>
)
}


```


posting data using fetch


```js
import React, { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from 'react-router-dom'
function NewMeetup() {

    //access direcl
    const navigate = useNavigate()
    const titleRef = useRef()
    const imgRef = useRef()
    const addressRef = useRef()
    const descriptionRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted');

        const enteredTitle = titleRef.current.value
        const enteredImg = imgRef.current.value
        const enteredAddress = addressRef.current.value
        const enteredDescription = descriptionRef.current.value

        const meetupData = {
            title: enteredTitle,
            img_url: enteredImg,
            address: enteredAddress,
            description: enteredDescription
        }

        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/')
        })
        console.log(meetupData);
    }
    return (
        <div>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <Label>Meetup Title</Label>
                <Input type="text" ref={titleRef} />
                <Label>Meetup Image</Label>
                <Input type="url" ref={imgRef} />
                <Label>Meetup Address</Label>
                <Input type="text" ref={addressRef} />
                <Label>Meetup Description</Label>
                <Textarea ref={descriptionRef} />
                <Button className="bg-red-800 float-right">Submit</Button>
            </form>

        </div>
    )
}

export default NewMeetup
```