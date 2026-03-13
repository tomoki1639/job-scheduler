"use client";

import { useState, useEffect } from "react";
import { ES_TEMPLATES } from "@/types";

interface ESQuestion {
  id: string;
  title: string;
  answer: string;
  maxLength?: number | null;
  entryId: string;
}

interface ESEntry {
  id: string;
  questions: ESQuestion[];
}

interface Company {
  id: string;
  name: string;
  createdAt: string;
  esEntries: ESEntry[];
}

export default function ESManager() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCompanyName, setNewCompanyName] = useState("");
  const [showNewCompanyInput, setShowNewCompanyInput] = useState(false);
  const [loading, setLoading] = useState(true);

  const selectedCompany = companies.find(e => e.id === selectedId);
  const selectedEntry = selectedCompany?.esEntries[0];

  // 企業一覧取得
  useEffect(() => {
    fetch("/api/companies")
      .then(res => res.json())
      .then(data => { setCompanies(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // 企業追加
  const addCompany = async () => {
    if (!newCompanyName.trim()) return;
    const res = await fetch("/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCompanyName.trim() }),
    });
    const newCompany = await res.json();
    setCompanies(prev => [newCompany, ...prev]);
    setNewCompanyName("");
    setShowNewCompanyInput(false);
    setSelectedId(newCompany.id);
  };

  // 企業削除
  const deleteCompany = async (id: string) => {
    await fetch(`/api/companies/${id}`, { method: "DELETE" });
    setCompanies(prev => prev.filter(e => e.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  // 設問追加
  const addQuestionFromTemplate = async (template: { title: string; maxLength: number }) => {
    if (!selectedEntry) return;
    const res = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entryId: selectedEntry.id, title: template.title, maxLength: template.maxLength }),
    });
    const newQuestion = await res.json();
    setCompanies(prev => prev.map(c =>
      c.id === selectedId
        ? { ...c, esEntries: [{ ...selectedEntry, questions: [...selectedEntry.questions, newQuestion] }] }
        : c
    ));
  };

  // 設問削除
  const deleteQuestion = async (questionId: string) => {
    if (!selectedEntry) return;
    await fetch(`/api/questions/${questionId}`, { method: "DELETE" });
    setCompanies(prev => prev.map(c =>
      c.id === selectedId
        ? { ...c, esEntries: [{ ...selectedEntry, questions: selectedEntry.questions.filter(q => q.id !== questionId) }] }
        : c
    ));
  };

  // 回答更新
  const updateAnswer = (questionId: string, answer: string) => {
    if (!selectedEntry) return;
    setCompanies(prev => prev.map(c =>
      c.id === selectedId
        ? { ...c, esEntries: [{ ...selectedEntry, questions: selectedEntry.questions.map(q => q.id === questionId ? { ...q, answer } : q) }] }
        : c
    ));
  };

  // 回答保存
  const saveAnswer = async (questionId: string, answer: string) => {
    await fetch(`/api/questions/${questionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    });
    setEditingId(null);
  };

  if (loading) return <div className="p-4 text-gray-400">読み込み中...</div>;

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
            {companies.map(company => (
              <div
                key={company.id}
                className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer text-sm
                  ${selectedId === company.id ? "bg-blue-100 text-blue-800 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedId(company.id)}
              >
                <span className="truncate">{company.name}</span>
                <button
                  onClick={e => { e.stopPropagation(); deleteCompany(company.id); }}
                  className="text-gray-400 hover:text-red-500 ml-1 text-xs"
                >✕</button>
              </div>
            ))}
          </div>
        </div>

        {/* 右カラム：ES設問リスト */}
        <div className="flex-1">
          {!selectedCompany ? (
            <div className="text-gray-400 text-sm mt-4">企業を選択してください</div>
          ) : (
            <>
              <h3 className="font-bold text-lg mb-3">{selectedCompany.name}</h3>

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
                {!selectedEntry || selectedEntry.questions.length === 0 ? (
                  <div className="text-gray-400 text-sm">設問がありません。テンプレートから追加してください。</div>
                ) : (
                  selectedEntry.questions.map(q => (
                    <div key={q.id} className="border rounded">
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
                                  onClick={() => saveAnswer(q.id, q.answer)}
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
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}