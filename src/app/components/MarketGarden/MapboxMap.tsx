"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup, type Projection } from "react-map-gl";
import { useState } from "react";
import { businesses } from "./MarketData";
import { CartIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

const MapboxMap = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#3db8a055]">
      <Map
        initialViewState={{
          longitude: -90,
          latitude: 15,
          zoom: 2.2,
        }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        projection={"globe" as unknown as Projection}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {businesses
          .filter((biz) => biz.type === "physical")
          .map((biz) => (
            <Marker
              key={biz.id}
              longitude={biz.location[1]}
              latitude={biz.location[0]}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelected(biz.id);
              }}
            >
              <CartIcon style={{ width: 26, height: 26, color: "#D4AF37" }} />
            </Marker>
          ))}

        {businesses
          .filter((biz) => biz.id === selected)
          .map((biz) => (
            <Popup
              key={biz.id}
              longitude={biz.location[1]}
              latitude={biz.location[0]}
              closeButton={true}
              onClose={() => setSelected(null)}
              anchor="top"
              closeOnClick={false}
              focusAfterOpen={false}
            >
              <div className="text-sm text-[#0F9D91] max-w-[200px]">
                <h3 className="font-bold text-[#00747A]">{biz.name}</h3>
                <p>{biz.description}</p>
                <p className="text-xs mt-1">{biz.city}, {biz.country}</p>
              </div>
            </Popup>
          ))}
      </Map>
    </div>
  );
};

export default MapboxMap;
