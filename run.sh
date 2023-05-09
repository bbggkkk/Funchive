python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -U -r req.txt
nodeenv venv
node src/index.js