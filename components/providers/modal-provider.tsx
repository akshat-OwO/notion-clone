"use client";

import { FC, useEffect, useState } from "react";
import SettingsModal from "../modals/SettingsModal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <SettingsModal />
        </>
    );
};

export default ModalProvider;
