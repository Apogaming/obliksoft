import React from 'react';
function Table({ searchTerm, jsonData }) {

    return (
        <div>
            {jsonData.users.filter((value) => {
                if (searchTerm === "") {
                    return value
                } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value;
                } else if (value.phone.includes(searchTerm)) {
                    return value;
                } else if (value.message.includes(searchTerm)) {
                    return value;
                }
            }).map((value, key) => {
                return <div className="table" key={value.id}>
                    <div className={value.read ? "table__container" : "table__container table__container_no-read"}
                        onClick={(event) => {
                            event.target.classList.remove('table__container_no-read');
                        }}>
                        <div className="table__user-img">
                            <img className={`table_img table_img__${value.state}`} />
                            <img className={`table_icon table_icon__${value.app}`} />
                        </div>
                        <div className="table__user-infor">
                            <p>{value.name}</p>
                            <p>{value.phone}</p>

                        </div>
                        <div className="table__sms" >
                            <p> {value.message}</p>

                        </div>
                        <div className="table__date">
                            <p>{value.time}</p>
                            <p>{value.date}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Table
