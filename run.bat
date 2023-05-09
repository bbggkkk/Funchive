python -m venv .pyenv
.pyenv\Scripts\activate -and pip install -U -r req.txt
nodeenv .nodeenv
.nodeenv\Scripts\activate -and npm install
npm run dev