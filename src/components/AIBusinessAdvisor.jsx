import React, { useState } from 'react';

/**
 * Minimal placeholder AI Business Advisor component.
 * Replace the `callAI` function with your real AI client (fetch/axios to OpenAI/Anthropic/etc).
 * Keep secrets out of the repo — use REACT_APP_AI_KEY in environment variables.
 */

export default function AIBusinessAdvisor() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const callAI = async (userPrompt) => {
    // TODO: Replace this mock with your AI API call. Example pattern:
    // const res = await fetch('/api/ai', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt: userPrompt })
    // });
    // const data = await res.json();
    // return data.output;
    await new Promise((r) => setTimeout(r, 700)); // mock latency
    return `Mock advisor response for: "${userPrompt}"`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const out = await callAI(prompt);
      setResponse(out);
    } catch (err) {
      setResponse('Error: ' + (err.message || 'Failed to call AI'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-advisor">
      <h2>AI Business Advisor</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          aria-label="advisor-prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your business scenario or ask for strategy..."
          rows={6}
        />
        <div className="controls">
          <button type="submit" disabled={loading}>
            {loading ? 'Thinking…' : 'Ask Advisor'}
          </button>
        </div>
      </form>

      <section className="response">
        <h3>Advisor response</h3>
        {response ? <pre>{response}</pre> : <p>No response yet.</p>}
      </section>

      <small className="note">
        Note: this is a placeholder. Replace the mock call in callAI() with your real AI integration (server-side proxy recommended).
      </small>
    </div>
  );
}
