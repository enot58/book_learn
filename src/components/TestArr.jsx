import React from 'react'
//import faker from "faker";
import List from './List';


const bigList = [...Array(5000)].map(() => (
    {
        // name: faker.name.findName(),
        // email: faker.internet.email(),
        // avatar: faker.internet.avatar()
    }
))

function TestArr() {

    const renderItem = item => (
        <div style={{ display: "flex" }}>
            <img src={item.avatar} alt={item.name} width={50} />
            <p>
                {item.name} — {item.email}
            </p>
        </div>
    )

    return (
        <List data = {bigList} renderItem={renderItem} />
    )
}

export default TestArr