import JoditEditor from "jodit-react";
import { useRef } from "react";

const TextEditor = ({ value, onChange, ...props }) => {
    const editorRef = useRef(null);
    return (
        <>
            <JoditEditor
                ref={editorRef}
                value={value}
                onChange={onChange}
                {...props}
            />
        </>
    );
};

export default TextEditor;
