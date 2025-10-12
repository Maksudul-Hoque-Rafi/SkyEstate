import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-4">
          <img
            src={
              item.images.length > 0
                ? item.images[0]
                : "https://res.cloudinary.com/ddno8tek9/image/upload/v1759223939/posts/ycpq0zzymkditzuevpmx.jpg"
            }
            alt={item.title}
            className="w-16 h-12 object-cover rounded-md"
          />
          <div className="flex flex-col justify-between">
            <Link
              to={`/${item.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {item.title}
            </Link>
            <span className="text-sm text-gray-600">
              {item.bedroom} bedroom
            </span>
            <b className="text-gray-900">$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
