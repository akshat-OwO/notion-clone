"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor: FC<EditorProps> = ({ onChange, editable, initialContent }) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file,
        });
        return response.url;
    };

    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
        onEditorContentChange: (editor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        },
        uploadFile: handleUpload,
    });
    return (
        <div>
            <BlockNoteView
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
        </div>
    );
};

export default Editor;
