from bs4 import BeautifulSoup
import glob
import re

for file in glob.glob('data/Character/*.html'):
    name = file.split('_')[1].split('の')[0]
    print(f"\n======== {name} ========")
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # We know SP 返還 (SP refund) is typically under a specific skill table or info box.
        # Let's search for the exact "SP返還量" or "SPがX返還される"

        # Regex to find "SP返還" or "SPが...返還"
        text_nodes = soup.find_all(string=re.compile(r'返還'))
        for t in text_nodes:
            # Let's find numbers near '返還'
            if '返還' in t:
                # print(f"Found: {t.strip()}")
                # Sometimes it's in a th/td pair
                parent = t.parent
                if parent.name in ['th', 'td']:
                    sibling = parent.find_next_sibling(['th', 'td'])
                    if sibling:
                        print(f"Prop: {t.strip()}, Value: {sibling.text.strip()}")
