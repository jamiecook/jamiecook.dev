import * as React from "react";

export interface LoadingOverlayProps { visible: boolean }


export function LoadingOverlay(props: LoadingOverlayProps) {
    if (props.visible) {
        return (
            <div className="overlay flex-parent flex-parent--center-main flex-parent--center-cross">
                <div className="loading--dark flex-child" />
            </div >
        );
    } else {
        return null;
    }
}
