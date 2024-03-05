"use client"

import { siteConfig } from "@/config/site";
import { useState, useEffect } from 'react'

//NextUI import
import 
{
	Spinner,
} 
from "@nextui-org/react";

//Tabler icons import
import
{
	
}
from "@tabler/icons-react";

const API_KEY = process.env.OPEN_WHEATHER_API_KEY;


export default function Home() {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.34&lon=10.99&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)  //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <Spinner className="flex m-auto" label="Getting weather info..." color="secondary" />
	if (!data) return <p>No weather data</p>

	return (
		<div>
			<p>{data.current.weather[0].description}</p>
		</div>
	)
}
