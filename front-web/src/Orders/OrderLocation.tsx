import './styles.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = {
    latitude: -6.1363921,
    longitude: -37.7488878
}

function OrderLocation() {
    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">

                </div>
                <MapContainer center={[position.latitude, position.longitude]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[position.latitude, position.longitude]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default OrderLocation;