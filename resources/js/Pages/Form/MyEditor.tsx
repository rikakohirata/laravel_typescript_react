import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';  // Draft.jsをインポート
import 'draft-js/dist/Draft.css';  // Draft.cssをインポート


export default function MyEditor({ auth }: PageProps) {

    // EditorStateは、Draft editorの全ての状態を表す不変のレコード
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty()
    );

    // RichUtilsのhandleKeyCommand
    // Command + B で太字が適用される
    // Command + I で斜体が適用される
    // Command + U で下線が適用される
    const handleKeyCommand = (command: DraftEditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Rich Text editor</h2>}
    >
      <Head title="Rich Text editor" />

      {/* リッチテキストエディタ */}
      <Editor
        placeholder="入力してください"
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />


    </AuthenticatedLayout>
  );
}
