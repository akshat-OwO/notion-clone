"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/user-cover-image";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/button";

interface CoverProps {
    url?: string;
    preview?: boolean;
}

const Cover: FC<CoverProps> = ({ preview, url }) => {
    const coverImage = useCoverImage();
    const params = useParams();

    const removeCoverImage = useMutation(api.documents.removeCoverImage);

    const onRemove = () => {
        removeCoverImage({ id: params.documentId as Id<"documents"> });
    };

    return (
        <div
            className={cn(
                "relative w-full h-[35vh] group",
                !url && "h-[12vh]",
                url && "bg-muted"
            )}
        >
            {!!url && (
                <Image src={url} fill alt="Cover" className="object-cover" />
            )}
            {url && !preview && (
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
                    <Button
                        onClick={coverImage.onOpen}
                        className="text-muted-foreground text-xs"
                        variant={"outline"}
                        size={"sm"}
                    >
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Change Cover
                    </Button>
                    <Button
                        onClick={onRemove}
                        className="text-muted-foreground text-xs"
                        variant={"outline"}
                        size={"sm"}
                    >
                        <X className="h-4 w-4 mr-2" />
                        Remove
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cover;
