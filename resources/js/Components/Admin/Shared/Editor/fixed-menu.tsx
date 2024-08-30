import React from "react";
import { Editor } from "@tiptap/react";
import {
    Bold,
    ChevronDown,
    Italic,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    Pilcrow,
    List,
    ListOrdered,
    Undo,
    Redo,
    Underline,
    WrapText,
    Minus,
    Link2,
} from "lucide-react";
import { Toggle } from "@/Components/ui/toggle";
import * as Dropdown from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import * as Popover from "@/Components/ui/popover";
import { Input } from "@/Components/ui/input";

interface FixedMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    editor: Editor;
}

const FixedMenu: React.FC<FixedMenuProps> = ({
    editor,
    className,
    ...props
}) => {
    return (
        <div
            className={cn("flex flex-wrap gap-1 border-b p-0.5", className)}
            {...props}
        >
            <Items editor={editor} />

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                pressed={editor.isActive("bold")}
            >
                <Bold className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                pressed={editor.isActive("italic")}
            >
                <Italic className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                pressed={editor.isActive("underline")}
            >
                <Underline className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                pressed={editor.isActive("strike")}
            >
                <Strikethrough className="h-4 w-4" />
            </Toggle>

            <LinkButton editor={editor} />

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                pressed={editor.isActive("bulletList")}
            >
                <List className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                pressed={editor.isActive("orderedList")}
            >
                <ListOrdered className="h-4 w-4" />
            </Toggle>

            <Button
                size="sm"
                variant="ghost"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
                <Minus className="h-4 w-4" />
            </Button>

            <Button
                size="sm"
                variant="ghost"
                onClick={() => editor.chain().focus().setHardBreak().run()}
            >
                <WrapText className="h-4 w-4" />
            </Button>

            <Button
                size="sm"
                variant="ghost"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                <Undo className="h-4 w-4" />
            </Button>

            <Button
                size="sm"
                variant="ghost"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                <Redo className="h-4 w-4" />
            </Button>
        </div>
    );
};

const Items = ({ editor }: { editor: Editor }) => {
    return (
        <Dropdown.DropdownMenu>
            <Dropdown.DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="justify-between">
                    {editor.isActive("heading") ? (
                        editor.isActive("heading", { level: 1 }) ? (
                            <Heading1 className="h-4 w-4" />
                        ) : editor.isActive("heading", { level: 2 }) ? (
                            <Heading2 className="h-4 w-4" />
                        ) : editor.isActive("heading", { level: 3 }) ? (
                            <Heading3 className="h-4 w-4" />
                        ) : null
                    ) : (
                        <Pilcrow className="h-4 w-4" />
                    )}
                    <ChevronDown className="h-3 w-3 ml-2" />
                </Button>
            </Dropdown.DropdownMenuTrigger>
            <Dropdown.DropdownMenuContent loop align="start">
                <Dropdown.DropdownMenuItem
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className=" data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2"
                    data-selected={editor.isActive("paragraph")}
                >
                    <Pilcrow className="h-4 w-4" />
                    Paragraphe
                </Dropdown.DropdownMenuItem>
                <Dropdown.DropdownMenuItem
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className=" data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2"
                    data-selected={editor.isActive("heading", { level: 1 })}
                >
                    <Heading1 className="h-4 w-4" />
                    Titre 1
                </Dropdown.DropdownMenuItem>
                <Dropdown.DropdownMenuItem
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className=" data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2"
                    data-selected={editor.isActive("heading", { level: 2 })}
                >
                    <Heading2 className="h-4 w-4" />
                    Titre 2
                </Dropdown.DropdownMenuItem>
                <Dropdown.DropdownMenuItem
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    data-selected={editor.isActive("heading", { level: 3 })}
                    className=" data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2"
                >
                    <Heading3 className="h-4 w-4" />
                    Titre 3
                </Dropdown.DropdownMenuItem>
            </Dropdown.DropdownMenuContent>
        </Dropdown.DropdownMenu>
    );
};

const LinkButton = ({ editor }: { editor: Editor }) => {
    const [href, setHref] = React.useState("");

    return (
        <Popover.Popover>
            <Popover.PopoverTrigger asChild>
                <Button size="sm" variant="ghost">
                    <Link2 className="h-4 w-4" />
                </Button>
            </Popover.PopoverTrigger>
            <Popover.PopoverContent className="flex items-center gap-2 p-2">
                <Input
                    value={href}
                    onValueChange={(value) => setHref(value)}
                    placeholder="https://google.dz"
                />
                <Button
                    size="sm"
                    variant="ghost"
                    // onClick={() => editor.chain().focus().setLink({ href })}
                    onClick={() => editor.commands.setLink({ href })}
                >
                    Ajouter
                </Button>
            </Popover.PopoverContent>
        </Popover.Popover>
    );
};

export { FixedMenu };
