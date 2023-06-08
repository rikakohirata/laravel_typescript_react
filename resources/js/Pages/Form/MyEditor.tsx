import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';  // Draft.jsをインポート
import 'draft-js/dist/Draft.css';  // Draft.cssをインポート
import { 
    Container,
    Button,
    Box
} from '@mui/material';


export default function MyEditor({ auth }: PageProps) {

    // EditorStateは、Draft editorの全ての状態を表す不変のレコード
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty()
    );

    // RichUtilsのhandleKeyCommand
    // Command + B で太字
    // Command + I で斜体
    // Command + U で下線
    const handleKeyCommand = (command: DraftEditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    // ツールバー
    const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };
    
    const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Rich Text editor</h2>}
    >
      <Head title="Rich Text editor" />

      {/* リッチテキストエディタ */}
      <Container maxWidth="xl">
          <Box sx={{ marginTop: 3 }}>
              {/* ツールバー */}
              <Button onMouseDown={(e) => handleBlockClick(e, "header-one")}>H1</Button>
              <Button onMouseDown={(e) => handleBlockClick(e, "header-two")}>H2</Button>
              <Button onMouseDown={(e) => handleBlockClick(e, "header-three")}>H3</Button>
              <Button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>Normal</Button>
              <Button onMouseDown={(e) => handleTogggleClick(e, "BOLD")}>bold</Button>
              <Button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}>italic</Button>
              <Button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}>strikthrough</Button>
              <Button onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>Ordered List</Button>
              <Button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>Unordered List</Button>

              {/* テキストエリア */}
              <Editor
                placeholder="入力してください"
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
              />
        </Box>
    </Container>


    </AuthenticatedLayout>
  );
}
