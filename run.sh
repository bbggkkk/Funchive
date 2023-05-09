python -m venv venv
source pyenv/bin/activate
pip install --upgrade pip
pip install -U -r req.txt
nodeenv nodeenv
source pyenv/bin/activate
node src/index.js