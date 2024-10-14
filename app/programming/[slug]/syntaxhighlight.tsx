// SyntaxHighlighterComponent.tsx
"use client";

import React, { useCallback, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import hljs from "highlight.js/lib/core";

// Import bahasa pemrograman yang diperlukan
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("php", php);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);

const SyntaxHighlighterComponent = ({ codeText }: { codeText: string }) => {
     const [copied, setCopied] = useState(false);
     const detectedLanguage = hljs.highlightAuto(codeText).language;

     const handleCopy = useCallback(async () => {
          try {
               await navigator.clipboard.writeText(codeText);
               setCopied(true); // Set copied to true
               setTimeout(() => setCopied(false), 2000);
          } catch (err) {
               console.error("Failed to copy: ", err);
          }
     }, [codeText]);

     return (
          <div className="max-w-5xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden my-4">
               <div className="flex justify-end px-4 text-white text-xs items-center">
                    {/* <p className="text-sm font-semibold">{detectedLanguage}</p> */}
                    <button
                         onClick={handleCopy}
                         className={`py-1 inline-flex items-center gap-1 transition-colors 
                    duration-300
                         ${copied ? "text-green-500" : "text-white"}`}
                    >
                         <ClipboardIcon className="w-4 h-4" />
                         {copied ? "Copied!" : "Copy code"}
                    </button>
               </div>
               <SyntaxHighlighter
                    language={detectedLanguage || "text"}
                    style={atomOneDark}
                    wrapLines={true}
                    lineProps={{
                         style: {
                              whiteSpace: "pre-wrap",
                         },
                    }}
                    customStyle={{ padding: "25px" }}
               >
                    {codeText}
               </SyntaxHighlighter>
          </div>
     );
};

export default SyntaxHighlighterComponent;
