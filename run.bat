python -m venv .pyenv
.pyenv\Scripts\activate
pip install --upgrade pip
pip install -U -r req.txt
nodeenv .nodeenv
.nodeenv\Scripts\activate
npm install
npm run dev