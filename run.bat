python -m venv .pyenv
.pyenv\Scripts\activate.bat
pip install --upgrade pip
pip install -U -r req.txt
nodeenv .nodeenv
.nodeenv\Scripts\activate.bat
npm install
npm run dev