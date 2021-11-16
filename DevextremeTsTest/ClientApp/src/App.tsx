import * as React from "react";

import './custom.css'
import { TagBox } from "devextreme-react";
import { useCallback, useRef } from "react";
import { CustomItemCreatingEvent } from "devextreme/ui/tag_box";


const App = () => {

    const tagBoxRef = useRef<TagBox>(null);

    const createItem = useCallback((e: CustomItemCreatingEvent) => { }, [])

    return <>
        <TagBox
            ref={tagBoxRef}
        />

        <TagBox        
            onCustomItemCreating={createItem}

        />
    </>;
}
export default App;
