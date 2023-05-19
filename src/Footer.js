import React from "react";
import "./index.css";

export default function Footer() {
    return (
        <div className="github">
            <footer>
                {" "}
                <em>
                    {" "}
                    Open source code by Eugenia Zanarini available at{" "}
                    <a
                        href="https://github.com/therankofjedimaster/weather-react-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </em>
            </footer>
        </div>
    );
}
