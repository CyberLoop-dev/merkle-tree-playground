<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:10101c,100:7c3aed&height=170&section=header&text=Merkle%20Tree%20Playground&fontColor=f5f3ff&fontSize=36" width="100%" alt="Merkle Tree Playground banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=C4B5FD&center=true&vCenter=true&width=620&lines=Build+SHA-256+Merkle+trees;Generate+and+verify+inclusion+proofs" alt="Animated tagline"/>
<p><strong>A local visual explorer for Merkle roots and inclusion proofs.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/merkle-tree-playground?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/merkle-tree-playground?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/merkle-tree-playground?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/merkle-tree-playground?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Merkle tree illustration"/>
</div>

## 🧭 Overview
Merkle Tree Playground hashes each text line as a leaf, combines pairs into parent hashes, and produces a SHA-256 root. Select a leaf to generate and verify its inclusion proof.

## ✨ Features
- 🌳 Build a binary Merkle tree from local text.
- 🔐 Use SHA-256 with domain-separated leaf and parent prefixes.
- 🧾 Generate sibling paths for individual leaves.
- ✅ Verify proofs against the displayed root.
- 🔒 Keep all source values in the browser.

## 🎬 Demo
Start the app; five sample leaves are loaded. Select a leaf index and verify its proof. Change one value and rebuild to see the root change.

## 🚀 Quick Start
Requires Node.js 20 or newer and a browser with Web Crypto support.

```bash
npm start
```

Open http://127.0.0.1:4179. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser Web Crypto API and JavaScript modules
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Merkle builder, proof logic, and interface
test/         Root and inclusion-proof tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add proof export as JSON.
- [ ] Show each intermediate hash level.
- [ ] Support binary file leaves with explicit size limits.

## 🤝 Contributing
Contributions are welcome. Preserve domain separation between leaves and parent nodes, and add tests for odd leaf counts and tampered proofs.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:10101c&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
