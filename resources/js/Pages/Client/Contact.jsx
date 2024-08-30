import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { EditorContent, EditorProvider } from "@tiptap/react";
// import ContactSection from "./Component/ContactSection";
export default function Contact() {
    const [data, setData] = useState();
    console.log(data);
    return (
        <ClientLayout>
            <Head title="Contact" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <ContactSection/> */}
                            <Editor
                                autofocus={false}
                                content={data}
                                onContentChange={({ html }) => {
                                    setData(html);
                                }}
                            />
                            <div></div>
                            <div>
                                <Editor
                                    autofocus={false}
                                    editable={false}
                                    content={data}
                                    classNames={{ content: "resize-none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
