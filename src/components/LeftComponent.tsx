import React, { useState } from "react";
import { myContainer } from "@/dependencyInjections/inversify.config";
import { HogeEventProvider } from "@/implements/HogeEventProvider";
import { TYPES } from "@/dependencyInjections/Types";
type Props = {};

const LeftComponent = (props: Props) => {
    const eventAction = myContainer.get<HogeEventProvider>(TYPES.IHogeEventProvider);
    const [isOn, setIsOn] = useState(false);

    eventAction.subscribe(x => {
        setIsOn(!isOn);
    });

    return (
        <>
        ひだりのこんぽーねんと<br/>
        {isOn ? "おん" : "おっふ"}<br/>
        <br/>
        </>
    );
};

export default LeftComponent;