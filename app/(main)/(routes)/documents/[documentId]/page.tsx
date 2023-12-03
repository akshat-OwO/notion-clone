import { FC } from "react";

interface pageProps {
    params: {
        documentId: string;
    };
}

const page: FC<pageProps> = ({ params }) => {
    return <div>{params.documentId}</div>;
};

export default page;
