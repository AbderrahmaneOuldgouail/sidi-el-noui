import * as React from "react";

function AppLogo({ className }) {
    return (
        <img
            src="http://localhost:8000/storage/sidi-el-noui-logo.png"
            alt="Logo"
            className={className}
        />
    );
}

export { AppLogo };
