import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Header from "../../components/Header";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
    const { currentUser, currentToken } = useContext(AuthContext);
    const [userOrders, setUserOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                console.log("Fetching user orders...");
                const res = await axios.get(
                    `http://localhost:5000/users/update/order/${encodeURIComponent(currentUser.email)}`,
                    {
                        headers: {
                            Authorization: `Bearer ${currentToken}`,
                        },
                    }
                );
                console.log("Fetched user orders:", res.data);
                setUserOrders(res.data);
            } catch (err) {
                setError(err.message);
                console.log("Error fetching user orders:", err);
            }
        };

        fetchUserOrders();
    }, [currentUser.email, currentToken]);

    return (
        <div>
            <Header /> {/* Your Header component */}
            <div className="fixed-white-box"></div> {/* Fixed white box */}
            <div className="dashboard">
                <h2>Your Orders</h2>
                {userOrders.map((order, index) => (
                    <div key={index} className="order-card">
                        <p>Status: {order.status}</p>
                        <p>Model: {order.model}</p>
                        <p>Enhanced Autopilot: {order.en_auto}</p>
                        <p>Paint: {order.paint}</p>
                        {order.paint === "white" && <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636" alt="White Car" />}
                        {order.paint === "grey" && <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636" alt="Grey Car" />}
                        {order.paint === "blue" && <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=1300,500,300,300&version=v0120-33320d20d202210200636" alt="Blue Car" />}
                        {order.paint === "black" && <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PBSB,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636" alt="Black Car" />}
                        {order.paint === "red" && <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=1300,500,300,300&version=v0120-33320d20d202210200636" alt="Red Car" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
