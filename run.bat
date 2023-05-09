python -m venv .pyenv
source .pyenv\bin\activate
pip install --upgrade pip
pip install -U -r req.txt
nodeenv .nodeenv
source .nodeenv\bin\activate
npm install
npm run dev