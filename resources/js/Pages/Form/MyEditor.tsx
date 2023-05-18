import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect, useState } from 'react';
import { Editor, EditorState } from 'draft-js';  // Draft.jsをインポート
import 'draft-js/dist/Draft.css';                // Draft.cssをインポート


export default function MyEditor({ auth }: PageProps) {

    // EditorStateは、Draft editorの全ての状態を表す不変のレコード
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty()
    );

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
      />


    </AuthenticatedLayout>
  );
}
