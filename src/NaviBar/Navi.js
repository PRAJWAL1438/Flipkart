import React from "react"
import download from './download.png'
import './Navi.css'


function Navi() {
    return (
        <div className="NaviBar">
            <img className="Log" width="100px" height="50px" src={download} alt='my image' />
            <div className="Search_bar">
                <label for="search"></label>
                <input type="text" id="search" placeholder="search for products, brands and more" />
            </div>
            <button type="button">Login</button>
            <h1>Become a seller</h1>
            
            <select>
                <option selected>More</option>
                <option >Notification Preferance</option>
                <option>24/7 Custmor care</option>
                <option>Advertise</option>
                <option>Download app</option>
            </select>
        
           <img width="90px" height="55px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAA7VBMVEX/////iwT7dAn+gAf9egj8////fgf7cAv+iAT+hAX6Yg/5aA38bQ35///6ZRH7cAD6XhH5ZAD6VgD8+fP4TAD3WA77aQD6XgD2UBL46+H1PQD2RQD/dgD++vn3o5D0Rgr4az/3zMDzWDH5uqj88u793cb9vYf+olT9lkD8r2n78uT2k334YCb3m4P44cn3xpn02ND4hmf86Nj5yqn7r3/3r5T607b4s4v8iDj6upj4kFL7eB/2mXD5fkH4yLH6pYT6glf5d0b7byb0vKH0aDH2hE74ih71YED4czH4nVz4dFb7pHL4ikb+qWz5kF6d6zGjAAAEFklEQVRoge2YCXOiSBSAidCoKCLdQIvgteIxTky8YkzGYyLjjE7W/P+fs6891iOOe1STra3qryxLLYuvj/deP5AkgUAgEAgEAoFAIBAIBAKBQPD/AhXQf+dGxVK58ncHgBAhXMda+M2zvHI1uHpRhCQkkVat3mg2P7U4+tHnvJezvNt2cO1P5O5+3Uwkk4mbROLG5WeXUKeb92zbur2wpjBnHfX6g6bvq0y9IfmJox0UQTFn2d4DOvmRvfeGj6OYoSiyDO7Ezn7TJDz1AGlbdvZoRRFxa0/PX+KG4SuKKkdrh1iGtS8i9gkVgk44nqRN04gxwM70cnJvTzT5ypm/atm3rlRwp7Ovc0pNJ52Ox0/te32iwd0uIcvG42rGsiilmVTKTIE9vrUrZ3auUbdjCnorm9U0LWNSPI87R3b1xF6PwC6VsW1TjDWNLiouIs87/bF9o0/eR1GaK56VfRmPM1qGQGVDNfPIrh7b+xHIJalacSWkh3i+mdv0l/ZaJPYtroVDKHBP6X3Un2+83IvMjdAD1rCJMd3Yzzd+M/dWNGriVmZfKYt6yLmUc7Cfljueh9yO4K7aLd9aGGdZ1pmUpieOcdHOvcxDqSvlPcg4285C0tH54qHikmH6YD+EXaLB3V74YeVAjS3P+zaburvDduwciq0K9u0hu+K/8F3Py3vlz9UO62J2oIVzIerlIXc7Iu2HGkFH10Vu7fVSsU1GcMYcD0QiQW86nsypmX5vT36PIOK3WngVAnbEQuCZkHNn9YZF3vp6+/nv5XBZfWxbLOl2GX9Ub3zfML7X+9EUmqBT7RYLqOKxnGMZv7OD3vANxxkN+j1oe3TEf+aoU4Zst/JtVMljbG3qDZOnHMc0ncnrU43ouk56w3pj1edfan7kS6VczusiNHsZT+82PQa0OOZyMRi6BRAHd/erkexDb6s2eM8e/czD3EvlDos7XUJtrGXny3HYCWCl9V74+rtiGCzuVCWZUO95292fL0VoZ/bfAwrtDXgliP9ngzqGEWNRF5PXw3UyueJsfzeaEGvUmiwoNh0HWnqIOhk2X5dIbw05F/UtL5phqpnmNuy+vD0OCYu5wYgVHDWavuqE6Te8OergxAkg5p7eRr7hs4KjNCJIujOg2naqU0g0xG5rDNj5Xblr9kn09u0Q9HBhwl2NwTB9WVHXfB8dXJW7cM7AzjvUGb2GvdZIVRX+bc2vIBOaMuny7bEWsPb+MQYr70dyI3GJEGfMt32XI+nPPmy8sv4gub6gUOzDfYyhAQSe6tc/aO5oyey0t7e7Md/35Yha+ffMNWaf/jnZ1mA1uPZkiStowuaOD3b2WOOj5BKaYpqhy4gaqb/WV+fZCc9Hc/9QTz6qqgoEAoFAIBAIBAKBQCAQCASCiPkDLGBq5Dg/rSUAAAAASUVORK5CYII="/>
        </div>

    )
}


export default Navi;