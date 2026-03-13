"use client";

import { useState } from "react";
import { ESEntry, ESQuestion, ES_TEMPLATES } from "@/types";

const INITIAL_DATA: ESEntry[] = [
  {
    id: "1",
    companyName: "〇〇商事",
    createdAt: "2026-03-01",
    questions: [
      { id: "q1", title: "志望動機", answer: "御社の〇〇に魅力を感じ...", maxLength: 400 },
      { id: "q2", title: "ガクチカ", answer: "大学でプログラミングサークルに所属し...", maxLength: 400 },
    ],
  },
];

export default function ESManager() {
  const [entries, setEntries] = useState<ESEntry[]>(INITIAL_DATA);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCompanyName, setNewCompanyName] = useState("");
  const [showNewCompanyInput, setShowNewCompanyInput] = useState(false);

  const selectedEntry = entries.find(e => e.id === selectedId);

  // 企業追加
  const addCompany = () => {
    if (!newCompanyName.trim()) return;
    const newEntry: ESEntry = {
      id: Date.now().toString(),
      companyName: newCompanyName.trim(),
      createdAt: new Date().toISOString().split("T")[0],
      questions: [],
    };
    setEntries(prev => [...prev, newEntry]);
    setNewCompanyName("");
    setShowNewCompanyInput(false);
    setSelectedId(newEntry.id);
  };

  // 企業削除
  const deleteCompany = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  // 設問追加（テンプレートから）
  const addQuestionFromTemplate = (template: { title: string; maxLength: number }) => {
    if (!selectedId) return;
    const newQ: ESQuestion = {
      id: Date.now().toString(),
      title: template.title,
      answer: "",
      maxLength: template.maxLength,
    };
    setEntries(prev => prev.map(e =>
      e.id === selectedId ? { ...e, questions: [...e.questions, newQ] } : e
    ));
  };

  // 設問削除
  const deleteQuestion = (questionId: string) => {
    if (!selectedId) return;
    setEntries(prev => prev.map(e =>
      e.id === selectedId
        ? { ...e, questions: e.questions.filter(q => q.id !== questionId) }
        : e
    ));
  };

  // 回答更新
  const updateAnswer = (questionId: string, answer: string) => {
    if (!selectedId) return;
    setEntries(prev => prev.map(e =>
      e.id === selectedId
        ? { ...e, questions: e.questions.map(q => q.id === questionId ? { ...q, answer } : q) }
        : e
    ));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">ES管理</h2>

      <div className="flex gap-4">
        {/* 左カラム：企業リスト */}
        <div className="w-48 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">企業一覧</span>
            <button
              onClick={() => setShowNewCompanyInput(true)}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              ＋追加
            </button>
          </div>

          {showNewCompanyInput && (
            <div className="mb-2">
              <input
                type="text"
                value={newCompanyName}
                onChange={e => setNewCompanyName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addCompany()}
                placeholder="企業名を入力"
                className="w-full border rounded px-2 py-1 text-sm mb-1"
                autoFocus
              />
              <div className="flex gap-1">
                <button onClick={addCompany} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">保存</button>
                <button onClick={() => setShowNewCompanyInput(false)} className="text-xs bg-gray-300 px-2 py-1 rounded">キャンセル</button>
              </div>
            </div>
          )}

          <div className="space-y-1">
            {entries.map(entry => (
              <div
                key={entry.id}
                className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer text-sm
                  ${selectedId === entry.id ? "bg-blue-100 text-blue-800 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedId(entry.id)}
              >
                <span className="truncate">{entry.companyName}</span>
                <button
                  onClick={e => { e.stopPropagation(); deleteCompany(entry.id); }}
                  className="text-gray-400 hover:text-red-500 ml-1 text-xs"
                >✕</button>
              </div>
            ))}
          </div>
        </div>

        {/* 右カラム：ES設問リスト */}
        <div className="flex-1">
          {!selectedEntry ? (
            <div className="text-gray-400 text-sm mt-4">企業を選択してください</div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">{selectedEntry.companyName}</h3>
              </div>

              {/* テンプレートから追加 */}
              <div className="mb-4">
                <span className="text-xs text-gray-500 mr-2">テンプレートから追加：</span>
                {ES_TEMPLATES.map(t => (
                  <button
                    key={t.title}
                    onClick={() => addQuestionFromTemplate(t)}
                    className="text-xs border border-gray-300 rounded px-2 py-1 mr-1 mb-1 hover:bg-gray-100"
                  >
                    ＋{t.title}
                  </button>
                ))}
              </div>

              {/* 設問リスト */}
              <div className="space-y-2">
                {selectedEntry.questions.length === 0 && (
                  <div className="text-gray-400 text-sm">設問がありません。テンプレートから追加してください。</div>
                )}
                {selectedEntry.questions.map(q => (
                  <div key={q.id} className="border rounded">
                    {/* 設問ヘッダー */}
                    <div
                      className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50"
                      onClick={() => setOpenQuestionId(prev => prev === q.id ? null : q.id)}
                    >
                      <span className="font-medium text-sm">{q.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{q.answer.length}{q.maxLength ? `/${q.maxLength}` : ""}文字</span>
                        <button
                          onClick={e => { e.stopPropagation(); deleteQuestion(q.id); }}
                          className="text-gray-400 hover:text-red-500 text-xs"
                        >✕</button>
                        <span className="text-xs text-gray-400">{openQuestionId === q.id ? "▲" : "▼"}</span>
                      </div>
                    </div>

                    {/* アコーディオン展開 */}
                    {openQuestionId === q.id && (
                      <div className="px-3 pb-3">
                        {editingId === q.id ? (
                          <>
                            <textarea
                              value={q.answer}
                              onChange={e => updateAnswer(q.id, e.target.value)}
                              className="w-full border rounded p-2 text-sm min-h-[120px] resize-y"
                              placeholder="回答を入力..."
                            />
                            <div className="flex items-center justify-between mt-1">
                              <span className={`text-xs ${q.maxLength && q.answer.length > q.maxLength ? "text-red-500" : "text-gray-400"}`}>
                                {q.answer.length}{q.maxLength ? `/${q.maxLength}文字` : "文字"}
                              </span>
                              <button
                                onClick={() => setEditingId(null)}
                                className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                              >保存</button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-gray-700 whitespace-pre-wrap min-h-[40px]">
                              {q.answer || <span className="text-gray-400">回答なし</span>}
                            </p>
                            <button
                              onClick={() => setEditingId(q.id)}
                              className="mt-2 text-xs border border-gray-300 rounded px-3 py-1 hover:bg-gray-100"
                            >編集</button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}