import * as React from "react";

export interface AttributionProps { name: string, url: string }


export function Attribution(props: AttributionProps) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">&copy; {props.name}</a>
    );
}
