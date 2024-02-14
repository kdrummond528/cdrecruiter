import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import EngineRoom from "../img/engineroompic.jpg";
import FleetWk from "../img/fleetwk.jpg";
import NoruGrad from "../img/norugrad.jpg";
import OceanView from "../img/oceanview1.jpg";
import OceanView2 from "../img/oceanview2.jpg";
import Promotion from "../img/promotion.jpg";

export default function Gallery() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: { EngineRoom } },
                    { src: { FleetWk } },
                    { src: { NoruGrad } },
                    { src: { OceanView } },
                    { src: { OceanView2 } },
                    { src: { Promotion } },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                    // { src: "../img/.jpg" },
                ]}
            />
        </>
    );
}
