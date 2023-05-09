python -m venv .pyenv
.pyenv\bin\activate
pip install --upgrade pip
pip install -U -r req.txt
nodeenv .nodeenv
.nodeenv\bin\activate
npm install
npm run dev