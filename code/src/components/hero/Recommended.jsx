import React, { useEffect, useState} from "react"
import { Card_sm } from "../common/Card_sm"
import { Title } from "../common/Title"
import { Card_lg } from "../common/Card_lg"
import ApiService from "../../axios/AxiosService"

export const Recommended = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ApiService.getRecommendedSongs()
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <>
      <section className='hero mt-7 pb-32'>
        <Title title='Recommand for you' />
        <div className='grid grid-cols-2 griw-rows-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
          {items.map((item) => (
            <div className='card hero' key={item.songId}>
              <Card_lg
                songId = {item.songId}
                embedIMGLink={item.embedIMGLink}
                title={item.title}
                embedLink={item.embedLink} // Add anotherLink prop here
                artistName={item.artistName}
              />
            </div>
          ))}
          </div>
        
            {/* <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} /> */}

      </section>
    </>
  )
}
