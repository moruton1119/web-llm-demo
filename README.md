# Web LLM Demo — ブラウザ内だけで動くLLMチャット

もるラボの「サーバー計算ゼロ・秘密情報ゼロ」のWeb LLM体験デモ。すべての推論は閲覧者のPCのブラウザ内で完結する完全静的サイト。

GitHub Pages: https://moruton1119.github.io/web-llm-demo/

## 構成

- `/` — `/llm/`(アプリ本体)へのリダイレクト
- `/llm/` — [naidan](https://github.com/nwtgck/naidan) v0.55.0 公式hosted配布物ベース(+PC専用ガード注入)。llama.cpp をWebGPU/WASMでブラウザ内実行
- `mobile-block.html` — スマホからのアクセスに対する「PC専用」案内ページ(UA判定→リダイレクト)

## プライバシー設計

- サーバー計算なし・完全静的。APIキー・トークン等の秘密情報はリポジトリに一切含めない
- 会話内容はブラウザ外に送信されない(初回のみモデルファイルをHugging Face CDNから直接DL)

## クレジット

- [naidan](https://github.com/nwtgck/naidan) by nwtgck (MIT License)
- 同梱サードパーティライセンス: `llm/llama-cpp-browser-native-licenses.txt`

画像生成デモは別リポジトリ: [web-ai-demo](https://github.com/moruton1119/web-ai-demo) (https://moruton1119.github.io/web-ai-demo/)
