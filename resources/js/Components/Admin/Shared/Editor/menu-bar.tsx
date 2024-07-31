import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { cn } from "@/Utils/utils";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
                "h-10 px-4 py-2",
                "bg-gray-100 text-gray-900 hover:bg-gray-100/50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/50",
                "data-[active=true]:bg-primary-600 data-[active=true]:text-white data-[active=true]:hover:bg-primary-700 data-[active=true]:dark:bg-primary-700 data-[active=true]:dark:hover:bg-primary-800",
                className
            )}
            {...props}
        />
    );
};

const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-1">
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                data-active={editor.isActive("bold")}
            >
                Bold
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                data-active={editor.isActive("italic")}
            >
                Italic
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                data-active={editor.isActive("strike")}
            >
                Strike
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                data-active={editor.isActive("code")}
            >
                Code
            </Button>
            <Button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
                Clear marks
            </Button>
            <Button onClick={() => editor.chain().focus().clearNodes().run()}>
                Clear nodes
            </Button>
            <Button
                onClick={() => editor.chain().focus().setParagraph().run()}
                data-active={editor.isActive("paragraph")}
            >
                Paragraph
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                data-active={editor.isActive("heading", { level: 1 })}
            >
                H1
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                data-active={editor.isActive("heading", { level: 2 })}
            >
                H2
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                data-active={editor.isActive("heading", { level: 3 })}
            >
                H3
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                data-active={editor.isActive("heading", { level: 4 })}
            >
                H4
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                data-active={editor.isActive("heading", { level: 5 })}
            >
                H5
            </Button>
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                data-active={editor.isActive("heading", { level: 6 })}
            >
                H6
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                data-active={editor.isActive("bulletList")}
            >
                Bullet list
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                data-active={editor.isActive("orderedList")}
            >
                Ordered list
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                data-active={editor.isActive("codeBlock")}
            >
                Code block
            </Button>
            <Button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                data-active={editor.isActive("blockquote")}
            >
                Blockquote
            </Button>
            <Button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
                Horizontal rule
            </Button>
            <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
                Hard break
            </Button>
            <Button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                Undo
            </Button>
            <Button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                Redo
            </Button>
            <Button
                onClick={() => editor.chain().focus().setColor("#958DF1").run()}
                className={
                    editor.isActive("textStyle", { color: "#958DF1" })
                        ? "is-active"
                        : ""
                }
            >
                Purple
            </Button>
        </div>
    );
};
