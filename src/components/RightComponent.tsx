import React, { useState } from "react";
import { myContainer } from "@/dependencyInjections/inversify.config";
import { HogeEventProvider } from "@/implements/HogeEventProvider";
import { TYPES } from "@/dependencyInjections/Types";
import { Button } from 'antd';

type Props = {};

const RightComponent = (props: Props) => {
    const eventAction = myContainer.get<HogeEventProvider>(TYPES.IHogeEventProvider);

    return (
        <div>
            右のコンポーネント<br/>
            <Button type="primary"  onClick={x => eventAction.publish(true)} > Button </Button>
        </div>
    );
};

export default RightComponent;