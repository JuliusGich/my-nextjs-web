import React from 'react'
async function getHouseList() {
    const res = await fetch('http://localhost:3001/properties');
    const data = await res.json();
    return data;
  }
  
  export default async function HouseList() {
    const houseList = await getHouseList();
  
    return (
      <>
      <div className="house-grid">
        {houseList.map((house: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; imageUrl: string | undefined; }) => (
          <div key={house.id} className='card'>
            <h3>{house.title}</h3>
            <p>{house.description}</p>
            <p>{house.price}</p>
            <img src={house.imageUrl} />
          </div>
          
        ))}
        </div>
        {houseList.length === 0 && (
            <p className="center">There is no open</p> 
        )
    }
      </>
    );
  }
  