# EduVerse
EduVerse: Free, decentralized education platform powered by AI and blockchain. Learn offline-capable courses (e.g., Python for Farmers), earn NFT badges on Ethereum. Built with React.js, IPFS, and Hugging Face. Join the learning revolution! #Web3 #EdTech

## Setup Instructions
1. Save Files: Copy each file (index.html, App.js, serviceWorker.js, contract.sol, manifest.json, icon.png, README.md) to your computer using Notepad or a text editor. Save with exact file names.
2. Create Repository: Log in to github.com, click "New", name it "EduVerse", select "Public", check "Add a README file", and create.
3. Add Description: Click the gear icon next to "About", paste the description above, and save.
4. Upload Files: Click "Add file" > "Upload files", drag-drop all files, and click "Commit changes".
5. Enable GitHub Pages: Go to Settings > Pages, select "main" branch, click "Save". Check exec-vynr.github.io/EduVerse after 5-10 minutes.
6. Deploy Smart Contract:
   - Open remix.ethereum.org, create a new file "contract.sol", paste the contract code.
   - Compile with Solidity version 0.8.0, select "Injected Provider - MetaMask" (Sepolia testnet), and click "Deploy".
   - Copy the deployed contract address from Remix.
   - Update App.js with the contract address (replace YOUR_CONTRACT_ADDRESS) and re-upload to GitHub.
7. Setup IPFS:
   - Install IPFS Desktop (ipfs.tech, free).
   - Drag the course module folder (module1.md to module10.md, from separate artifact) into IPFS Desktop, copy the CID, update App.js (replace YOUR_IPFS_HASH), and re-upload.
