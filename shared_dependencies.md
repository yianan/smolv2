Shared Dependencies:

1. **Exported Variables**: 
   - `Menu` from `Menu.tsx`
   - `ChatBox` from `ChatBox.tsx`
   - `UploadZone` from `UploadZone.tsx`
   - `FileList` from `FileList.tsx`

2. **Data Schemas**: 
   - `File` schema in `models.py` for storing file metadata

3. **DOM Element IDs**: 
   - `chat-input` for the chat input field in `ChatBox.tsx`
   - `chat-send-button` for the send button in `ChatBox.tsx`
   - `chat-abort-button` for the abort button in `ChatBox.tsx`
   - `upload-button` for the upload button in `UploadZone.tsx`
   - `file-list` for the list of uploaded files in `FileList.tsx`
   - `delete-button` for the delete button in `FileList.tsx`

4. **Message Names**: 
   - `SEND_CHAT` for sending a chat message
   - `ABORT_CHAT` for aborting a chat
   - `UPLOAD_FILE` for uploading a file
   - `DELETE_FILE` for deleting a file

5. **Function Names**: 
   - `sendChat` in `ChatBox.tsx` for sending a chat message
   - `abortChat` in `ChatBox.tsx` for aborting a chat
   - `uploadFile` in `UploadZone.tsx` for uploading a file
   - `deleteFile` in `FileList.tsx` for deleting a file
   - `getFiles` in `FileList.tsx` for getting the list of uploaded files
   - `handleUpload` in `server/routes.py` for handling file upload
   - `handleDelete` in `server/routes.py` for handling file deletion

6. **Shared Styles**: 
   - `globals.css` for global styles
   - `Home.module.css` for Home page styles
   - `About.module.css` for About page styles
   - `Chatbot.module.css` for Chatbot page styles
   - `Document.module.css` for Document page styles

7. **Shared Dependencies**: 
   - Next.js for server-side rendering and routing
   - TypeScript for type checking
   - Python Flask for back-end and API routes
   - Tailwind CSS for styling
